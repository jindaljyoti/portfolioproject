
const date = new Date();

document.getElementById("demo").innerHTML = "Today's Date is "+ date+ ".";

const btn = document.getElementById("btn");


function random(number){

     
    return Math.floor(Math.random()* number + 1 );
}

function changeStyle(){
  const fontList = ['Times New Roman','Verdana','Arial','Courier']
  
  for(let i=0; i<fontList.length;i++){
     
      const randomValue = random(fontList.length)
      document.getElementById("demo").style.fontFamily = fontList[randomValue]     
  }
  
 
}

btn.onclick = changeStyle;