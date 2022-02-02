const model = {
    testbullshit: '',
    app:{ currentPage:'admin'}, //forside, bevis, admin, adminLoggin,
    
    input:{ userName: '', passWord: '', modelSaveInfo: '' },
    
    adminInput:{ adminName: '', adminPassword: '' },
    
    adminID:[ 
        { 
            username:'admin', 
            password:'admin', 
        },
    ],
    
    infoStudent: ' ',
    
    studenter: [
        {
            username: 'erlend@getacademy.no',
            password: '123',
            
            firstName:'Erlend',
            middleName: '',
            lastName: 'Lien',
            school: 'Get Academy',
            startId: '08.03.2021',
            endId: '18.10.2022',

        },
        {
            username: 'ragnhild@getacademy.no',
            password: '123',

            firstName:'Ragnhild',
            middleName: 'Romsdal',
            lastName: 'Paulsen',
            school: 'Get Academy',
            startId: '14.08.2017',
            endId: '18.10.2022',

        },
        {
            username: 'joakim@getacademy.no',
            password: '123',

            firstName:'Joakim',
            middleName: '',
            lastName: 'Schrøder',
            school: 'Get Academy',
            startId: '01.04.2019',
            endId: '18.10.2022',

        },
    ],

}