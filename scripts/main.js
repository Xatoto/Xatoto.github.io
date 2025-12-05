const ListItems = document.querySelectorAll("li");

function toggleDone(e) {
    if (!e.target.className){
        e.target.className = "done";
    } else {
        e.target.className = "";
    }
}

ListItems.forEach((item) => {
    item.addEventListener("click", toggleDone);
});

const myImage = document.querySelector("img"); 

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Mafia Glep.png") {
        myImage.setAttribute("src", "images/Glorp.jpg")
    } else {
        myImage.setAttribute("src", "images/Mafia Glep.png")
 }
});

let myButton = document.querySelector("button");
let myHeader = document.querySelector("h1");

function setUserName() {
   const myName = prompt("Please enter your name.");
   if (!myName) {
    setUserName();
   } else {
    localStorage.setItem("name", myName);
    myHeader.textContent = `Glep auf Flucht, ${myName}`;
}}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeader.textContent = `Glep auf Flucht, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});