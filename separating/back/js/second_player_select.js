
var radar_second;
function second_player_select(){
    var selected_player = document.getElementById('select_players_second').value.split('_');
    // alert(player_data[selected_player[0]][7]);
    // alert(player_data[selected_player[0]][8]);
    // alert(player_data[selected_player[0]][9]);
    // alert(player_data[selected_player[0]][10]);
    // alert(player_data[selected_player[0]][11]);
    scene.remove(radar_second);
    var shape_second = new THREE.Shape();
    shape_second.moveTo(x,y+y_length*player_data[selected_player[0]][7]*2);
    shape_second.lineTo(x-sin72*y_length*player_data[selected_player[0]][8]/20,y+cos72*y_length*player_data[selected_player[0]][8]/20);
    shape_second.lineTo(x-cos54*y_length*player_data[selected_player[0]][9]/50,y-sin54*y_length*player_data[selected_player[0]][9]/50);
    shape_second.lineTo(x+cos54*y_length*player_data[selected_player[0]][10]/40,y-sin54*y_length*player_data[selected_player[0]][10]/40);
    shape_second.lineTo(x+sin72*y_length*player_data[selected_player[0]][11]/85,y+cos72*y_length*player_data[selected_player[0]][11]/85);
    shape_second.moveTo(x,y+y_length*player_data[selected_player[0]][7]*5);
    var geometry_first = new THREE.ShapeGeometry(shape_second);
    radar_second = new THREE.Mesh(geometry_first,material_second);
    scene.add(radar_second);
    renderer.render(scene, camera);
}

renderer.render(scene, camera);