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
  var radio3 = document.getElementById("radio3");
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
    var table = document.getElementById("myTable");
    if (checkbox.checked) {
      table.hidden = false;
    } else {
      table.hidden = true;
    }
}

function displayText() {
    // var input2 = document.getElementById("input2")
    // input2.disabled = true;
    var form = document.getElementById("thisForm");
    form.disabled=true;
  }