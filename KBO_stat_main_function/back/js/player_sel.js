var team_name = ["SSG", "LG", "두산", "롯데", "키움", "삼성", "KIA", "KT", "한화", "NC"];
var team_sel_num=0;

function player_sel()
{
    let each_length = 1;
    var arr;
    var team_name;
    switch (team_sel_num) {
        case 0: {
            team_name = "SSG";
            break;
        }
        case 1: {
            team_name = "LG";
            break;
        }
        case 2: {
            team_name = "두산";
            break;
        }
        case 3: {
            team_name = "롯데";
            break;
        }
        case 4: {
            team_name = "키움";
            break;
        }
        case 5: {
            team_name = "삼성";
            break;
        }
        case 6: {
            team_name = "KIA";
            break;
        }
        case 7: {
            team_name = "KT";
            break;
        }
        case 8: {
            team_name = "한화";
            break;
        }
        case 9: {
            team_name = "NC";
            break;
        }
        default:
            break;

    };
    for (let i = 0; i < player_data.length; i++) {
        if (player_data[i][0] == team_name) {
            arr += "<option name = 'select_palyer' value='"+i + "_" +player_data[i][0] + "_" + player_data[i][1] + "_" + player_data[i][2] + "'>" + each_length + ". " + player_data[i][0] + " " + player_data[i][1] + "번 " + player_data[i][2] + "</option>";
            each_length++;
        }
    }
    document.getElementById("label_for_players_first").innerHTML = "Choose in "+ team_name + "player";
    document.getElementById("select_players_first").innerHTML = arr;
    document.getElementById("label_for_players_second").innerHTML = "Choose in "+ team_name + "player";
    document.getElementById("select_players_second").innerHTML = arr;
}