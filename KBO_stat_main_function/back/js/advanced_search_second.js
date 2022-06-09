function detail_player_list_second()
{
    var arr;
    arr = "<option name = 'select_player'  value='0'>test_zero_select</option>";
    var player_list_team = document.getElementById('Find_player_by_team_second').value;
    var player_list_position = document.getElementById('Find_player_by_position_second').value;
    var player_list_throw_hand = document.getElementById('Find_player_by_throw_hand_second').value;
    var player_list_throw_style = document.getElementById('Find_player_by_throw_style_second').value;
    var player_list_hit_hand = document.getElementById('Find_player_by_hit_hand_second').value;


    let arr_length_second = 1;
    for(let i = 0; i <player_data.length; i++)
    {
        // alert(player_s
        let check_value = 0;


        while (1)
        {
            //팀
            if(player_list_team_second == 0)
            {
                check_value++;
            }
            else if(player_list_team_second == player_data[i][0])
            {
                check_value++;
            }
            else
            {
                break;
            }
            //포지션
            if(player_list_position_second == 0)
            {
                check_value++;
            }
            else if(player_list_position_second == player_data[i][5])
            {
                check_value++;
            }
            else
            {
                break;
            }
            var player_play_style_second;
            if(player_data)
            {
                if(player_data[i])
                {
                    if(player_data[i][12])
                    {
                        player_play_style_second = player_data[i][12].split('');
                    }
                }
            }
            //투구 주손
            if(player_list_throw_hand_second == 0)
            {
                check_value++;
            }
            else if(player_list_throw_hand_second == player_play_style_second[0])
            {
                check_value++;
            }
            else
            {
                break;
            }
            // 투구 폼
            if(player_list_throw_style_second == 0)
            {
                check_value++;
            }
            else if(player_list_throw_style_second == player_play_style_second[1])
            {
                check_value++;
            }
            else
            {
                break;
            }
            // 타구 손
            if(player_list_hit_hand_second == 0)
            {
                check_value++;
            }
            else if(player_list_hit_hand_second == player_play_style_second[2])
            {
                check_value++;
            }
            else
            {
                break;
            }

            arr += "<option name = 'select_player'  value='" + i + "_" + player_data[i][0] + "_" + player_data[i][1] + "_" + player_data[i][2] + "'>" + arr_length_first + ". " + player_data[i][0] + " " + player_data[i][1] + "번 " + player_data[i][2] + "</option>";
            arr_length_first++;
            break;

        }


    }
    alert(arr);
    document.getElementById('select_players_second').innerHTML = arr;
}
