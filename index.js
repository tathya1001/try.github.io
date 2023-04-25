let x = document.getElementById("out")
let c = 0
function inc() {
    c = c + 1
    x.innerText = c
    console.log(c)
}
let y = document.getElementById("prvEnt")
let s = ""
function save() {
    s = s + c + " • "
    c = 0
    y.innerText = s
    x.innerText = c
}