function initialize(){
  sessionStorage.removeItem("counter");
}

function validateRadio(){

  value = document.querySelector('input[name="question"]:checked').value;

  var colorify = new Promise(
    function (resolve, reject){
      var answers = document.getElementsByName("question");

      for (var i = 0; i < answers.length; i++){
        if (answers[i].defaultValue == "right") {
          document.getElementById(answers[i].id).nextElementSibling.style.background = "#28a745";
        }
        else {
          document.getElementById(answers[i].id).nextElementSibling.style.background = "#f34d4d";
        }
      }
      resolve("Oh yeah");
    });

  function judge(){
    setTimeout(function(){
      if (value == "right") {
        if (sessionStorage.getItem("counter") === null) {
          sessionStorage.setItem("counter", Number(1));
        }
        else {
          sessionStorage.setItem("counter", Number(sessionStorage.getItem("counter")) + 1);
        }
        alert ("Μπράβο!");
      }
      else {
        alert ("Θα βοηθούσες περισσότερο την πόλη σου εάν δρούσες διαφορετικά :) ");
      }

      document.getElementById("myForm").submit();

    }, 0);
  }

  colorify.then(judge(), function(reason){
    console.log(reason);
  });
}

//Check if it's final page and then print results
if (document.getElementsByClassName("final").length){
  printResults();
}

function printResults(){
  if (sessionStorage.getItem("counter") === null) {
    sessionStorage.setItem("counter", Number(0));
  }

  document.getElementById("score").innerHTML = "<span class='brand'>" + sessionStorage.getItem("counter") + "</span>" + " στις 8 απαντήσεις σου ήταν σωστές.";
  document.getElementById("result").innerHTML = "Είσαι " + "<span class='brand'>" + result(sessionStorage.getItem("counter"))[0] + "</span>!";
  document.getElementById("description").innerHTML = result(sessionStorage.getItem("counter"))[1];
}

function result(x){
  if (x < 4){
    return ["Eco-disaster", "Είσαι απειλή για το περιβάλλον. Αλλά, μην απελπίζεσαι, ποτέ δεν είναι αργά για να διορθωθείς."];
  }
  else if (x < 6){
    return ["Eco-basic", "Κάτι πας να κάνεις, αλλά το αφήνεις μισό. Βάλε τα δυνατά σου, σκέψου και ξαναπροσπάθησε. Το περιβάλλον σε χρειάζεται."];
  }
  else if (x < 8){
    return ["Eco-fan", "Πολύ καλά! Σχεδόν τέλεια! Με λίγη περισσότερη προσπάθεια θα γίνεις ένας ήρωας για την πόλη μας."];
  }
  else{
    return ["Eco-hero", "Συγχαρητήρια! Αν ήταν όλοι σαν και σένα η πόλη μας θα ήταν πολύ καλύτερη. Συνέχισε έτσι!"];
  }
}
