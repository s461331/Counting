document.addEventListener("keypress",function(event){
    countdigit(event.key)
});

var count = 0;
document.querySelector("h1").innerHTML="count :- "+count;

function countdigit(key){
    switch(key){
        case "Enter":
            count = count+1;
            document.querySelector("h1").innerHTML="count :- "+count;
            break;
        case "Spacebar":
            alert("BSFjbdsfn");
            count = count+1;
            document.querySelector("h1").innerHTML="count :- "+count;
            break;
    }
} 

document.addEventListener("click",function(){
    count = 0;
    document.querySelector("h1").innerHTML="count :- "+count;
});