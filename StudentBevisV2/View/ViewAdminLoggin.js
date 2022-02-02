function AdminLoggin(){
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
        <button onclick="goToForside()" >Studenter loggin</button>
        <br><br>
            <input id="userNameAdmin" oninput="model.adminInput.adminName = this.value" type="text" placeholder="Admin Navn" ></input>
        <br><br>
            <input id="passwordAdmin" oninput="model.adminInput.adminPassword = this.value" type="password" placeholder="Passord"></input>
        <br><br>
            <button onclick="loggInAdmin()">Logg in</button>
        <br><br>
    </div>

    <div class="footer">
        Admin Siden
    </div>
    `
    document.getElementById('app').innerHTML = html;
}