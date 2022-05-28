


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

    var player_profile = document.getElementById("player_profile_second");
    player_profile.innerHTML = player_data[selected_player[0]][4];
    player_profile.style.display = 'block';

    var player_position = document.getElementById("player_position_second");
    player_position.innerHTML = player_data[selected_player[0]][5];
    player_position.style.display = 'block';


};