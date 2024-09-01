var fruits = ["Apple", "Mango", "Orange", "Pineapple", "Grapes", "Lichi", "Banana"];
var fruitsCheck = ["Watermelon", "Strawberry", "Pineapple", " Papaya", "Orange", "Mango", "Kiwi", "Blueberry", "Banana", "Apple", "Currant", "Fig", "Gooseberry", "Date", "Olive", "Tangerine", " Apricot", "Boysenberry", "Ackee", "Durian"];

var fPrint = document.getElementById('f-print');
function fSearch() {
    var fsearch = document.getElementById('f-search').value;
    fsearch = fsearch.charAt(0).toUpperCase() + fsearch.slice(1);
    // var fPrint = document.getElementById('f-print');
    if (fsearch != "") {
        if (fruits.includes(fsearch)) {
            fPrint.innerHTML = fsearch;
            fPrint.style.color = "green";
        } else {
            fPrint.innerHTML = "Not in array";
            fPrint.style.color = "red";
        }
    } else {
        fPrint.innerHTML = "Please Enter furit name"
    }
}
console.log(fruits)
console.log(fruitsCheck)

function add() {
    var fsearch = document.getElementById('f-search').value;
    fsearch = fsearch.charAt(0).toUpperCase() + fsearch.slice(1);
    // var fPrint = document.getElementById('f-print');
    if (fsearch != "") {
        if (fruitsCheck.includes(fsearch)) {
            fruits.push(fsearch);
            fPrint.innerHTML = "Furit is added to array"
            fPrint.style.color = "green"
        } else {
            fPrint.innerHTML = "This is not furit"
        }
    } else {
        fPrint.innerHTML = "Please Enter furit name"
    }
    console.log(fruits)
}