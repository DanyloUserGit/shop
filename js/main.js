document.body.style.overflow = 'hidden';
let hiddenElement = document.getElementById("next");


function handleButtonClick() {
   hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
}