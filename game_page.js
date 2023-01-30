player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0
player2_score = 0
document.getElementById("player1_name").innerHTML = player1_name+":";
document.getElementById("player2_name").innerHTML = player2_name+":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question turn - "+player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - "+player2_name;
function send(){
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();

    charAtone = word.charAt(1);
    console.log(charAtone);

    lengthby2 = Math.floor(word.length/2);
    charAttwo = word.charAt(lengthby2);
    console.log(charAttwo);

    lengthminus1 = word.length-1;
    charAtthree = word.charAt(lengthminus1);
    console.log(charAtthree);

    removecharAtone = word.replace(charAtone, "_");
    removecharAttwo = removecharAtone.replace(charAttwo, "_");
    removecharAtthree = removecharAttwo.replace(charAtthree, "_");
    console.log(removecharAtthree);
    questionWord = "<h4 id = 'wordDisplay'>Question."+removecharAtthree+"</h4>";
    inputbox = "<br>Answer:<input type = 'text' id='inputCheckBox'>";
    checkButton = "<br><br> <button class = 'btn btn-primary' onclick = 'check()'>Check</button>";
    row = questionWord + inputbox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}
question_turn = "player1";
answer_turn = "player2";
function check(){
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();
    console.log(answer);
    if(answer == word){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn - "+player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn - "+player1_name;
    }
    
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn - "+player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer turn - "+player1_name;
    }
    document.getElementById("output").innerHTML = "";
}