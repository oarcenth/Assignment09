/*eslint-env browser*/

window.onload = function () {


// HELPER FUNCTION 
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};
var noAccountName = true, accountInput, amount, invalidInput;
// eventListeners 
$("name").addEventListener("click", function () {
    "use strict";
    accountInput = new BankAccount(window.prompt("Enter the account owner's name please "));
    noAccountName = false;
    $("results").innerHTML = accountInput.getOwnerName() + ", your current account balance is $" + accountInput.getBalance() + ".";
    }
);

$("deposit").addEventListener("click", function () {
    "use strict";
    if (noAccountName) {
        window.alert("Enter account owner's name first");
    } else {
        do {
            inputDeposit("Enter deposit amount"); 
        } while (invalidInput);
        accountInput.deposit(amount);
        $("results").innerHTML = accountInput.getOwnerName() + ", your current account balance is $" + accountInput.getBalance() + ".";
    }
});

$("withdraw").addEventListener("click", function () {
    "use strict";
    if (noAccountName) {
        window.alert("Enter account owner's name first");
    } else {
        do {
            inputWithdrawal("Enter withdrawl amount");
        } while (invalidInput);
        accountInput.withdrawal(amount);
        $("results").innerHTML = accountInput.getOwnerName() + ", your current balance is $" + accountInput.getBalance() + ".";
    }
});

// BankAccount function/closure 
function BankAccount(ownerName) {
    "use strict";
    var owner = ownerName, balance = 0;
    return {
        withdrawal: function (withdrawalAmount) {
            balance -= withdrawalAmount;
        },
        deposit: function (depositAmount) {
            balance += depositAmount;
        },
        getBalance: function () {
            return balance;
        },
        getOwnerName: function () {
            return owner;
        }
    };
}
// functions for inputs 
function inputDeposit(msg) {
    "use strict";
    var input = parseFloat(window.prompt(msg));
    if (isNaN(input)) {
        window.alert("Enter a valid amount.");
        invalidInput = true;
    } else {
        amount = input;
        invalidInput = false;
    }
}

function inputWithdrawal(msg) {
    "use strict";
    var input = parseFloat(window.prompt(msg));
    if (isNaN(input)) {
        window.alert("Enter a valid amount.");
        invalidInput = true;
    } else if (input > accountInput.getBalance()) {
        window.alert("Your withdrawal amount is higher than what you have deposited in your account.");
        invalidInput = true;
    } else {
        amount = input;
        invalidInput = false;
    }
}

};