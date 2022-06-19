const computer_choice_display=document.getElementById("computer_choice");
const user_choice_display=document.getElementById("user_choice");
const result_display=document.getElementById("result");

const possible_choices=document.querySelectorAll("button");

let img_width=computer_choice_display.clientWidth;
computer_choice_display.style.minHeight=img_width+50+"px";


let user_choice;
let computer_choice;
let result;

possible_choices.forEach(possible_choice=>possible_choice.addEventListener("click", (e)=>{
    user_choice=e.target.id;
    computer_choice_display.innerHTML="";
    user_choice_display.innerHTML="";
    result_display.innerHTML="";
    setTimeout(()=>{
        generates_computer_choice();
        user_choice_display.innerHTML=`<img src="images/${user_choice}.png" alt="">`;
    }, 200);
    setTimeout(get_result, 300);
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
    computer_choice_display.innerHTML=`<img src="images/${computer_choice}.png" alt="">`;
}

function get_result(){
    if(user_choice===computer_choice){
        result="Draw";
    }
    if(computer_choice==='rock' && user_choice==="paper"){
        result="Won";
    }
    if(computer_choice==='rock' && user_choice==="scissors"){
        result="Lost";
    }
    if(computer_choice==='paper' && user_choice==="rock"){
        result="Lost";
    }
    if(computer_choice==='paper' && user_choice==="scissors"){
        result="Won";
    }
    if(computer_choice==='scissors' && user_choice==="paper"){
        result="Lost";
    }
    if(computer_choice==='scissors' && user_choice==="rock"){
        result="Won";
    }
    result_display.innerHTML=result;
}

