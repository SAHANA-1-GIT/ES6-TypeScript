class Account{
    constructor(id,name,balance)
    {
        this.id=id;
        this.name=name;
        this.balance=balance;
    }

    getBalance()
    {
        return this.balance;
    }
}

class SavingAccount extends Account{
    constructor(id,name,balance)
    {
        super(id,name,balance);
        this.interest = 5.0;
    }
}

class CurrentAccount extends Account{
    constructor(id,name,balance)
    {
        super(id,name,balance);
        this.cash_credit = 100000;
    }
}

var s1 = new SavingAccount(1,'sahana',2500);
var s2 = new SavingAccount(2,'pooja',800);

var c1 = new CurrentAccount(1,'lakshmi',3670);
var c2 = new CurrentAccount(2,'Siddu',870);

console.log("Saving acc1 ",s1);
console.log("Saving acc2 :",s2);
console.log("Current acc1 :",c1);
console.log("Current acc2 :" ,c2);

console.log("Saving acc1 balance: "+s1.getBalance());
console.log("Saving acc2 balance: "+s2.getBalance());
console.log("Current acc1 balance: "+c1.getBalance());
console.log("Current acc2 balance: "+c2.getBalance());
