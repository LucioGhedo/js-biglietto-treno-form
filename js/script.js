const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click',
    function() {
        // PRENDO DATI
        const userName = document.getElementById('user-name').value;
        const userKm = parseInt(document.getElementById('user-km').value);
        const userAge = document.getElementById('user-age').value;
        
        // CALCOLO + SCONTI
        const price = userKm * 0.21;
        let discount = 0;
        let offer = 'Tariffa standard'
        if(userAge === 'minorenne') {
            discount = price * 20 / 100;
            offer = 'Tariffa giovani';
        } else if (userAge === 'over') {
            offer = 'Tariffa senior';
            discount = price * 40 / 100;
        }
        const finaPrice = price - discount;
        // ALTRE INFO
        const carriageNumber = Math.floor(Math.random() * 10) + 1;
        const cpCode = Math.floor(Math.random() * 10000) + 1000;  

        // COMPILO BIGLIETTO
        document.getElementById('ticket-name').innerHTML = userName;
        document.getElementById('ticket-price').innerHTML = finaPrice.toFixed(2);
        document.getElementById('ticket-offer').innerHTML = offer;
        document.getElementById('carriage-number').innerHTML = carriageNumber;
        document.getElementById('cp-code').innerHTML = cpCode
        // RENDERE VISIBILE
        document.getElementById('ticket-container').classList.remove('hidden');
    }
);

// cancel btn
const cancelBtn = document.getElementById('cancel-btn');
cancelBtn.addEventListener('click',
    function() {
        // svuoto info ticket
        document.getElementById('ticket-name').innerHTML = '';
        document.getElementById('ticket-price').innerHTML = '';
        document.getElementById('ticket-offer').innerHTML = '';
        document.getElementById('carriage-number').innerHTML = '';
        document.getElementById('cp-code').innerHTML = '';

        // nascondo ticket
        document.getElementById('ticket-container').classList.add('hidden');

        // reset form
        document.getElementById('user-name').value = ''
        document.getElementById('user-km').value = ''
        document.getElementById('user-age').value = 'maggiorenne'
    }
);