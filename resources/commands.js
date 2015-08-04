var _commands = {
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
                    + "<a class='bcs-todo-todo'>⊱ Meh count per user (automeh check)</a><br />"
                    + "<a class='bcs-todo-todo'>⊱ Be a jerk and steal p³ / rcs custom settings</a><br />"
                    + "<a class='bcs-todo-todo'>⊱ Profit</a><br />");
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
        run: function(_arg, _cmd) {
            bcs.c(_arg + " Both. http://i.imgur.com/hsB1mSb.gif");
        }
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
            var _vis = $("#intercom-launcher").hasClass("bcs-visible") ? "removeClass" : "addClass";
            $("#intercom-launcher")[_vis]("bcs-visible");
        }
    },
    {
        cmd: ["flip", "mirror"],
        run: function(_arg, _cmd) {
            var _fl = $("body").hasClass("bcs-flip") ? "removeClass" : "addClass";
            $("body")[_fl]("bcs-flip");
        }
    },
    {
        cmd: ["invert"],
        run: function(_arg, _cmd) {
            var _inv = $("#app").hasClass("bcs-invert") ? "removeClass" : "addClass";
            $("#app, "
            + "#user-view, "
            + "#room-settings, "
            + "#dialog-container, "
            + "#toast-notifications, "
            + "#room-settings, "
            + "#user-rollover")[_inv]("bcs-invert");
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
            bcs.c("https://youtu.be/x35P2wTX0zg?t=1m16s");
        }
    },
    {
        cmd: ["timeout"],
        run: function(_arg, _cmd) {
            bcs.c("You must wait 10 minutes before you can post links on chat after you join a room. "
                + "This is done to prevent spam.");
        }
    },
    {
        cmd: ["nsfw"],
        run: function(_arg, _cmd) {
            bcs.c("Here is a description of what is NSFW - http://i.imgur.com/0X5f7nL.png");
        }
    },
    {
        cmd: ["mc", "minecraft"],
        run: function(_arg, _cmd) {
            bcs.main.addChat("http://blog.plug.dj/2014/12/plugcraft-server/ (IP is plugdj.mcph.co)");
        }
    },
    {
        cmd: ["erase"],
        run: function(_arg, _cmd) {
            bcs.main.utils.ajax.delete.chat(_arg);
        }
    },
    {
        cmd: ["clean", "cls"],
        run: function(_arg, _cmd) {
            $("bcs-log").remove();
        }
    },
    {
        cmd: ["lookup", "l"],
        run: function(_arg, _cmd) {
            bcs_lookfor(_arg);
        }
    },
    {
        cmd: ["search", "s"],
        run: function(_arg, _cmd) {
            var cleanUsername = _arg.substr(1, _arg.length - 2);
            var cleanID = cleanUsername == bcs.u.username ? bcs.u.id : void(0);
            for (var i = 0, l = API.getUsers().length; i < l; i++) {
                if (!cleanID) {
                    if (cleanUsername == API.getUsers()[i].username) {
                        cleanID = API.getUsers()[i].id;
                        break;
                    }
                } else {
                    break;
                }
            }
            if (cleanID) {
                bcs_lookfor(cleanID);
            } else {
                bcs.main.addChat(
                    "<span class='bcs-ass'>"
                    +    "<a class='bcs-ass-unavailable'>Invalid [@username ]</a>"
                    +"</span>");
            }
        }
    },
    {
        cmd: ["shrug"],
        run: function(_arg, _cmd) {
            bcs.c(_arg + " ¯\\_(ツ)_/¯");
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
        cmd: ["id"],
        run: function(_arg, _cmd) {
            var cleanUsername = _arg.substr(1, _arg.length - 2);
            var cleanID = cleanUsername == bcs.u.username ? bcs.u.id : void(0);
            for (var i = 0, l = API.getUsers().length; i < l; i++) {
                if (!cleanID) {
                    if (cleanUsername == API.getUsers()[i].username) {
                        cleanID = API.getUsers()[i].id;
                        break;
                    }
                } else {
                    break;
                }
            }
            if (cleanID) {
                bcs.main.addChat(
                    "<span class='bcs-ass'>"
                    +    _arg + "'s ID is " + cleanID
                    +"</span>");
            } else {
                bcs.main.addChat(
                    "<span class='bcs-ass'>"
                    +    "<a class='bcs-ass-unavailable'>Invalid [@username ]</a>"
                    +"</span>");
            }
        }
    },
    {
        cmd: ["ba"],
        run: function(_arg, _cmd) {
            var _baResponse = [
                " Brand Ambassadors are like the police of plug.dj, except they usually won’t do cavity searches.",
                " Brand Ambassadors are volunteers who help moderate the website and test features."
            ];
            bcs.c(_arg + " " + ~~(Math.Random() * _baResponse.length) + " Here's more about the BA project: http://plug.dj/ba");
        }
    },
    {
        cmd: ["admin"],
        run: function(_arg, _cmd) {
            bcs.c(_arg + " Admins are the people that work for plug.dj. "
                + "They have a plug.dj logo next to their names in chat. "
                + "Here's the list of the current Admins: http://plug.dj/team/");
        }
    },
    {
        cmd: ["xp"],
        run: function(_arg, _cmd) {
            bcs.c(_arg + " XP and PP are earned on ticks. "
                + "There is a tick cap of 72 per day. "
                + "After 6 hours (72 ticks), you hit the “XP cap” and will not gain XP until the next day. "
                + "More info: http://goo.gl/7SDAAr");
        }
    },
    {
        cmd: ["pp", "points", "point"],
        run: function(_arg, _cmd) {
            bcs.c("The website check every 5 minutes on what you did during that time (such as Wooting, chatting, etc),"
                + " and then generates a proportional amount of XP and PP for it. "
                + "XP, however, has a daily cap, so you can't farm it.");
        }
    },
    {
        cmd: ["deleteall", "clearchat"],
        run: function(_arg, _cmd) {
            bcs.plugCode.plugMessage(
                    "Are you sure you want to clear the entire chat? This obviously cannot be undone."
            +       "<br />"
            +       "<h1>"
            +           "<a class='bcs-clearchat' onclick='return bcs.main.utils.clearchat();'>Yes, delete it</a>"
            +           "<a>&nbsp;</a>"
            +       "</h1>");
        }
    },
    {
        cmd: ["stopreload"],
        run: function(_arg, _cmd) {
            window.onbeforeunload = function() {
                return "BCS caught something trying to reload your page.";
            }
            bcs.main.addChat("BCS will now prevent page from reloading without your permission.");
        }
    },
    {
        cmd: ["selfdemote"],
        run: function(_arg, _cmd) {
            if (bcs.u.role >= 2) {
                if (confirm("Demote yourself to RDJ? Like, wtf are you doing?")) {
                    bcs.main.utils.ajax.post.staff(bcs.u.id, 1);
                } else {
                    bcs.main.addChat("[Command " + _cmd + " denied]");
                }
            } else {
                bcs.main.addChat("[Command " + _cmd + " denied]");
            }
        }
    },
    {
        cmd: ["deleteself"],
        run: function(_arg, _cmd) {
            var msgs = $(".cm[data-cid^=" + bcs.u.id + "]");
            for (var i = 0; i < msgs.length; i++) {
                for (var j = 0; j < msgs[i].classList.length; j++) {
                    switch (0) {
                        case msgs[i].classList[j].indexOf("message"):
                        case msgs[i].classList[j].indexOf("emote"):
                        case msgs[i].classList[j].indexOf("mention"):
                            bcs.main.utils.ajax.delete.chat(msgs[i].getAttribute("data-cid"));
                            break;
                    }
                }
            }
        }
    },
    {
        cmd: ["emojis"],
        run: function(_arg, _cmd) {
            bcs.main.addChat('~=[,,_,,]:3<br />¬_¬<br />ಠ_ಠ<br />(っ◔‿◔)っ');
            bcs.main.addChat('ლ(ಥ益ಥლ<br />(╥﹏╥)<br />(ʃƪ ˘ ³˘)<br />( ͡° ͜ʖ ͡°)');
            bcs.main.addChat('(─‿‿─)<br />┬┴┬┴┤(･_├┬┴┬┴<br />(ᕗ ಠ益ಠ)ᕗ ︵﻿ ┻━┻');
            bcs.main.addChat('(╯°□°)╯︵ ┻━┻<br />(づ￣ ³￣)づ<br />¯\\_(ツ)_/¯');
        }
    },
    {
        cmd: ["wipe"],
        run: function(_arg, _cmd) {
            var msgs = $(".cm[data-cid^=" + _arg + "]");
            for (var i = 0; i < msgs.length; i++) {
                for (var j = 0; j < msgs[i].classList.length; j++) {
                    switch (0) {
                        case msgs[i].classList[j].indexOf("message"):
                        case msgs[i].classList[j].indexOf("emote"):
                        case msgs[i].classList[j].indexOf("mention"):
                            bcs.main.utils.ajax.delete.chat(msgs[i].getAttribute("data-cid"));
                            break;
                    }
                }
            }
        }
    },
    {
        cmd: ["rdj"],
        run: function(_arg, _cmd) {
            bcs.main.utils.ajax.post.staff(_arg, 1);
        }
    },
    {
        cmd: ["bouncer"],
        run: function(_arg, _cmd) {
            bcs.main.utils.ajax.post.staff(_arg, 2);
        }
    },
    {
        cmd: ["manager"],
        run: function(_arg, _cmd) {
            bcs.main.utils.ajax.post.staff(_arg, 3);
        }
    },
    {
        cmd: ["cohost"],
        run: function(_arg, _cmd) {
            bcs.main.utils.ajax.post.staff(_arg, 4);
        }
    },
    {
        cmd: ["host"],
        run: function(_arg, _cmd) {
            bcs.main.utils.ajax.post.staff(_arg, 5);
        }
    },
    {
        cmd: ["banall"],
        run: function(_arg, _cmd) {
            const _all = _arg.toString().trim().toLowerCase() == "a";
            for (var i = 0, l = API.getUsers().length; i < l; i++) {
                if (API.getUsers()[i].gRole < 3 && API.getUsers()[i].role < 1 && !_all
                 || API.getUsers()[i].gRole < 3) {
                    bcs.main.utils.ajax.post.ban(API.getUsers()[i].id, "f");
                }
            }
        }
    },
    {
        cmd: ["ban", "b", "pb"],
        run: function(_arg, _cmd) {
            bcs.main.utils.ajax.post.ban(_arg, "f");
        }
    },
    {
        cmd: ["dayban", "dban", "db"],
        run: function(_arg, _cmd) {
            bcs.main.utils.ajax.post.ban(_arg, "d");
        }
    },
    {
        cmd: ["hourban", "hban", "hb"],
        run: function(_arg, _cmd) {
            bcs.main.utils.ajax.post.ban(_arg, "h");
        }
    },
    {
        cmd: ["m", "ml", "lmute"],
        run: function(_arg, _cmd) {
            bcs.main.utils.ajax.post.mute(_arg, "l");
        }
    },
    {
        cmd: ["mm", "mmute"],
        run: function(_arg, _cmd) {
            bcs.main.utils.ajax.post.ban(_arg, "m");
        }
    },
    {
        cmd: ["ms", "smute"],
        run: function(_arg, _cmd) {
            bcs.main.utils.ajax.post.ban(_arg, "s");
        }
    },
    {
        cmd: ["friend"],
        run: function(_arg, _cmd) {
            _arg = parseInt(_arg);
            if (_arg) {
                bcs.main.utils.ajax.post.friend(_arg);
            } else {
                bcs.main.addChat(
                    "<span class='bcs-ass'>"
                    +    "<a class='bcs-ass-unavailable'>Invalid ID</a>"
                    +"</span>");
            }
        }
    },
    {
        cmd: ["gif", "gifs", "g"],
        run: function(_arg, _cmd) {

            _arg = _arg.toString().trim();
            var _r = bcs.main.utils.ran();
            var _callback ="<ul class='bcs-gif'>Indexed .gif results for <a class='bcs-gif-keyword'>" + _arg + "</a>";
            var _n = 0;
            for (var i = 0, l = _gifs.length; i < l; i++) {
                if (!_arg) {  break;  }
                else {
                    for (var j = 0, k = _gifs[i].keywords.length; j < k; j++) {
                        if ((_arg.indexOf(_gifs[i].keywords[j]) != -1
                        ||  _gifs[i].keywords[j].indexOf(_arg) != -1)
                        &&  _n != i) {
                            _n = i;
                            _callback += "<li class='bcs-gif-item'>"
                                         +    "<details>"
                                         +        "<summary>"
                                         +            "<span class='bcs-gif-keywords'>Matched keyword "
                                         +            "<a class='bcs-gif-keyword'>" + _gifs[i].keywords[j] + "</a>"
                                         +        "</summary>"
                                         +    "</span>"
                                         +    "<a class='bcs-gif-link' href='" + _gifs[i].url + "' target='_blank'>"
                                         +        "<img class='bcs-gif-preview' src=" + _gifs[i].url + " />"
                                         +    "</a>"
                                         +    "<a class='bcs-gif-send'"
                                         +        "onclick='(function() {"
                                         +            "$(\"#chat-input-field\").val("
                                         +                "$(\"#chat-input-field\").val() + \"" + _gifs[i].url + "\""
                                         +            ");})();"
                                         +        "'"//
                                         +    ">Add to your message</a>"
                                         +"</li>";
                        }
                    }
                }
            }
            if (_callback.trim().indexOf("li") != -1) {
                bcs.main.addChat(_callback + "</ul>", "", "bcs-gif-frame");
                bcs.main.utils.rem(_r);
            } else {
                bcs.main.addChat(
                    "No indexed .gifs match <a class='bcs-gif-keyword'>" + _arg + "</a>",
                    "",
                    "bcs-gif-frame"
                );
            }
        }
    },
    {
        cmd: ["r"],
        run: function(_arg, _cmd) {
            $.ajax({
                type: "GET",
                contentType: "application/json",
                url: "https://plug.dj/_/rooms?limit=5",
                success: function(_data) {
                    var _c = [];
                    for (var i = 0, l = _data.data.length; i < l; i++) {
                        var _t = _data.data[i];
                        _c.push({
                            p: _t.population,
                            g: _t.guests,
                            t: (_t.population + _t.guests),
                            n: _t.name,
                            d: _t.nsfw ? " (NSFW) " : "",
                            s: _t.slug
                        });
                    }
                    console.log(_c);
                    for (var i = 0, l = _c.length; i < l; i++) {
                        if (_c.length > 1) {
                            (_c[0].t > _c[_c.length - 1].t) ? _c.pop() : _c.shift();
                        } else {
                            console.log(_c[0]);
                            break;
                        }
                    }
                    _c = _c[0];
                    bcs.main.addChat(
                        "<span>"
                        +    "Most populated room is <b>"
                        +        _c.n
                        +    "</b><br />"
                        +    "<a class='bcs-timestamp'>"
                        +        _c.t + " users (" + _c.p + " users and " + _c.g + " guests) <br />"
                        +        bcs.main.utils.time()
                        +        " | " + _c.d + "</a><a class='bcs-ass-link bcs-timestamp' href='https://plug.dj/" + _c.s + "' target='_blank'>https://plug.dj/" + _c.s + "</a>"
                        +"</span>", "bcs-mpop-log");
                },
                error: function(_data) {
                    console.log(_data);
                }
            });
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
            bcs.main.addChat("<a "
                            + "src='https://github.com/MatheusAvellar/BCS/blob/master/Commands.md' "
                            + "target='_blank'>Here you go!</a>");
        }
    }
    ]
};