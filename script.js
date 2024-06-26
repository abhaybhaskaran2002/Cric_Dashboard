

let runs1 = 0;
let runs2 = 0;
let wickets1 = 0;
let wickets2 = 0;
let overs1 = 0;
let overs2 = 0;
var MAX_OVERS = parseFloat(prompt("Please enter the required number of overs: "));
var MAX_WICKETS = parseFloat(prompt("Please enter the required number of Wickets: ")); 

function updateScore1(run) {
  if (overs1 < MAX_OVERS && wickets1 < MAX_WICKETS) {
    runs1 += run;
    document.getElementById('runs1').innerText = runs1;
    updateOvers('overs1');
  }
}
function updateWickets1() {
  if (wickets1 < MAX_WICKETS) {
    wickets1 += 1;
    document.getElementById('wickets1').innerText = wickets1;
    updateOvers('overs1');
  } else {
    gameOverMessage();
  }
}

function updateNoBall1() {
  if (overs1 < MAX_OVERS && wickets1 < MAX_WICKETS) {
    runs1 += 1;
    document.getElementById('runs1').innerText = runs1;
    updateOvers('overs1');
  }
}

function updateWide1() {
  if (overs1 < MAX_OVERS && wickets1 < MAX_WICKETS) {
    runs1 += 1;
    document.getElementById('runs1').innerText = runs1;
    updateOvers('overs1');
  }
}

function updateScore2(run) {
  if (overs2 < MAX_OVERS && wickets2 < MAX_WICKETS) {
    runs2 += run;
    document.getElementById('runs2').innerText = runs2;
    updateOvers('overs2');
  }
}


function updateWickets2() {
  if (wickets2 < MAX_WICKETS) {
    wickets2 += 1;
    document.getElementById('wickets2').innerText = wickets2;
    updateOvers('overs2');
  } else {
    gameOverMessage();
  }
}

function updateNoBall2() {
  if (overs2 < MAX_OVERS && wickets2 < MAX_WICKETS) {
    runs2 += 1;
    document.getElementById('runs2').innerText = runs2;
    updateOvers('overs2');
  }
}

function updateWide2() {
  if (overs2 < MAX_OVERS && wickets2 < MAX_WICKETS) {
    runs2 += 1;
    document.getElementById('runs2').innerText = runs2;
    updateOvers('overs2');
  }
}

function updateOvers(oversId) {
  let currentOvers = parseFloat(document.getElementById(oversId).innerText);

  if (currentOvers < MAX_OVERS && (wickets1 < MAX_WICKETS || wickets2 < MAX_WICKETS)) {
    if (currentOvers % 1 === 0) {
      currentOvers += 0.1;
    } else if (currentOvers % 1 === 0.5) {
      currentOvers += 0.5;
    } else {
      currentOvers += 0.1;
    }

    document.getElementById(oversId).innerText = currentOvers.toFixed(1);
  } else {
    gameOverMessage();
  }
}

function gameOverMessage() {
  alert("Game Over!");
}


