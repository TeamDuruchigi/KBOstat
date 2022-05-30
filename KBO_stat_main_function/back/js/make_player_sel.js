for(let i = 0 ; i<10; i++)
{
    document.write("<div class = 'team_select' id='"+team_name[i]+"' style='display: inline-block; text-align: center; margin-left: 20px;', onclick='team_sel_num ="+i+"; player_sel(); open_team_page();'> " +
        "<img src ='team_logo/"+team_name[i]+".png', width='70px' , height='70px'></br>" +
        "<font>"+team_name[i]+"</font></div>");
}

function open_team_page(){switch (team_sel_num) {
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
    open("back/team_page/"+team_name+"_team_function.html");
}