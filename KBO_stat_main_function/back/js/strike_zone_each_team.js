function strike_zone_each_team(num){
    var selected_player = num.split('_');
    document.getElementById("player_name").innerHTML = player_data[selected_player[0]][1] + " " + player_data[selected_player[0]][2];
    document.getElementById("player_image").src = '../../'+player_data[selected_player[0]][3];
    document.getElementById("player_image").alt = player_data[selected_player[0]][0] + " " + player_data[selected_player[0]][1] + "번 " + player_data[selected_player[0]][2];
    document.getElementById('player_profile').style.display = 'block';
    document.getElementById('player_stat').style.display = 'block';

    document.getElementById("player_profile1").innerHTML = player_data[selected_player[0]][4];
    // document.getElementById("player_position").innerHTML = player_data[selected_player[0]][5];
    document.getElementById("player_profile2").innerHTML = player_data[selected_player[0]][13];
    document.getElementById("player_profile3").innerHTML = player_data[selected_player[0]][14];
    document.getElementById("player_profile4").innerHTML = player_data[selected_player[0]][15];

    if( player_data[selected_player[0]][5] == "타자")
    {
        document.getElementById("name_of_stat1").innerHTML = "타율";
        document.getElementById("name_of_stat2").innerHTML = "도루";
        document.getElementById("name_of_stat3").innerHTML = "타점";
        document.getElementById("name_of_stat4").innerHTML = "홈런";
        document.getElementById("name_of_stat5").innerHTML = "안타";
    }
    else
    {
        document.getElementById("name_of_stat1").innerHTML = "평균자책점";
        document.getElementById("name_of_stat2").innerHTML = "탈삼진";
        document.getElementById("name_of_stat3").innerHTML = "승";
        document.getElementById("name_of_stat4").innerHTML = "홀드";
        document.getElementById("name_of_stat5").innerHTML = "세이브";
    }

    document.getElementById("player_stat1").innerHTML = player_data[selected_player[0]][7];
    document.getElementById("player_stat2").innerHTML = player_data[selected_player[0]][8];
    document.getElementById("player_stat3").innerHTML = player_data[selected_player[0]][9];
    document.getElementById("player_stat4").innerHTML = player_data[selected_player[0]][10];
    document.getElementById("player_stat5").innerHTML = player_data[selected_player[0]][11];


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
