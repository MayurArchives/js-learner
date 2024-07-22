
let tudo = [];
let req =prompt("enter your request");
while (true) {
    if(req=="quit"){
        console.log("quitting app") ;  
        break;
    }
   if (req=="list"){
        console.log("--------");
        for(task of tudo){
            console.log(task);
        }
        console.log("-----");
    } else if ( req == "add"){
        let task = prompt("bsdk likh kuch");
        tudo.push(task);
        console.log("task added");

    }
    else if ( req == "delete"){
    let idx =prompt("enter your  task index");
    tudo.splice(idx,1);
    console.log("task delete");
    }
    else{
        console.log("wrong request");

    }
    req =prompt("enter your request");

}