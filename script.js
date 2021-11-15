
 function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("question1").style.display = "inline-block";
  }
  
  function question2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "inline-block";
  }
  function question3() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "inline-block";
  }

  function question4() { 
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "inline-block";
  }

  function question5() {
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "inline-block";
  }

  function question6() {
    document.getElementById("question5").style.display = "none";
    document.getElementById("question6").style.display = "inline-block";
  }

  function question7() {
    document.getElementById("question6").style.display = "none";
    document.getElementById("question7").style.display = "inline-block";
  }
  function results() {
    calculateResults()
    document.getElementById("question7").style.display = "none";
    document.getElementById("results").style.display = "inline-block";
  }
  
  
  
  function calculateResults() {
    const radios1 = document.querySelectorAll('input[name="quest1"]');
    let q1Value;
    for (const rb of radios1) {
        if (rb.checked) {
            q1Value = rb.value;
            break;
        }
    }
    
    const radios2 = document.querySelectorAll('input[name="quest2"]');
    let q2Value;
    for (const rb of radios2) {
        if (rb.checked) {
            q2Value = rb.value;
            break;
        }
    }

    const radios3 = document.querySelectorAll('input[name="quest3"]');
    let q3Value;
    for (const rb of radios3) {
        if (rb.checked) {
            q3Value = rb.value;
            break;
        }
    }
    const radios4 = document.querySelectorAll('input[name="quest4"]');
    let q4Value;
    for (const rb of radios4) {
        if (rb.checked) {
            q4Value = rb.value;
            break;
        }
    }

    const radios5= document.querySelectorAll('input[name="quest5"]');
    let q5Value;
    for (const rb of radios5) {
        if (rb.checked) {
            q5Value = rb.value;
            break;
        }
    }

    const radios6= document.querySelectorAll('input[name="quest6"]');
    let q6Value;
    for (const rb of radios6) {
        if (rb.checked) {
            q6Value = rb.value;
            break;
        }
    }

    const radios7= document.querySelectorAll('input[name="quest7"]');
    let q7Value;
    for (const rb of radios7) {
        if (rb.checked) {
            q7Value = rb.value;
            break;
        }
    }
  
    let total = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value)+Number(q6Value)+Number(q7Value);
    result = total / 7;
    console.log(result);
    if (result >=3) {
      msg = "You are courageous,family is important to you,you are undaunted by challenges-you are like MULAN";
    } else if (result >= 2) {
      msg = "You are brave ,good at heart and undaunted by challenges- you are like ELSA ";
    } else {
      msg = "You are artistic,curious,maybe a little naive,but,always cheerful- you are like RAPUNZEL";
    }
  
    document.getElementById("result").innerHTML = msg
  
   }
  
