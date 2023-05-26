let startTime = new Date();
let targetTime = startTime.getTime() + 25 * 60 *1000;
let startTimeDom = document.getElementById('startTime');
startTimeDom.innerHTML = startTime;
console.log(6, targetTime);
    
setInterval(()=>{
    let nowTime = new Date();
    let leftMin = document.getElementById('leftMin');
    let leftSecond = document.getElementById('leftSec');
    let leftTime = targetTime - nowTime;
    leftMin.innerHTML = parseInt(leftTime/(1000*60));
    leftSecond.innerHTML = parseInt(leftTime/1000);
    console.log(12, nowTime.getTime(),leftTime);
    if(nowTime == targetTime){
        clearInterval();

    }
},1000);
function pause(){
    console.log(startTime);
}