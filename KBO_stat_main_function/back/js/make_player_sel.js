for(let i = 0 ; i<10; i++)
{
    document.write("<div class = 'team_select' id='"+team_name[i]+"' style='display: inline-block; text-align: center; margin-left: 20px;', onclick='team_sel_num ="+i+"; player_sel();'> " +
        "<img src ='team_logo/"+team_name[i]+".png', width='70px' , height='70px'></br>" +
        "<font>"+team_name[i]+"</font></div>");
}