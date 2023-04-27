// |||||||||||||||||||||||| Objects |||||||||||||||||||||||||||||||||||||||||||||||

// |||||||||||||||||||||||| API |||||||||||||||||||||||||||||||||||||||||||||||||||
// async function getData() {
//   const url = "";
//   const res = await fetch();
//   const data = await res.json();
//   console.log(getData);
// }
// getData();

// ||||||||||||||||||||||||||||| Icon Info ||||||||||||||||||||||||||||||||||||||||
const icon = document.getElementById("icon-info");
icon.addEventListener("click", (e) => {
  if (icon.style.height === "20px") {
    icon.style.height = "100px";
    icon.style.width = "140px";
  } else {
    icon.style.width = "40px";
    icon.style.height = "20px";
  }
});

// |||||||||||||||||||||Update - Date|||||||||||||||||||
// const updateText = document.getElementById("update");
// const date = new Date();
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// const dateFormatted = `${date.getDate()} / ${months[date.getMonth()]} / ${date.getFullYear()}`;
// updateText.textContent = `${dateFormatted}`

// Alarm ------------------->
// if (date.getDate() === 9 & date.getMonth() === 2) {}

// ||||||||||||||||| CARD HOBBIE ||||||||||||||||||
const hobbies = document.getElementById("hobbieId");
const headerHobbie = document.getElementById("headerId");
headerHobbie.addEventListener("click", () => {
  if (hobbies.style.height === "60px") {
    hobbies.style.height = "250px";
  } else {
    hobbies.style.height = "60px";
  }
});

// ||||||||||||||||| CARD SKILLS ||||||||||||||||||||
const SkillsCard = document.getElementById("cardId");
const headerCard = document.getElementById("headerCardId");
headerCardId.addEventListener("click", () => {
  if (SkillsCard.style.height === "60px") {
    SkillsCard.style.height = "250px";
  } else {
    SkillsCard.style.height = "60px";
  }
});

// ||||||||||||||||| CARD EXTRA ||||||||||||||||||
// const extraCard = document.getElementById("extra");
// const extraHead = document.getElementById("head");
// extraHead.addEventListener("click", () => {
//     if (extraCard.style.height === "60px") {
//         extraCard.style.height = "250px"
//     } else {
//         extraCard.style.height = "60px"
//     }
// })
