const attackBtn = document.querySelector("#attack");
const defendBtn = document.querySelector("#defend");
const healBtn = document.querySelector("#heal");
let dragonHealth = document.querySelector("#dragon-health");
let knightHealth = document.querySelector("#knight-health");


attackBtn.addEventListener("click", attackRandom);
window.addEventListener ("load", getRandomNumber);

function attackRandom() {
   let dragonHealthValue = Number(dragonHealth.innerText);
   const dragonHealthAfterAttack = dragonHealthValue - getRandomNumber(10);
   dragonHealthValue.innerText = `${dragonHealthAfterAttack}`;

   
   console.log(dragonHealthAfterAttack);
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max)
}
