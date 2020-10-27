
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [
  {
      question: "Inside which HTML element do we put the JavaScript ",
      a: "scripting",
      b: "js",
      c: "javascript",
      answer: "B"
    },
  {
      question: "The external JavaScript file must contain the <script> tag ",
      a: "True",
      b: "False",
      c: "None",
      answer: "C"
    },
  {
      question: "How do you write in an alert box? ",
      a: "Alert",
      b: "alertBox",
      c: "msg",
      answer: "A"
    },
 
  ];

function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    
    pos = 0;
    correct = 0;
    
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  
  test.innerHTML = "<h3>"+question+"</h3>";
  
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  
  if(choice == questions[pos].answer){
    
    correct++;
  }
  
  pos++;
  
  renderQuestion();
}

window.addEventListener("load", renderQuestion);