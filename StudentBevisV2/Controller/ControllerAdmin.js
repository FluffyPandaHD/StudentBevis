// 1. Få til å se alle studenter 
//  - Sorteres etter Mnd og Årstall

// 2. Opprette Studenter. 
// - Innlogging med GetMail
// - lagg engangs passord som student må endre selv etterpå! 
//  - Opprette med fullt navn. 
//  - Start Tid.
//  - Slutt Tid.

// 3. Slett student

function goToAdmin(){
    model.app.currentPage = 'admin'
    Admin();
}



function findStudent(input){
    if(input == undefined){
     input = model.testbullshit;   
    }
    
    const foundStudents = [];
    console.log(input, 'ka Farsken?')
    const inputSplitted = input.split('-'); // 2022 jan 15
    let time = 0;

    const year = inputSplitted[0]; // år
    const month = inputSplitted[1];
 

    for(let i = 0; i < model.studenter.length; i++){
        const student = model.studenter[i];
        const dateSplitted = student.startId.split('.');
        const studentStartYear = dateSplitted[2];
        const studentStartMonth = dateSplitted[1];
       

        if(year == studentStartYear && month == studentStartMonth) 
        foundStudents.push( model.studenter[i]);
    }
    if (foundStudents.length > time ) {
        time = foundStudents.length;
        console.log(foundStudents);
        return foundStudents

    };
   
  return time;
    // Lagre funnet studenter i modellen som du så vi
    console.log('fant ikke studenter', input );

}

// function findStudent(date){
// const foundStudents = [];
// const inputSplitted = date.split("-");
// let maxTime = 0;

//     for(let i = 0; i < model.studenter.length; i++){
//         if(foundStudents > maxTime){
//             maxTime = inputSplitted;
//         }
//     }
//     return maxTime;
// }

// function test(date){
//     const fantDeg = date.split("-");
//     maxLength = 0;

//     for (let i = 0; i < fantDeg.length; i++){
//         if(fantDeg[i].length > maxLength){
//             console.log(fantDeg);
//             maxLength = fantDeg[i].length;
//         }
//         if(fantDeg == model.studenter.length){
//             maxLength = model.studenter[i];
//             return maxLength;
//         }
//     }
   
// }


function addStudent(){

}

function deleteStudent(){

}
