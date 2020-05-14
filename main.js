function check() {

    var count=0;


    var Question1RadioOptions=document.getElementsByName("Question1");
    var Question1;
    for(i = 0; i < Question1RadioOptions.length; i++) { 
        if(Question1RadioOptions[i].checked) 
                Question1= Question1RadioOptions[i].value;
    }
    console.log(Question1); 
    if(Question1== "a") {
        count++;
    }


    var Question2RadioOptions=document.getElementsByName("Question2");
    var Question2;
    for(i = 0; i < Question2RadioOptions.length; i++) { 
        if(Question2RadioOptions[i].checked) 
                Question2= Question2RadioOptions[i].value;
    }
    console.log(Question2); 
    if(Question2== "a") {
        count++;
    }


    var Question3RadioOptions=document.getElementsByName("Question3");
    var Question3;
    for(i = 0; i < Question3RadioOptions.length; i++) { 
        if(Question3RadioOptions[i].checked) 
                Question3= Question3RadioOptions[i].value;
    }
    console.log(Question3); 
    if(Question3== "a") {
        count++;
    }

    var Question4RadioOptions=document.getElementsByName("Question4");
    var Question4;
    for(i = 0; i < Question4RadioOptions.length; i++) { 
        if(Question4RadioOptions[i].checked) 
                Question4= Question4RadioOptions[i].value;
    }
    console.log(Question4); 
    if(Question4== "a") {
        count++;
    }

    var Question5RadioOptions=document.getElementsByName("Question5");
    var Question5;
    for(i = 0; i < Question5RadioOptions.length; i++) { 
        if(Question5RadioOptions[i].checked) 
                Question5= Question5RadioOptions[i].value;
    }
    console.log(Question5); 
    if(Question5== "a") {
        count++;
    }

    var Question6RadioOptions=document.getElementsByName("Question6");
    var Question6;
    for(i = 0; i < Question6RadioOptions.length; i++) { 
        if(Question6RadioOptions[i].checked) 
                Question6= Question6RadioOptions[i].value;
    }
    console.log(Question6); 
    if(Question6== "a") {
        count++;
    }

    alert("You got" +count+ "correct!");
    return true;


    
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