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

const a=async function () {
    try{
        let res=await fetch("../fdd/sch.json");
        if(res.status!==200) throw res.status;

        let obj=await res.json();
        console.log(obj);

        res=await fetch("../homework/l18products.json");
        if(res.status!==200) throw res.status;
        obj=await res.json();
        console.log(obj);
    }catch(e){
        alert("통신실패 :"+e)
    }
        
    }
    a();


// 입력한 시간 숫자로 바꾸기()


const strTime=function(time){
    let h=Math.floor(time/60);
    let m=time%60;
    return h+"시 "+m+"분";
    
}

const numTime=function(strTime){
    let arr=strTime.split(":");
    return Number(arr[0])*60+Number(arr[1]);
}

const appObj = {};
schArr.forEach(item => {
    console.log(item);
    
    appObj[item.time] = item;
});

console.log(appObj);


// function printAppObj() {
//     appUl.innerHTML="";
    
//     for(let key in appObj){

//         let li=document.createElement("li");
//         let b=document.createElement("b");
//         let span=document.createElement("span");
//         b.innerText=strTime(key);
//         console.log(span);
    
//         span.innerText=appObj[key];                
//         li.append(b);
//         li.append(span);
//      //   li.append(delBtn);
//         appUl.append(li);
//     }
// }
//    printAppObj();
    

function schSubmitHandler(e) {
    e.preventDefault();
    console.log(this);
    let sch=new Sch(this);
   // console.log(sch);
    // let schs=schArr.filter((item)=>item.time===sch.time)
    // if(schs.length){
    //     alert("이미 운동하셨습니다. 바꾸시겠습니까?")
    // }else{
    //     schArr.push(sch);
    // };
    // console.log(schArr);
    


    let time=this.time.value; 
    let part=this.part.value;
    let content=this.content.value;
    time=numTime(time);
    appObj[time]={
        "part":part, "content":content
    };

    function deleteArr(key){
        delete appObj[key];
        printAppObj();
  }

    function printAppObj() {
        appUl.innerHTML="";
        
        for(let key in appObj){
    
            let li=document.createElement("li");
            let b=document.createElement("b");
            let span=document.createElement("span");
            b.innerText=strTime(key);
            console.log(span);
            console.log(appObj[key]);
            span.innerText=appObj[key];
            const delBtn=document.createElement("button");
            delBtn.innerText="삭제";
            delBtn.onclick=function(){
            deleteArr(key);
            }               
            li.append(b);
            li.append(span);
            li.append(delBtn);
            appUl.append(li);
        }
    }
    printAppObj();
    console.log(appObj);
    
}
    
    schForms.forEach((form)=>{
        form.onsubmit=schSubmitHandler;   
    });
