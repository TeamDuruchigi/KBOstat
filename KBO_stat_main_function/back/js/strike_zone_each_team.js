function strike_zone_each_team(num){
    var selected_player = num.split('_');
    document.getElementById("player_name").innerHTML = player_data[selected_player[0]][0] + " " + player_data[selected_player[0]][1] + "번 " + player_data[selected_player[0]][2];
    document.getElementById("player_image").src = player_data[selected_player[0]][3];
    document.getElementById("player_image").alt = player_data[selected_player[0]][0] + " " + player_data[selected_player[0]][1] + "번 " + player_data[selected_player[0]][2];
    document.getElementById("player_profile").innerHTML = player_data[selected_player[0]][4];
    document.getElementById("player_position").innerHTML = player_data[selected_player[0]][5];

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