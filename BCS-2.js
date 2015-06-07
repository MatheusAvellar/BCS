/*
 *               [BCS-2]
 *   Cause #1 just wasn't good enough
 *
 * Coded by Matheus Avellar (Beta Tester)
 * Help with ideas from Dean (DCV)
 *
 * Most of the stuff here is probably not
 * the most efficient. But it works. So who cares.
 *
 *              sᴏᴏɴ™
 * (https://tetheu98.github.io/bcs-2)
 *
 */

//b2deb/c3d18/cc5ae plugMessage & functions

//["b2deb/ebc3a/adb1a"]["map"]

//b2deb/c7567/cd872"]["ModerateEvent"

"use strict";

const BCS_DIR = "https://rawgit.com/Tetheu98/BCS/master/resources/";

$.getScript(BCS_DIR + "commands.js");
$.getScript(BCS_DIR + "menu.js");

$("head").append(
"<link "
+    " rel='stylesheet' "
+    " type='text/css' "
+    " href='" + BCS_DIR + "styleSheet.css'"
+ ">"
);

var _console = {
    log: function () {
        var params = Array.prototype.slice.call(arguments, 1);
        arguments[0] = JSON.stringify(arguments[0]);
        params.unshift("%cBCS%c ~ " + arguments[0],
            "color: #00bee8; font-weight: bold; font-size: 13px;",
            "color: black;");
        console.info.apply(console, params);
    }
}

var bcs = {
    v: {
        "stage": "Alpha v",
        "ultra": "2",
        "major": "0",
        "minor": "0",
        "patch": "57",
        "legal": "",
        "_": function() {
            return [bcs.v.ultra, bcs.v.major, bcs.v.minor, bcs.v.patch];
        }
    },
    b: 4820534,
    u: API.getUser(),
    VIP: function() {  return bcs.b == bcs.u.id;  },
    c: function (msg) {  API.sendChat(msg);  },
    l: function (msg) {  API.chatLog(msg);  },
    settings: {
        autowoot: false,
        grablog: false,
        mehlog: false,
        autojoin: false,
        trafficlog: false,
        djupdates: false,
        afkmsg: false,
        lockdown: false,
        wootlog: false,
        autograb: false,
        automeh: false,
        autoleave: false,
        antispam: false
    },
    plugCode: {
        init: function () {
            bcs.plugCode.all = require.s.contexts._.defined;
            for (var i in require.s.contexts._.defined) {
                if (typeof require.s.contexts._.defined[i] == "object") {
                    for (var j in require.s.contexts._.defined[i]) {
                        if (j == "plugMessage") {
                            var plugMessage = require.s.contexts._.defined[i][j];
                            break;
                        }
                    }
                }
            }
            bcs.plugCode.plugMessage = plugMessage ? plugMessage : void(0);
        }
    },
    main: {
        init: function() {
            /* Gets plug code shortcut */
            bcs.plugCode.init();

            /* Hooks all events */
            bcs.main.events.hook();

            /* Starts old footer events */
            bcs.main.utils.oldFooter.init();

            /* Runs percentage on XP bar script */
            bcs.main.utils.percentage();

            /* Changes YT / SC max length on search to 256 characters */
            $("#search-input-field").attr({"maxlength": 256});

            /* Scrollable volume slider */
            $("#volume > .slider").on("mousewheel", function(e) {
                if (e.originalEvent.wheelDelta == 120) {
                    API.setVolume(API.getVolume() + 4);
                } else {
                    API.setVolume(API.getVolume() - 4);
                }
            });

            /* Popup chat bugs everything, so might as well remove everything */
            $("#chat-popout-button").on("click", function() {  $(".bcs-log").remove();  });

            bcs.main.addChat(
                "BCS - "
                + bcs.v.stage
                + bcs.v._().join(".")
                + bcs.v.legal
                + "<div class='authors'>"
                    + "<br />"
                    + "<p>"
                       + "Coded by <i class='icon icon-chat-ambassador bcs-flip'></i> <a class='bcs-styles-gRole3' title='4820534' href='https://plug.dj/@/beta-tester' target='_blank'>Beta Tester</a><br />"
                       + "Help with ideas from <i class='icon icon-chat-subscriber'></i> <a class='bcs-styles-subscriber' title='3639711' href='https://plug.dj/@/dcv' target='_blank'>DCV</a><br />"
                       + "Initial addChat() from <i class='icon icon-chat-ambassador'></i> <a class='bcs-styles-gRole3' title='3420957' href='https://plug.dj/@/igor' target='_blank'>Igor</a>"
                    + "</p>"
                + "</div>",
                "_1",
                "init");
            $("div.bcs-log._1 .init").on("click", function() {
                $("div.bcs-log._1 .init .authors").toggleClass("visible");
            });
        },
        utils: {
            ajax: {
                delete: {
                    chat: function(_cid) {
                        $.ajax({
                            type: "DELETE",
                            contentType: "application/json",
                            url: "https://plug.dj/_/chat/" + _cid
                        });
                    },
                    waitList: function() {
                        $.ajax({
                            type: "DELETE",
                            contentType: "application/json",
                            url: "https://plug.dj/_/booth"
                        });
                    }
                },
                post: {
                    woot: function(_hid) {
                        $.ajax({
                            type: "POST",
                            contentType: "application/json",
                            url: "https://plug.dj/_/votes",
                            data: '{"direction": "1","historyID": "' + _hid + '"}'
                        }).done(function(msg) {
                            _console.log("@bcs.main.utils.ajax.post.woot [" + JSON.stringify(msg) + "]");
                        });
                    },
                    meh: function(_hid) {
                        $.ajax({
                            type: "POST",
                            contentType: "application/json",
                            url: "https://plug.dj/_/votes",
                            data: '{"direction": "-1","historyID": "' + _hid + '"}'
                        }).done(function(msg) {
                            _console.log("@bcs.main.utils.ajax.post.woot [" + JSON.stringify(msg) + "]");
                        });
                    },
                    ban: function(_id, _dur) {
                        $.ajax({
                            type: "POST",
                            contentType: "application/json",
                            url: "https://plug.dj/_/bans/add",
                            data: '{"userID":' + _id + ',"reason":1,"duration":"' + _dur + '"}'
                        }).done(function(msg) {
                            _console.log("@bcs.main.utils.ajax.post.ban [" + JSON.stringify(msg) + "]");
                        });
                    },
                    mute: function(_id, _dur) {
                        $.ajax({
                            type: "POST",
                            contentType: "application/json",
                            url: "https://plug.dj/_/mutes",
                            data: '{"userID":'+ _id +',"reason":1,"duration":"' + _dur + '"}'
                        }).done(function(msg) {
                            _console.log("@bcs.main.utils.ajax.post.mute [" + JSON.stringify(msg) + "]");
                        });
                    },
                    staff: function(_id, _roleID) {
                        $.ajax({
                            type: "POST",
                            contentType: "application/json",
                            url: "https://plug.dj/_/staff/update",
                            data: '{"userID": ' + _id + ', "roleID": ' + _roleID + '}'
                        });
                    },
                    waitList: function() {
                        $.ajax({
                            type: "POST",
                            contentType: "application/json",
                            url: "https://plug.dj/_/booth"
                        });
                    }
                },
                get: {
                    aux: {
                        historyID: "",
                        friendsList: [],
                        staffList: [],
                        user: ""
                    },
                    historyID: function(_arg) {
                        $.ajax({
                            type: "GET",
                            contentType: "application/json",
                            url: "https://plug.dj/_/rooms/state",
                        }).done(function(msg) {
                            bcs.main.utils.ajax.get.aux.historyID = msg.data[0].playback.historyID;
                            if (_arg) {  (_arg)();  }
                        });
                    },
                    friends: function() {
                        $.ajax({
                            type: "GET",
                            contentType: "application/json",
                            url: "https://plug.dj/_/friends"
                        }).done(function(msg) {
                            bcs.main.utils.ajax.get.aux.friendsList = msg.data;
                        });
                    },
                    staff: function() {
                        $.ajax({
                            type: "GET",
                            contentType: "application/json",
                            url: "https://plug.dj/_/staff"
                        }).done(function(msg) {
                            bcs.main.utils.ajax.get.aux.staffList = msg.data;
                        });
                    },
                    user: function(_id) {
                        $.ajax({
                            type: "GET",
                            contentType: "application/json",
                            url: "https://plug.dj/_/users/" + id
                        }).done(function(user) {
                            bcs.main.utils.ajax.get.aux.user = msg.data;
                        });
                    }
                }
            },
            volume: function() {
                /* Fix for the volume bug */
                var currentVolume = $("#volume span").text().split("%")[0];
                var tempVolume = currentVolume != 0 ? 0 : 1;
                API.setVolume(tempVolume);
                setTimeout(function() {
                    API.setVolume(currentVolume);
                },1500);
            },
            percentage: function() {
                /* Removes previous percentages */
                $("div#footer-user .bcs-percentage").remove();

                var _width = $("div#footer-user .progress").attr("style");
                var _percentage = _width.substring(6, _width.indexOf('%') + 1).trim();
                $("div#footer-user .bar").append(
                    "<div class='bcs-percentage'>"
                    +   _percentage
                    +"</div>");
            },
            woot: function() {
                var _bAjax = bcs.main.utils.ajax;
                _bAjax.get.historyID(_bAjax.post.woot(_bAjax.get.aux.historyID));
            },
            meh: function() {
                var _bAjax = bcs.main.utils.ajax;
                _bAjax.get.historyID(_bAjax.post.meh(_bAjax.get.aux.historyID));
            },
            noperms: function() {
                bcs.main.addChat("lol u aint got the perms m8");
            },
            clearchat: function() {
                if (bcs.u.role >= 2 || bcs.u.gRole >= 3) {
                    var msgs = $(".cm.message, .cm.emote, .cm.mention");
                    for (var i = 0; i < msgs.length; i++) {
                        for (var j = 0; j < msgs[i].classList.length; j++) {
                            if (!msgs[i].classList[j].indexOf("message")
                            ||  !msgs[i].classList[j].indexOf("emote")
                            ||  !msgs[i].classList[j].indexOf("mention")) {
                                bcs.main.utils.ajax.delete.chat(msgs[i].getAttribute("data-cid"));
                            }
                        }
                    }
                    $(".cm.system:contains('Yes, delete it')").remove();
                } else {

                }
            },
            oldFooter: {
                toggle: function(_arg) {
                    var _footerButtons =
                        $("#footer-user .badge,"
                        + "#footer-user .store,"
                        + "#footer-user .profile,"
                        + "#footer-user .settings");

                    if (_arg == "hide" || $("#footer-user .badge").css("display") == "block") {
                        _footerButtons.hide();
                        $("#footer-user .info").removeClass("open");
                    } else {
                        _footerButtons.show();
                        $("#footer-user .info").addClass("open");
                    }
                },
                init: function() {
                    // So much jQuery :'D
                    $("#footer-user .bar").mouseenter(function() {
                        $("#footer-user .bcs-percentage")
                            .removeClass("isActive")
                            .addClass("isNotActive");
                        $("#footer-user .bar .value")
                            .addClass("isActive")
                            .removeClass("isNotActive");
                    });
                    $("#footer-user .bar").mouseleave(function() {
                        $("#footer-user .bcs-percentage")
                            .addClass("isActive")
                            .removeClass("isNotActive");
                        $("#footer-user .bar .value")
                            .removeClass("isActive")
                            .addClass("isNotActive");
                    });
                    $("#footer-user .info .meta .level .label").text("Lv.");

                    $("#footer-user .inventory").hover(function() {
                        $("#footer-user .buttons").addClass("hover");
                    }, function() {
                        $("#footer-user .buttons").removeClass("hover");
                    });
                    $("#footer-user .button").hover(function() {
                        $("#tooltip").remove();
                    });
                    $("#footer-user .badge").append("<div class='nothing'></div><span>My Badges</span>");
                    $("#footer-user .store").append("<div class='nothing'></div><span>Shop</span>");
                    $("#footer-user .profile").append("<div class='nothing'></div><span>My Profile</span>");
                    $("#footer-user .settings").append("<div class='nothing'></div><span>Settings</span>");
                    $("#footer-user .info").on("click", bcs.main.utils.oldFooter.toggle);
                    $("#footer-user .button").on('click', bcs.main.utils.oldFooter.toggle("hide"));
                    $("#app").on("click", function(e) {
                        if (!$(e.target).closest("#footer-user .info").length){
                            bcs.main.utils.oldFooter.toggle("hide");
                        }
                    });
                }
            },
            settings: {
                get: function() {
                    bcs.settings = JSON.parse(localStorage.getItem("bcsSettings"));
                    for (var i in bcs.settings) {
                        if (bcs.settings[i] == true) {
                            _toggleSetting(i);
                        }
                    }
                },
                set: function() {
                    localStorage.setItem("bcsSettings", JSON.stringify(bcs.settings));
                }
            }
        },
        addChat: function(_text, _class1, _class2) {
            if (!_class1 || _class1 == "undefined") {  _class1 = "";  }
            if (!_class2 || _class2 == "undefined") {  _class2 = "";  }

            var _shouldScroll = $("#chat-messages")[0].scrollTop > $("#chat-messages")[0].scrollHeight - $("#chat-messages").height() - 28;

            $("#chat-messages").append(
                "<div class='bcs-log " + _class1 + "'>"
                    + "<div class='" + _class2 + "'>" + _text + "</div>"
                + "</div>");

            if (_shouldScroll) {  $("#chat-messages")[0].scrollTop = $("#chat-messages")[0].scrollHeight;  }
            if ($("#chat-messages").children().length > 512) {  $("#chat-messages").children().first().remove();  }
        },
        events: {
            hook: function() {
                API.on(API.CHAT,             bcs.main.events.onChat);
                API.on(API.VOTE_UPDATE,      bcs.main.events.onVote);
                API.on(API.GRAB_UPDATE,      bcs.main.events.onVote);
                API.on(API.USER_JOIN,        bcs.main.events.onJoin);
                API.on(API.ADVANCE,          bcs.main.events.onAdvance);
                API.on(API.WAITLIST_UPDATE,  bcs.main.events.onWaitListUpdate);
                API.on(API.USER_LEAVE,       bcs.main.events.onLeave);
                API.on(API.CHAT_COMMAND,     bcs.main.events.onCommand);
            },
            unhook: function() {
                API.off(API.CHAT,            bcs.main.events.onChat);
                API.off(API.VOTE_UPDATE,     bcs.main.events.onVote);
                API.off(API.GRAB_UPDATE,     bcs.main.events.onVote);
                API.off(API.USER_JOIN,       bcs.main.events.onJoin);
                API.off(API.ADVANCE,         bcs.main.events.onAdvance);
                API.off(API.WAITLIST_UPDATE, bcs.main.events.onWaitListUpdate);
                API.off(API.USER_LEAVE,      bcs.main.events.onLeave);
                API.off(API.CHAT_COMMAND,    bcs.main.events.onCommand);
            },
            onChat: function(data) {
                var t = data.type;
                if (t == "message" || t == "emote" || t == "mention") {
                    var _cid = data.cid;
                    var _msg = data.message;
                    var _time = data.timestamp;
                    var _user;
                    for (var i = 0, u = API.getUsers(); i < u.length; i++) {
                        if (u[i].username == data.un) {
                            _user = u[i];
                            break;
                        }
                    }

                    if (bcs.settings.lockdown && !_user.role && !_user.gRole
                    || bcs.settings.superlockdown && !_user.gRole) {
                        bcs.main.utils.ajax.delete.chat(_cid);
                    } else {
                        //CHECK// Do with others
                        _console.log("@bcs.main.events.onChat [" + _time + "] [" + _cid + "] [" + _user.id + "] [" + _user.username + "] " + _msg);

                        if (_user.id == bcs.u.id
                        && bcs.u.role >= 2
                        || _user.id == bcs.u.id
                        && bcs.u.gRole >= 3) {
                            _console.log("Appended DELETE BUTTON");
                            $("#chat-messages > .cm[data-cid='" + _cid + "']").prepend("<div class='delete-button'>Delete</div>");
                        }
                        $("#chat-messages > .cm[data-cid='" + _cid + "'] .delete-button").on("click", function() {
                            bcs.main.utils.ajax.delete.chat(_cid);
                        });
                        $("#chat-messages > .cm[data-cid='" + _cid + "'] .from").append(
                            "<span class='bcs-chat-info'> Lv. <a class='bcs-chat-lv'>" + _user.level + "</a></span>"
                            + "<span class='bcs-chat-info'> ID: <a class='bcs-chat-id'>" + _user.id + "</a></span>");

                        $("#chat-messages > .cm[data-cid='" + _cid + "']").hover(function() {
                            $("#chat-messages > .cm[data-cid='" + _cid + "'] .from .bcs-chat-info").css({"opacity":"1"});
                            $("#chat-messages > .cm[data-cid='" + _cid + "'] .delete-button").css({"display":"block"});
                        }, function() {
                            $("#chat-messages > .cm[data-cid='" + _cid + "'] .from .bcs-chat-info").css({"opacity":"0.2"});
                            $("#chat-messages > .cm[data-cid='" + _cid + "'] .delete-button").css({"display":"none"});
                        });
                    }
                }
            },
            onVote: function(data) {
                var d = new Date();
                var h = d.getHours();
                var m = d.getMinutes();
                var s = d.getSeconds();
                if (h < 10) {  h = "0" + h;  }
                if (m < 10) {  m = "0" + m;  }
                if (s < 10) {  s = "0" + s;  }
                var userName = data.user.username.replace("<", "&lt;").replace(">", "&gt;");
                if (bcs.settings.mehlog && data.vote == -1) {
                    bcs.main.addChat(
                    "<div>"
                    +    "<i class='icon icon-meh'></i>"
                    +    "<span class='bcs-vote-log' username='" + userName + "'>"
                    +        "<b>" + userName + "</b> meh'ed this"
                    +        "<br />"
                    +        "<a class='bcs-timestamp'>ID " + data.user.id + " | " + h + ":" + m + ":" + s + "</a>"
                    +    "</span>"
                    +"</div>", "bcs-meh-log");
                } else if (bcs.settings.wootlog && data.vote == 1) {
                    bcs.main.addChat(
                    "<div>"
                    +    "<i class='icon icon-woot'></i>"
                    +    "<span class='bcs-vote-log' username='" + userName + "'>"
                    +        "<b>" + userName + "</b> woot'ed this"
                    +        "<br />"
                    +        "<a class='bcs-timestamp'>ID " + data.user.id + " | " + h + ":" + m + ":" + s + "</a>"
                    +    "</span>"
                    +"</div>", "bcs-woot-log");
                } else if (bcs.settings.grablog && !data.vote) {
                    bcs.main.addChat(
                    "<div>"
                    +    "<i class='icon icon-grab'></i>"
                    +    "<span class='bcs-vote-log' username='" + userName + "'>"
                    +        "<b>" + userName + "</b> grabbed this"
                    +        "<br />"
                    +        "<a class='bcs-timestamp'>ID " + data.user.id + " | " + h + ":" + m + ":" + s + "</a>"
                    +    "</span>"
                    +"</div>","bcs-grab-log");
                }
            },
            onJoin: function(data) {
                if (bcs.settings.trafficlog) {
                    var _user = {
                        username: data.username.replace("<", "&lt;").replace(">", "&gt;"),
                        color: data.friend ? "#B6A2FF" : "#0699DD",
                        intro: data.friend ? "Your friend " : "",
                        id: data.id,
                        level: data.level,
                        role: "",
                        gRole: ""
                    }
                    var _class = data.friend ? "bcs-friendJoin-log" : "bcs-userJoin-log";

                    var d = new Date();
                    var h = d.getHours();
                    var m = d.getMinutes();
                    var s = d.getSeconds();
                    if (h < 10) {  h = "0" + h;  }
                    if (m < 10) {  m = "0" + m;  }
                    if (s < 10) {  s = "0" + s;  }

                    var _bcs_tmp = "<a class='bcs-timestamp'>";

                    switch (data.role) {
                        case 0:
                            _user.role = ""; break;
                        case 1:
                            _user.role = _bcs_tmp + " | <a class='bcs-styles-lRole'>RDJ</a> " + _bcs_tmp + " (1)</a>";     break;
                        case 2:
                            _user.role = _bcs_tmp + " | <a class='bcs-styles-lRole'>Bouncer</a> " + _bcs_tmp + " (2)</a>"; break;
                        case 3:
                            _user.role = _bcs_tmp + " | <a class='bcs-styles-lRole'>Manager</a> " + _bcs_tmp + " (3)</a>"; break;
                        case 4:
                            _user.role = _bcs_tmp + " | <a class='bcs-styles-lRole'>CoHost</a> " + _bcs_tmp + " (4)</a>";  break;
                        case 5:
                            _user.role = _bcs_tmp + " | <a class='bcs-styles-lRole'>Host</a> " + _bcs_tmp + " (5)</a>";    break;
                    }

                    switch (data.gRole) {
                        case 3:
                            _user.gRole = _bcs_tmp + " | <a class='bcs-styles-gRole3'>BA</a> " + _bcs_tmp + " (3)</a>";    break;
                        case 5:
                            _user.gRole = _bcs_tmp + " | <a class='bcs-styles-gRole5'>Admin</a> " + _bcs_tmp + " (5)</a>"; break;
                        default:
                            _user.gRole = ""; break;
                    }

                    bcs.main.addChat(
                        "<a>"
                        +   _user.intro
                        +   "<b>"
                        +       _user.username
                        +   "</b> joined </a>"
                        +"<br />"
                        +"<a class='bcs-timestamp'>"
                        +    "<b>ID</b> "
                        +    _user.id + " | " + h + ":" + m + ":" + s
                        +    " | <b>Level</b> "
                        +    _user.level
                        +"</a> "
                        + _user.role + " "
                        + _user.gRole, _class);
                }
            },
            onLeave: function(data) {
                if (bcs.settings.trafficlog) {
                    var _user = {
                        username: data.username.replace("<", "&lt;").replace(">", "&gt;"),
                        color: data.friend ? "#B6A2FF" : "#39589A",
                        intro: data.friend ? "Your friend " : "",
                        id: data.id,
                        level: data.level,
                        role: "",
                        gRole: ""
                    }
                    var _class = data.friend ? "bcs-friendLeave-log" : "bcs-userLeave-log";

                    var d = new Date();
                    var h = d.getHours();
                    var m = d.getMinutes();
                    var s = d.getSeconds();
                    if (h < 10) {  h = "0" + h;  }
                    if (m < 10) {  m = "0" + m;  }
                    if (s < 10) {  s = "0" + s;  }

                    var _bcs_tmp = "<a class='bcs-timestamp'>";

                    switch (data.role) {
                        case 0:
                            _user.role = ""; break;
                        case 1:
                            _user.role = _bcs_tmp + " | <a class='bcs-styles-lRole'>RDJ</a> " + _bcs_tmp + " (1)</a>";     break;
                        case 2:
                            _user.role = _bcs_tmp + " | <a class='bcs-styles-lRole'>Bouncer</a> " + _bcs_tmp + " (2)</a>"; break;
                        case 3:
                            _user.role = _bcs_tmp + " | <a class='bcs-styles-lRole'>Manager</a> " + _bcs_tmp + " (3)</a>"; break;
                        case 4:
                            _user.role = _bcs_tmp + " | <a class='bcs-styles-lRole'>CoHost</a> " + _bcs_tmp + " (4)</a>";  break;
                        case 5:
                            _user.role = _bcs_tmp + " | <a class='bcs-styles-lRole'>Host</a> " + _bcs_tmp + " (5)</a>";    break;
                    }

                    switch (data.gRole) {
                        case 3:
                            _user.gRole = _bcs_tmp + " | <a class='bcs-styles-gRole3'>BA</a> " + _bcs_tmp + " (3)</a>";    break;
                        case 5:
                            _user.gRole = _bcs_tmp + " | <a class='bcs-styles-gRole5'>Admin</a> " + _bcs_tmp + " (5)</a>"; break;
                        default:
                            _user.gRole = ""; break;
                    }

                    bcs.main.addChat(
                        "<a>"
                        +   _user.intro
                        +   "<b>"
                        +       _user.username
                        +   "</b> left </a>"
                        +"<br />"
                        +"<a class='bcs-timestamp'>"
                        +    "<b>ID</b> "
                        +    _user.id + " | " + h + ":" + m + ":" + s
                        +    " | <b>Level</b> "
                        +    _user.level
                        +"</a> "
                        + _user.role + " "
                        + _user.gRole, _class);
                }
            },
            onAdvance: function(data) {
                bcs.main.utils.volume();
                bcs.main.utils.percentage();
                bcs.main.utils.ajax.get.historyID();
                var currentSong = API.getMedia();
                if ($("#now-playing-media .bar-value").width() >= $("#now-playing-media").width()){
                    $("#bcs-media-scroll").remove();
                    $("#now-playing-media .bar-value").hide();
                    $("#now-playing-media").append(
                        "<marquee id='bcs-media-scroll' scrollamount='3'>"
                        + currentSong.author + " - " + currentSong.title
                        + "</marquee>");
                }else{
                    $("#bcs-media-scroll").remove();
                    $("#now-playing-media .bar-value").show();
                }

                setTimeout(function() {
                    if (bcs.settings.autowoot) {
                        bcs.main.utils.woot();
                    } else if (bcs.settings.automeh) {
                        bcs.main.utils.meh();
                    }
                }, 2000);

                var d = new Date();
                var h = d.getHours();
                var m = d.getMinutes();
                var s = d.getSeconds();
                if (h < 10){  h = "0" + h;  }
                if (m < 10){  m = "0" + m;  }
                if (s < 10){  s = "0" + s;  }

                if (bcs.settings.djupdates) {
                    var _logLength = $(".cm.log").length;
                    bcs.l(" ");
                    for (var i = _logLength; i < $(".cm.log").length; i++) {
                        // Yes, this is pretty stupid. But whatever.
                        $(".cm.log")[i].remove();
                    }
                    //CHECK//
                    bcs.main.addChat("<br /><img src='https://i.imgur.com/fhagHZg.png' /><br />"
                        + "<b><a style='color:#90ad2f;'>" + data.lastPlay.score.positive
                        + "</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style='color:#aa74ff;'>"
                        + data.lastPlay.score.grabs
                        + "</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style='color:#c42e3b;'>"
                        + data.lastPlay.score.negative
                        + "</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style='color:#646b7e;'>"
                        + API.getUsers().length + "</a></b>");
                    setTimeout(function() {
                        for (var i = 0; i< API.getHistory().length; i++) {
                            if (API.getHistory()[i].media.cid == currentSong.cid && i != 0){
                                var previous = API.getHistory()[i];
                                var pos = i + 1;
                                var stats = previous.user.username + " (ID " + previous.user.id + ")";
                                bcs.console.warn("Song in History | Played by " + stats + "<br />(History position " + pos + ")<br />[" + previous.media.title + "]");
                                badoop.play();//CHECK//
                                bcs.main.addChat("<a style='color:#ff3535; font-weight:bold;'>Song in History</a><br />Played by " + stats + " - (History position " + pos + ")<br />[" + previous.media.title + "]","#D04545",true);
                                break;
                            }
                        }
                    },250);
                    var hoursLong = "";
                    var minutesLong = Math.floor(currentSong.duration / 60);
                    var secondsLong = currentSong.duration % 60;

                    if (minutesLong >= 60){
                        hoursLong = Math.floor(minutesLong / 60);
                        minutesLong = minutesLong % 60;
                    };
                    if (hoursLong != ""){hoursLong = hoursLong + ":";};
                    if (secondsLong < 10){secondsLong = "0" + secondsLong;}
                    if (minutesLong < 10){minutesLong = "0" + minutesLong;}
                    var actuallength = hoursLong + minutesLong + ":" + secondsLong;
                    if (bcs.settings.djupdates) {
                        if (currentSong.duration > 480) {
                            badoop.play();
                            bcs.main.addChat("<b><a style='color:#ff3535;'>Song is over 8 minutes</a></b><br /> Song length: " + actuallength,"#D04545",true);
                        }
                    }
                    //CHECK//
                    bcs.main.addChat("<a style='color:#e6ff99;'><b>Now playing:</b></a> "
                        + data.media.title
                        + "<br />"
                        + "<a style='color:#e6ff99;'><b>Author:</b></a> "
                        + data.media.author
                        + "<br />"
                        + "<a style='color:#e6ff99;'><b>Song length:</b></a> "
                        + actuallength + "<br />"
                        + "<a style='color:#e6ff99;'><b>Current DJ:</b></a> "
                        + data.dj.username
                        + " (ID " + data.dj.id + ")<br />");
                }
            },
            onWaitListUpdate: function(data) {
                API.chatLog("A");
                if (bcs.settings.autojoin) {
                    API.chatLog("B");
                    var dj = API.getDJ();
                    if (API.getWaitListPosition() <= -1 && dj.username != bcs.u.username) {
                        API.chatLog("C");
                        bcs.main.utils.ajax.post.waitList();
                        setTimeout(function(){
                            if (API.getWaitListPosition() <= -1 && dj.username != bcs.u.username) {
                                bcs.main.utils.ajax.post.waitList();
                            }
                        },100);
                        setTimeout(function(){
                            if (API.getWaitListPosition() <= -1 && dj.username != bcs.u.username) {
                                bcs.main.utils.ajax.post.waitList();
                            }
                        },250);
                    }
                }
            },
            onCommand: function(data) {
                var command = data.substring(1).split(' ');

                if (typeof command[2] != "undefined") {
                    for (var k = 2; k < command.length; k++) {
                        command[1] = command[1] + " " + command[k];
                    }
                }

                if (typeof command[1] == "undefined") {
                    command[1] = "";
                }

                _console.log("@bcs.main.events.onCommand [COMMAND] " + command[0] + " || [ARGUMENT] " + command[1]);

                for (var i = 0, listSize = _commands.list.length; i < listSize; i++) {
                    for (var j = 0, cmdSize = _commands.list[i].cmd.length; j < cmdSize; j++) {
                        if (command[0] == _commands.list[i].cmd[j]) {
                            _commands.list[i].run(command[1], command[0]);
                        }
                    }
                }
            }
        }
    }
}

bcs.main.init();