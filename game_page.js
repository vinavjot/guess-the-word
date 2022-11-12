player_1_name = localStorage.getItem("player-1");
player_2_name = localStorage.getItem("player-2");

player_1_score = 0;
player_2_score = 0;
document.getElementById("player_1_name").innerHTML = player_1_name + ": ";
document.getElementById("player_2_name").innerHTML = player_2_name +": ";
document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "question turn - " + player_1_name;
document.getElementById("player_ans").innerHTML = "answer turn - " + player_2_name;
function send() {
get_word = document.getElementById("word").value;
word = get_word.toLowerCase();
console.log("word in lc = " + word);

charAt1= word.charAt(1);
console.log(charAt1);

l_d_2 = Math.floor(word.length/2);
charAt2= word.charAt(l_d_2);
console.log(charAt2);

l_m_1 = word.length-1;
charAt3 = word.charAt(l_m_1);
console.log(charAt3);

r_c_1 = word.replace(charAt1 , "_");
r_c_2 = r_c_1.replace(charAt2 , "_");
r_c_3 = r_c_2.replace(charAt3 , "_");
console.log(charAt3);

q_w = "<h4 id= 'word_display'>Q." + r_c_3+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
 check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
 row = q_w + input_box + check_button ;
  document.getElementById("output").innerHTML = row;
 document.getElementById("word").value = ""; }

ques_turn = "player-1";
ans_turn = "player-2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("ans in lc = " + answer);
    if (answer==word) {
        if (ans_turn=="player-1") {
            player_1_score= player_1_score + 1;
            document.getElementById("player_1_score").innerHTML = player_1_score;
        }
        else{
            player_2_score= player_2_score + 1;
            document.getElementById("player_2_score").innerHTML = player_2_score;
        }
    } 
    if (ques_turn=="player-1") {
        ques_turn = "player-2";
        document.getElementById("player_question").innerHTML = "question turn - " + player_2_name;
    }
    else{
        ques_turn = "player-1";
        document.getElementById("player_question").innerHTML = "question turn - " + player_1_name;
    }

 if (ans_turn=="player-1") {
        ans_turn = "player-2";
        document.getElementById("player_ans").innerHTML = "answer turn - " + player_2_name;
    }
    else{
        ans_turn = "player-1";
        document.getElementById("player_ans").innerHTML = "ans turn - " + player_1_name;
    }
    document.getElementById("output").innerHTML = "";
}


