const textBox = document.getElementById("textBox");
const toCelcius = document.getElementById("toCelcius");
const toFaren = document.getElementById("toFaren");
const result = document.getElementById("result");

let temp;

function convert() {
    if(toCelcius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "℃";
    } else if(toFaren.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "℉";
    } else {
        result.textContent = "Select a unit";
    }

}