var BCS_MENU = 
'<div id="bcs-menu">'
+    '<i class="icon icon-star-white"></i>'
+    '<div class="menu">'
+        '<ul>'
+            '<li class="bcs">'
+                '<h1>BCS</h1>'
+                '<span class="bcs-version"></span>'
+            '</li>'
+            '<ul class="extend auto">'
+                '<div class="options-parent auto">'
+                    '<i class="icon icon-history-white"></i>'
+                    '<span class="loglist">Auto</span>'
+                '</div>'
+                '<li class="options autowoot options-child">'
+                    '<i class="icon icon-woot"></i>'
+                    '<span class="autowoot">AutoWoot</span>'
+                    '<div class="bcs-on"></div>'
+                    '<div class="bcs-off active"></div>'
+                '</li>'
+                '<li class="options autograb options-child">'
+                    '<i class="icon icon-grab"></i>'
+                    '<span class="autograb">AutoGrab</span>'
+                    '<div class="bcs-on"></div>'
+                    '<div class="bcs-off active"></div>'
+                '</li>'
+                '<li class="options automeh options-child">'
+                    '<i class="icon icon-meh"></i>'
+                    '<span class="automeh">AutoMeh</span>'
+                    '<div class="bcs-on"></div>'
+                    '<div class="bcs-off active"></div>'
+                '</li>'
+                '<li class="options autojoin options-child">'
+                    '<i class="icon icon-join-booth"></i>'
+                    '<span class="autojoin">AutoJoin</span>'
+                    '<div class="bcs-on"></div>'
+                    '<div class="bcs-off active"></div>'
+                '</li>'
+                '<li class="options autoleave options-child">'
+                    '<i class="icon icon-leave-waitlist"></i>'
+                    '<span class="autoleave">AutoLeave</span>'
+                    '<div class="bcs-on"></div>'
+                    '<div class="bcs-off active"></div>'
+                '</li>'
+            '</ul>'
+            '<ul class="extend log">'
+                '<div class="options-parent log">'
+                    '<i class="icon icon-event-calendar"></i>'
+                    '<span class="loglist">Logs</span>'
+                '</div>'
+                '<li class="options wootlog options-child">'
+                    '<i class="icon icon-woot"></i>'
+                    '<span class="wootlog">Woot log</span>'
+                    '<div class="bcs-on"></div>'
+                    '<div class="bcs-off active"></div>'
+                '</li>'
+                '<li class="options grablog options-child">'
+                    '<i class="icon icon-grab"></i>'
+                    '<span class="grablog">Grab log</span>'
+                    '<div class="bcs-on"></div>'
+                    '<div class="bcs-off active"></div>'
+                '</li>'
+                '<li class="options mehlog options-child">'
+                    '<i class="icon icon-meh"></i>'
+                    '<span class="mehlog">Meh log</span>'
+                    '<div class="bcs-on"></div>'
+                    '<div class="bcs-off active"></div>'
+                '</li>'
+                '<li class="options trafficlog options-child">'
+                    '<i class="icon icon-users-white"></i>'
+                    '<span class="trafficlog">Traffic log</span>'
+                    '<div class="bcs-on"></div>'
+                    '<div class="bcs-off active"></div>'
+                '</li>'
+            '</ul>'
+            '<li class="options djupdates">'
+                '<i class="icon icon-soundcloud-tracks small"></i>'
+                '<span class="djupdates">DJ updates</span>'
+                '<div class="bcs-on"></div>'
+                '<div class="bcs-off active"></div>'
+            '</li>'
+            '<li class="options afkmsg">'
+               '<i class="icon icon-mention"></i>'
+                '<span class="afkmsg">AFK msg</span>'
+                '<div class="bcs-on"></div>'
+                '<div class="bcs-off active"></div>'
+            '</li>'
+            '<li class="options unemojify">'
+               '<i class="icon icon-emoji-on"></i>'
+                '<span class="unemojify">Unemojify</span>'
+                '<div class="bcs-on"></div>'
+                '<div class="bcs-off active"></div>'
+            '</li>'
+            '<li class="options clearchat">'
+                '<i class="icon icon-delete"></i>'
+                '<span class="clearchat">Clear chat</span>'
+                '<div class="bcs-single"></div>'
+            '</li>'
+            '<li class="options lockdown">'
+                '<i class="icon icon-locked"></i>'
+                '<span class="lockdown">Lockdown</span>'
+                '<div class="bcs-on"></div>'
+                '<div class="bcs-off active"></div>'
+            '</li>'
+        '</ul>'
+        '<div class="arrow-down"></div>'
+    '</div>'
+'</div>';

function _toggleSetting(className) {
    if (!className) {
        _console.log("@toggleSetting - Error");
        return;
    }
    _console.log("@toggleSetting - " + className);
    if ($("li.options." + className + " div.bcs-on").hasClass("active")){
        $("li.options." + className + " div.bcs-on").removeClass("active");
        $("li.options." + className + " div.bcs-off").addClass("active");
        bcs.settings["" + className + ""] = false;
    } else {
        $("li.options." + className + " div.bcs-on").addClass("active");
        $("li.options." + className + " div.bcs-off").removeClass("active");
        bcs.settings["" + className + ""] = true;
    }
}

$("div#playlist-meta").append(BCS_MENU);
$("div#bcs-menu .menu ul li.bcs span.bcs-version").text(bcs.v.stage + bcs.v._().join("."));

$("div#bcs-menu .icon-star-white").on("click", function() {
    var menuElement = $("div#bcs-menu .menu");
    if (menuElement.css("display") == "none") {
        menuElement.show();
    } else {
        menuElement.hide();
    }
});

$("div.bcs-on, div.bcs-off").on("click", function(data) {
    var _parent = data.currentTarget.parentElement.innerText.toString().replace(' ', "").trim().toLowerCase();
    _toggleSetting(_parent);
    bcs.main.utils.settings.set();
});

$("div#bcs-menu .menu div.options-parent.log").on("click", function(data) {
    $("div#bcs-menu .menu ul.extend.auto").removeClass("open");
    $("div#bcs-menu .menu ul.extend.log").toggleClass("open");
});

$("div#bcs-menu .menu div.options-parent.auto").on("click", function(data) {
    $("div#bcs-menu .menu ul.extend.log").removeClass("open");
    $("div#bcs-menu .menu ul.extend.auto").toggleClass("open");
});

$("li.clearchat div.bcs-single").on("click", function(data) {
    bcs.plugCode.plugMessage(
        "Are you sure you want to clear the entire chat? This obviously cannot be undone."
+       "<br />"
+       "<h1>"
+           "<a class='bcs-clearchat' onclick='return bcs.main.utils.clearchat();'>Yes, delete it</a>"
+           "<a>&nbsp;</a>"
+       "</h1>");
});

/* Gets custom settings (if there are any) */
bcs.main.utils.settings.get();