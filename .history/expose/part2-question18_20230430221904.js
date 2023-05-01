const intervalS = setInterval(seconds, 1000); 

function seconds() {
    let d = new Date(); 
    let time = d.toLocaleTimeString(); 
    console.log(time); 
}