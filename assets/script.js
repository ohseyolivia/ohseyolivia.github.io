const TYPING_SPEED = 50;
const SEMIPAUSE_SPEED = 500;
const PAUSE_SPEED = 900;
const ENQUIRY_EMAIL = "mailto:ocolivia.dev?subject=Enquiry&body=";
//if(window.location.href.endsWith("index.html"))window.location.href=window.location.href.replace("index.html","");
window.addEventListener("load",_=>{
    for(let item of document.getElementsByClassName("typing")){
        let content = item.getElementsByClassName("txt")[0];
        console.log(content);
        if(!content && !item.getElementsByClassName("dst")[0])continue;
        let txt=content.innerHTML;
        let i=0;
        var func=(item,txt)=>{
            if(i>=txt.length)return;
            item.getElementsByClassName("dst")[0].textContent+=txt.charAt(i);
            let _speed = TYPING_SPEED;
            if(i==",") _speed = SEMIPAUSE_SPEED;
            if(i==".") _speed = PAUSE_SPEED;
            i++;
            setTimeout(func,_speed,item,txt);
        };
        setTimeout(func,150,item,txt);
    }
    document.getElementById("scrolldown").onclick=_=>{document.getElementsByTagName("main")[0].scrollIntoView({behavior:"smooth"})}
    let gohome = document.getElementById("gohome");
    if(gohome)gohome.onclick=_=>{window.location.href="https://ocolivia.dev/"}
    let form = document.getElementById("enquiry");
    if(form){
        form.onsubmit=ev=>{
        };
    }
});
