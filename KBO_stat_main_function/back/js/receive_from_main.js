var received_player = "";
var received_player_num = "";
var temp = decodeURI(location.href).split("?");

    const regExp = /[가-힣]/g;
    if(regExp.test(temp[1])){
        received_player = temp[1];
        received_player_num = temp[2];
    }else{
    }
