function if_select_second(){
    var strike_zone_reposition = document.getElementById('strike_zone').style;
    strike_zone_reposition.display = 'none';

    var selected_player = document.getElementById('select_players_second').value.split('_');
    var player_name = document.getElementById("player_name_second");
    player_name.innerHTML = player_data[selected_player[0]][0] + " " + player_data[selected_player[0]][1] + "번 " + player_data[selected_player[0]][2];
    player_name.style.display = "block";

    var player_image = document.getElementById("player_image_second");
    player_image.src = player_data[selected_player[0]][3];
    player_image.alt = player_data[selected_player[0]][0] + " " + player_data[selected_player[0]][1] + "번 " + player_data[selected_player[0]][2];
    document.getElementById("player_image_second_div").style.display = "block";
    switch (player_data[selected_player[0]][0])
    {
        case "SSG":
        {
            document.getElementById("player_image_second").style.width = '234px';
            document.getElementById("player_image_second").style.height = '300px';
            document.getElementById("player_image_second").style.position = 'relative';
            document.getElementById("player_image_second").style.left = '33px';
            document.getElementById("player_image_second").style.top = '0px';
            break;
        }
        case "KT":
        {
            document.getElementById("player_image_second").style.width = '300px';
            document.getElementById("player_image_second").style.height = '300px';
            document.getElementById("player_image_second").style.position = 'relative';
            document.getElementById("player_image").style.left = '0px';
            document.getElementById("player_image_second").style.top = '0px';
            break;
        }
        case "LG":
        {
            document.getElementById("player_image_second").style.width = '300px';
            document.getElementById("player_image_second").style.height = '225px';
            document.getElementById("player_image_second").style.position = 'relative';
            document.getElementById("player_image_second").style.left = '0px';
            document.getElementById("player_image_second").style.top = '37px';
            break;
        }
        case "NC":
        {
            document.getElementById("player_image_second").style.width = '300px';
            document.getElementById("player_image_second").style.height = '300px';
            document.getElementById("player_image_second").style.position = 'relative';
            document.getElementById("player_image_second").style.left = '0px';
            document.getElementById("player_image_second").style.top = '0px';
            break;
        }
        case "KIA":
        {
            document.getElementById("player_image_second").style.width = '300px';
            document.getElementById("player_image_second").style.height = '249px';
            document.getElementById("player_image_second").style.position = 'relative'
            document.getElementById("player_image_second").style.left = '0px';
            document.getElementById("player_image_second").style.top = '25px';
            break;
        }
        case "두산":
        {
            document.getElementById("player_image_second").style.width = '283px';
            document.getElementById("player_image_second").style.height = '300px';
            document.getElementById("player_image_second").style.position = 'relative';
            document.getElementById("player_image_second").style.left = '8px';
            document.getElementById("player_image_second").style.top = '0px';
            break;
        }
        case "롯데":
        {
            document.getElementById("player_image_second").style.width = '290px';
            document.getElementById("player_image_second").style.height = '300px';
            document.getElementById("player_image_second").style.position = 'relative';
            document.getElementById("player_image_second").style.left = '5px';
            document.getElementById("player_image_second").style.top = '0px';
            break;
        }
        case "삼성":
        {
            document.getElementById("player_image_second").style.width = '300px';
            document.getElementById("player_image_second").style.height = '300px';
            document.getElementById("player_image_second").style.position = 'relative';
            document.getElementById("player_image_second").style.left = '0px';
            document.getElementById("player_image_second").style.top = '0px';
            break;
        }
        case "키움":
        {
            document.getElementById("player_image_second").style.width = '300px';
            document.getElementById("player_image_second").style.height = '300px';
            document.getElementById("player_image_second").style.position = 'relative';
            document.getElementById("player_image_second").style.left = '0px';
            document.getElementById("player_image_second").style.top = '0px';
            break;
        }
        case "한화":
        {
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
    var player_profile = document.getElementById("player_profile_second");
    player_profile.innerHTML = player_data[selected_player[0]][4];
    player_profile.style.display = 'block';

    var player_position = document.getElementById("player_position_second");
    player_position.innerHTML = player_data[selected_player[0]][5];
    player_position.style.display = 'block';


};