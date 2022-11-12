function addmama(){
    player_1=document.getElementById("soda baka").value;
    player_2=document.getElementById("dattebayo").value;

    localStorage.setItem("player-1" ,player_1);
    localStorage.setItem("player-2" ,player_2);

    window.location="game_page.html";
}
