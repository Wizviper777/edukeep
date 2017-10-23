i = 0;

function viewLogo() {
  document.getElementById("timeHeader").style = "position:absolute;left:-1000px;"
  document.getElementById("timeImage").style =
    "position:absolute;left:-1000px;"
  document.getElementById("submit").style =
    "position:absolute;left:-1000px;"
  document.getElementById("userInput").style =
    "position:absolute;left:-1000px;"
  document.getElementById("viewList").style =
    "position:absolute;left:-1000px;"
  document.getElementById("logo").style =
    "position:absolute;left:0px;"
  document.getElementById("addHW").style =
    "position:absolute;left:-1000px;"
  document.getElementById("plusSign").style =
    "position:absolute;left:-1000px;"

  setTimeout(sceneRec, 5000);


}
viewLogo();
document.getElementById("submit").addEventListener("click", function() {
  getRec();
})
document.getElementById("viewList").addEventListener("click", function() {
  viewList();
})
document.getElementById("addHW").addEventListener("click", function() {
  addHW();
})
document.getElementById("plusSign").addEventListener("click", function() {
  addHW();
})
document.getElementById("viewRec").addEventListener("click", function() {
  sceneRec();
})
document.getElementById("hwSubmit").addEventListener("click", function() {
  addHomework();
})
document.getElementById("x1").addEventListener("click", function() {
  clearHomework(1);
})
document.getElementById("x2").addEventListener("click", function() {
  clearHomework(2);
})
document.getElementById("x3").addEventListener("click", function() {
  clearHomework(3);
})
document.getElementById("x4").addEventListener("click", function() {
  clearHomework(4);
})
document.getElementById("x5").addEventListener("click", function() {
  clearHomework(5);
})



var items = [
  document.getElementById('1'),
  document.getElementById('2'),
  document.getElementById('3'),
  document.getElementById('4'),
  document.getElementById('5'),
  document.getElementById('6'),
  document.getElementById('7'),
  document.getElementById('8'),
  document.getElementById('9'),
  document.getElementById('10'),
];
var xitems = [
  document.getElementById('x1'),
  document.getElementById('x2'),
  document.getElementById('x3'),
  document.getElementById('x4'),
  document.getElementById('x5'),
  document.getElementById('x6'),
  document.getElementById('x7'),
  document.getElementById('x8'),
  document.getElementById('x9'),
  document.getElementById('x10'),
];
var ditems = [];
var pitems = [];

var Homework = class Homework {
  constructor(date, name, priority) {
    this.date = date;
    this.name = name;
    this.priority = priority;
  }
};

var Thing = class Thing {
  constructor(name, dif) {
    this.name = name;
    this.dif = dif;
  }
};

var currentTime;
setInterval(function() {
  currentTime = new Date()
}, 5000);


var top = 1000000000000;

function getRec() {
  for (x = 0; x < ditems.length; x++) {
    var pdate = ditems[x].date.valueOf()
    var pdif = pdate - new Date().valueOf();

    var ppriority = ditems[x].priority;
    pitems.push(new Thing(ditems[x].name, pdif * (ppriority / 5)));

  }

  for (e = 0; e < pitems.length; e++) {
    if (pitems[e].dif < top) {
      top = pitems[e];

      alert("You Should Do: " + pitems[e].name);
    }

  }
}

function clearHomework(n) {
  document.getElementById(parseInt(n)).innerHTML = '';




}

function addHomework() {
  var newHWYear = document.getElementById("hwYear").value;
  var newHWMonth = document.getElementById("hwMonth").value;
  var newHWDay = document.getElementById("hwDay").value;
  var newHWTime = document.getElementById("hwTime").value;
  var newHWFill = 0;
  var newHWName = document.getElementById("hwName").value;
  var newHWPriority = document.getElementById("hwPriority").value;
  var newHWDate = new Date(newHWYear, newHWMonth - 1, newHWDay, newHWTime, newHWFill);
  if (newHWYear == 0 || newHWMonth < 1 || newHWDay == 0 || newHWTime < 1 || newHWPriority < 1 || newHWPriority > 10 || newHWName == '' || newHWMonth > 12 || newHWDay < 0 || newHWDay > 31 || newHWTime > 24) {
    alert("Your Information Was Incorrect, Please Try Again. Remember To Fill Every Box!")
  } else {
    items[i].innerHTML = newHWName + '-' + newHWDate + ' ' + newHWPriority + ' ' + "Priority";
    ditems.push(new Homework(newHWDate, newHWName, newHWPriority));
    i++;

    viewList();

  }





}

function viewList() {
  document.getElementById("timeHeader").style = "position:absolute;left:-1000px;"
  document.getElementById("timeImage").style =
    "position:absolute;left:-1000px;"
  document.getElementById("submit").style =
    "position:absolute;left:-1000px;"
  document.getElementById("userInput").style =
    "position:absolute;left:-1000px;"
  document.getElementById("viewList").style =
    "position:absolute;left:-1000px;"





  document.getElementById("addHWHeader").style =
    "position:absolute;left:-1000px;"
  document.getElementById("viewRec").style =
    "position:absolute;left:220px;bottom:0px;"
  document.getElementById("hwYear").style =
    "position:absolute;left:-1000px;bottom:250px;"
  document.getElementById("hwMonth").style =
    "position:absolute;left:-1000px;bottom:250px;"
  document.getElementById("hwDay").style =
    "position:absolute;left:-1000px;bottom:250px;"
  document.getElementById("hwTime").style =
    "position:absolute;left:-1000px;bottom:125px;"
  document.getElementById("hwName").style =
    "position:absolute;left:-1000px;bottom:125px;"
  document.getElementById("hwPriority").style =
    "position:absolute;left:-1000px;bottom:125px;"
  document.getElementById("hwSubmit").style =
    "position:absolute;left:-1000px;bottom:75px;"
  document.getElementById("hwYearText").style =
    "position:absolute;left:-1000px;bottom:275px;"
  document.getElementById("hwMonthText").style =
    "position:absolute;left:-1000px;bottom:275px;"
  document.getElementById("hwDayText").style =
    "position:absolute;left:-1000px;bottom:275px;"
  document.getElementById("hwTimeText").style =
    "position:absolute;left:-1000px;bottom:150px;"
  document.getElementById("hwNameText").style =
    "position:absolute;left:-1000px;bottom:150px;"
  document.getElementById("hwPriorityText").style =
    "position:absolute;left:-1000px;bottom:150px;"
  document.getElementById('1').style =
    "left:50px;top:20px;"
  document.getElementById('2').style =
    "left:50px;top:40px;"
  document.getElementById('3').style =
    "left:50px;top:60px;"
  document.getElementById('4').style =
    "left:50px;top:80px;"
  document.getElementById('5').style =
    "left:50px;top:100px;"
  document.getElementById('6').style =
    "left:50px;top:120px;"
  document.getElementById('7').style =
    "left:50px;top:140px;"
  document.getElementById('8').style =
    "left:50px;top:160px;"
  document.getElementById('9').style =
    "left:50px;top:180px;"
  document.getElementById('10').style =
    "left:50px;top:200px;"
  document.getElementById('x1').style =
    "left:5px;top:20px;"
  document.getElementById('x2').style =
    "left:5px;top:40px;"
  document.getElementById('x3').style =
    "left:5px;top:60px;"
  document.getElementById('x4').style =
    "left:5px;top:80px;"
  document.getElementById('x5').style =
    "left:5px;top:100px;"
  document.getElementById('x6').style =
    "left:5px;top:120px;"
  document.getElementById('x7').style =
    "left:5px;top:140px;"
  document.getElementById('x8').style =
    "left:5px;top:160px;"
  document.getElementById('x9').style =
    "left:5px;top:180px;"
  document.getElementById('x10').style =
    "left:5px;top:200px;"

}

function addHW() {
  document.getElementById("timeHeader").style = "position:absolute;left:-1000px;"
  document.getElementById("timeImage").style =
    "position:absolute;left:-1000px;"
  document.getElementById("submit").style =
    "position:absolute;left:-1000px;"
  document.getElementById("userInput").style =
    "position:absolute;left:-1000px;"
  document.getElementById("viewList").style =
    "position:absolute;left:-1000px;"
  document.getElementById("noHW").style =
    "position:absolute;left:-1000px;"
  document.getElementById("addHWHeader").style =
    "position:absolute;left:175px;"
  document.getElementById("viewList").style =
    "position:absolute;left:235px;bottom:0px;"
  document.getElementById("viewRec").style =
    "position:absolute;left:-1000px;bottom:0px;"

  document.getElementById("hwYear").style =
    "position:absolute;left:30px;bottom:250px;"
  document.getElementById("hwMonth").style =
    "position:absolute;left:190px;bottom:250px;"
  document.getElementById("hwDay").style =
    "position:absolute;left:350px;bottom:250px;"
  document.getElementById("hwTime").style =
    "position:absolute;left:30px;bottom:125px;"
  document.getElementById("hwName").style =
    "position:absolute;left:190px;bottom:125px;"
  document.getElementById("hwPriority").style =
    "position:absolute;left:350px;bottom:125px;"
  document.getElementById("hwSubmit").style =
    "position:absolute;left:198px;bottom:75px;"
  document.getElementById("hwYearText").style =
    "position:absolute;left:30px;bottom:275px;"
  document.getElementById("hwMonthText").style =
    "position:absolute;left:190px;bottom:275px;"
  document.getElementById("hwDayText").style =
    "position:absolute;left:350px;bottom:275px;"
  document.getElementById("hwTimeText").style =
    "position:absolute;left:30px;bottom:150px;"
  document.getElementById("hwNameText").style =
    "position:absolute;left:190px;bottom:150px;"
  document.getElementById("hwPriorityText").style =
    "position:absolute;left:350px;bottom:150px;"
  document.getElementById('1').style =
    "left:-1000px;top:20px;"
  document.getElementById('2').style =
    "left:-1000px;top:40px;"
  document.getElementById('3').style =
    "left:-1000px;top:60px;"
  document.getElementById('4').style =
    "left:-1000px;top:80px;"
  document.getElementById('5').style =
    "left:-1000px;top:100px;"
  document.getElementById('6').style =
    "left:-1000px;top:120px;"
  document.getElementById('7').style =
    "left:-1000px;top:140px;"
  document.getElementById('8').style =
    "left:-1000px;top:160px;"
  document.getElementById('9').style =
    "left:-1000px;top:180px;"
  document.getElementById('10').style =
    "left:-1000px;top:200px;"
  document.getElementById('x1').style =
    "left:-1000px;top:20px;"
  document.getElementById('x2').style =
    "left:-1000px;top:40px;"
  document.getElementById('x3').style =
    "left:-1000px;top:60px;"
  document.getElementById('x4').style =
    "left:-1000px;top:80px;"
  document.getElementById('x5').style =
    "left:-1000px;top:100px;"
  document.getElementById('x6').style =
    "left:-1000px;top:120px;"
  document.getElementById('x7').style =
    "left:-1000px;top:140px;"
  document.getElementById('x8').style =
    "left:-1000px;top:160px;"
  document.getElementById('x9').style =
    "left:-1000px;top:180px;"
  document.getElementById('x10').style =
    "left:-1000px;top:200px;"




}

function sceneRec() {
  document.getElementById("logo").style =
    "position:absolute;left:-1000px;"
  document.getElementById("noHW").style =
    "position:absolute;left:-1000px;"
  document.getElementById("timeHeader").style = "position:absolute;left:0px;"
  document.getElementById("timeImage").style = "position:absolute;left:160px; bottom:100px;"
  document.getElementById("viewRec").style = "position:absolute;left:-1000px;"
  document.getElementById("submit").style =
    "position:absolute;left:165px;bottom:20px"
  document.getElementById("userInput").style =
    "position:absolute;left:-1000px;bottom:60px;"
  document.getElementById("viewList").style =
    "position:absolute;left:230px;bottom:-10px;"
  document.getElementById('1').style =
    "left:-1000px;top:20px;"
  document.getElementById('2').style =
    "left:-1000px;top:40px;"
  document.getElementById('3').style =
    "left:-1000px;top:60px;"
  document.getElementById('4').style =
    "left:-1000px;top:80px;"
  document.getElementById('5').style =
    "left:-1000px;top:100px;"
  document.getElementById('6').style =
    "left:-1000px;top:120px;"
  document.getElementById('7').style =
    "left:-1000px;top:140px;"
  document.getElementById('8').style =
    "left:-1000px;top:160px;"
  document.getElementById('9').style =
    "left:-1000px;top:180px;"
  document.getElementById('10').style =
    "left:-1000px;top:200px;"
  document.getElementById('x1').style =
    "left:-1000px;top:20px;"
  document.getElementById('x2').style =
    "left:-1000px;top:40px;"
  document.getElementById('x3').style =
    "left:-1000px;top:60px;"
  document.getElementById('x4').style =
    "left:-1000px;top:80px;"
  document.getElementById('x5').style =
    "left:-1000px;top:100px;"
  document.getElementById('x6').style =
    "left:-1000px;top:120px;"
  document.getElementById('x7').style =
    "left:-1000px;top:140px;"
  document.getElementById('x8').style =
    "left:-1000px;top:160px;"
  document.getElementById('x9').style =
    "left:-1000px;top:180px;"
  document.getElementById('x10').style =
    "left:-1000px;top:200px;"
  document.getElementById("addHW").style =
    "position:absolute;left:5px;bottom:5px"
  document.getElementById("plusSign").style =
    "position:absolute;left:15px;bottom:-15px;"




}
