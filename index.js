document.addEventListener("keypress",function(event){
    countdigit(event.key)
});

var Count = 0;
document.querySelector("h1").innerHTML="Count :- "+Count;

function countdigit(key){
    switch(key){
        case "Enter":
            Count = Count+1;
            document.querySelector("h1").innerHTML="Count :- "+Count;
            break;
        case "Spacebar":
            alert("BSFjbdsfn");
            Count = Count+1;
            document.querySelector("h1").innerHTML="Count :- "+Count;
            break;
    }
} 

document.addEventListener("click",function(){
    Count = 0;
    document.querySelector("h1").innerHTML="Count :- "+Count;
});
