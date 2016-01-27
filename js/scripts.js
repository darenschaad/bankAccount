function BankAccount(userName, initialDeposit) {
  this.userName = userName;
  this.initialDeposit = initialDeposit;
}

BankAccount.prototype.deposit = function() {
  var depositDollars = 200;
  return this.initialDeposit = this.initialDeposit + depositDollars;
}

BankAccount.prototype.withdrawal = function() {
  var depositDollars = 100;
  return this.initialDeposit = this.initialDeposit - depositDollars;
}

$(document).ready(function() {
  $("#createAccount").click(function(){

    //click "CREATE ACCOUNT" ; resume after lunch
    var bank_name = $("#bankName").val();
    var initial_deposit = parseInt($("#bankInitialDeposit").val());

    //if nothing is entered for bank_name field or initial_deposit, send an alert
    if((bank_name === "") || isNaN(initial_deposit)){
      alert("Please enter a value for all fields.");
      $("#bankName").val('')
      parseInt($("#bankInitialDeposit").val(0));
    } else {
      //Creates BankAccount Object
      var bankAccount = new BankAccount(bank_name, initial_deposit);

      $(".bankInfo").hide();
      $(".accountInfo").show();
      $("#accountName").text(bank_name);
      $("#accountBalanceForm").val(initial_deposit);
      
