  function goToForside(){
    model.app.currentPage = 'forisde';
    Forside();
  }
  
  function openMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function loggIn(){
    for(i = 0; i < model.studenter.length; i++){
      if(model.input.username === model.studenter[i].eMail){
        signedInn(i);
      }
    }
  }

  function signedInn(index){
    var username = model.input.userName;
    var password = model.input.passWord;
    var student = model.studenter[index];

    if(student.username === username
        &&
        student.password === password){
    goToBevis();
      }
  }
