
var radar_second;
function second_player_select(){
    var first_selected_player = document.getElementById('select_players_first').value.split('_');
    var selected_player = document.getElementById('select_players_second').value.split('_');


    // alert(player_data[selected_player[0]][7]);
    // alert(player_data[selected_player[0]][8]);
    // alert(player_data[selected_player[0]][9]);
    // alert(player_data[selected_player[0]][10]);
    // alert(player_data[selected_player[0]][11]);
    var team_bg_color_primary;
    var team_bg_color_secondary;
    var team_text_color_primary;
    var team_text_color_secondary;

    var choose_color = player_data[selected_player[0]][0];
    switch (choose_color)
    {
        case "SSG":
        {
            team_bg_color_primary='#CE0E2D';
            team_bg_color_secondary='#000000';
            team_text_color_primary='#ffffff';
            team_text_color_secondary='#ffffff';
            break;
        }
        case "KT":
        {
            team_bg_color_primary='#000000';
            team_bg_color_secondary='#EB1C24';
            team_text_color_primary='#ffffff';
            team_text_color_secondary='#ffffff';
            break;
        }
        case "LG":
        {
            team_bg_color_primary='#C30452';
            team_bg_color_secondary='#000000';
            team_text_color_primary='#ffffff';
            team_text_color_secondary='#ffffff';
            break;
        }
        case "NC":
        {
            team_bg_color_primary='#315288';
            team_bg_color_secondary='#AF917B';
            team_text_color_primary='#ffffff';
            team_text_color_secondary='#00275A';
            break;
        }
        case "KIA":
        {
            team_bg_color_primary='#EA0029';
            team_bg_color_secondary='#06141F';
            team_text_color_primary='#ffffff';
            team_text_color_secondary='#ffffff';
            break;
        }
        case "두산":
        {
            team_bg_color_primary='#131230';
            team_bg_color_secondary='#ED1C24';
            team_text_color_primary='#ffffff';
            team_text_color_secondary='#ffffff';
            break;
        }
        case "롯데":
        {
            team_bg_color_primary='#002955';
            team_bg_color_secondary='#DC0232';
            team_text_color_primary='#ffffff';
            team_text_color_secondary='#ffffff';
            break;
        }
        case "삼성":
        {
            team_bg_color_primary='#074CA1';
            team_bg_color_secondary='#C0C0C0';
            team_text_color_primary='#ffffff';
            team_text_color_secondary='#074CA1';
            break;
        }
        case "키움":
        {
            team_bg_color_primary='#820024';
            team_bg_color_secondary='#B07F4A';
            team_text_color_primary='#ffffff';
            team_text_color_secondary='#ffffff';
            break;
        }
        case "한화":
        {
            team_bg_color_primary='#FF6600';
            team_bg_color_secondary='#000000';
            team_text_color_primary='#ffffff';
            team_text_color_secondary='#ffffff';
            break;
        }
        default:
            break;
    }
    if(player_data[first_selected_player[0]][0] == player_data[selected_player[0]][0])
        var material_second_sel = new THREE.MeshBasicMaterial({ color: team_bg_color_secondary, opacity:0.5, transparent: true,});
    else
        var material_second_sel = new THREE.MeshBasicMaterial({ color: team_bg_color_primary, opacity:0.5, transparent: true,});
    //같은팀 같은색 분별
    //     var material_second_sel = new THREE.MeshBasicMaterial({ color: team_bg_color_secondary, opacity:0.5, transparent: true,});

    if(player_data[selected_player[0]][5] == "타자")
    {
        scene.remove(radar_second);
        var shape_second = new THREE.Shape();
        if(player_data[selected_player[0]][7] < 0.5)
        {
            shape_second.moveTo(x, y + y_length * player_data[selected_player[0]][7] * 2);
            if(player_data[selected_player[0]][8] < 3)
                shape_second.lineTo(x - sin72 * y_length * player_data[selected_player[0]][8] / 3, y + cos72 * y_length * player_data[selected_player[0]][8] / 3);
            else
                shape_second.lineTo(x - sin72 * y_length, y + cos72 * y_length);
            if ( player_data[selected_player[0]][9] < 18.5)
                shape_second.lineTo(x - cos54 * y_length * player_data[selected_player[0]][9] / 18.5, y - sin54 * y_length * player_data[selected_player[0]][9] / 18.5);
            else
                shape_second.lineTo(x - cos54 * y_length, y - sin54 * y_length);
            if( player_data[selected_player[0]][10] < 3)
                shape_second.lineTo(x + cos54 * y_length * player_data[selected_player[0]][10] / 3, y - sin54 * y_length * player_data[selected_player[0]][10] / 3);
            else
                shape_second.lineTo(x + cos54 * y_length, y - sin54 * y_length);
            if( player_data[selected_player[0]][11] < 40)
                shape_second.lineTo(x + sin72 * y_length * player_data[selected_player[0]][11] / 40, y + cos72 * y_length * player_data[selected_player[0]][11] / 40);
            else
                shape_second.lineTo(x + sin72 * y_length, y + cos72 * y_length);
            shape_second.moveTo(x, y + y_length * player_data[selected_player[0]][7] * 2 );
        }
        else
        {
            shape_second.moveTo(x, y + y_length * 2);
            if(player_data[selected_player[0]][8] < 3)
                shape_second.lineTo(x - sin72 * y_length * player_data[selected_player[0]][8] / 3, y + cos72 * y_length * player_data[selected_player[0]][8] / 3);
            else
                shape_second.lineTo(x - sin72 * y_length, y + cos72 * y_length);
            if ( player_data[selected_player[0]][9] < 18.5)
                shape_second.lineTo(x - cos54 * y_length * player_data[selected_player[0]][9] / 18.5, y - sin54 * y_length * player_data[selected_player[0]][9] / 18.5);
            else
                shape_second.lineTo(x - cos54 * y_length, y - sin54 * y_length);
            if( player_data[selected_player[0]][10] < 3)
                shape_second.lineTo(x + cos54 * y_length * player_data[selected_player[0]][10] / 3, y - sin54 * y_length * player_data[selected_player[0]][10] / 3);
            else
                shape_second.lineTo(x + cos54 * y_length, y - sin54 * y_length);
            if( player_data[selected_player[0]][11] < 40)
                shape_second.lineTo(x + sin72 * y_length * player_data[selected_player[0]][11] / 40, y + cos72 * y_length * player_data[selected_player[0]][11] / 40);
            else
                shape_second.lineTo(x + sin72 * y_length, y + cos72 * y_length);
            shape_second.moveTo(x, y + y_length * 2);

        }
        var geometry_second = new THREE.ShapeGeometry(shape_second);
        radar_second = new THREE.Mesh(geometry_second, material_second_sel);
        scene.add(radar_second);
        renderer.render(scene, camera);
    }
    else// 투수일 경우
    {
        scene.remove(radar_second);
        var shape_second = new THREE.Shape();
        //if else문 사용이유
        // 최상위값 쳐내기(그래프 뚫는거 방지)
        if (player_data[selected_player[0]][7] < 9) {
            shape_second.moveTo(x, y + y_length * player_data[selected_player[0]][7] / 9);
            if (player_data[selected_player[0]][8] < 35)
                shape_second.lineTo(x - sin72 * y_length * player_data[selected_player[0]][8] / 35, y + cos72 * y_length * player_data[selected_player[0]][8] / 35);
            else
                shape_second.lineTo(x - sin72 * y_length, y + cos72 * y_length);
            if (player_data[selected_player[0]][9] < 2.5)
                shape_second.lineTo(x - cos54 * y_length * player_data[selected_player[0]][9] / 2.5, y - sin54 * y_length * player_data[selected_player[0]][9] / 2.5);
            else
                shape_second.lineTo(x - cos54 * y_length, y - sin54 * y_length);
            if (player_data[selected_player[0]][10] < 2.5)
                shape_second.lineTo(x + cos54 * y_length * player_data[selected_player[0]][10] / 2.5, y - sin54 * y_length * player_data[selected_player[0]][10] / 2.5);
            else
                shape_second.lineTo(x + cos54 * y_length, y - sin54 * y_length);
            if (player_data[selected_player[0]][11] < 1.5)
                shape_second.lineTo(x + sin72 * y_length * player_data[selected_player[0]][11] / 1.5, y + cos72 * y_length * player_data[selected_player[0]][11] / 1.5);
            else
                shape_second.lineTo(x + sin72 * y_length, y + cos72 * y_length);
            shape_second.moveTo(x, y + y_length * player_data[selected_player[0]][7] / 9);
        } else {
            shape_second.moveTo(x, y + y_length);
            if (player_data[selected_player[0]][8] < 35)
                shape_second.lineTo(x - sin72 * y_length * player_data[selected_player[0]][8] / 35, y + cos72 * y_length * player_data[selected_player[0]][8] / 35);
            else
                shape_second.lineTo(x - sin72 * y_length, y + cos72 * y_length);
            if (player_data[selected_player[0]][9] < 2.5)
                shape_second.lineTo(x - cos54 * y_length * player_data[selected_player[0]][9] / 2.5, y - sin54 * y_length * player_data[selected_player[0]][9] / 2.5);
            else
                shape_second.lineTo(x - cos54 * y_length, y - sin54 * y_length);
            if (player_data[selected_player[0]][10] < 2.5)
                shape_second.lineTo(x + cos54 * y_length * player_data[selected_player[0]][10] / 2.5, y - sin54 * y_length * player_data[selected_player[0]][10] / 2.5);
            else
                shape_second.lineTo(x + cos54 * y_length, y - sin54 * y_length);
            if (player_data[selected_player[0]][11] < 1.5)
                shape_second.lineTo(x + sin72 * y_length * player_data[selected_player[0]][11] / 1.5, y + cos72 * y_length * player_data[selected_player[0]][11] / 1.5);
            else
                shape_second.lineTo(x + sin72 * y_length, y + cos72 * y_length);
            shape_second.moveTo(x, y + y_length);

        }
        var geometry_second = new THREE.ShapeGeometry(shape_second);
        radar_second = new THREE.Mesh(geometry_second,material_second_sel);
        scene.add(radar_second);
        renderer.render(scene, camera);
    }
}

renderer.render(scene, camera);