let getHistory = () => {
   return document.querySelector("#history-value").innerHTML;
}

let output = document.querySelector("#output-value").innerHTML

let setHistory = (num) => {
    document.querySelector("#history-value").innerHTML=num;
}

let getOutput= () => {
    return document.querySelector("#output-value").innerHTML;
}

let setOutput = (num) => {

    document.querySelector("#output-value").innerHTML=num;
}

let funcCol = document.getElementsByClassName("func");


let numCol = document.getElementsByClassName("num-char");


// iterates through function chars and adds event listner
for(let i = 0; i < funcCol.length; i++) {
    funcCol[i].addEventListener('click', (event)=>{
        if(funcCol[i].innerHTML == "AC") {
            setOutput("0");
            setHistory("0");
        }  else if(funcCol[i].innerHTML == "+") {
            setHistory(getOutput() + "+") 
            setOutput("0")
        } 
        else if(funcCol[i].innerHTML == "-") {
            setHistory(getOutput() + "-")
            setOutput("0")
        }

        else if(funcCol[i].innerHTML == "=") {
            let combined = getHistory() + getOutput()
             let result = eval(combined)
             let history = document.querySelector("#history-value").innerHTML

             setHistory(getHistory() + getOutput())
             setOutput(result)
        }

        else if(funcCol[i].innerHTML == "x") {
            setHistory(getOutput() + "*");
            setOutput("0");
        }

        else if(funcCol[i].innerHTML == "÷") {
            setHistory(getOutput() + "/")
            setOutput("0")
        }

        else if(funcCol[i].innerHTML == "^") {
            setHistory(getOutput() + "**")
            setOutput("0")
        }

        else if(funcCol[i].innerHTML == "π") {
            setHistory(getOutput() + "*3.14")
            setOutput("0")
        }

        else if(funcCol[i].innerHTML == "√") {
            setHistory(getOutput() + "**0.5")
            setOutput("0")
        }

    })
}



//iterates through num chars and adds event listner, changes output text to key pressed
for(let i = 0; i < numCol.length; i++) {
    numCol[i].addEventListener('click', (event)=>{
        // if output is 0 then replace output with num pressed
      if(document.querySelector("#output-value").innerHTML == 0) { let numClicked = event.target.innerHTML;
        setOutput(numClicked);
        // if num is not 0 concat num pressed to current output
        } else { 
            let numClicked = event.target.innerHTML
            output = getOutput()
            setOutput(output + numClicked)
        }
    } 
  )
}




