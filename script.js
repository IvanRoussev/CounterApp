// counter

let countEl = document.getElementById("count-el");

console.log(countEl)

let count = 0


function increment() {
    count += 1    
    console.log(count)
    countEl.textContent = count
}

// save Element

let saveEl = document.getElementById("save-el")

console.log(saveEl)

function save() {
    let countDash = count + " - "
    saveEl.textContent += countDash
    countEl.textContent = 0
    count = 0
}


// Welcome message

let welcomeEl = document.getElementById('welcome-el')

let name = "Ivan Roussev";

let greeting = "Welcome," + " " + name + " " + "to the counter app";

welcomeEl.innerText = greeting
welcomeEl.innerText += "🙂"





