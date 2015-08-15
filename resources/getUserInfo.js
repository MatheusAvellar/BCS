function bcs_lookfor(id) {
    id = id.toString().trim().toLowerCase();
    if (!parseInt(id)) {
        bcs.main.addChat("<span class='bcs-ass'><a class='bcs-ass-unavailable'>Invalid ID</a></span>");
        return;
    }
    bcs.main.utils.ajax.get.staff();
    bcs.main.utils.ajax.get.friends();

    $.ajax({
        type: "GET",
        url: "https://plug.dj/_/users/" + id
    }).done(function(complete_data) {
        data = complete_data.data[0];

        var _i = {
            "Name": data.guest ? "404notFound" : data.username,
            "Slug": data.guest ? "404notFound" : "",
            "ID": id,
            "Level": data.guest ? "404notFound" : data.level,
            "Avatar": data.avatarID,
            "Badge": data.guest ? "404notFound" : "",
            "Language": data.guest ? "404notFound" : "",
            "Role": 0,
            "Global Role": data.guest ? "404notFound" : "",
            "Subscriber": data.guest ? "404notFound" : "",
            "Guest": "<a class='bcs-ass-keyword'>" + data.guest + "</a>",
            "Joined": data.guest ? "404notFound" : "",
            "Friend": data.guest ? "404notFound" : "",
            "Vote": data.guest ? "404notFound" : "",
            "WaitList Position": data.guest ? "404notFound" : "",
            "output": "<span class='bcs-ass bcs-ass-head bcs-ass-label'>Advanced Searching System (A.S.S.)</span><br /><br />"
        }

//BADGE
    if (!data.guest) {
        switch(data.badge) {
    //'UNBUYABLE' (-g)
            case "2015bday-g":    _i.Badge = "3rd Anniversary"; break;
            case "2014wbb-g":     _i.Badge = "Winter"; break;
            case "admin-g":       _i.Badge = "Admin"; break;
            case "bt-g":          _i.Badge = "Beta Tester"; break;
            case "ba-g":          _i.Badge = "Brand Ambassador"; break;
            case "dragon-g01":    _i.Badge = "Dragon"; break;
            case "dragon-g02":    _i.Badge = "OP 100$ Badge"; break;
            case "ea-g":          _i.Badge = "Early Adopter"; break;
            case "og-g":          _i.Badge = "Original Gangster"; break;
            case "plot-g":        _i.Badge = "Translator"; break;
            case "s20-g":         _i.Badge = "$20 Subscriber"; break;
            case "s50-g":         _i.Badge = "$50 Subscriber"; break;
            case "s100-g":        _i.Badge = "$100 Subscriber"; break;
            case "s200-g":        _i.Badge = "$200 Subscriber"; break;
            case "ss-g":          _i.Badge = "Plug SuperStar"; break;
            case "subyearly-g":   _i.Badge = "Yearly Subscriber"; break;
        //SETS
            case "2014hwset-g":   _i.Badge = "Halloween"; break;
            case "80sset-g":      _i.Badge = "80's"; break;
            case "beachset-g":    _i.Badge = "Beach"; break;
            case "countryset-g":  _i.Badge = "Country"; break;
            case "dinerset-g":    _i.Badge = "Diner"; break;
            case "hiphopset-g":   _i.Badge = "HipHop"; break;
            case "islandset-g":   _i.Badge = "Island"; break;
            case "raveset-g":     _i.Badge = "Rave"; break;
            case "robotset-g":    _i.Badge = "Robot"; break;
            case "rockset-g":     _i.Badge = "Rock"; break;
            case "warriorset-g":  _i.Badge = "Warrior"; break;
            case "zooset-g":      _i.Badge = "Zoo"; break;

    //'SUBSCRIBER' (-s)
            case "80sb-s01":      _i.Badge = "Exercise"; break;
            case "animals-s01":   _i.Badge = "Wolf"; break;
            case "animals-s02":   _i.Badge = "Cat"; break;
            case "animals-s03":   _i.Badge = "Boxer"; break;
            case "beachb-s01":    _i.Badge = "Hula Dancer"; break;
            case "beachb-s02":    _i.Badge = "Beach Chair"; break;
            case "beachb-s03":    _i.Badge = "Sand Castle"; break;
            case "beachb-s04":    _i.Badge = "Sexy Surfers"; break;
            case "beachb-s05":    _i.Badge = "Tropical Drink"; break;
            case "countryb-s01":  _i.Badge = "Cow Skull"; break;
            case "dinerb-s01":    _i.Badge = "Sandwich"; break;
            case "dinerb-s02":    _i.Badge = "Waffle"; break;
            case "dinerb-s03":    _i.Badge = "Waiter"; break;
            case "dinerb-s04":    _i.Badge = "Tomato Soup"; break;
            case "dinerb-s05":    _i.Badge = "Whipped Cream Dessert"; break;
            case "food-s01":      _i.Badge = "Pizza"; break;
            case "food-s02":      _i.Badge = "Ice Cream"; break;
            case "food-s03":      _i.Badge = "Doughnut"; break;
            case "food-s04":      _i.Badge = "Beef"; break;
            case "hiphopb-s01":   _i.Badge = "Swag Pigeon"; break;
            case "isle-s01":      _i.Badge = "Pink Pirate"; break;
            case "isle-s02":      _i.Badge = "Red Pirate"; break;
            case "isle-s03":      _i.Badge = "Black Pirate"; break;
            case "isle-s04":      _i.Badge = "Tiki"; break;
            case "isle-s05":      _i.Badge = "Beach"; break;
            case "isle-s06":      _i.Badge = "Toucan"; break;
            case "isle-s07":      _i.Badge = "Eyes"; break;
            case "isle-s08":      _i.Badge = "Glowing Palm"; break;
            case "isle-s09":      _i.Badge = "Fairy at Night"; break;
            case "nycb-s01":      _i.Badge = "Brooklyn Bridge"; break;
            case "nycb-s02":      _i.Badge = "[?]"; break;
            case "nycb-s03":      _i.Badge = "One World Trade Center"; break;
            case "nycb-s04":      _i.Badge = "Sugar Doughnuts"; break;
            case "nycb-s05":      _i.Badge = "'Red Carpet Rosie' Cocktail"; break;
            case "nycb-s06":      _i.Badge = "Prometheus Statue"; break;
            case "raveb-s01":     _i.Badge = "Record Player"; break;
            case "raveb-s02":     _i.Badge = "Musical Keyboard"; break;
            case "raveb-s03":     _i.Badge = "Compact Cassette"; break;
            case "raveb-s04":     _i.Badge = "Disco Ball"; break;
            case "robotb-s01":    _I.Badge = "Cyborg Woman"; break;
            case "seab-s01":      _i.Badge = "Striped Fish"; break;
            case "seab-s02":      _i.Badge = "Pink Fish"; break;
            case "seab-s03":      _i.Badge = "Divers"; break;
            case "seab-s04":      _i.Badge = "Fancy Fish"; break;
            case "seab-s05":      _i.Badge = "Dolphins"; break;
            case "seab-s06":      _i.Badge = "Seal"; break;
            case "style-s01":     _i.Badge = "Joystick"; break;
            case "style-s02":     _i.Badge = "Cap"; break;
            case "style-s03":     _i.Badge = "Funky Glasses"; break;
            case "style-s04":     _i.Badge = "Cowboy Hat"; break;
            case "style-s05":     _i.Badge = "Color Palette"; break;
            case "style-s06":     _i.Badge = "Astronaut"; break;
            case "tiki-s01":      _i.Badge = "Fat Tiki Mask"; break;
            case "tiki-s02":      _i.Badge = "Slim Tiki Mask"; break;
            case "warriorb-s01":  _i.Badge = "Archer"; break;
            case "winter-s01":    _i.Badge = "Snowflake"; break;
            case "winter-s02":    _i.Badge = "Penguin"; break;
            case "winter-s03":    _i.Badge = "Tree"; break;
            case "zoob-s01":      _i.Badge = "Koala"; break;

    //'EPIC' (-e)
            case "80sb-e01":      _i.Badge = "Arcade"; break;
            case "80sb-e02":      _i.Badge = "Pilates"; break;
            case "beachb-e01":    _i.Badge = "Tiki Surfer [gif]"; break;
            case "beachb-e02":    _i.Badge = "Fire Eater [gif]"; break;
            case "countryb-e01":  _i.Badge = "Snake"; break;
            case "countryb-e02":  _i.Badge = "Rodeo"; break;
            case "dinerb-e01":    _i.Badge = "Coke Bottles"; break;
            case "dinerb-e02":    _i.Badge = "Jukebox"; break;
            case "hiphopb-e01":   _i.Badge = "Breakdancers"; break;
            case "hiphopb-e02":   _i.Badge = "Breakdancer"; break;
            case "isle-e01":      _i.Badge = "Squid"; break;
            case "isle-e02":      _i.Badge = "Eye"; break;
            case "nycb-e01":      _i.Badge = "Empire State Building [gif]"; break;
            case "nycb-e02":      _i.Badge = "Broadway Show [gif]"; break;
            case "raveb-e01":     _i.Badge = "DJ Booth"; break;
            case "raveb-e02":     _i.Badge = "Rave"; break;
            case "robotb-e01":    _i.Badge = "Laser Robot"; break;
            case "robotb-e02":    _i.Badge = "Punching Robot"; break;
            case "seab-e01":      _i.Badge = "Whale"; break;
            case "seab-e02":      _i.Badge = "Shark"; break;
            case "seab-e03":      _i.Badge = "Rainbow Narwhal"; break;
            case "warriorb-e01":  _i.Badge = "Knight"; break;
            case "warriorb-e02":  _i.Badge = "Karate"; break;
            case "zoob-e01":      _i.Badge = "Lion"; break;
            case "zoob-e02":      _i.Badge = "Giraffes"; break;

    //'BUYABLE' ()
            case "80sb01":        _i.Badge = "Rubik's Cube"; break;
            case "animals01":     _i.Badge = "Rubber Chicken"; break;
            case "beachb01":      _i.Badge = "Tiki Token"; break;
            case "beachb02":      _i.Badge = "Sea Shell"; break;
            case "beachb03":      _i.Badge = "Beach Ball"; break;
            case "beachb04":      _i.Badge = "Flip Flops"; break;
            case "beachb05":      _i.Badge = "Tropical Flower"; break;
            case "countryb01":    _i.Badge = "Cactus"; break;
            case "dinerb01":      _i.Badge = "Mustard and Ketchup"; break;
            case "dinerb02":      _i.Badge = "Onion Rings"; break;
            case "dinerb03":      _i.Badge = "Pancakes"; break;
            case "dinerb04":      _i.Badge = "Bacon"; break;
            case "dinerb05":      _i.Badge = "Sauces"; break;
            case "dinerb06":      _i.Badge = "Beer"; break;
            case "food01":        _i.Badge = "Drink"; break;
            case "food02":        _i.Badge = "Sushi"; break;
            case "food03":        _i.Badge = "Hamburguer"; break;
            case "food04":        _i.Badge = "Fries"; break;
            case "food05":        _i.Badge = "Coffee"; break;
            case "hiphopb01":     _i.Badge = "Microphone"; break;
            case "isle01":        _i.Badge = "Sword"; break;
            case "isle02":        _i.Badge = "Wooden Sword"; break;
            case "isle03":        _i.Badge = "Vegetation"; break;
            case "isle04":        _i.Badge = "Coconut"; break;
            case "isle05":        _i.Badge = "Surfboard"; break;
            case "isle06":        _i.Badge = "Lizard"; break;
            case "isle07":        _i.Badge = "Not sure what this is"; break;
            case "isle08":        _i.Badge = "Leaves Creature"; break;
            case "isle09":        _i.Badge = "Mushroom"; break;
            case "isle10":        _i.Badge = "Waterfall"; break;
            case "nycb01":        _i.Badge = "Statue of Liberty"; break;
            case "nycb02":        _i.Badge = "Wall Street Bull"; break;
            case "nycb03":        _i.Badge = "Hot Dog Cart"; break;
            case "nycb04":        _i.Badge = "Baseball"; break;
            case "nycb05":        _i.Badge = "Cosmpolitan Cocktail"; break;
            case "raveb01":       _i.Badge = "Glowsticks"; break;
            case "raveb02":       _i.Badge = "Ferris Wheel"; break;
            case "raveb03":       _i.Badge = "Baloons"; break;
            case "robotb01":      _i.Badge = "Toy Robot"; break;
            case "style01":       _i.Badge = "Shoe"; break;
            case "style02":       _i.Badge = "Necklace"; break;
            case "seab01":        _i.Badge = "Clownfish"; break;
            case "seab02":        _i.Badge = "Moorish Idol Fish"; break;
            case "seab03":        _i.Badge = "Submarine"; break;
            case "seab04":        _i.Badge = "Orange Turtle"; break;
            case "seab05":        _i.Badge = "Green Turtle"; break;
            case "seab06":        _i.Badge = "Blue Turtle"; break;
            case "seab07":        _i.Badge = "Purple Turtle"; break;
            case "seab08":        _i.Badge = "Pufferfish"; break;
            case "seab09":        _i.Badge = "Octopus"; break;
            case "tiki01":        _i.Badge = "Green Tree"; break;
            case "tiki02":        _i.Badge = "Purple Tree"; break;
            case "warriorb01":    _i.Badge = "Helmet"; break;
            case "winter01":      _i.Badge = "Ski Boot"; break;
            case "winter02":      _i.Badge = "Snowman"; break;
            case "winter03":      _i.Badge = "Reindeer"; break;
            case "winter04":      _i.Badge = "Ski"; break;
            case "winter05":      _i.Badge = "Snowboard"; break;
            case "winter06":      _i.Badge = "Ice Skating"; break;
            case "winter07":      _i.Badge = "Hockey"; break;
            case "zoob01":        _i.Badge = "Rhinoceros"; break;

            default:
                if (data.badge == null) {
                    _i.Badge = "<a class='bcs-ass-keyword'>null</a>";
                }
                break;
        }
        if (data.badge != null) {
            _i.Badge += " (" + data.badge + ")";
        }


//LANGUAGE
        switch (data.language){
            case "bg":    _i.Language = "Bulgarian <img title='Bulgaria' src='https://i.imgur.com/vd7Q54y.png' height='13px'></img>"; break;
            case "cs":    _i.Language = "Czech <img title='Czech Republic' src='https://i.imgur.com/myeQpZg.png' height='13px'></img>"; break;
            case "da":    _i.Language = "Danish <img title='Denmark' src='https://i.imgur.com/G2zlI4m.png' height='13px'></img>"; break;
            case "de":    _i.Language = "German <img title='Germany' src='https://i.imgur.com/ET2npvp.png' height='13px'></img>"; break;
            case "en":    _i.Language = "English <img title='United States' src='https://i.imgur.com/IaxwAn7.png' height='13px'></img><img title='The United Kingdom' src='https://i.imgur.com/rknRtyL.png' height='13px'></img>"; break;
            case "es":    _i.Language = "Spanish <img title='Spain' src='https://i.imgur.com/mGFlRq3.png' height='13px'></img>"; break;
            case "fi":    _i.Language = "Finnish <img title='Finland' src='https://i.imgur.com/Hcu7KE7.png' height='13px'></img>"; break;
            case "fr":    _i.Language = "French <img title='France' src='https://i.imgur.com/nZAaWyV.png' height='13px'></img>"; break;
            case "hr":    _i.Language = "Croatian <img title='Croatia' src='https://i.imgur.com/5p7E9yn.png' height='13px'></img>"; break;
            case "it":    _i.Language = "Italian <img title='Italy' src='https://i.imgur.com/s2EY2Sw.png' height='13px'></img>"; break;
            case "ko":    _i.Language = "Korean <img title='North Korea' src='https://i.imgur.com/OTStsvw.png' height='13px'></img><img title='South Korea' src='https://i.imgur.com/LBOlA1K.png' height='13px'></img>"; break;
            case "lt":    _i.Language = "Lithuanian <img title='Lithuania' src='https://i.imgur.com/Axr4ba6.png' height='13px'></img>"; break;
            case "ms":    _i.Language = "Malay <img title='Malaysia' src='http://i.imgur.com/dbSl3H1.png' height='13px'></img>"; break;
            case "nl":    _i.Language = "Dutch <img title='Netherlands' src='http://i.imgur.com/soj7PT7.png' height='13px'></img>"; break;
            case "pi":    _i.Language = "Pirate <img title='THE KRAKEN' src='https://i.imgur.com/VpUKe8m.png' height='13px'></img>"; break;
            case "pl":    _i.Language = "Polish <img title='Poland' src='https://i.imgur.com/IOJdJly.png' height='13px'></img>"; break;
            case "pt":    _i.Language = "Portuguese <img title='Brazil' src='https://i.imgur.com/qg8RKSZ.png' height='13px'></img><img title='Portugal' src='https://i.imgur.com/OizJHOL.png' height='13px'></img>"; break;
            case "sk":    _i.Language = "Slovak <img title='Slovakia' src='https://i.imgur.com/YNTVgl3.png' height='13px'></img>"; break;
            case "sl":    _i.Language = "Slovenian <img title='Slovenia' src='https://i.imgur.com/OGVamtC.png' height='13px'></img>"; break;
            case "sr":    _i.Language = "Serbian <img title='Serbia' src='https://i.imgur.com/WOb4q8V.png' height='13px'></img>"; break;
            case "zh":    _i.Language = "Chinese <img title='China' src='https://i.imgur.com/VW4XYiF.png' height='16px'></img>"; break;
            case null:    _i.Language = "<a class='bcs-ass-keyword'>" + data.language + "</a>"; break;
            default:      _i.Language = "Unknown (" + data.language + ")"; break;
        }


//JOINED
        var _j = {
            "year": "",
            "month": "",
            "day": "",
            "time": {
                "intro": " at ",
                "main": "",
                "extra": ""
            }
        }

        // Example:
        //   Original: "2000-12-30 11:22:33.123456"
        //   Split:    ["2000", "12", ["30", "11:22:33.123456"]]
        _j.year = data.joined.split('-')[0];  // 2000
        _j.month = data.joined.split('-')[1]; // 12
        _j.day = data.joined.split('-')[2].split(' ')[0]; // 30
        _j.time.main = data.joined.split('-')[2].split(' ')[1].split('.')[0]; // 11:22:33
        _j.time.extra = '.' + data.joined.split('-')[2].split(' ')[1].split('.')[1]; // .123456

        switch (_j.month) {
            case "01":    _j.month = "Jan "; break;
            case "02":    _j.month = "Feb "; break;
            case "03":    _j.month = "Mar "; break;
            case "04":    _j.month = "Apr "; break;
            case "05":    _j.month = "May "; break;
            case "06":    _j.month = "Jun "; break;
            case "07":    _j.month = "Jul "; break;
            case "08":    _j.month = "Aug "; break;
            case "09":    _j.month = "Sep "; break;
            case "10":    _j.month = "Oct "; break;
            case "11":    _j.month = "Nov "; break;
            case "12":    _j.month = "Dec "; break;
            case null:    _j.month = "<a class='bcs-ass-keyword'>" + _j.month + "</a>"; break;
            default:      _j.month = "??? "; break;
        }

        switch (_j.day) {
            case "01":    _j.day += "st "; break;
            case "02":    _j.day += "nd "; break;
            case "03":    _j.day += "rd "; break;
            case null:    _j.month = "<a class='bcs-ass-keyword'>" + _j.day + "</a>"; break;
            default:      _j.day += "th "; break;
        }
        _i.Joined = _j.month + _j.day + _j.year + _j.time.intro + _j.time.main + "<a class='bcs-ass-small'>" + _j.time.extra + "</a>";


//GROLE
        if (data.gRole < 3) {
            _i["Global Role"] = "<a class='bcs-ass-regular'>Regular</a> (" + data.gRole + ")";
        } else if (data.gRole == 3) {
            _i["Global Role"] = "<i class='icon icon-chat-ambassador'></i><a class='bcs-ass-ambassador bcs-ass-spacing'>Brand Ambassador</a> (" + data.gRole + ")";
        } else if (data.gRole > 3) {
            _i["Global Role"] = "<i class='icon icon-chat-admin'></i><a class='bcs-ass-admin bcs-ass-spacing'>Admin</a> (" + data.gRole + ")";
        }


//SUBSCRIBER
        _i.Subscriber = "No (" + data.sub + ")";
        if (data.sub > 0) {
            _i.Subscriber = "<i class='icon icon-chat-subscriber'></i><a class='bcs-ass-subscriber bcs-ass-spacing'>Yes</a> (" + data.sub + ")";
        }


//VOTE
        _i.Vote = "<a class='bcs-ass-unavailable'>Not in the room</a>";
        var _u;
        for (var i = 0, l = API.getUsers().length; i < l; i++){
            if (API.getUsers()[i].username == data.username){
                _u = API.getUsers()[i];
                break;
            }
        }
        if (_u != undefined) {
            switch (_u.vote) {
                case 1:  _i.Vote = "<a class='bcs-ass-woot'>Woot!</a> (1)"; break;
                case -1: _i.Vote = "<a style='bcs-ass-meh'>Meh</a> (-1)"; break;
                default: _i.Vote = "<a class='bcs-ass-unavailable'>Didn't vote</a> (0)"; break;
            }
            if (_u.grab) {
                _i.Vote += " | <a class='bcs-ass-grab'>Grabbed!</a> (<a class='bcs-ass-keyword'>true</a>)";
            } else if (!_u.grab) {
                _i.Vote += " | <a class='bcs-ass-unavailable'>Didn't grab</a> (<a class='bcs-ass-keyword'>false</a>)";
            }

            if (API.getDJ() != undefined) {
                if (API.getDJ().username == data.username) {
                    _i.Vote = "<a class='bcs-ass-unavailable'>Is currently DJ'ing</a>";
                }
            } else {
                _i.Vote = "<a class='bcs-ass-unavailable'>No DJ</a>";
            }
        } else {
            _iVote = "<a class='bcs-ass-unavailable'>Not in the room</a>";
        }


//WAITLIST
        _i["WaitList Position"] = "<a class='bcs-ass-unavailable'>Not in the WaitList</a>";
        if (_u) {
            switch (API.getWaitListPosition(data.id)) {
                case -1:
                    if (API.getDJ() && API.getDJ().username == data.username) {
                        _i["WaitList Position"] = "<a class='bcs-ass-unavailable'>Is currently DJ'ing</a>";
                    }
                    break;
                default:
                    _i["WaitList Position"] = (API.getWaitListPosition(data.id) + 1) + "<a class='bcs-ass-unavailable bcs-ass-small'>/" + API.getWaitList().length + "</a>";
                    break;
            }
        } else {
            _i["WaitList Position"] = "<a class='bcs-ass-unavailable'>Not in the room</a>";
        }


//FRIEND
        _i.Friend = "<a class='bcs-ass-unavailable'>No</a> (<a class='bcs-ass-keyword'>false</a>)";
        if (_u && _u.id == API.getUser().id) {
            _i.Friend = "<a class='bcs-ass-unavailable'>You can't be friends with yourself</a> (<a class='bcs-ass-keyword'>false</a>)";
        } else {
            for (var i = 0, l = bcs.main.utils.ajax.get.aux.friendsList.length; i < l; i++) {
                if (data.username == bcs.main.utils.ajax.get.aux.friendsList[i].username) {
                    if (bcs.main.utils.ajax.get.aux.friendsList[i].room) {
                        if (bcs.main.utils.ajax.get.aux.friendsList[i].room.slug == "dashboard") {
                            var _tmp_friendRoom = "<a class='bcs-ass-unavailable'>Dashboard</a>";
                        } else {
                            var _tmp_friendRoom = "<a class='bcs-ass-link' href='https://plug.dj/" + bcs.main.utils.ajax.get.aux.friendsList[i].room.slug + "'>" + bcs.main.utils.ajax.get.aux.friendsList[i].room.name + "</a>";
                        }
                    }
                    _i.Friend = "Yes (<a class='bcs-ass-keyword'>true</a>)";
                    if (_tmp_friendRoom) {
                        _i.Friend += "<br /><span class='bcs-ass-label'>Room:</span> " + _tmp_friendRoom;
                    }
                    break;
                }
            }
        }


//PROFILE
    if (data.level >= 5) {
        _i.Slug = "<a class='bcs-ass-link' target='_blank' href='/@/" + data.slug + "'>" + data.slug + "</a>";
    } else {
        _i.Slug = "<a class='bcs-ass-unavailable' target='_blank' href='/@/" + data.slug + "'>" + data.slug + "</a> <a class='bcs-ass-unavailable'>[No profile yet]</a>";
    }
}


//ROLE
    for (var i = 0, l = bcs.main.utils.ajax.get.aux.staffList.length; i < l; i++) {
        if (id == bcs.main.utils.ajax.get.aux.staffList[i].id
         && bcs.main.utils.ajax.get.aux.staffList[i].role != 0) {
            _i.Role = bcs.main.utils.ajax.get.aux.staffList[i].role;
        }
    }
    switch (_i.Role) {
        case 5:    _i.Role = "<i class='icon icon-chat-thehost'></i><a class='bcs-ass-staff bcs-ass-spacing'>Host</a> (5)";    break;
        case 4:    _i.Role = "<i class='icon icon-chat-host'></i><a class='bcs-ass-staff bcs-ass-spacing'>CoHost</a> (4)";     break;
        case 3:    _i.Role = "<i class='icon icon-chat-manager'></i><a class='bcs-ass-staff bcs-ass-spacing'>Manager</a> (3)"; break;
        case 2:    _i.Role = "<i class='icon icon-chat-bouncer'></i><a class='bcs-ass-staff bcs-ass-spacing'>Bouncer</a> (2)"; break;
        case 1:    _i.Role = "<i class='icon icon-chat-dj'></i><a class='bcs-ass-staff bcs-ass-spacing'>RDJ</a> (1)";          break;
        default:   _i.Role = "<a class='bcs-ass-regular'>Regular</a> (" + _i.Role + ")";                                                     break;
    }

    for (var i in _i) {
        if (i != "output" && _i[i] != "404notFound") {
            _i[i] = "<span class='bcs-ass'>" + _i[i] + "</span>";
            _i.output += "<span class='bcs-ass bcs-ass-label'>" + i + ": </span>" + _i[i] + "<br />";
        }
    }

    var _scroll = $("#chat-messages")[0].scrollTop > $("#chat-messages")[0].scrollHeight - $("#chat-messages").height() - 28;
    bcs.main.addChat(_i.output, "", "bcs-ass-frame");
    if (_scroll) {
        $("#chat-messages")[0].scrollTop = $("#chat-messages")[0].scrollHeight;
    }
    });
}