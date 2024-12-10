const appUl=document.getElementById(
    "appUl")
const appForm=document.forms.appForm;
//console.log(appUl);
//console.log(appForm);
const schForms=Array.from(document.getElementsByClassName("schForm"))
console.log(schForms);
const schArr=[];
class sch {
    constructor(form) {
        this.
    }
}

const schSubmitHandler=function(e) {
    e.preventDefault();
    console.log(this);
}
    
    schForms.forEach((form)=>{
        form.onsubmit=schSubmitHandler;   
    });



// const printAppObj=function(){
//     for(let key in appObj){
//         let li=document.createElement("li");
//         let b=document.createElement("b");
//         let span=document.createElement("span");

//         b.innerText=strTime(key);
//         span.innerText=appObj[key];
//         li.append(b);
//         li.append(span);
//         appUl.append(li);
//     }
// }
// const strTime=function(time){
//     let h=Math.floor(time/60);
//     let m=time%60;
//     return h+"시 "+m+"분";
// }

// printAppObj();
