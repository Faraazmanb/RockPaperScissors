let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const genCompChoice=()=>
{
    const options=["rock","paper","scissor"];
    const randindx=Math.floor(Math.random()*3);
    return options[randindx];
    //rock,paper,scissors
}

const drawGame=()=>
{
    
    msg.innerText="Game Was Draw.Play Again!"
    msg.style.backgroundColor="#081b31";

}

const showWinner=(userwin,userchoiceId,CompChoice)=>
{
    if(userwin)
    {
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You Win! Your ${userchoiceId} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You Lost! ${userchoiceId} beats your ${CompChoice}`;
        msg.style.backgroundColor="red";
    }
}


const playGame=(userchoiceId)=>
{
    //Generate computer choice-> modular
    const CompChoice= genCompChoice();

    if(userchoiceId===CompChoice)
    {
        //draw
        drawGame();
    }
    else
    {
        let userwin=true;
        if(userchoiceId==="rock")
        {
            //scissors, paper
            userwin=CompChoice==="paper" ? false :true;
        }
        else if (userchoiceId==="paper")
        {
            // rock,scissors 
            userwin=CompChoice==="scissor" ? false :true;
        }
        else
        {
            //rock,paper
            userwin=CompChoice==="rock" ? false :true;
        }
        showWinner(userwin,userchoiceId,CompChoice);
    }
};

choices.forEach((choice)=>
{
    console.log(choice); //each particular div getting printed
    choice.addEventListener("click",()=>
    {
        const userchoiceId = choice.getAttribute("id");
        console.log("Choice was Clicked",userchoiceId);     
        playGame(userchoiceId);   

    })

});