var list = new Array();
document.getElementById("ar").innerHTML = list;
function pushFunction() {

    var c = document.getElementById("number").value;
    list.push(c);
    document.getElementById("ar").innerHTML = list;
    if (Array.isArray(list)) document.getElementById("ob").innerHTML = "This object is an array";
    else document.getElementById("ob").innerHTML = "This object is not an array";

}
function popFunction() {

    var c = document.getElementById("number").value;
    var poppedEle = list.pop(c);
    //console.log(poppedEle)
    document.getElementById("ar").innerHTML = list;
    document.getElementById("pop").innerHTML = "Popped element : " + poppedEle;
    if (Array.isArray(list)) document.getElementById("ob").innerHTML = "This object is an array";
    else document.getElementById("ob").innerHTML = "This object is not an array";

}

function shiftFunction() {

    var c = document.getElementById("number").value;
    var shiftEle = list.shift(c);
    document.getElementById("ar").innerHTML = list;
    document.getElementById("pop").innerHTML = "Shifted element : " + shiftEle;
    if (Array.isArray(list)) document.getElementById("ob").innerHTML = "This object is an array";
    else document.getElementById("ob").innerHTML = "This object is not an array";

}

function unshiftFunction(){
    var c = document.getElementById("number").value;
    list.unshift(c);
    document.getElementById("ar").innerHTML = list;
    if (Array.isArray(list)) document.getElementById("ob").innerHTML = "This object is an array";
    else document.getElementById("ob").innerHTML = "This object is not an array";
}