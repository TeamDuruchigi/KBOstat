
var radar_first;
function searched_player_select(input_name){
    if(player_data)
    {
        for(let i = 0; i<player_data.length; i++)
        {
            if(player_data[i])
            {
                if(player_data[i][2] == input_name)
                {
                    var searched_player = i;
                }
            }
        }
    }
    // alert(player_data[selected_player[0]][7]);
    // alert(player_data[selected_player[0]][8]);
    // alert(player_data[selected_player[0]][9]);
    // alert(player_data[selected_player[0]][10]);
    // alert(player_data[selected_player[0]][11]);
    var team_bg_color_primary;
    var team_bg_color_secondary;
    var team_text_color_primary;
    var team_text_color_secondary;

    var choose_color = player_data[searched_player][0];
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
        case "??????":
        {
            team_bg_color_primary='#131230';
            team_bg_color_secondary='#ED1C24';
            team_text_color_primary='#ffffff';
            team_text_color_secondary='#ffffff';
            break;
        }
        case "??????":
        {
            team_bg_color_primary='#002955';
            team_bg_color_secondary='#DC0232';
            team_text_color_primary='#ffffff';
            team_text_color_secondary='#ffffff';
            break;
        }
        case "??????":
        {
            team_bg_color_primary='#074CA1';
            team_bg_color_secondary='#C0C0C0';
            team_text_color_primary='#ffffff';
            team_text_color_secondary='#074CA1';
            break;
        }
        case "??????":
        {
            team_bg_color_primary='#820024';
            team_bg_color_secondary='#B07F4A';
            team_text_color_primary='#ffffff';
            team_text_color_secondary='#ffffff';
            break;
        }
        case "??????":
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
    var material_first_sel = new THREE.MeshBasicMaterial({ color: team_bg_color_primary, opacity:0.5,
        transparent: true,});
    if(player_data[searched_player][5] == "??????")
    {
        scene.remove(radar_first);
        var shape_first = new THREE.Shape();
        if(player_data[searched_player][7] < 0.5)
        {
            shape_first.moveTo(x, y + y_length * player_data[searched_player][7] * 2);
            if(player_data[searched_player][8] < 3)
                shape_first.lineTo(x - sin72 * y_length * player_data[searched_player][8] / 3, y + cos72 * y_length * player_data[searched_player][8] / 3);
            else
                shape_first.lineTo(x - sin72 * y_length, y + cos72 * y_length);
            if ( player_data[searched_player][9] < 18.5)
                shape_first.lineTo(x - cos54 * y_length * player_data[searched_player][9] / 18.5, y - sin54 * y_length * player_data[searched_player][9] / 18.5);
            else
                shape_first.lineTo(x - cos54 * y_length, y - sin54 * y_length);
            if( player_data[searched_player][10] < 3)
                shape_first.lineTo(x + cos54 * y_length * player_data[searched_player][10] / 3, y - sin54 * y_length * player_data[searched_player][10] / 3);
            else
                shape_first.lineTo(x + cos54 * y_length, y - sin54 * y_length);
            if( player_data[searched_player][11] < 40)
                shape_first.lineTo(x + sin72 * y_length * player_data[searched_player][11] / 40, y + cos72 * y_length * player_data[searched_player][11] / 40);
            else
                shape_first.lineTo(x + sin72 * y_length, y + cos72 * y_length);
            shape_first.moveTo(x, y + y_length * player_data[searched_player][7] * 2 );
        }
        else
        {
            shape_first.moveTo(x, y + y_length * 2);
            if(player_data[searched_player][8] < 3)
                shape_first.lineTo(x - sin72 * y_length * player_data[searched_player][8] / 3, y + cos72 * y_length * player_data[searched_player][8] / 3);
            else
                shape_first.lineTo(x - sin72 * y_length, y + cos72 * y_length);
            if ( player_data[searched_player][9] < 18.5)
                shape_first.lineTo(x - cos54 * y_length * player_data[searched_player][9] / 18.5, y - sin54 * y_length * player_data[searched_player][9] / 18.5);
            else
                shape_first.lineTo(x - cos54 * y_length, y - sin54 * y_length);
            if( player_data[searched_player][10] < 3)
                shape_first.lineTo(x + cos54 * y_length * player_data[searched_player][10] / 3, y - sin54 * y_length * player_data[searched_player][10] / 3);
            else
                shape_first.lineTo(x + cos54 * y_length, y - sin54 * y_length);
            if( player_data[searched_player][11] < 40)
                shape_first.lineTo(x + sin72 * y_length * player_data[searched_player][11] / 40, y + cos72 * y_length * player_data[searched_player][11] / 40);
            else
                shape_first.lineTo(x + sin72 * y_length, y + cos72 * y_length);
            shape_first.moveTo(x, y + y_length * 2);

        }
        var geometry_first = new THREE.ShapeGeometry(shape_first);
        radar_first = new THREE.Mesh(geometry_first, material_first_sel);
        scene.add(radar_first);
        renderer.render(scene, camera);
    }
    else// ????????? ??????
    {
        scene.remove(radar_first);
        var shape_first = new THREE.Shape();
        //if else??? ????????????
        // ???????????? ?????????(????????? ????????? ??????)
        if (player_data[searched_player][7] < 9) {
            shape_first.moveTo(x, y + y_length * player_data[searched_player][7] / 9);
            if (player_data[searched_player][8] < 35)
                shape_first.lineTo(x - sin72 * y_length * player_data[searched_player][8] / 35, y + cos72 * y_length * player_data[searched_player][8] / 35);
            else
                shape_first.lineTo(x - sin72 * y_length, y + cos72 * y_length);
            if (player_data[searched_player][9] < 2.5)
                shape_first.lineTo(x - cos54 * y_length * player_data[searched_player][9] / 2.5, y - sin54 * y_length * player_data[searched_player][9] / 2.5);
            else
                shape_first.lineTo(x - cos54 * y_length, y - sin54 * y_length);
            if (player_data[searched_player][10] < 2.5)
                shape_first.lineTo(x + cos54 * y_length * player_data[searched_player][10] / 2.5, y - sin54 * y_length * player_data[searched_player][10] / 2.5);
            else
                shape_first.lineTo(x + cos54 * y_length, y - sin54 * y_length);
            if (player_data[searched_player][11] < 1.5)
                shape_first.lineTo(x + sin72 * y_length * player_data[searched_player][11] / 1.5, y + cos72 * y_length * player_data[searched_player][11] / 1.5);
            else
                shape_first.lineTo(x + sin72 * y_length, y + cos72 * y_length);
            shape_first.moveTo(x, y + y_length * player_data[searched_player][7] / 9);
        } else {
            shape_first.moveTo(x, y + y_length);
            if (player_data[searched_player][8] < 35)
                shape_first.lineTo(x - sin72 * y_length * player_data[searched_player][8] / 35, y + cos72 * y_length * player_data[searched_player][8] / 35);
            else
                shape_first.lineTo(x - sin72 * y_length, y + cos72 * y_length);
            if (player_data[searched_player][9] < 2.5)
                shape_first.lineTo(x - cos54 * y_length * player_data[searched_player][9] / 2.5, y - sin54 * y_length * player_data[searched_player][9] / 2.5);
            else
                shape_first.lineTo(x - cos54 * y_length, y - sin54 * y_length);
            if (player_data[searched_player][10] < 2.5)
                shape_first.lineTo(x + cos54 * y_length * player_data[searched_player][10] / 2.5, y - sin54 * y_length * player_data[searched_player][10] / 2.5);
            else
                shape_first.lineTo(x + cos54 * y_length, y - sin54 * y_length);
            if (player_data[searched_player][11] < 1.5)
                shape_first.lineTo(x + sin72 * y_length * player_data[searched_player][11] / 1.5, y + cos72 * y_length * player_data[searched_player][11] / 1.5);
            else
                shape_first.lineTo(x + sin72 * y_length, y + cos72 * y_length);
            shape_first.moveTo(x, y + y_length);

        }
        var geometry_first = new THREE.ShapeGeometry(shape_first);
        radar_first = new THREE.Mesh(geometry_first,material_first_sel);
        scene.add(radar_first);
        renderer.render(scene, camera);
    }
}
renderer.render(scene, camera);