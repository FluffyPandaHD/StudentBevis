function Admin(){
    let html = `

    <div class="topnav">
    <a href="#home" class="active">Get Academy</a>
                    <div id="myLinks">
                        <a href="https://www.getacademy.no/kontakt/" > Kontakt </a>
                        <a href="https://www.getacademy.no/nyheter/"> Nyheter </a>
                        <a href="https://www.getacademy.no/om-oss/"> Om Oss </a>
                    </div>
                
                <a href="javascript:void(0);" class="icon" onclick="openMenu()">
            <i class="fa fa-bars"></i>
        </a>
    </div>    

    <div class="main">
        <br><br>
            <img id="imgLogo" src="img/logo.png">
        <br><br>
            <input type="month" oninput="findStudent(this.value), model.testbullshit = this.value">
            <button onclick="findStudent()">Søk etter student</button>
            <div>${showStudentInfo()}</div>
    </div>
    <br><br>

    <div class="footer"> Admin Siden </div>
    `
    document.getElementById('app').innerHTML = html;

}

function showStudentInfo(){
    let html = '';
    for(let i = 0; i < model.studenter.length; i++){
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

    }
    return html;
}
// linje 21: Lagre input-verdien fra bruker i model -> input
// linje 22: Når brukeren trykker på søk, så kjører du funksjonen findStudent(); uten parameter