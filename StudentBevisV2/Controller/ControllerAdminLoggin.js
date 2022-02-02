function goToAdminLoggin(){
    model.app.currentPage = 'adminLoggin'
    AdminLoggin();
}

function loggInAdmin(){
    for (i = 0; i < model.adminID.length; i++){
        if(model.adminInput.userNameAdmin === model.adminID[i].name){
            return signedInnAdmin();
        }
    }
}

function signedInnAdmin(){
    var userNameAdmin = model.adminInput.adminName;
    var passwordAdmin = model.adminInput.adminPassword;

    model.adminID.forEach((admin, index) => {
        if(admin.username === userNameAdmin
            &&
            admin.password === passwordAdmin){
                goToAdmin();
                console.log(model.adminID[index])
            }
        })
    }