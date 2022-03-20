let star;
document.querySelector("#post").style.display= "none";
document.querySelector("#get").style.display= "flex";
var btn = [...document.querySelectorAll(".stars button")];
btn.forEach(button => button.addEventListener("click",(e)=>{
    star = e.target.id;
    unactiveAll();
    for (let i = 1; i <= star; i++) {
        document.getElementById(i).classList.add("active");
    }
}));

document.querySelector("#get #a").addEventListener("click",()=>{
    document.querySelector("#get").style.display= "none";
    document.querySelector("#post p span").innerHTML = star;
    document.querySelector("#post").style.display= "flex";
    
});

function unactiveAll(){
    for (let i = 1; i <= 5; i++) {
        document.getElementById(i).classList.remove("active");
    }
        
        
}