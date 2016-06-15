// Legacy plug.dj footer & chat by Matheus Avellar
// Independent script

const legacyCSS = "#footer-user .info .points,div#footer-user .info .points{right:25px}.isActive{display:block!important}.isNotActive{display:none!important}.legacy-percentage{font-size:10px;display:block;margin-left:50px;margin-top:-1px;position:absolute!important}.legacy-empty{height:16px}#footer-user{cursor:pointer}#footer-user .bar .value,#footer-user .played,#footer-user .profile,#footer-user .settings,#footer-user .store{display:none}#footer-user .info .meta .bar{width:105px}#footer-user .inventory .image .thumb{border:2px solid #89be6c}#footer-user .buttons .button{top:-100%;left:65px;background:#282c35;display:none;text-align:left}#footer-user .buttons .inventory{top:0;left:0}#footer-user .buttons .button.inventory:hover,#footer-user .buttons .inventory{display:block;background:#282c35;-webkit-box-shadow:inset 1px 0 0 0 #0a0a0a;-moz-box-shadow:inset 1px 0 0 0 #0a0a0a;-o-box-shadow:inset 1px 0 0 0 #0a0a0a;-ms-box-shadow:inset 1px 0 0 0 #0a0a0a;box-shadow:inset 1px 0 0 0 #0a0a0a}#footer-user .buttons .button span{margin-left:20%}#footer-user .buttons .badge,#footer-user .buttons .profile,#footer-user .buttons .settings,#footer-user .buttons .store{width:82%;top:-265px;background:#1c1f25}#footer-user .buttons .badge .bdg,#footer-user .buttons .profile .icon,#footer-user .buttons .settings .icon,#footer-user .buttons .store .icon{left:12px;position:absolute}#footer-user .buttons .button.store:hover{background:#323742}#footer-user .info{top:1px;left:19%;width:300px;background:#282c35;display:block}#footer-user .info.open{background:#1c1f25}#footer-user .back{z-index:1}.badge-box{display:none}#chat .msg{padding:5px 8px 6px 10px}#chat .emote,#chat .log,#chat .mention,#chat .message,#chat .moderation,#chat .promo,#chat .system,#chat .user-action,#chat .welcome{min-height:0}#chat .from,#chat .text{display:inline}#chat .from{margin-right:5px}div#footer-user .info .meta .bar{width:105px}";

var _legacy = {
    chat: null,
    plugObj: require.s.contexts._.defined,
    splitChat: function() {
        _legacy.chat.chatView.lastType = null;
    },
    init: function() {
        _legacy.footer.init();
        _legacy.footer.percentage();

        $.each(_legacy.plugObj, function(name, obj){
            if (!obj) return;

            _legacy.chat = (obj.chatView ? obj : _legacy.chat);
            if (_legacy.chat) return false;
        });

        API.on(API.CHAT, _legacy.splitChat);
        API.on(API.ADVANCE, _legacy.footer.percentage);

        $("head").append("<style id='legacyCSS' type='text/css'>" + legacyCSS + "</style>");
    },
    footer: {
        toggle: function(hide) {
            var buttons =
                $("#footer-user .badge,"
                + "#footer-user .store,"
                + "#footer-user .profile,"
                + "#footer-user .settings");

            if (hide || $("#footer-user .badge").css("display") !== "none") {
                buttons.hide();
                $("#footer-user .info").removeClass("open");
            } else {
                buttons.show();
                $("#footer-user .info").addClass("open");
            }
        },
        init: function() {
            $("#footer-user .bar").mouseenter(function() {
                $("#footer-user .legacy-percentage")
                    .removeClass("isActive")
                    .addClass("isNotActive");
                $("#footer-user .bar .value")
                    .addClass("isActive")
                    .removeClass("isNotActive");
            });
            $("#footer-user .bar").mouseleave(function() {
                $("#footer-user .legacy-percentage")
                    .addClass("isActive")
                    .removeClass("isNotActive");
                $("#footer-user .bar .value")
                    .removeClass("isActive")
                    .addClass("isNotActive");
            });
            $("#footer-user .info .meta .level .label").text("Lv.");

            $("#footer-user .button").hover(function() {
                $("#tooltip").remove();
            });
            $("#footer-user .badge").append("<div class='legacy-empty'></div><span>My Badges</span>");
            $("#footer-user .store").append("<div class='legacy-empty'></div><span>Shop</span>");
            $("#footer-user .profile").append("<div class='legacy-empty'></div><span>My Profile</span>");
            $("#footer-user .settings").append("<div class='legacy-empty'></div><span>Settings</span>");
            $("#footer-user .info").on("click", function() {  _legacy.footer.toggle();  });
            $("#footer-user .button").on("click", function() {  _legacy.footer.toggle(!0);  });
            $("#app").on("click", function(e) {
                if ($(e.target).closest("#footer-user .info").length === 0) _legacy.footer.toggle(!0);

                let userRollover = ($("#user-rollover") && $("#user-rollover").css("top")) ? ~~$("#user-rollover").css("top").split("px").join("") : null;
                if (userRollover && userRollover < 0) {
                    $("#user-rollover").css({ "top": "0" });
                }
            });
        },
        percentage: function() {
            $("div#footer-user .legacy-percentage").remove();

            let _width = $("div#footer-user .progress").attr("style");
            let _percentage = _width ? _width.substring(6, _width.indexOf('%') + 1).trim() : null;

            if (_percentage) {
                $("div#footer-user .bar").append(
                    "<div class='legacy-percentage'>"
                    +   _percentage
                    +"</div>");
            }
        }
    }
};

_legacy.init();
