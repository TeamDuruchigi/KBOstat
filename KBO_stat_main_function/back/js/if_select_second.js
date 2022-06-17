function if_select_second() {
    var strike_zone_reposition = document.getElementById('strike_zone').style;
    strike_zone_reposition.display = 'none';

    var selected_player = document.getElementById('select_players_second').value.split('_');
    var player_name = document.getElementById("player_name_second");
    player_name.innerHTML = "<span class='display-6'>" + player_data[selected_player[0]][0] + " " + player_data[selected_player[0]][1] + "번</span><br><p style='font-size:46px'><b>&nbsp&nbsp" + player_data[selected_player[0]][2] + "</b></p>";
    player_name.style.display = "block";

    var player_image = document.getElementById("player_image_second");
    player_image.src = player_data[selected_player[0]][3];
    player_image.alt = player_data[selected_player[0]][0] + " " + player_data[selected_player[0]][1] + "번 " + player_data[selected_player[0]][2];
    document.getElementById("player_image_second_div").style.display = "block";
    switch (player_data[selected_player[0]][0]) {
        case "SSG": {
            document.getElementById("player_image_second").style.width = '234px';
            document.getElementById("player_image_second").style.height = '300px';
            document.getElementById("player_image_second").style.position = 'relative';
            document.getElementById("player_image_second").style.left = '33px';
            document.getElementById("player_image_second").style.top = '0px';
            break;
        }
        case "KT": {
            document.getElementById("player_image_second").style.width = '300px';
            document.getElementById("player_image_second").style.height = '300px';
            document.getElementById("player_image_second").style.position = 'relative';
            document.getElementById("player_image").style.left = '0px';
            document.getElementById("player_image_second").style.top = '0px';
            break;
        }
        case "LG": {
            document.getElementById("player_image_second").style.width = '300px';
            document.getElementById("player_image_second").style.height = '225px';
            document.getElementById("player_image_second").style.position = 'relative';
            document.getElementById("player_image_second").style.left = '0px';
            document.getElementById("player_image_second").style.top = '37px';
            break;
        }
        case "NC": {
            document.getElementById("player_image_second").style.width = '300px';
            document.getElementById("player_image_second").style.height = '300px';
            document.getElementById("player_image_second").style.position = 'relative';
            document.getElementById("player_image_second").style.left = '0px';
            document.getElementById("player_image_second").style.top = '0px';
            break;
        }
        case "KIA": {
            document.getElementById("player_image_second").style.width = '300px';
            document.getElementById("player_image_second").style.height = '249px';
            document.getElementById("player_image_second").style.position = 'relative'
            document.getElementById("player_image_second").style.left = '0px';
            document.getElementById("player_image_second").style.top = '25px';
            break;
        }
        case "두산": {
            document.getElementById("player_image_second").style.width = '283px';
            document.getElementById("player_image_second").style.height = '300px';
            document.getElementById("player_image_second").style.position = 'relative';
            document.getElementById("player_image_second").style.left = '8px';
            document.getElementById("player_image_second").style.top = '0px';
            break;
        }
        case "롯데": {
            document.getElementById("player_image_second").style.width = '290px';
            document.getElementById("player_image_second").style.height = '300px';
            document.getElementById("player_image_second").style.position = 'relative';
            document.getElementById("player_image_second").style.left = '5px';
            document.getElementById("player_image_second").style.top = '0px';
            break;
        }
        case "삼성": {
            document.getElementById("player_image_second").style.width = '300px';
            document.getElementById("player_image_second").style.height = '300px';
            document.getElementById("player_image_second").style.position = 'relative';
            document.getElementById("player_image_second").style.left = '0px';
            document.getElementById("player_image_second").style.top = '0px';
            break;
        }
        case "키움": {
            document.getElementById("player_image_second").style.width = '300px';
            document.getElementById("player_image_second").style.height = '300px';
            document.getElementById("player_image_second").style.position = 'relative';
            document.getElementById("player_image_second").style.left = '0px';
            document.getElementById("player_image_second").style.top = '0px';
            break;
        }
        case "한화": {
            document.getElementById("player_image_second").style.width = '238px';
            document.getElementById("player_image_second").style.height = '300px';
            document.getElementById("player_image_second").style.position = 'relative';
            document.getElementById("player_image_second").style.left = '31px';
            document.getElementById("player_image_second").style.top = '0px';
            break;
        }
        default:
            break;
    }
    var position = player_data[selected_player[0]][4];
    switch (position) {
        case "1B": {
            position = "1루수";
            break;
        }
        case "2B": {
            position = "2루수";
            break;
        }
        case "3B": {
            position = "3루수";
            break;
        }
        case "LF": {
            position = "좌익수";
            break;
        }
        case "CF": {
            position = "중견수";
            break;
        }
        case "RF": {
            position = "우익수";
            break;
        }
        case "SS": {
            position = "유격수";
            break;
        }
        case "DH": {
            position = "지명타자";
            break;
        }
        case "P": {
            position = "투수";
            break;
        }
        case "C": {
            position = "포수";
            break;
        }
    }
    document.getElementById('player_profile_second').style.display = 'inline-block';
    // document.getElementById('player_stat_second').style.display = 'inline-block';


    document.getElementById("player_profile1_second").innerHTML = position;
    // document.getElementById("player_position").innerHTML = player_data[selected_player[0]][5];
    document.getElementById("player_profile2_second").innerHTML = player_data[selected_player[0]][12];
    document.getElementById("player_profile3_second").innerHTML = player_data[selected_player[0]][13];
    document.getElementById("player_profile4_second").innerHTML = player_data[selected_player[0]][14];
    document.getElementById("player_profile5_second").innerHTML = player_data[selected_player[0]][15];

    document.getElementById("player_stat").style.top = '270px';
    document.getElementById("player_stat").style.left = '740px';


    // if( player_data[selected_player[0]][5] == "타자")
    // {
    //     document.getElementById("name_of_stat1_second").innerHTML = "타율";
    //     document.getElementById("name_of_stat2_second").innerHTML = "도루";
    //     document.getElementById("name_of_stat3_second").innerHTML = "타점";
    //     document.getElementById("name_of_stat4_second").innerHTML = "홈런";
    //     document.getElementById("name_of_stat5_second").innerHTML = "안타";
    // }
    // else
    // {
    //     document.getElementById("name_of_stat1_second").innerHTML = "평균자책점";
    //     document.getElementById("name_of_stat2_second").innerHTML = "탈삼진";
    //     document.getElementById("name_of_stat3_second").innerHTML = "승";
    //     document.getElementById("name_of_stat4_second").innerHTML = "홀드";
    //     document.getElementById("name_of_stat5_second").innerHTML = "세이브";
    // }

    var player_stat_div = document.getElementById("player_stat");
    var player_stat_title = document.getElementById("player_stat_title");

    var player_stat1 = document.getElementById("player_stat1");
    var player_stat2 = document.getElementById("player_stat2");
    var player_stat3 = document.getElementById("player_stat3");
    var player_stat4 = document.getElementById("player_stat4");
    var player_stat5 = document.getElementById("player_stat5");

    var player_stat_name1 = document.getElementById("name_of_stat1");
    var player_stat_name2 = document.getElementById("name_of_stat2");
    var player_stat_name3 = document.getElementById("name_of_stat3");
    var player_stat_name4 = document.getElementById("name_of_stat4");
    var player_stat_name5 = document.getElementById("name_of_stat5");

    const regExp = /[가-힣]/g;
    if(regExp.test(player_stat1.innerHTML))
    {
        var instance_1 = player_stat1.innerHTML;
        var instance_2 = player_stat2.innerHTML;
        var instance_3 = player_stat3.innerHTML;
        var instance_4 = player_stat4.innerHTML;
        var instance_5 = player_stat5.innerHTML;

        player_stat1.innerHTML = player_stat_name1.innerHTML;
        player_stat2.innerHTML = player_stat_name2.innerHTML;
        player_stat3.innerHTML = player_stat_name3.innerHTML;
        player_stat4.innerHTML = player_stat_name4.innerHTML;
        player_stat5.innerHTML = player_stat_name5.innerHTML;

        player_stat_name1.innerHTML = instance_1;
        player_stat_name2.innerHTML = instance_2;
        player_stat_name3.innerHTML = instance_3;
        player_stat_name4.innerHTML = instance_4;
        player_stat_name5.innerHTML = instance_5;

        player_stat1.style.position = 'relative';
        player_stat2.style.position = 'relative';
        player_stat3.style.position = 'relative';
        player_stat4.style.position = 'relative';
        player_stat5.style.position = 'relative';
        player_stat_title.style.position = 'relative';

        player_stat1.style.textAlign = 'right';
        player_stat2.style.textAlign = 'right';
        player_stat3.style.textAlign = 'right';
        player_stat4.style.textAlign = 'right';
        player_stat5.style.textAlign = 'right';

        player_stat1.style.width = '70px';
        player_stat2.style.width = '70px';
        player_stat3.style.width = '70px';
        player_stat4.style.width = '70px';
        player_stat5.style.width = '70px';

        player_stat_name1.style.textAlign = 'center';
        player_stat_name2.style.textAlign = 'center';
        player_stat_name3.style.textAlign = 'center';
        player_stat_name4.style.textAlign = 'center';
        player_stat_name5.style.textAlign = 'center';

        document.getElementById("player_stat1").style.fontSize = '16px';
        document.getElementById("player_stat2").style.fontSize = '16px';
        document.getElementById("player_stat3").style.fontSize = '16px';
        document.getElementById("player_stat4").style.fontSize = '16px';
        document.getElementById("player_stat5").style.fontSize = '16px';

        document.getElementById("name_of_stat1").style.fontSize = '20px';
        document.getElementById("name_of_stat2").style.fontSize = '20px';
        document.getElementById("name_of_stat3").style.fontSize = '20px';
        document.getElementById("name_of_stat4").style.fontSize = '20px';
        document.getElementById("name_of_stat5").style.fontSize = '20px';

        // player_stat1.style.left = '-50px';
        // player_stat2.style.left = '-60px';
        // player_stat3.style.left = '-70px';
        // player_stat4.style.left = '-80px';
        // player_stat5.style.left = '-90px';
    }

    if(position == "투수")
    {
        player_stat_div.style.left = '655px';
        player_stat_title.style.left = '94px';

    }
    else
    {
        player_stat_div.style.left = '688px';
        player_stat_title.style.left = '64px';

    }

    document.getElementById("player_stat1_second").innerHTML = player_data[selected_player[0]][7];
    document.getElementById("player_stat2_second").innerHTML = player_data[selected_player[0]][8];
    document.getElementById("player_stat3_second").innerHTML = player_data[selected_player[0]][9];
    document.getElementById("player_stat4_second").innerHTML = player_data[selected_player[0]][10];
    document.getElementById("player_stat5_second").innerHTML = player_data[selected_player[0]][11];





};
