let h3 = document.getElementById("letterCount")
let input = document.getElementById("evaluatedText")

input.addEventListener('input', () => {
    h3.innerText = `${input.value.length}`
})
