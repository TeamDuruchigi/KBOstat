function detail_player_list()
{
    var arr;
    arr = "<option name = 'select_player'  value='0'>test_zero_select</option>";
    var player_list_team = document.getElementById('Find_player_by_team').value;
    var player_list_position = document.getElementById('Find_player_by_position').value;
    var player_list_throw_hand = document.getElementById('Find_player_by_throw_hand').value;
    var player_list_throw_style = document.getElementById('Find_player_by_throw_style').value;
    var player_list_hit_hand = document.getElementById('Find_player_by_hit_hand').value;


    let arr_length_first = 1;
    if(player_data)
    {
        for(let i = 0; i <player_data.length; i++)
        {
            if(player_data[i])
            {
                // alert(player_s
                let check_value = 0;


                while (1)
                {
                    //팀


                    if(player_list_team == 0)
                    {
                        check_value++;
                    }
                    else if(player_list_team == player_data[i][0])
                    {
                        check_value++;
                    }
                    else
                    {
                        break;
                    }
                    //포지션
                    if(player_list_position == 0)
                    {
                        check_value++;
                    }
                    else if(player_list_position == player_data[i][5])
                    {
                        check_value++;
                    }
                    else
                    {
                        break;
                    }
                    var player_play_style;
                    if(player_data)
                    {
                        if(player_data[i])
                        {
                            if(player_data[i][12])
                            {
                                player_play_style = player_data[i][12].split('');
                            }
                        }
                    }
                    //투구 주손
                    if(player_list_throw_hand == 0)
                    {
                        check_value++;
                    }
                    else if(player_list_throw_hand == player_play_style[0])
                    {
                        check_value++;
                    }
                    else
                    {
                        break;
                    }
                    // 투구 폼
                    if(player_list_throw_style == 0)
                    {
                        check_value++;
                    }
                    else if(player_list_throw_style == player_play_style[1])
                    {
                        check_value++;
                    }
                    else
                    {
                        break;
                    }
                    // 타구 손
                    if(player_list_hit_hand == 0)
                    {
                        check_value++;
                    }
                    else if(player_list_hit_hand == player_play_style[2])
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
        }
        document.getElementById('select_players_first').innerHTML = arr;

    }

}
