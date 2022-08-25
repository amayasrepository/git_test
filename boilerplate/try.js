document.getElementById("yes").onclick = function(){
    alert("Hooray ! <3");
    document.getElementById("button").style.display = "";

}

document.getElementById("no").onclick = function(){
    alert("Oops ! Option not available. you are obliged to go on a date with me");
    document.getElementById("no").style.display = "none";

}