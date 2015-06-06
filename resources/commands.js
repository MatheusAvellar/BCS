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