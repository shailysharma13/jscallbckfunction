//function declaration 
function Myname(name){//formal arg
    console.log(`Am pretty good ${name}`);
   // cbfn();
}
function sayhowru(name){
    console.log(`how are you ? ${name}`);
}
//function calling
Myname("abc ",sayhowru("shaily sharma"));//actual arg //callbck function(cbfn)

function world(){
    console.log("hello");
}
function Myname2(name){
    console.log(`hello` +" " +name);
}

//calling the function
setTimeout(world,2000);// 2 sec
Myname2("shaily sharma");