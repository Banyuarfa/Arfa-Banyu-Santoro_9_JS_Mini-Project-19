const lis = document.querySelectorAll("li");
const form = document.querySelector("form");

function handleGenap() {
  let i = 1;
  while (i < lis.length) {
    lis[i].style.color = genap.value;
    i += 2;
  }
}
function handleGanjil() {
  let i = 0;
  while (i < lis.length) {
    lis[i].style.color = ganjil.value;
    i += 2;
  }
}
