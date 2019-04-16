
var caflag = '0';
var resultstr ='0';
var lastinput = '0';
document.getElementById("result").textContent = lastinput;
  document.getElementById("process").textContent = resultstr;

function InputNumber(btnpat){
  //入力が記号
  if(btnpat == '/'  | btnpat == '-' | btnpat == '+' | btnpat == '*'){
    caflag =1;
    if(lastinput != '/' & lastinput!='*' & lastinput!='-' & lastinput!= '+'){
      if(resultstr != '0'){
    resultstr += lastinput;
  }
  else{
    resultstr = lastinput;
  }
  }


    //resultstr += lastinput;
    lastinput = btnpat;
  }

  else
//入力が数字
  {
    if(lastinput == '/'  | lastinput == '-' | lastinput == '+' | lastinput == '*'){

        resultstr += lastinput;
        lastinput = btnpat;





    }
    else
    {
          if(btnpat != '.'){
                if(lastinput != '0'){
                  lastinput += btnpat;
                }
                else{
                lastinput = btnpat;
                }
          }
          else
          {
                  lastinput += btnpat;
          }
    }

    //lastinput+=btnpat;

}
  document.getElementById("result").textContent = lastinput;
  if(caflag == 1){
  document.getElementById("process").textContent = resultstr+lastinput;
}
else{
  document.getElementById("process").textContent = lastinput;
}
}




function OutResult(){
 //resultstr += lastinput;
  document.getElementById("result").textContent =  eval(resultstr+lastinput);
  document.getElementById("process").textContent = resultstr+lastinput;
}
function Reset(){
  resultstr = '0';
  lastinput = '0';
  caflag = 0;
  document.getElementById("result").textContent =  lastinput;
  document.getElementById("process").textContent = resultstr;
}
