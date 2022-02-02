function Forside(){
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
            <button id="adminForside" onclick="goToAdminLoggin()" >Admin loggin</button>
        <br><br>
            <input id="username" oninput="model.input.userName = this.value" type="text" placeholder="Bruker navn" ></input>
        <br><br>
            <input id="password" oninput="model.input.passWord = this.value" type="password" placeholder="Passord"></input>
        <br><br>
            <button onclick="loggIn()">Logg in</button>
        <br><br>
    </div>

    <div class="footer">
        Forside 
    </div>
    
    `;
    document.getElementById('app').innerHTML = html;
}

