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

//$.getScript(BCS_DIR + "commands.js");
$.getScript(BCS_DIR + "menu.js");

$("head").append(
"<link "
+    " rel='stylesheet' "
+    " type='text/css' "
+    " href='" + BCS_DIR + "styleSheet.css'"
+ ">"
);

$("#chat-popout-button").on("click", function() {  $(".bcs-log").remove();  });

var _console = {
    log: function () {
        var params = Array.prototype.slice.call(arguments, 1);
        if (typeof arguments[0] == "object") {  arguments[0] = JSON.stringify(arguments[0]);  }
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
        "patch": "46",
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
        /* Clear chat */
        lockdown: false,
        wootlog: true,
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
            bcs.plugCode.init();
            bcs.main.events.hook();
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
            $("div#bcs-menu .menu ul li.bcs span.bcs-version").text(bcs.v.stage + bcs.v._().join("."));
            $("div.bcs-log._1 .init").on("click", function() {
                $("div.bcs-log._1 .init .authors").toggleClass("visible");
            });
            $("#volume > .slider").on("mousewheel", function(e) {
                if (e.originalEvent.wheelDelta == 120) {
                    API.setVolume(API.getVolume() + 4);
                } else {
                    API.setVolume(API.getVolume() - 4);
                }
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
                            _console.log("@bcs.main.utils.ajax.post.woot [" + msg + "]");
                        });
                    },
                    meh: function(_hid) {
                        $.ajax({
                            type: "POST",
                            contentType: "application/json",
                            url: "https://plug.dj/_/votes",
                            data: '{"direction": "-1","historyID": "' + _hid + '"}'
                        }).done(function(msg) {
                            _console.log("@bcs.main.utils.ajax.post.woot [" + msg + "]");
                        });
                    },
                    ban: function(_id, _dur) {
                        $.ajax({
                            type: "POST",
                            contentType: "application/json",
                            url: "https://plug.dj/_/bans/add",
                            data: '{"userID":' + _id + ',"reason":1,"duration":"' + _dur + '"}'
                        }).done(function(msg) {
                            _console.log("@bcs.main.utils.ajax.post.ban [" + msg + "]");
                        });
                    },
                    mute: function(_id, _dur) {
                        $.ajax({
                            type: "POST",
                            contentType: "application/json",
                            url: "https://plug.dj/_/mutes",
                            data: '{"userID":'+ _id +',"reason":1,"duration":"' + _dur + '"}'
                        }).done(function(msg) {
                            _console.log("@bcs.main.utils.ajax.post.mute [" + msg + "]");
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
                            if (_arg) {  _arg();  }
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
                /*
                 *  Fix for the volume bug
                 */
                var vol = $("#volume span").text().split("%")[0];
                if (vol != 0) {
                    API.setVolume(0);
                } else {
                    API.setVolume(1);
                }
                setTimeout(function() {
                    API.setVolume(vol);
                },1500);
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
                bcs.main.addChat();
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
                } else {

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
                    if (bcs.settings.lockdown && _user.role == 0 && _user.gRole == 0
                    || bcs.settings.superlockdown && _user.gRole == 0) {
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
                if (bcs.settings.mehlog && data.vote == -1) {//CHECK//
                    bcs.main.addChat(
                    "<div>"
                    +    "<i class='icon icon-meh'></i>"
                    +    "<span class='bcs-vote-log' username='" + userName + "'>"
                    +        "<b>" + userName + "</b> (ID " + data.user.id + ") meh'ed this"
                    +        "<br />"
                    +        "<a class='bcs-timestamp'>[" + h + ":" + m + ":" + s + "]</a>"
                    +    "</span>"
                    +"</div>", "bcs-meh-log");
                } else if (bcs.settings.wootlog && data.vote == 1) {
                    bcs.main.addChat(
                    "<div>"
                    +    "<i class='icon icon-woot'></i>"
                    +    "<span class='bcs-vote-log' username='" + userName + "'>"
                    +        "<b>" + userName + "</b> (ID " + data.user.id + ") woot'ed this"
                    +        "<br />"
                    +        "<a class='bcs-timestamp'>[" + h + ":" + m + ":" + s + "]</a>"
                    +    "</span>"
                    +"</div>", "bcs-woot-log");
                } else if (bcs.settings.grablog && !data.vote) {
                    bcs.main.addChat(
                    "<div>"
                    +    "<i class='icon icon-meh'></i>"
                    +    "<span class='bcs-vote-log' username='" + userName + "'>"
                    +        "<b>" + userName + "</b> (ID " + data.user.id + ") woot'ed this"
                    +        "<br />"
                    +        "<a class='bcs-timestamp'>[" + h + ":" + m + ":" + s + "]</a>"
                    +    "</span>"
                    +"</div>","bcs-grab-log");
                }
            },
            onJoin: function(data) {
                if (bcs.settings.trafficlog) {
                    var _user = {
                        username: data.username.replace("<", "&lt;").replace(">", "&gt;"),
                        color: data.friend ? "#c5ffcc" : "#74afff",
                        intro: data.friend ? "Your friend " : "",
                        role: "",
                        gRole: ""
                    }

                    var d = new Date();
                    var h = d.getHours();
                    var m = d.getMinutes();
                    var s = d.getSeconds();
                    if (h < 10) {  h = "0" + h;  }
                    if (m < 10) {  m = "0" + m;  }
                    if (s < 10) {  s = "0" + s;  }

                    switch (data.role) {
                        case 0:
                            _user.role = ""; break;
                        case 1:
                            _user.role = "<a class='bcs-styles-lRole'>RDJ</a> (1) |";     break;
                        case 2:
                            _user.role = "<a class='bcs-styles-lRole'>Bouncer</a> (2) |"; break;
                        case 3:
                            _user.role = "<a class='bcs-styles-lRole'>Manager</a> (3) |"; break;
                        case 4:
                            _user.role = "<a class='bcs-styles-lRole'>CoHost</a> (4) |";  break;
                        case 5:
                            _user.role = "<a class='bcs-styles-lRole'>Host</a> (5) |";    break;
                    }

                    switch (user.gRole) {
                        case 0:
                            _user.gRole = ""; break;
                        case 3:
                            _user.gRole = " <a class='bcs-styles-gRole3'>BA</a> (3) |";    break;
                        case 5:
                            _user.gRole = " <a class='bcs-styles-gRole5'>Admin</a> (5) |"; break;
                    }

                    //CHECK//
                    bcs.main.addChat("<a style='color:" + c + ";'>" + f + "<b>" + thename + "</b> joined </a><br /> <a style='font-size:11px;'><b>ID</b> " + user.id + " |</a> " + userrole + " " + usergrole + " <a style='font-size:11px;'><b>Level</b> " + user.level + " | " + h + ":" + m + ":" + s + "</a>","#ddd",false,false,true,true);
                }
            },
            onLeave: function(data) {
                if (bcs.settings.trafficlog) {
                    var _user = {
                        username: data.username.replace("<", "&lt;").replace(">", "&gt;"),
                        color: data.friend ? "#c5ffcc" : "#7774ff",
                        intro: data.friend ? "Your friend " : "",
                        role: "",
                        gRole: ""
                    }

                    var d = new Date();
                    var h = d.getHours();
                    var m = d.getMinutes();
                    var s = d.getSeconds();
                    if (h < 10) {  h = "0" + h;  }
                    if (m < 10) {  m = "0" + m;  }
                    if (s < 10) {  s = "0" + s;  }

                    switch (data.role) {
                        case 0:
                            _user.role = ""; break;
                        case 1:
                            _user.role = "<a class='bcs-styles-lRole'>RDJ</a> (1) |";     break;
                        case 2:
                            _user.role = "<a class='bcs-styles-lRole'>Bouncer</a> (2) |"; break;
                        case 3:
                            _user.role = "<a class='bcs-styles-lRole'>Manager</a> (3) |"; break;
                        case 4:
                            _user.role = "<a class='bcs-styles-lRole'>CoHost</a> (4) |";  break;
                        case 5:
                            _user.role = "<a class='bcs-styles-lRole'>Host</a> (5) |";    break;
                    }

                    switch (user.gRole) {
                        case 0:
                            _user.gRole = ""; break;
                        case 3:
                            _user.gRole = " <a class='bcs-styles-gRole3'>BA</a> (3) |";    break;
                        case 5:
                            _user.gRole = " <a class='bcs-styles-gRole5'>Admin</a> (5) |"; break;
                    }

                    //CHECK//
                    bcs.main.addChat("<a style='color:" + c + ";'>" + f + "<b>" + thename + "</b> left </a><br /> <a style='font-size:11px;'><b>ID</b> " + user.id + " |</a> " + userrole + " " + usergrole + " <a style='font-size:11px;'><b>Level</b> " + user.level + " | " + h + ":" + m + ":" + s + "</a>","#ddd",false,false,true,true);
                }
            },
            onAdvance: function(data) {
                bcs.main.utils.volume();
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

                var d = new Date();
                var h = d.getHours();
                var m = d.getMinutes();
                var s = d.getSeconds();
                if (h < 10){h = "0" + h;}
                if (m < 10){m = "0" + m;}
                if (s < 10){s = "0" + s;}
                setTimeout(function() {
                    if (bcs.settings.autowoot) {
                        bcs.main.utils.woot();
                    } else if (bcs.settings.automeh) {
                        bcs.main.utils.meh();
                    }
                }, 2000);

                if (bcs.settings.djupdates) {
                    bcs.l(" ");
                    for (var i = 1, _log = $(".cm.log").length; i < _log; i++) {
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
                if (bcs.settings.autojoin) {
                    var dj = API.getDJ();
                    if (API.getWaitListPosition() <= -1 && dj.username != bcs.user.username){
                        bcs.main.utils.post.waitList();
                        setTimeout(function(){
                            if (API.getWaitListPosition() <= -1 && dj.username != bcs.user.username){bcs.joinWL();}
                        },100);
                        setTimeout(function(){
                            if (API.getWaitListPosition() <= -1 && dj.username != bcs.user.username){bcs.joinWL();}
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

var _commands = {
    ct: function(_arg) {
        _arg = _arg || "";
        API.sendChat(bcs.temp + " " + _arg);
    },
    list: [
    {
        cmd: ["todo"],
        run: function(_arg, _cmd) {
            bcs.main.addChat(
                    "<a class='bcs-title'>Todo list:</a><br />"
                    + "<br />"
                    + "<a class='bcs-todo-done'>✔ Fix inline images bug</a><br />"
                    + "<a class='bcs-todo-done'>✔ Have WL position on vote list (cuz why not)</a><br />"
                    + "<a class='bcs-todo-done'>✔ Force skip at the end of songs</a><br />"
                    + "<a class='bcs-todo-done'>✔ Make vote list prettier</a><br />"
                    + "<a class='bcs-todo-done'>✔ Make vote count show up on chat</a><br />"
                    + "<a class='bcs-todo-nope'>✘ Change all avatars to only one</a><br />"
                    + "<a class='bcs-todo-nope'>✘ Check if I can raise the cap to over 200</a><br />"
                    + "<a class='bcs-todo-todo'>⊱ Mentioning user when clicking Meh/Grab msg</a><br />"
                    + "<a class='bcs-todo-todo'>⊱ Meh count per user (automeh check)</a><br />");
        }
    },
    {
        cmd: ["author", "authors"],
        run: function(_arg, _cmd) {
            $(".bcs-log._1").remove();
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
        }
    },
    {
        cmd: ["both"],
        run: function(_arg, _cmd) {  _commands.ct(" Both. http://i.imgur.com/py7q8V7.gif");  }
    },
    {
        cmd: ["skip"],
        run: function(_arg, _cmd) {
            API.moderateForceSkip();
        }
    },
    {
        cmd: ["woot", "+1"],
        run: function(_arg, _cmd) {
            bcs.main.utils.ajax.post.woot();
        }
    },
    {
        cmd: ["meh", "-1"],
        run: function(_arg, _cmd) {
            bcs.main.utils.ajax.post.meh();
        }
    },
    {
        cmd: ["showinter", "intercom"],
        run: function(_arg, _cmd) {
            if ($("#intercom-launcher").css("visibility") == "visible") {$("#intercom-launcher").css({"visibility":"hidden"});}
            else if ($("#intercom-launcher").css("visibility") == "hidden") {$("#intercom-launcher").css({"visibility":"visible"});}
        }
    },
    {
        cmd: ["flip", "mirror"],
        run: function(_arg, _cmd) {
            bcs.isFlip = !bcs.isFlip;
            if (bcs.isFlip) {$("body").css({'transform':'scale(-1, 1)'})}
            if (!bcs.isFlip) {$("body").css({'transform':'scale(1, 1)'})}
        }
    },
    {
        cmd: ["invert"],
        run: function(_arg, _cmd) {
            bcs.isInverted = !bcs.isInverted;
            if (bcs.isInverted) {
                if (BrowserDetect.browser == "Firefox") {
                    $("#app").css({'filter':'invert(100%)','-webkit-filter':'invert(100%)'});
                    $("#user-view").css({'filter':'invert(100%)','-webkit-filter':'invert(100%)'});
                    $("#room-settings").css({'filter':'invert(100%)','-webkit-filter':'invert(100%)'});
                    $("#dialog-container").css({'filter':'invert(100%)','-webkit-filter':'invert(100%)'});
                    $("#toast-notifications").css({'filter':'invert(100%)','-webkit-filter':'invert(100%)'});
                    $("#room-settings").css({'filter':'invert(100%)','-webkit-filter':'invert(100%)'});
                    bcs.main.addChat('Due to Mozilla being a bully, not every single part of the page will be inverted.');
                }else{
                    $("body").css({'filter':'invert(100%)','-webkit-filter':'invert(100%)'});
                }
            }
            if (!bcs.isInverted) {
                if (BrowserDetect.browser == "Firefox") {
                    $("#app").css({'filter':'invert(0%)','-webkit-filter':'invert(0%)'});
                    $("#user-view").css({'filter':'invert(0%)','-webkit-filter':'invert(0%)'});
                    $("#room-settings").css({'filter':'invert(0%)','-webkit-filter':'invert(0%)'});
                    $("#dialog-container").css({'filter':'invert(0%)','-webkit-filter':'invert(0%)'});
                    $("#toast-notifications").css({'filter':'invert(0%)','-webkit-filter':'invert(0%)'});
                    $("#room-settings").css({'filter':'invert(0%)','-webkit-filter':'invert(0%)'});
                }else{
                    $("body").css({'filter':'invert(0%)','-webkit-filter':'invert(0%)'});
                }
            }
        }
    },
    {
        cmd: ["rekt"],
        run: function(_arg, _cmd) {
            bcs.c("NOT REKT ☐ | REKT ☑");
        }
    },  
    {
        cmd: ["ooo"],
        run: function(_arg, _cmd) {
            _commands.ct("http://youtu.be/MeB3eYk1Ze0?t=1m16s");
        }
    },
    {
        cmd: ["toast"],
        run: function(_arg, _cmd) {
            bcs.settings.toast(_arg);
        }
    },
    {
        cmd: ["lrg"],
        run: function(_arg, _cmd) {
            bigchat = !bigchat;
            $("#xbig").toggleClass('active');
            $("#xbig .icon").toggleClass('active');
            if (bigchat) {
                $("#room .app-right").animate({width:"399"});
                $('#chat-input-field').animate({width:"360"});
                $("#chat-input").animate({width:"380"});
            }else if (!bigchat) {
                $("#room .app-right").animate({width:"345"});
                $('#chat-input-field').animate({width:"305"});
                $("#chat-input").animate({width:"326"});
            }
        }
    },
    {
        cmd: ["support"],
        run: function(_arg, _cmd) {
            bcs.main.addChat("<br /><a style='color:#c2f3bf;'><b>Here's support stuff:</b></a><br /><br />\
                    <a style='color: #8bdb85;'>support@plug.dj</a><br />\
                    <a style='color: #8bdb85;' href='https://plug.dj/support'>plug.dj/support</a><br />\
                    <a style='color: #8bdb85;' href='http://support.plug.dj/hc' target='_blank'>support.plug.dj</a><br />","#CCCCCC");
        }
    },
    {
        cmd: ["timeout"],
        run: function(_arg, _cmd) {
            _commands.ct("You must wait 10 minutes before you can post links on chat after you join a room. This is done to prevent spam.");
        }
    },
    {
        cmd: ["nsfw"],
        run: function(_arg, _cmd) {
            _commands.ct('NSFW means Not Safe For Watching (objectionable content) -- nudity, scant clothing (incl. lingerie), blood and or violence (gore), snuff (dying)');
        }
    },
    {
        cmd: ["mc", "minecraft"],
        run: function(_arg, _cmd) {
            _commands.ct('plug.dj now has its own Minecraft server! http://blog.plug.dj/2014/12/plugcraft-server/ (IP is plugdj.mcph.co)');
        }
    },
    {
        cmd: ["emojisheet", "emojicheat", "cheatsheet", "sheet"],
        run: function(_arg, _cmd) {
            _commands.ct("http://www.emoji-cheat-sheet.com/");
        }
    },
    {
        cmd: ["sacrifice", "offering"],
        run: function(_arg, _cmd) {

                          bcs.c("/me  :fire: :fire: :fire: :fire: :fire:");
            setTimeout(
            function() {  bcs.c("/me  :fire: :fire: :goat: :fire: :fire:");  },250);

            setTimeout(
            function() {  bcs.c("/me  :fire: :fire: :fire: :fire: :fire:");  },500);

            setTimeout (
            function() {  bcs.c("/me Please, all mighty Admins, accept this sacrifice!");  },750);
        }
    },
    {
        cmd: ["del"],
        run: function(_arg, _cmd) {
            var cmds = _arg.trim();
            bcs.ajax.delete.chat(logged[cmds]);
            console.log(logged[cmds]);
            logged.splice(cmds,1);
        }
    },
    {
        cmd: ["mehs", "woots", "votes", "updatevotes", "updatelist"],
        run: function(_arg, _cmd) {
            updateList();
        }
    },
    {
        cmd: ["erase"],
        run: function(_arg, _cmd) {
            bcs.ajax.delete.chat(_arg);
        }
    },
    {
        cmd: ["clean", "cls"],
        run: function(_arg, _cmd) {
            $(".betabot-update").remove();
        }
    },
    {
        cmd: ["break"],
        run: function(_arg, _cmd) {
            API.sendChat("/me  ");
            setTimeout(function() {
                API.sendChat('/del 0');
            },550);
        }
    },
    {
        cmd: ["lookup", "l"],
        run: function(_arg, _cmd) {
            var itsYou = _arg == bcs.user.id;
            intersitial(_arg,itsYou);
        }
    },
    {
        cmd: ["search", "s"],
        run: function(_arg, _cmd) {
            var xname = _arg.substring(1).toString();
            var oname = xname.substring(0,xname.length - 2);
            var uname = oname.toLowerCase();
            var foundIt = false;
            var itsYou = false;
            if (oname == bcs.user.username) {itsYou = true;}
            bcs.console.log(xname + "||" + uname + "||" + oname);
            for (var i = 0; i < API.getUsers().length; i++) {
                if (oname == API.getUsers()[i].username) {
                    intersitial(API.getUsers()[i].id,itsYou);
                    foundIt = true;
                }
            }
            if (!foundIt) {
                bcs.main.addChat("<br /><b><a style='color:#eaaeae;'>[User </b></a>" + oname + "<b><a style='color:#eaaeae;'> not found]</a></b><br />\
                Make sure you are using <b>'<a style='background-color:#3f3fff;'>@NAME </a>'</b> (yes, the space after it <em>is</em> important)","#CCCCCC",false,false,true);
            }
        }
    },
    {
        cmd: ["cya"],
        run: function(_arg, _cmd) {
            _commands.ct("Cya later! c: Thanks a lot for passing by! o/");
        }
    },
    {
        cmd: ["shrug"],
        run: function(_arg, _cmd) {
            _commands.ct(_arg + " ¯\\_(ツ)_/¯");
        }
    },
    {
        cmd: ["quote"],
        run: function(_arg, _cmd) {
            bcs.c("/me ❝ " + _arg + " ❞");
        }
    },
    {
        cmd: ["sing"],
        run: function(_arg, _cmd) {
            bcs.c("/me ♪ " + _arg + " ♫");
        }
    },
    {
        cmd: ["getid", "getuid", "id", "uid"],
        run: function(_arg, _cmd) {
            var xname = _arg.substring(1).toString();
            var oname = xname.substring(0,xname.length - 2);
            var uname = oname.toLowerCase();
            bcs.console.log(xname + "||" + uname + "||" + oname);
            getuid(uname,oname);
        }
    },
    {
        cmd: ["whywoot"],
        run: function(_arg, _cmd) {
            _commands.ct("If you're in this room, you'll most probably like the songs that are played here. Therefore, you'll be clicking Woot for most songs. AutoWoots simply click Woot for you, in case you're busy. If you dislike a song, you can manually Meh it.");
        }
    },
    {
        cmd: ["blog"],
        run: function(_arg, _cmd) {
            _commands.ct("Blog: http://blog.plug.dj/");
        }
    },
    {
        cmd: ["ba"],
        run: function(_arg, _cmd) {
            _commands.ct("Brand Ambassadors are volunteers who help moderate the website and test features. Here's more about the BA project: http://plug.dj/ba");
        }
    },
    {
        cmd: ["admin"],
        run: function(_arg, _cmd) {
            _commands.ct("Admins are the people that work for plug.dj. They have a plug.dj logo next to their names in chat. http://plug.dj/team/");
        }
    },
    {
        cmd: ["xp"],
        run: function(_arg, _cmd) {
            _commands.ct('XP and PP are earned on ticks. There is a tick cap of 72 per day. After 6 hours (72 ticks), you hit the “XP cap” and will not gain XP until the next day. More info: http://goo.gl/7SDAAr');
        }
    },
    {
        cmd: ["pp", "points", "point"],
        run: function(_arg, _cmd) {
            _commands.ct("The website check every minute what you did in the website during that time (such as Wooting, chatting, etc), and then generates a proportional amount of XP and PP for it. XP, however, has a daily cap, so you can't farm it.");
        }
    },
    {
        cmd: ["rank", "ranks"],
        run: function(_arg, _cmd) {
            _commands.ct("Help people out, be active and be online often, and you'll eventually be noticed by our staff. We'll watch you for some time, then decide whether you deserve a rank or not.");
        }
    },
    {
        cmd: ["deleteall"],
        run: function(_arg, _cmd) {
            var r = confirm("Delete entire chat on log?");
            if (r === true) {
                deleteAll();
            }else{
                bcs.main.addChat("[Command " + _cmd + " denied]");
            };
        }
    },
    {
        cmd: ["stopreload"],
        run: function(_arg, _cmd) {
            window.onbeforeunload = function() {return "BCS caught something trying to reload your page.";}
            bcs.main.addChat("BCS will now prevent page from reloading without your permission.");
        }
    },
    {
        cmd: ["selfdemote"],
        run: function(_arg, _cmd) {
            if (bcs.user.role >= 2) {
                var r = confirm("Demote yourself to RDJ? Like, wtf are you doing?");
                if (r === true) {
                    $.ajax({
                        type: 'POST',
                        url: '/_/staff/update',
                        dataType: 'json',
                        contentType: 'application/json',
                        data: JSON.stringify({userID: bcs.user.id, roleID: 1})
                    });
                }else {
                    bcs.main.addChat("[Command " + _cmd + " denied]");
                }
            }else {
                bcs.main.addChat("[Command " + _cmd + " denied]");
            }
        }
    },
    {
        cmd: ["deleteself"],
        run: function(_arg, _cmd) {
            deleteSelf();
        }
    },
    {
        cmd: ["logcheck", "checklog"],
        run: function(_arg, _cmd) {
            _console.log(logcheck);
            bcs.main.addChat("[Check console for chat log since last clear]","#ececec");
        }
    },
    {
        cmd: ["logclear", "clearlog"],
        run: function(_arg, _cmd) {
            logcheck = [];
            bcs.main.addChat("[Log cleared.]","#ececec");
        }
    },
    {
        cmd: ["opensans"],
        run: function(_arg, _cmd) {
            $("#chat-messages").css({"font-family":"'Open Sans', sans-serif"});
            $("#chat-input-field").css({"font-family":"'Open Sans', sans-serif"});
        }
    },
    {
        cmd: ["roboto"],
        run: function(_arg, _cmd) {
            $("#chat-messages").css({"font-family":"Roboto, sans-serif"});
            $("#chat-input-field").css({"font-family":"Roboto, sans-serif"});
        }
    },
    {
        cmd: ["emojis"],
        run: function(_arg, _cmd) {
            bcs.main.addChat('~=[,,_,,]:3<br />¬_¬<br />ಠ_ಠ<br />(っ◔‿◔)っ',"#ececec");
            bcs.main.addChat('ლ(ಥ益ಥლ<br />(╥﹏╥)<br />(ʃƪ ˘ ³˘)<br />( ͡° ͜ʖ ͡°)',"#ececec");
            bcs.main.addChat('(─‿‿─)<br />┬┴┬┴┤(･_├┬┴┬┴<br />(ᕗ ಠ益ಠ)ᕗ ︵﻿ ┻━┻',"#ececec");
            bcs.main.addChat('(╯°□°)╯︵ ┻━┻<br />(づ￣ ³￣)づ<br />¯\\_(ツ)_/¯',"#ececec");
        }
    },
    {
        cmd: ["readd"],
        run: function(_arg, _cmd) {
            var userID = API.getDJ().id;
            readd(userID);
        }
    },
    {
        cmd: ["swap"],
        run: function(_arg, _cmd) {
            //BUGGED!
            var arg = _arg;
            var n1 = arg.indexOf('@');
            var n2 = arg.lastIndexOf('@');
            var u1 = arg.slice(n1 + 1,n2 - 1).trim();
            var u2 = arg.slice(n2 + 1).trim();
            var id1;var id2;
            for (var i = 0; i < API.getUsers().length; i++) {
                if (API.getUsers()[i].username == u1) {
                    n1 = API.getWaitListPosition(API.getUsers()[i].id);
                    id1 = API.getUsers()[i].id;
                }
                if (API.getUsers()[i].username == u2) {
                    n2 = API.getWaitListPosition(API.getUsers()[i].id);
                    id2 = API.getUsers()[i].id;
                }
            }
            if (n1 == -1) {API.moderateAddDJ(id1);n1 = API.getWaitList().length;}
            if (n2 == -1) {API.moderateAddDJ(id2);n2 = API.getWaitList().length;}
            var posTime1 = setTimeout(function() {API.moderateMoveDJ(id1,n2);},750);
            var posTime2 = setTimeout(function() {API.moderateMoveDJ(id2,n1 + 1);},1250);
            switch ("undefined") {
                case typeof n1:case typeof n2:
                case typeof u1:case typeof u2:
                case typeof id1:case typeof id2:
                    clearTimeout(posTime1);
                    clearTimeout(posTime2);
                    bcs.console.warn("[ERROR]");
                    bcs.console.warn("n1 " + n1 + " | n2 " + n2);
                    bcs.console.warn("u1 " + u1 + " | u2 " + u2);
                    bcs.console.warn("id1 " + id1 + " | id2 " + id2);
            }
        }
    },
    {
        cmd: ["wipe"],
        run: function(_arg, _cmd) {
            var msgs = $(".cm[data-cid^=" + _arg + "]");
            for (var i = 0; i < msgs.length; i++) {
                for (var j = 0; j < msgs[i].classList.length; j++) {
                    switch (0) {
                        case msgs[i].classList[j].indexOf('message'):
                        case msgs[i].classList[j].indexOf('emote'):
                        case msgs[i].classList[j].indexOf('mention'):
                                $.ajax({type: 'DELETE', url: '/_/chat/' + msgs[i].getAttribute('data-cid')});
                                break;
                    }
                }
            }
        }
    },
    {
        cmd: ["rdj"],
        run: function(_arg, _cmd) {
            dropPromotion(1,_arg);
        }
    },
    {
        cmd: ["bouncer"],
        run: function(_arg, _cmd) {
            dropPromotion(2,_arg);
        }
    },
    {
        cmd: ["manager"],
        run: function(_arg, _cmd) {
            dropPromotion(3,_arg);
        }
    },
    {
        cmd: ["cohost"],
        run: function(_arg, _cmd) {
            dropPromotion(4,_arg);
        }
    },
    {
        cmd: ["host"],
        run: function(_arg, _cmd) {
            dropPromotion(5,_arg);
        }
    },
    {


        cmd: ["ban", "b", "pb"],
        run: function(_arg, _cmd) {
            dropHammer("b",_arg,"f");
        }
    },
    {
        cmd: ["dayban", "dban", "db"],
        run: function(_arg, _cmd) {
            dropHammer("b",_arg,"d");
        }
    },
    {
        cmd: ["hourban", "hban", "hb"],
        run: function(_arg, _cmd) {
            dropHammer("b",_arg,"h");
        }
    },
    {
        cmd: ["m", "ml", "lmute"],
        run: function(_arg, _cmd) {
            dropHammer("m",_arg,"l");
        }
    },
    {
        cmd: ["mm", "mmute"],
        run: function(_arg, _cmd) {
            dropHammer("m",_arg,"m");
        }
    },
    {
        cmd: ["ms", "smute"],
        run: function(_arg, _cmd) {
            dropHammer("m",_arg,"s");
        }
    },
    {
        cmd: ["lockdown"],
        run: function(_arg, _cmd) {
            if (bcs.user.role > 1 || bcs.user.gRole != 0) {
                lockdown = !lockdown;
                if (lockdown) {
                    var ll = "enabled. Only staff may chat.";
                }else{
                    var ll = "disabled";
                }
                bcs.main.addChat("<b>Lockdown is now " + ll + "</b>","#FF3333");
            }else{
                bcs.main.addChat("<b>Sorry, but you are not cool enough for this command.</b>","#FF3333");
            }
        }
    },
    {
        cmd: ["z"],
        run: function(_arg, _cmd) {
            bcs.main.addChat("<a style='color:#2975ff;'><b>Tip:</b></a> &<b>zwnj;</b> / &<b>nbsp;</b>");
        }
    },
    {
        // Stuff that shouldn't get a "doesnt exist" warning (mostly p3)
        cmd: [
                "lockskip", "skip", "nick", "sleep", "version",
                "join", "leave", "whoami", "refresh", "getpos",
                "mute", "link", "unmute", "nextsong", "em",
                "automute", "alertson", "alertsoff", "me",
                "ignore", "whois", "kick", "add", "remove",
                "lock", "unlock", "help"
            ],
        run: function(_arg, _cmd) {
            _console.log("[Command " + _cmd + " invoked]");
        }
    },
    {
        cmd: ["cmds", "cmd", "commands"],
        run: function(_arg, _cmd) {
            bcs.main.addChat("\
                <br />\
                <i class='icon icon-chat-bcslogo' style='left:80%;'></i>\
                There are too many commands for an in-chat<br />\
                reference of all of them.<br />\
                <a style='color:#b8e0ff;' href='https://github.com/Tetheu98/FunBotThing/blob/master/Commands.md' target='_blank' title='Commands List'>\
                    Click here instead\
                </a><br />");
        }
    }
    ]
};

bcs.main.init();