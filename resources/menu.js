var BCS_MENU = 
'<div id="bcs-menu">'
+    '<i class="icon icon-star-white"></i>'
+    '<div class="menu">'
+        '<ul>'
+            '<li class="bcs">'
+                '<h1>BCS</h1>'
+                '<span class="bcs-version"></span>'
+            '</li>'
+            '<li class="options autowoot">'
+                '<i class="icon icon-woot-disabled"></i>'
+                '<span class="autowoot">AutoWoot</span>'
+                '<div class="bcs-on"></div>'
+                '<div class="bcs-off active"></div>'
+            '</li>'
+            '<li class="options grablog">'
+                '<i class="icon icon-grab-disabled"></i>'
+                '<span class="grablog">Grab log</span>'
+                '<div class="bcs-on"></div>'
+                '<div class="bcs-off active"></div>'
+            '</li>'
+            '<li class="options mehlog">'
+                '<i class="icon icon-meh-disabled"></i>'
+                '<span class="mehlog">Meh log</span>'
+                '<div class="bcs-on"></div>'
+                '<div class="bcs-off active"></div>'
+            '</li>'
+            '<li class="options autojoin">'
+                '<i class="icon icon-join-booth"></i>'
+                '<span class="autojoin">AutoJoin</span>'
+                '<div class="bcs-on"></div>'
+                '<div class="bcs-off active"></div>'
+            '</li>'
+            '<li class="options trafficlog">'
+                '<i class="icon icon-users-white"></i>'
+                '<span class="trafficlog">Traffic log</span>'
+                '<div class="bcs-on"></div>'
+                '<div class="bcs-off active"></div>'
+            '</li>'
+            '<li class="options djupdates">'
+                '<i class="icon icon-soundcloud-tracks small"></i>'
+                '<span class="djupdates">DJ updates</span>'
+                '<div class="bcs-on"></div>'
+                '<div class="bcs-off active"></div>'
+            '</li>'
+            '<li class="options afkmsg">'
+            '<i class="icon icon-mention"></i>'
+                '<span class="afkmsg">AFK msg</span>'
+                '<div class="bcs-on"></div>'             // To be implemented
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
        console.log("B");
        console.log(bcs.settings["" + className + ""]);
        bcs.settings["" + className + ""] = false;
        console.log(bcs.settings["" + className + ""]);
    } else {
        $("li.options." + className + " div.bcs-on").addClass("active");
        $("li.options." + className + " div.bcs-off").removeClass("active");
        console.log("A");
        console.log(bcs.settings["" + className + ""]);
        bcs.settings["" + className + ""] = true;
        console.log(bcs.settings["" + className + ""]);
    }
}

$("div#playlist-meta").append(BCS_MENU);

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
});