class BankAccount {
    #balance=0;
    addBalance(amount){
        this.#balance+=amount;
    }
    getBalance(){
        return `$ ${this.#balance}`;
    }
}

let cos=new BankAccount();
cos.addBalance(1000);
console.log(cos.getBalance());