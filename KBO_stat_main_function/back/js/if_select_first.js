function if_select_first(){
    var selected_player = document.getElementById('select_players_first').value.split('_');
    document.getElementById("player_name").innerHTML = "<span class='display-6'>" + player_data[selected_player[0]][0] + " " + player_data[selected_player[0]][1] + "번</span><br><p style='font-size:46px'><b>&nbsp&nbsp" + player_data[selected_player[0]][2] + "</b></p>";
    document.getElementById("player_image").src = player_data[selected_player[0]][3];
    document.getElementById("player_image").style.display = 'block';
    document.getElementById("radar_stat").style.display = 'block';
    switch (player_data[selected_player[0]][0])
    {
        case "SSG":
            {
                document.getElementById("player_image").style.width = '234px';
                document.getElementById("player_image").style.height = '300px';
                document.getElementById("player_image").style.position = 'relative';
                document.getElementById("player_image").style.left = '33px';
                document.getElementById("player_image").style.top = '0px';
                break;
            }
        case "KT":
            {
                document.getElementById("player_image").style.width = '300px';
                document.getElementById("player_image").style.height = '300px';
                document.getElementById("player_image").style.position = 'relative';
                // document.getElementById("player_image").style.left = '33px';
                break;
            }
        case "LG":
            {
                document.getElementById("player_image").style.width = '300px';
                document.getElementById("player_image").style.height = '225px';
                document.getElementById("player_image").style.position = 'relative';
                document.getElementById("player_image").style.left = '0px';
                document.getElementById("player_image").style.top = '37px';
                break;
            }
        case "NC":
            {
                document.getElementById("player_image").style.width = '300px';
                document.getElementById("player_image").style.height = '300px';
                document.getElementById("player_image").style.position = 'relative';
                document.getElementById("player_image").style.left = '0px';
                document.getElementById("player_image").style.top = '0px';
                break;
            }
        case "KIA":
            {
                document.getElementById("player_image").style.width = '300px';
                document.getElementById("player_image").style.height = '249px';
                document.getElementById("player_image").style.position = 'relative'
                document.getElementById("player_image").style.left = '0px';
                document.getElementById("player_image").style.top = '25px';
                break;
            }
        case "두산":
            {
                document.getElementById("player_image").style.width = '283px';
                document.getElementById("player_image").style.height = '300px';
                document.getElementById("player_image").style.position = 'relative';
                document.getElementById("player_image").style.left = '8px';
                document.getElementById("player_image").style.top = '0px';
                break;
            }
        case "롯데":
            {
                document.getElementById("player_image").style.width = '290px';
                document.getElementById("player_image").style.height = '300px';
                document.getElementById("player_image").style.position = 'relative';
                document.getElementById("player_image").style.left = '5px';
                document.getElementById("player_image").style.top = '0px';
                break;
            }
        case "삼성":
            {
                document.getElementById("player_image").style.width = '300px';
                document.getElementById("player_image").style.height = '300px';
                document.getElementById("player_image").style.position = 'relative';
                document.getElementById("player_image").style.left = '0px';
                document.getElementById("player_image").style.top = '0px';
                break;
            }
        case "키움":
            {
                document.getElementById("player_image").style.width = '300px';
                document.getElementById("player_image").style.height = '300px';
                document.getElementById("player_image").style.position = 'relative';
                document.getElementById("player_image").style.left = '0px';
                document.getElementById("player_image").style.top = '0px';
                break;
            }
        case "한화":
            {
                document.getElementById("player_image").style.width = '238px';
                document.getElementById("player_image").style.height = '300px';
                document.getElementById("player_image").style.position = 'relative';
                document.getElementById("player_image").style.left = '31px';
                document.getElementById("player_image").style.top = '0px';
                break;
            }
        default:
            break;
    }
    document.getElementById("player_image").alt = player_data[selected_player[0]][0] + " " + player_data[selected_player[0]][1] + "번 " + player_data[selected_player[0]][2];

    var position = player_data[selected_player[0]][4];
    switch(position)
    {
        case "1B":
        {
            position = "1루수";
            break;
        }
        case "2B":
        {
            position = "2루수";
            break;
        }
        case "3B":
        {
            position = "3루수";
            break;
        }
        case "LF":
        {
            position = "좌익수";
            break;
        }
        case "CF":
        {
            position = "중견수";
            break;
        }
        case "RF":
        {
            position = "우익수";
            break;
        }
        case "SS":
        {
            position = "유격수";
            break;
        }
        case "DH":
        {
            position = "지명타자";
            break;
        }
        case "P":
        {
            position = "투수";
            break;
        }
        case "C":
        {
            position = "포수";
            break;
        }
    }
    document.getElementById('player_profile').style.display = 'block';
    document.getElementById('player_stat').style.display = 'block';

    document.getElementById("player_profile1").innerHTML = position;
    // document.getElementById("player_position").innerHTML = player_data[selected_player[0]][5];
    document.getElementById("player_profile2").innerHTML = player_data[selected_player[0]][12];
    document.getElementById("player_profile3").innerHTML = player_data[selected_player[0]][13];
    document.getElementById("player_profile4").innerHTML = player_data[selected_player[0]][14];
    document.getElementById("player_profile5").innerHTML = player_data[selected_player[0]][15];

    if( player_data[selected_player[0]][5] == "타자")
    {
        document.getElementById("player_stat1").innerHTML = "타율 ";
        document.getElementById("player_stat2").innerHTML = "도루 ";
        document.getElementById("player_stat3").innerHTML = "타점 ";
        document.getElementById("player_stat4").innerHTML = "홈런 ";
        document.getElementById("player_stat5").innerHTML = "안타 ";
        // document.getElementById("strike_zone_name").innerHTML += "출루/타수";
    }
    else
    {
        document.getElementById("player_stat1").innerHTML = "평균자책점";
        document.getElementById("player_stat2").innerHTML = "탈삼진";
        document.getElementById("player_stat3").innerHTML = "승";
        document.getElementById("player_stat4").innerHTML = "홀드";
        document.getElementById("player_stat5").innerHTML = "세이브";
        // document.getElementById("strike_zone_name").innerHTML += "스트라이크/송구";
    }

    document.getElementById("name_of_stat1").innerHTML = player_data[selected_player[0]][7];
    document.getElementById("name_of_stat2").innerHTML = player_data[selected_player[0]][8];
    document.getElementById("name_of_stat3").innerHTML = player_data[selected_player[0]][9];
    document.getElementById("name_of_stat4").innerHTML = player_data[selected_player[0]][10];
    document.getElementById("name_of_stat5").innerHTML = player_data[selected_player[0]][11];

    document.getElementById("player_stat1").style.fontSize = '20px';
    document.getElementById("player_stat2").style.fontSize = '20px';
    document.getElementById("player_stat3").style.fontSize = '20px';
    document.getElementById("player_stat4").style.fontSize = '20px';
    document.getElementById("player_stat5").style.fontSize = '20px';

    document.getElementById("name_of_stat1").style.fontSize = '16px';
    document.getElementById("name_of_stat2").style.fontSize = '16px';
    document.getElementById("name_of_stat3").style.fontSize = '16px';
    document.getElementById("name_of_stat4").style.fontSize = '16px';
    document.getElementById("name_of_stat5").style.fontSize = '16px';

    var first_selected_player = document.getElementById('select_players_first').value.split('_');
    var first_player_position = player_data[first_selected_player[0]][5];
    document.getElementById('label_for_players_second').innerHTML = "Choose in "+ first_player_position + " player";

    var first_selected_player = document.getElementById('select_players_first').value.split('_');
    var first_player_position = player_data[first_selected_player[0]][5];
    let arr_length_second = 1;
    var arr = "<option name = 'select_player'  value='0'>선수 선택</option>";
    for(let i = 0; i <player_data.length; i++)
    {
        if(player_data)
        {
            if(player_data[i])
            {

                if(player_data[i][5]== first_player_position)
                {
                    arr += "<option name = 'select_player'  value='" + i + "_" + player_data[i][0] + "_" + player_data[i][1] + "_" + player_data[i][2] + "'>" + arr_length_second + ". " + player_data[i][0] + " " + player_data[i][1] + "번 " + player_data[i][2] + "</option>";
                    arr_length_second++;
                }
            }
        }
    }
    document.getElementById('select_players_second').innerHTML = arr;
    document.getElementById("player_name_second").style.display = 'none';
    document.getElementById("player_image_second_div").style.display = "none";
    document.getElementById('player_profile_second').style.display = 'none';
    document.getElementById('strike_zone').style.display = 'block';


    document.getElementById("player_stat").style.top = '470px';
    document.getElementById("player_stat").style.left = '160px';
    scene.remove(radar_second);

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

        player_stat_div.style.left = '160px';
        player_stat_div.style.top = '470px';

        player_stat1.style.position = 'static';
        player_stat2.style.position = 'static';
        player_stat3.style.position = 'static';
        player_stat4.style.position = 'static';
        player_stat5.style.position = 'static';
        player_stat_title.style.position = 'static';

        player_stat1.style.textAlign = 'left';
        player_stat2.style.textAlign = 'left';
        player_stat3.style.textAlign = 'left';
        player_stat4.style.textAlign = 'left';
        player_stat5.style.textAlign = 'left';

        player_stat_name1.style.textAlign = 'left';
        player_stat_name2.style.textAlign = 'left';
        player_stat_name3.style.textAlign = 'left';
        player_stat_name4.style.textAlign = 'left';
        player_stat_name5.style.textAlign = 'left';

        player_stat1.style.width = '150px';
        player_stat2.style.width = '150px';
        player_stat3.style.width = '150px';
        player_stat4.style.width = '150px';
        player_stat5.style.width = '150px';

        document.getElementById("player_stat1").style.fontSize = '20px';
        document.getElementById("player_stat2").style.fontSize = '20px';
        document.getElementById("player_stat3").style.fontSize = '20px';
        document.getElementById("player_stat4").style.fontSize = '20px';
        document.getElementById("player_stat5").style.fontSize = '20px';

        document.getElementById("name_of_stat1").style.fontSize = '16px';
        document.getElementById("name_of_stat2").style.fontSize = '16px';
        document.getElementById("name_of_stat3").style.fontSize = '16px';
        document.getElementById("name_of_stat4").style.fontSize = '16px';
        document.getElementById("name_of_stat5").style.fontSize = '16px';

        // player_stat1.style.left = '-50px';
        // player_stat2.style.left = '-60px';
        // player_stat3.style.left = '-70px';
        // player_stat4.style.left = '-80px';
        // player_stat5.style.left = '-90px';
        document.getElementById("player_stat1_second").innerHTML = "";
        document.getElementById("player_stat2_second").innerHTML = "";
        document.getElementById("player_stat3_second").innerHTML = "";
        document.getElementById("player_stat4_second").innerHTML = "";
        document.getElementById("player_stat5_second").innerHTML = "";

        document.getElementById("player_profile1_second").innerHTML = "";
        document.getElementById("player_profile2_second").innerHTML = "";
        document.getElementById("player_profile3_second").innerHTML = "";
        document.getElementById("player_profile4_second").innerHTML = "";
        document.getElementById("player_profile5_second").innerHTML = "";



    }

    let back_color = "";

    var strike_zone = "";
    for(let i =0; i<5; i++) {
        for (let j = 0; j < 5; j++) {

            // 테스트케이스 인풋
            if (player_data[selected_player[0]][6][i][j] < 0.05) {
                back_color = "#900000";
            } else if (player_data[selected_player[0]][6][i][j] < 0.10) {
                back_color = "#851000";
            } else if (player_data[selected_player[0]][6][i][j] < 0.15) {
                back_color = "#802000";
            } else if (player_data[selected_player[0]][6][i][j] < 0.20) {
                back_color = "#753000";
            } else if (player_data[selected_player[0]][6][i][j] < 0.25) {
                back_color = "#704000";
            } else if (player_data[selected_player[0]][6][i][j] < 0.30) {
                back_color = "#655000";
            } else if (player_data[selected_player[0]][6][i][j] < 0.35) {
                back_color = "#606000";
            } else if (player_data[selected_player[0]][6][i][j] < 0.40) {
                back_color = "#557000";
            } else if (player_data[selected_player[0]][6][i][j] < 0.45) {
                back_color = "#208000";
            } else if (0.45 < player_data[selected_player[0]][6][i][j]) {
                back_color = "#009000";
            }
            // 색상 배치
            // 범위나 위치 별 색상 변경 용이하게 if문으로 작업
            strike_zone += "<div class = 'strike_zone', id = 'zone" + (i * 5 + j) + "', " +
                // "onmouseover='strike_info_enter()', onmouseleave='strike_info_leave()' " +
                "style='background-color: " +back_color+ ";', display = 'inline'>" +
                "<font color='black'>" + player_data[selected_player[0]][6][i][j] + "</font></div>";
            // 클래스 이름 strike_zone
            // id 이름 zone0~zone24
        }
        strike_zone += "</br>";
        //for(j)루프 나갈 때 마다 줄 띄우기
    }
    document.getElementById("strike_zone").innerHTML = strike_zone;
};
