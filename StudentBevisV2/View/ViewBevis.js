function Bevis(){
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
        <div>
            <h3> ${infoStudent()} </h3>
        </div>
    </div>

    <div class="footer">
        Bevis Siden
    </div>
    `
    document.getElementById('app').innerHTML = html;
}