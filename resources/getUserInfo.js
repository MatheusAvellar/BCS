function intersitial(id,isityou){
    var idf = id;
    var isYou = isityou;
    var rooms = "";
    $.ajax({
        type: 'GET',
        url: 'https://plug.dj/_/rooms?q=' + id + '&page=1&limit=50'
    }).done(function(room) {
        rooms = room.data;
        lookfor(idf, isYou, rooms);
    });
}

function lookfor(id, isityou, rooms){
    $.ajax({
        type: 'GET',
        url: 'https://plug.dj/_/users/' + id
    }).done(function(user) {
        data = user.data[0];

    if (data.username == null){
        __bcs.primary.addChat("<a class='bcs-user-info-nonexistent'>[User has not updated yet!]</a>");
    }else{

//BADGE
        var bb = "";
        switch(data.badge){
    //'UNBUYABLE' (-g)
            case "2015bday-g":    bb = "3rd Anniversary"; break;
            case "2014wbb-g":     bb = "Winter"; break;
            case "admin-g":       bb = "Admin"; break;
            case "bt-g":          bb = "Beta Tester"; break;
            case "ba-g":          bb = "Brand Ambassador"; break;
            case "dragon-g01":    bb = "Dragon"; break;
            case "dragon-g02":    bb = "OP 100$ Badge"; break;
            case "ea-g":          bb = "Early Adopter"; break;
            case "og-g":          bb = "Original Gangster"; break;
            case "plot-g":        bb = "Translator"; break;
            case "s20-g":         bb = "$20 Subscriber"; break;
            case "s50-g":         bb = "$50 Subscriber"; break;
            case "s100-g":        bb = "$100 Subscriber"; break;
            case "s200-g":        bb = "$200 Subscriber"; break;
            case "ss-g":          bb = "Plug SuperStar"; break;
            case "subyearly-g":   bb = "Yearly Subscriber"; break;
        //SETS
            case "2014hwset-g":   bb = "Halloween"; break;
            case "80sset-g":      bb = "80's"; break;
            case "countryset-g":  bb = "Country"; break;
            case "hiphopset-g":   bb = "HipHop"; break;
            case "islandset-g":   bb = "Island"; break;
            case "raveset-g":     bb = "Rave"; break;
            case "robotset-g":    bb = "Robot"; break;
            case "rockset-g":     bb = "Rock"; break;
            case "warriorset-g":  bb = "Warrior"; break;
            case "zooset-g":      bb = "Zoo"; break;

    //'SUBSCRIBER' (-s)
            case "animals-s01":   bb = "Wolf"; break;
            case "animals-s02":   bb = "Cat"; break;
            case "animals-s03":   bb = "Chicken"; break;
            case "food-s01":      bb = "Pizza"; break;
            case "food-s02":      bb = "Ice Cream"; break;
            case "food-s03":      bb = "Donut"; break;
            case "food-s04":      bb = "Beef"; break;
            case "isle-s01":      bb = "Pink Pirate"; break;
            case "isle-s02":      bb = "Red Pirate"; break;
            case "isle-s03":      bb = "Black Pirate"; break;
            case "isle-s04":      bb = "Tiki"; break;
            case "isle-s05":      bb = "Beach"; break;
            case "isle-s06":      bb = "Toucan"; break;
            case "isle-s07":      bb = "Eyes"; break;
            case "isle-s08":      bb = "Glowing Palm"; break;
            case "music-s01":     bb = "Record Player"; break;
            case "music-s02":     bb = "Musical Keyboard"; break;
            case "music-s03":     bb = "Compact Cassette"; break;
            case "music-s04":     bb = "Disco Ball"; break;
            case "seab-s01":      bb = "Striped Fish"; break;
            case "seab-s02":      bb = "Pink Fish"; break;
            case "seab-s03":      bb = "Divers"; break;
            case "seab-s04":      bb = "Fancy Fish"; break;
            case "seab-s05":      bb = "Dolphins"; break;
            case "style-s01":     bb = "Joystick"; break;
            case "style-s02":     bb = "Cap"; break;
            case "style-s03":     bb = "Funky Glasses"; break;
            case "style-s04":     bb = "Cowboy Hat"; break;
            case "style-s05":     bb = "Color Palette"; break;
            case "style-s06":     bb = "Astronaut"; break;
            case "tiki-s01":      bb = "Fat Tiki Mask"; break;
            case "tiki-s02":      bb = "Slim Tiki Mask"; break;
            case "winter-s01":    bb = "Snowflake"; break;
            case "winter-s02":    bb = "Penguin"; break;
            case "winter-s03":    bb = "Tree"; break;

    //'EPIC' (-e)
            case "isle-e01":      bb = "Squid"; break;
            case "isle-e02":      bb = "Eye"; break;
            case "seab-e01":      bb = "Whale"; break;
            case "seab-e02":      bb = "Shark"; break;
            case "seab-e03":      bb = "Rainbow Narwhal"; break;

    //'BUYABLE' ()
            case "animals01":     bb = "Boxer"; break;
            case "food01":        bb = "Drink"; break;
            case "food02":        bb = "Sushi"; break;
            case "food03":        bb = "Hamburguer"; break;
            case "food04":        bb = "Fries"; break;
            case "food05":        bb = "Coffee"; break;
            case "isle01":        bb = "Sword"; break;
            case "isle02":        bb = "Wooden Sword"; break;
            case "isle03":        bb = "Vegetation"; break;
            case "isle04":        bb = "Coconut"; break;
            case "isle05":        bb = "Surfboard"; break;
            case "isle06":        bb = "Lizard"; break;
            case "isle07":        bb = "Not sure what this is"; break;
            case "isle08":        bb = "Leaves Creature"; break;
            case "isle09":        bb = "Mushroom"; break;
            case "isle10":        bb = "Waterfall"; break;
            case "music01":       bb = "Glowsticks"; break;
            case "music02":       bb = "Ferris Wheel"; break;
            case "music03":       bb = "Baloons"; break;
            case "style01":       bb = "Shoe"; break;
            case "style02":       bb = "Necklace"; break;
            case "seab01":        bb = "Clownfish"; break;
            case "seab02":        bb = "Moorish Idol Fish"; break;
            case "seab03":        bb = "Submarine"; break;
            case "seab04":        bb = "Orange Turtle"; break;
            case "seab05":        bb = "Green Turtle"; break;
            case "seab06":        bb = "Blue Turtle"; break;
            case "seab07":        bb = "Purple Turtle"; break;
            case "seab08":        bb = "Pufferfish"; break;
            case "seab09":        bb = "Octopus"; break;
            case "tiki01":        bb = "Green Tree"; break;
            case "tiki02":        bb = "Purple Tree"; break;
            case "winter01":      bb = "Ski Boot"; break;
            case "winter02":      bb = "Snowman"; break;
            case "winter03":      bb = "Reindeer"; break;
            case "winter04":      bb = "Ski"; break;
            case "winter05":      bb = "Snowboard"; break;
            case "winter06":      bb = "Ice Skating"; break;
            case "winter07":      bb = "Hockey"; break;

            default:
                if (data.badge == null){  bb = "None (<a style='color:#b8e0ff; font-style: oblique;'>null</a>)";  }
                break;
        }
        if (data.badge != null){  bb += " (" + data.badge + ")";  }

//LANGUAGE
        switch (data.language){
            case "bg":    var lan = "Bulgarian <img title='Bulgaria' src='https://i.imgur.com/vd7Q54y.png' height='13px'></img>"; break;
            case "cs":    var lan = "Czech <img title='Czech Republic' src='https://i.imgur.com/myeQpZg.png' height='13px'></img>"; break;
            case "da":    var lan = "Danish <img title='Denmark' src='https://i.imgur.com/G2zlI4m.png' height='13px'></img>"; break;
            case "de":    var lan = "German <img title='Germany' src='https://i.imgur.com/ET2npvp.png' height='13px'></img>"; break;
            case "en":    var lan = "English <img title='United States' src='https://i.imgur.com/IaxwAn7.png' height='13px'></img><img title='The United Kingdom' src='https://i.imgur.com/rknRtyL.png' height='13px'></img>"; break;
            case "es":    var lan = "Spanish <img title='Spain' src='https://i.imgur.com/mGFlRq3.png' height='13px'></img>"; break;
            case "fi":    var lan = "Finnish <img title='Finland' src='https://i.imgur.com/Hcu7KE7.png' height='13px'></img>"; break;
            case "fr":    var lan = "French <img title='France' src='https://i.imgur.com/nZAaWyV.png' height='13px'></img>"; break;
            case "hr":    var lan = "Croatian <img title='Croatia' src='https://i.imgur.com/5p7E9yn.png' height='13px'></img>"; break;
            case "it":    var lan = "Italian <img title='Italy' src='https://i.imgur.com/s2EY2Sw.png' height='13px'></img>"; break;
            case "ko":    var lan = "Korean <img title='North Korea' src='https://i.imgur.com/OTStsvw.png' height='13px'></img><img title='South Korea' src='https://i.imgur.com/LBOlA1K.png' height='13px'></img>"; break;
            case "lt":    var lan = "Lithuanian <img title='Lithuania' src='https://i.imgur.com/Axr4ba6.png' height='13px'></img>"; break;
            case "ms":    var lan = "Malay <img title='Malaysia' src='http://i.imgur.com/dbSl3H1.png' height='13px'></img>"; break;
            case "nl":    var lan = "Dutch <img title='Netherlands' src='http://i.imgur.com/soj7PT7.png' height='13px'></img>"; break;
            case "pi":    var lan = "Pirate <img title='THE KRAKEN' src='https://i.imgur.com/VpUKe8m.png' height='13px'></img>"; break;
            case "pl":    var lan = "Polish <img title='Poland' src='https://i.imgur.com/IOJdJly.png' height='13px'></img>"; break;
            case "pt":    var lan = "Portuguese <img title='Brazil' src='https://i.imgur.com/qg8RKSZ.png' height='13px'></img><img title='Portugal' src='https://i.imgur.com/OizJHOL.png' height='13px'></img>"; break;
            case "sk":    var lan = "Slovak <img title='Slovakia' src='https://i.imgur.com/YNTVgl3.png' height='13px'></img>"; break;
            case "sl":    var lan = "Slovenian <img title='Slovenia' src='https://i.imgur.com/OGVamtC.png' height='13px'></img>"; break;
            case "sr":    var lan = "Serbian <img title='Serbia' src='https://i.imgur.com/WOb4q8V.png' height='13px'></img>"; break;
            case "zh":    var lan = "Chinese <img title='China' src='https://i.imgur.com/VW4XYiF.png' height='16px'></img>"; break;
            default:      var lan = "Unknown (" + data.language + ")"; break;
        }

//JOINED
        var jin = data.joined.split('-');
        var lk = jin[2].split(' ');
        var lj = lk[1].split('.');
        switch (jin[1]){
            case "01":    var mnt = "Jan"; break;
            case "02":    var mnt = "Feb"; break;
            case "03":    var mnt = "Mar"; break;
            case "04":    var mnt = "Apr"; break;
            case "05":    var mnt = "May"; break;
            case "06":    var mnt = "Jun"; break;
            case "07":    var mnt = "Jul"; break;
            case "08":    var mnt = "Aug"; break;
            case "09":    var mnt = "Sep"; break;
            case "10":    var mnt = "Oct"; break;
            case "11":    var mnt = "Nov"; break;
            case "12":    var mnt = "Dec"; break;
            default:      var mnt = "???";
        }
        switch (lk[0]){
            case "01":    var day = "st"; break;
            case "02":    var day = "nd"; break;
            case "03":    var day = "rd"; break;
            default:    var day = "th";
        }
        var jnd = mnt + " " + lk[0] + day +  " " + jin[0] + " at " + lj[0];

//GROLE
        if (data.gRole < 3){var g = "<a style='color:#777f92;'>Regular</a> (" + data.gRole + ")";};
        if (data.gRole == 3){var g = "<a style='color:#89be6c;'>Brand Ambassador</a> (" + data.gRole + ") <i class='icon icon-chat-ambassador'></i>";};
        if (data.gRole > 3){var g = "<a style='color:#42a5dc;'>Admin</a> (" + data.gRole + ") <i class='icon icon-chat-admin'></i>";};

//ROLE
        var userLR = 0;
        var lr = "<a style='color:#777f92;'>Regular</a> (0)";
        for (var i = 0; i < bcs.staffList.length; i++){
            if (data.username == bcs.staffList[i].username){
                userLR = bcs.staffList[i].role;
            }
        }
        if (userLR == 1){
            lr = "<a style='color:#ac76ff;'>RDJ</a> (1) <i class='icon icon-chat-dj'></i>";
        }else if (userLR == 2){
            lr = "<a style='color:#ac76ff;'>Bouncer</a> (2) <i class='icon icon-chat-bouncer'></i>";
        }else if (userLR == 3){
            lr = "<a style='color:#ac76ff;'>Manager</a> (3) <i class='icon icon-chat-manager'></i>";
        }else if (userLR == 4){
            lr = "<a style='color:#ac76ff;'>Co-Host</a> (4) <i class='icon icon-chat-host'></i>";
        }else if (userLR == 5){
            lr = "<a style='color:#ac76ff;'>Host</a> (5) <i class='icon icon-chat-thehost'></i>";
        }

//SUBSCRIBER
        var subbed = "No (" + data.sub + ")";
        if (data.sub > 0){subbed = "<a class='bcs-user-info-sub'>Yes</a> (" + data.sub + ") <i class='icon icon-chat-subscriber'></i>";}

//VOTE
        var userInfo;
        var votestats = "<a style='color:#646b7e;'>Not in the room</a>";
        var grabstats = "";
        var votestate;
        var grabstate;
        for (var i = 0; i < API.getUsers().length; i++){
            if (API.getUsers()[i].username == data.username){
                votestate = API.getUsers()[i].vote;
                grabstate = API.getUsers()[i].grab;
                userInfo = API.getUsers()[i];
                break;
            }
        }
        if (votestate == 1){votestats = "<a style='color:#90ad2f;'>Woot!</a> (1) "}
        else if (votestate == 0){votestats = "<a style='color:#646b7e;'>Didn't vote</a> (0) "}
        else if (votestate == -1){votestats = "<a style='color:#c42e3b;'>Meh</a> (-1) "}
        if (grabstate === true){grabstats = "| <a style='color:#aa74ff;'>Grabbed!</a> (<em>true</em>)"}
        else if (grabstate === false){grabstats = " <a style='color:#646b7e;'>| Didn't grab</a> (<em>false</em>)"}

        if (API.getDJ() != undefined){
            if (API.getDJ().username == data.username){
                votestats = "<a style='color:#646b7e;'>Is currently DJ'ing</a>";
                grabstats = "";
            }
        }else{
            votestats = "<a style='color:#646b7e;'>No DJ</a>";
            grabstats = "";
        }

//WAITLIST
        var posstats = "<a style='color:#646b7e;'>Not in the WaitList</a>";
        var wlpos = API.getWaitListPosition(data.id);
        if (wlpos != -1){posstats = wlpos + 1 + "/" + API.getWaitList().length;}
        if (votestats == "<a style='color:#646b7e;'>Not in the room</a>"){posstats = votestats;}
        if (votestats == "<a style='color:#646b7e;'>Is currently DJ'ing</a>"){posstats = votestats;}

//FRIEND
        var friendroom = "<a class='bcs-user-info-unavailable'>Offline</a>";
        var isFriend = "No (<em>false</em>)";
        if (isityou) {  isFriend = "<a style='color:#646b7e;'>You can't be friends with yourself</a> (<em>false</em>)";  }
        else {
            for (var i = 0; i < bcs.friendsList.length; i++){
                if (data.username == bcs.friendsList[i].username){
                    if (typeof bcs.friendsList[i].room != "undefined"){
                        if (typeof bcs.friendsList[i].room.name == "undefined"){
                            friendroom = "<a class='bcs-user-info-unavailable'>Dashboard</a>";
                        }else{
                            friendroom = "<a href='https://plug.dj/" + bcs.friendsList[i].room.slug + "' style='color:#aec9ea;'>" + bcs.friendsList[i].room.name + "</a>";
                        }
                    }
                    isFriend = "<a class='bcs-user-info-isFriend'>Yes</a> (<em>true</em>)<br />\
                        <a class='bcs-user-info-main'>Room:</a> " + friendroom;
                    break;
                }
            }
        }

//PROFILE
        var hasProfile = "<a style='color:#eaaeae;'>[No profile yet]</a>";
        var profileColor = "#eaaeae";
        if (data.level >= 5){
            hasProfile = "";
            profileColor = "#aec9ea";
        }

//ROOMS
        var roomCount = 0;
        var roomNames = "";
        if (rooms != "" && rooms.length != 0){
            for (var i = 0; i < rooms.length; i++){
                if (rooms[i].host == data.username){
                    var roomDJ = "";
                    var roomPopulation = "";
                    var roomHasDJ = "";
                    roomCount++;
                    if (rooms[i].dj != ""){roomDJ = " title='[Current DJ: " + rooms[i].dj + "]&#013;[Playing: " + rooms[i].media + "]'"; roomHasDJ = " (has DJ)"}
                    if (rooms[i].population != 1){roomPopulation = "(" + rooms[i].population + " users)" + roomHasDJ;}
                    else{roomPopulation = "(" + rooms[i].population + " user)" + roomHasDJ;}
                    roomNames += "<li>\
    <a style='color: #b8e0ff;' href='/" + rooms[i].slug + "' target='_blank'" + roomDJ + ">" + rooms[i].name + "</a>\
    <ul><li> /" + rooms[i].slug + " " + roomPopulation + "</li></ul>";
                }
            }
        }
        var roomTotal = "No rooms";
        if (roomCount != 0 && roomNames != ""){roomTotal = "(" + roomCount + ") " + roomNames;}

        __bcs.primary.addChat("<br />\
        <a class='bcs-user-info-main'>Name:</a> " + data.username + "<br />\
        <a class='bcs-user-info-main'>Slug:</a> <a style='color: " + profileColor + ";' href='/@/" + data.slug + "' target='_blank'>" + data.slug + "</a> " + hasProfile + "<br />\
        <a class='bcs-user-info-main'>ID:</a> " + data.id + "<br />\
        <a class='bcs-user-info-main'>Level:</a> " + data.level + "<br />\
        <a class='bcs-user-info-main'>Avatar:</a> " + data.avatarID + "<br />\
        <a class='bcs-user-info-main'>Badge:</a> " + bb + "<br />\
        <a class='bcs-user-info-main'>Language:</a> " + lan + "<br />\
        <a class='bcs-user-info-main'>Role:</a> " + lr + "<br />\
        <a class='bcs-user-info-main'>Global Role:</a> " + g + "<br />\
        <a class='bcs-user-info-main'>Subscriber:</a> " + subbed + "<br />\
        <a class='bcs-user-info-main'>Joined:</a> " + jnd + "<br />\
        <a class='bcs-user-info-main'>Hosts:</a> " + roomTotal + "<br />\
        <a class='bcs-user-info-main'>Friend:</a> " + isFriend + "<br />\
        <a class='bcs-user-info-main'>Vote:</a> " + votestats + grabstats + "<br />\
        <a class='bcs-user-info-main'>WaitList Position:</a> " + posstats + "<br />","#CCCCCC",false,false,true);
        }
    });
}