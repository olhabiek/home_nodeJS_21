var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(initialBalance) {
        this.balance = initialBalance;
    }
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(initialBalance, interestRate) {
        var _this = _super.call(this, initialBalance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingsAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited ".concat(amount, " into savings account. New balance: ").concat(this.balance));
    };
    SavingsAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrew ".concat(amount, " from savings account. New balance: ").concat(this.balance));
        }
        else {
            console.log("Insufficient funds in savings account.");
        }
    };
    SavingsAccount.prototype.applyInterest = function () {
        var interest = this.balance * this.interestRate;
        this.balance += interest;
        console.log("Applied interest: ".concat(interest, ". New balance: ").concat(this.balance));
    };
    return SavingsAccount;
}(Account));
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(initialBalance, transactionFee) {
        var _this = _super.call(this, initialBalance) || this;
        _this.transactionFee = transactionFee;
        return _this;
    }
    CheckingAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited ".concat(amount, " into checking account. New balance: ").concat(this.balance));
    };
    CheckingAccount.prototype.withdraw = function (amount) {
        var totalAmount = amount + this.transactionFee;
        if (totalAmount <= this.balance) {
            this.balance -= totalAmount;
            console.log("Withdrew ".concat(amount, " (including fee ").concat(this.transactionFee, ") from checking account. New balance: ").concat(this.balance));
        }
        else {
            console.log("Insufficient funds in checking account.");
        }
    };
    return CheckingAccount;
}(Account));
var savings = new SavingsAccount(2000, 0.05); // 5% годовых
savings.deposit(700); // Внесение денег
savings.withdraw(300); // Снятие денег
savings.applyInterest(); // Начисление процентов
var checking = new CheckingAccount(1000, 10); // Счет с комиссией 10
checking.deposit(300); // Внесение денег
checking.withdraw(150); // Снятие денег с комиссией
checking.withdraw(1150); // Попытка снять больше, чем на счету
