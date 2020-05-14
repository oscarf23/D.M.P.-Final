function check() {
    var Question1=document.SportsForm.Question1.value;
    var Question2=document.SportsForm.Question2.value;
    var Question3=document.SportsForm.Question3.value;
    var Question4=document.SportsForm.Question4.value;
    var Question5=document.SportsForm.Question5.value;
    var Question6=document.SportsForm.Question6.value;
    var count=0;

    if(Question1== "a") {
        count++;
    }
    if(Question2=="a") {
        count++;
    }
    if(Question3=="a") {
        count++;
    }
    if(Question4=="a") {
        count++;
    }
    if(Question5=="a") {
        count++;
    }
    if(Question6=="a") {
        count++;
    }

    document.write(" You got" +count+ "correct!");



}



function myFunction() {
    document.getElementById("QuizAnswers").innerHTML = "#1. Soccer #2. Kansas City Chiefs #3. 4 years #5. 2014 #6. Baseball #7. France ";}