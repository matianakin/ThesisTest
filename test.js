function copyText() {
    var inputText = document.getElementById("inputText").value;
    document.getElementById("outputText").value = inputText;
    document.getElementById("outputText").setAttribute("readonly", "true");
}

function enableButton() {
    let notYetButton = document.getElementById("notYet");
    notYetButton.removeAttribute("disabled");
    notYetButton.innerHTML = "Now";
}

function newStyle() {
    document.getElementById("thisFirst").style.backgroundColor = "green";
}

function radioChange() {
  var radio1 = document.getElementById("radio1");
  var radio2 = document.getElementById("radio2");
  var img = document.getElementById("img");
  var btn = document.getElementById("notYet");
  var input = document.getElementById("inputText");

    if (radio1.checked) {
        if (!img) {
          img = document.createElement("img");
          img.src = "https://thispersondoesnotexist.com/image";
          img.id = "img";
          document.body.appendChild(img);
          }
        btn.style.backgroundColor = "white";
        input.hidden = false;
         
    } else if (radio2.checked) {
        if (img) {
            img.remove();
        }
        btn.style.backgroundColor = "blue";
        input.hidden = false;
    } else if (radio3.checked) {
        if (img) {
            img.remove();
        }
        btn.style.backgroundColor = "white";
        input.hidden = true;
    }
}
function changeClass() {
    var dropdown = document.getElementById("dropdown");
    dropdown.className = dropdown.value;
}

function updateTable() {
    var checkbox = document.getElementById("myCheck");
    var table = document.getElementById("status");
    if (checkbox.checked) {
      table.innerHTML = "Checked";
    } else {
      table.innerHTML = "Not Checked";
    }
}

function displayText() {
    var input = document.getElementById("input").value;
    document.getElementById("output").innerHTML = input;
  }