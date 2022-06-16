function search_player()
{
    var input_player = document.getElementById('search_player_input').value;
    if(player_data)
    {
        for(let i = 0; i<player_data.length; i++)
        {
            if (player_data[i]) {
                if (player_data[i][2] == input_player) {
                    window.open("find_player.html?" + input_player +"?"+ i, "_self");
                    return;
                }

            }
        }
        alert("입력하신 '" + input_player+ "' 선수가 존재하지 않습니다.");

    }

}
