function detail_player_list_second()
{
    var arr;
    arr = "<option name = 'select_player'  value='0'>test_zero_select</option>";
    var player_list_team_second = document.getElementById('Find_player_by_team_second').value;
    var player_list_throw_hand_second = document.getElementById('Find_player_by_throw_hand_second').value;
    var player_list_throw_style_second = document.getElementById('Find_player_by_throw_style_second').value;
    var player_list_hit_hand_second = document.getElementById('Find_player_by_hit_hand_second').value;



    let arr_length_second = 1;
    if(player_data)
    {
        var first_selected_player = document.getElementById('select_players_first').value.split('_');
        var first_player_position = player_data[first_selected_player[0]][5];
        alert(first_player_position)
        for(let j = 0; j <player_data.length; j++)
        {
            if(player_data[j])
            {
                if(player_data[j][5]== first_player_position)
                {
                    let check_value = 0;
                    while (1)
                    {
                        //팀
                        if(player_list_team_second == 0)
                        {
                            check_value++;
                        }
                        else if(player_list_team_second == player_data[j][0])
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
                            if(player_data[j])
                            {
                                if(player_data[j][12])
                                {
                                    player_play_style_second = player_data[j][12].split('');
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

                        arr += "<option name = 'select_player'  value='" + j + "_" + player_data[j][0] + "_" + player_data[j][1] + "_" + player_data[j][2] + "'>" + arr_length_first + ". " + player_data[j][0] + " " + player_data[j][1] + "번 " + player_data[j][2] + "</option>";
                        arr_length_second++;
                        break;
                    }
                }
            }

        }
        document.getElementById('select_players_second').innerHTML = arr;
    }

}
