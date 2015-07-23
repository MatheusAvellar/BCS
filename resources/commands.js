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
        run: function(_arg, _cmd) {
            bcs.c(_arg + " Both. http://i.imgur.com/py7q8V7.gif");
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
        cmd: ["ba"],
        run: function(_arg, _cmd) {
            bcs.c("Brand Ambassadors are volunteers who help moderate the website and test features. "
                + "Here's more about the BA project: http://plug.dj/ba");
        }
    },
    {
        cmd: ["admin"],
        run: function(_arg, _cmd) {
            bcs.c("Admins are the people that work for plug.dj. "
                + "They have a plug.dj logo next to their names in chat. "
                + "Here's the list of the current Admins: http://plug.dj/team/");
        }
    },
    {
        cmd: ["xp"],
        run: function(_arg, _cmd) {
            bcs.c("XP and PP are earned on ticks. "
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
            for (var i in API.getUsers()) {
                if (API.getUsers()[i].gRole < 3 && API.getUsers()[i].role < 1 && !_all
                 || API.getUsers()[i].gRole < 3) {
                     $.ajax({
                        type: "POST",
                        contentType: "application/json",
                        url: "https://plug.dj/_/bans/add",
                        data: '{"userID":' + API.getUsers()[i].id + ',"reason":1,"duration":"f"}'
                    }).done(function(msg) {
                        _console.log("@banall [" + JSON.stringify(msg) + "]");
                    });
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
            bcs.main.addChat("We're working on it!");
        }
    }
    ]
};