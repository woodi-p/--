function plus() {
    let input = document.getElementById("number").value;
    let input2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = parseFloat(input) + parseFloat(input2);
}
function minus() {
    let input = document.getElementById("number").value;
    let input2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = parseFloat(input) - parseFloat(input2);
}
function delenie() {
    let input = document.getElementById("number").value;
    let input2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = parseFloat(input) / parseFloat(input2);
}

function umnojenie() {
    let input = document.getElementById("number").value;
    let input2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = parseFloat(input) * parseFloat(input2);
}SVGAnimateMotionElement