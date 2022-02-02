function goToBevis(){
    model.app.currentPage = 'bevis';
    Bevis();
}

function infoStudent(){
    let html = '';
    if (studenter = model.studenter[i].username){
        html = `
        <h3>
            Navn: ${model.studenter[i].firstName} 
                  ${model.studenter[i].middleName} 
                  ${model.studenter[i].lastName}
        </h3>
        <h3>
            Skole: ${model.studenter[i].school}
          <br>  
            Start: ${model.studenter[i].startId}
          <br>  
            Slutt: ${model.studenter[i].endId}
        </h3>
        `
    }
return html;
}