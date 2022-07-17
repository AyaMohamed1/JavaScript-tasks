var idx = 0;
function createBadge() {
  let inputValue = document.getElementById("input").value;
  if (inputValue != "") {
    if (!/[^a-zA-Z0-9]/.test(inputValue)) {
      let span = document.createElement("span");
      span.innerText = inputValue;
      span.id = idx;
      span.className = "badge bg-info text-dark m-2";
      document.body.appendChild(span);
      idx += 1;
    } else {
      alert("Can't use special characters!");
    }
  } else {
    alert("Can't add empty string!");
  }

  document.getElementById("input").value = "";
}

function deleteBadge(el) {
  el.target.remove();
}

function globalEventListener(type, element, cb) {
  document.documentElement.addEventListener(type, function (e) {
    if (e.target.matches(element)) {
      if (e.target.matches("form")) {
        e.preventDefault();
      }
      cb(e);
    }
  });
}

globalEventListener("submit", "form", createBadge);

globalEventListener("click", "span", deleteBadge);
