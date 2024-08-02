const score = 100;
if(score>80){
    const power = "fly";
    console.log(`user power: ${power}`);   
}



/// using conditional operator

const debitcard = true;
const userLoggedIn =  true;
const userGoogleLoggedIn = true;
const userEmailLoggedIn = true;

if(debitcard && userLoggedIn && 2===2){
    console.log("User allowed for buy couses");
}
if(userEmailLoggedIn || userGoogleLoggedIn){
    console.log("User loggrd in");
    
}