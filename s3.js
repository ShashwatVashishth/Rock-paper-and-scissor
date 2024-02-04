let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const cs=document.querySelector("#compscore");
const us=document.querySelector("#userscore");

const getcompchoice=()=>{
    const options=["rock","paper","scissors"];
    const selected= Math.floor(Math.random()*3);
    return options[selected];
}
const drawgame=()=>{
    console.log("Its a Draw");
    msg.innerText="Game was drawn!Play Again ";
    msg.style.backgroundColor="black";
    msg.style.color="white";
}
const showwinner=(userwin)=>{
    if(userwin){
        msg.innerText="You win";
        msg.style.backgroundColor="green";
        userScore++;
        us.innerText=userScore;

    }
    else{
        msg.innerText="Computer win";
        msg.style.backgroundColor="red";
        compScore++;
        cs.innerText=compScore;
    }

}
const playgame=(userchoice)=>{
    console.log("User choice-",userchoice);
    const compchoice=getcompchoice();
    console.log("Computer choice-",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
            
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin);
    }
};
choices.forEach(choice => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        console.log("Event was clicked",userchoice)
        playgame(userchoice);
    })
    
});