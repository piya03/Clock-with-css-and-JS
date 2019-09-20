const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setdata(){
  const nowDate = new Date()
  const second = nowDate.getSeconds()
  const secondDegree = ((second/60)*360)+90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`
  secondHand.style.background='red'
//  console.log(second)
  
  const minutes = nowDate.getMinutes()
  const minDegree = ((minutes/60)* 360) + 90
  minuteHand.style.transform = `rotate(${minDegree}deg)`
  minuteHand.style.background = 'green'
 // console.log(minHand)
  
  const hour = nowDate.getHours()
  const hourDegree = ((hour/12)* 360)+ 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`
 // console.log(hour)
}
setInterval(setdata, 1000)