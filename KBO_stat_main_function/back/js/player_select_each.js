var radar_first;
function player_select_each(num){
    var selected_player = num.split('_');
    // alert(player_data[selected_player[0]][7]);
    // alert(player_data[selected_player[0]][8]);
    // alert(player_data[selected_player[0]][9]);
    // alert(player_data[selected_player[0]][10]);
    // alert(player_data[selected_player[0]][11]);
    scene.remove(radar_first);
    var shape_first = new THREE.Shape();
    shape_first.moveTo(x,y+y_length*player_data[selected_player[0]][7]*2);
    shape_first.lineTo(x-sin72*y_length*player_data[selected_player[0]][8]/20,y+cos72*y_length*player_data[selected_player[0]][8]/20);
    shape_first.lineTo(x-cos54*y_length*player_data[selected_player[0]][9]/50,y-sin54*y_length*player_data[selected_player[0]][9]/50);
    shape_first.lineTo(x+cos54*y_length*player_data[selected_player[0]][10]/40,y-sin54*y_length*player_data[selected_player[0]][10]/40);
    shape_first.lineTo(x+sin72*y_length*player_data[selected_player[0]][11]/85,y+cos72*y_length*player_data[selected_player[0]][11]/85);
    shape_first.moveTo(x,y+y_length*player_data[selected_player[0]][7]*5);
    var geometry_first = new THREE.ShapeGeometry(shape_first);
    radar_first = new THREE.Mesh(geometry_first,material_first);
    scene.add(radar_first);
    renderer.render(scene, camera);
}
renderer.render(scene, camera);