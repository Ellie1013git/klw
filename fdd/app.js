const appUl=document.getElementById(
    "appUl")
//const appForm=document.forms.appForm;
//console.log(appUl);
//console.log(appForm);
const schForms=Array.from(document.getElementsByClassName("schForm"))
console.log(schForms);
const schArr=[];
class Sch {
    constructor(form) {
        this. time=form.time.value;
        this. part=form.part.value;
        this. content=form.content.value;
    }
}
const printSchArr=function () {
    let str=``;
    for(let i of schArr){
        str+=`<li>
           <b> ${i.time}</b>
           <span> ${i.part}</span>
           <span> ${i.content}</span>
           </li>
        `
    };
    appUl.innerHTML=str;
}
const schSubmitHandler=function(e) {
    e.preventDefault();
    console.log(this);
    let sch=new Sch(this);
    console.log(sch);
    let schs=schArr.filter((item)=>item.time===sch.time)
    if(schs.length){
        alert("이미 운동하셨습니다. 바꾸시겠습니까?")
    }else{
        schArr.push(sch);
    };
    console.log(schArr);
    printSchArr();
}
    
    schForms.forEach((form)=>{
        form.onsubmit=schSubmitHandler;   
    });
