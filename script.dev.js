"use strict";

var getHistory = function getHistory() {
  return document.querySelector("#history-value").innerHTML;
};

var output = document.querySelector("#output-value").innerHTML;

var setHistory = function setHistory(num) {
  document.querySelector("#history-value").innerHTML = num;
};

var getOutput = function getOutput() {
  return document.querySelector("#output-value").innerHTML;
};

var setOutput = function setOutput(num) {
  document.querySelector("#output-value").innerHTML = num;
};

var funcCol = document.getElementsByClassName("func");
var numCol = document.getElementsByClassName("num-char"); // iterates through function chars and adds event listner

var _loop = function _loop(i) {
  funcCol[i].addEventListener('click', function (event) {
    if (funcCol[i].innerHTML == "AC") {
      setOutput("0");
      setHistory("0");
    } else if (funcCol[i].innerHTML == "+") {
      setHistory(getOutput() + "+");
      setOutput("0");
    } else if (funcCol[i].innerHTML == "-") {
      setHistory(getOutput() + "-");
      setOutput("0");
    } else if (funcCol[i].innerHTML == "=") {
      var combined = getHistory() + getOutput();
      var result = eval(combined);
      var history = document.querySelector("#history-value").innerHTML;
      setHistory(getHistory() + getOutput());
      setOutput(result);
    } else if (funcCol[i].innerHTML == "x") {
      setHistory(getOutput() + "*");
      setOutput("0");
    } else if (funcCol[i].innerHTML == "÷") {
      setHistory(getOutput() + "/");
      setOutput("0");
    } else if (funcCol[i].innerHTML == "^") {
      setHistory(getOutput() + "**");
      setOutput("0");
    }
  });
};

for (var i = 0; i < funcCol.length; i++) {
  _loop(i);
} //iterates through num chars and adds event listner, changes output text to key pressed


for (var _i = 0; _i < numCol.length; _i++) {
  numCol[_i].addEventListener('click', function (event) {
    // if output is 0 then replace output with num pressed
    if (document.querySelector("#output-value").innerHTML == 0) {
      var numClicked = event.target.innerHTML;
      setOutput(numClicked); // if num is not 0 concat num pressed to current output
    } else {
      var _numClicked = event.target.innerHTML;
      output = getOutput();
      setOutput(output + _numClicked);
    }
  });
}