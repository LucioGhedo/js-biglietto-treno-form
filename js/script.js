let userName = "";
let userAge = "";
let userDistance = "";
let calcPrice = "";
const ticketPrice = 0.21;
let minorDiscount = "";
let overDiscount = "";
let result = ''

const generateBtn = document.getElementById('buttonGenerate');
generateBtn.addEventListener('click',
    function() {
        userName = document.getElementById("user-name").value;
        userDistance = document.getElementById("user-distance").value;
        userAge = document.getElementById("user-age").value;
        calcPrice = userDistance * ticketPrice
        if (userAge =="minorenne") {
            minorDiscount = calcPrice * 20 / 100;
            result = calcPrice - minorDiscount
        } else if (userAge == 'over') {
            overDiscount = calcPrice * 40 / 100;
            result = calcPrice - overDiscount
        } else if (userAge == 'maggiorenne') {
            result = calcPrice
        }
        let random =Math.floor((Math.random() * 10) + 1);
        let random2 = Math.floor((Math.random() * 1000) + 1);
        document.getElementById('result').append(result)
        document.getElementById('name').append(userName)
        document.getElementById('carrozza').append(random)
        document.getElementById('cp').append(random2)
    }
);

const reloadtButton = document.getElementById('reset');
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadtButton.addEventListener("click", reload, false);

