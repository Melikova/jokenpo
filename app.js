const computer_choice_display=document.getElementById("computer_choice");
const user_choice_display=document.getElementById("user_choice");
const result_display=document.getElementById("result");

const possible_choices=document.querySelectorAll("button");

let user_choice;
let computer_choice;
let result;

possible_choices.forEach(possible_choice=>possible_choice.addEventListener("click", (e)=>{
    user_choice=e.target.id;
    user_choice_display.innerHTML=user_choice;
    generates_computer_choice();
    get_result();
}));

function generates_computer_choice(){
    const random_number=Math.floor(Math.random()*3)+1;
    if(random_number===1){
        computer_choice='rock';
    }
    if(random_number===2){
        computer_choice='paper';
    }
    if(random_number===3){
        computer_choice='scissors';
    }
    computer_choice_display.innerHTML=computer_choice;
}

function get_result(){
    if(user_choice===computer_choice){
        result="It's a draw";
    }
    if(computer_choice==='rock' && user_choice==="paper"){
        result="You won";
    }
    if(computer_choice==='rock' && user_choice==="scissors"){
        result="You lost";
    }
    if(computer_choice==='paper' && user_choice==="rock"){
        result="You lost";
    }
    if(computer_choice==='paper' && user_choice==="scissors"){
        result="You won";
    }
    if(computer_choice==='scissors' && user_choice==="paper"){
        result="You lost";
    }
    if(computer_choice==='scissors' && user_choice==="rock"){
        result="You won";
    }
    result_display.innerHTML=result;
}