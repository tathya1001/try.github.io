
msgOut = document.getElementById("msg-out")
cardEl = document.getElementById("card-el")
sumEl = document.getElementById("sum-el")
let a = Math.floor(Math.random() * 11)+1
let b = Math.floor(Math.random() * 11)+1
let z = a + " " +b
let sum = a+b

function render() {
    if (sum < 21) {
        msgOut.innerText = "Want to add a new card?"
        cardEl.innerText = z
        sumEl.innerText = sum
    }
    else if (sum === 21) {
        msgOut.innerText = "You Won"
        cardEl.innerText = z
        sumEl.innerText = sum
    }
    else {
        msgOut.innerText = "You Lost"
        cardEl.innerText = z
        sumEl.innerText = sum
    }
}

function newgame() {
    let c = Math.floor(Math.random() * 11)+1
    let d = Math.floor(Math.random() * 11)+1
    z=c+" "+d
    sum=c+d
    render()
}

function newcard() {
    let n = Math.floor(Math.random() * 11)+1
    sum += n
    z = z + " " + n
    render()
}


