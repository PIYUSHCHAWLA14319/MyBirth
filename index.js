let endDate ='19 July 2024 12:45 PM'
document.getElementById('end_date').innerHTML =endDate;
let Inputs = document.querySelectorAll('input')
                                             //CountDown Project
let Clock=()=>{
    let End = new Date(endDate);
    let now  = new Date()
   let Diff = (End - now)/1000;
   if (Diff<0) return
   
    Inputs[0].value= Math.floor(Diff/3600/24);
    Inputs[1].value= Math.floor(Diff/3600)%24;
    Inputs[2].value = Math.floor(Diff/60)%60;
    Inputs[3].value = Math.floor(Diff)%60;
}
Clock()

setInterval(()=>{
    Clock()
},1000)