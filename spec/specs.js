describe('BankAccount', function(){
  it("will accept a user input for user name and initial deposit", function(){
    var testBankAccount = new BankAccount("Daren Schaad", 100);
    expect(testBankAccount.userName).to.equal("Daren Schaad");
    expect(testBankAccount.initialDeposit).to.equal(100);
  });

  it("will add a deposit method to allow the bank account to accept additional deposits from the user", function() {
    var testBankAccount = new BankAccount("Daren Schaad", 100);
    expect(testBankAccount.deposit()).to.equal(300);
  });

  it("will add a withdraw method to allow the bank account to accept withdrawals", function () {
    var testBankAccount = new BankAccount("Daren Schaad", 100);
    expect(testBankAccount.withdrawal()).to.equal(0);
  });
});
