
function player_position_graph(num){
    var first_selected_player = num.split('_');
    var first_player_position = player_data[first_selected_player[0]][5];

    if(first_player_position == "타자")
    {
        document.getElementById('radar_stat').style.left = '350px';
        var data1 = document.getElementById('data1');
        var data2 = document.getElementById('data2');
        var data3 = document.getElementById('data3');
        var data4 = document.getElementById('data4');
        var data5 = document.getElementById('data5');

        data1.innerText = "타율";
        data2.innerText = "도루";
        data3.innerText = "타점";
        data4.innerText = "홈런";
        data5.innerText = "안타";

        data1.style.left = '147px';
        data2.style.left = '-25px';
        data3.style.left = '-5px';
        data4.style.left = '110px';
        data5.style.left = '130px';

    }
    else if(first_player_position == "투수")
    {
        document.getElementById('radar_stat').style.left = '286px';
        var data1 = document.getElementById('data1');
        var data2 = document.getElementById('data2');
        var data3 = document.getElementById('data3');
        var data4 = document.getElementById('data4');
        var data5 = document.getElementById('data5');

        data1.innerText = "평균자책점";
        data2.innerText = "탈삼진";
        data3.innerText = "승";
        data4.innerText = "홀드";
        data5.innerText = "세이브";

        data1.style.left = '189px';
        data2.style.left = '-25px';
        data3.style.left = '0px';
        data4.style.left = '124px';
        data5.style.left = '144px';
    }
}