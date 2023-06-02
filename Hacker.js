 let a = [
    "Initializing Hacking tool...",
    "Connecting to Server 1...",
    "Connection failed",
    "Connecting to server 2...",
    "Connected Successfully",
    "Retreiving Username Arqam34//%34#/!`butt`23%-67!666_78...",
    "Trying Brute Force",
    "200k passwords trying...",
    "Match Not Found",
    "Another 200k passwords trying...",
    "Match Found",
    "Fetching Password...",
    "Password Fetched successfully",
    "Happy Hacking."

 ]

const sleep = async (seconds)=>{
    return new Promise((resolve, reject) => {
setTimeout(()=>{resolve(true)},seconds * 1000)
    })
}

 const showhack = async (message) => {
   await sleep(2);
    // console.log(message)
  document.getElementById("text").innerHTML = text.innerHTML + message + "<br />"

 }


 (async ()=>{
 
 for(let i=0;i<a.length;i++){
    await showhack(a[i]);
 }
 })();

 