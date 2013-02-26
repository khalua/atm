$(function() {
  $('#total_balance').text(global_balance);
  $('.check_bal').text(checking_balance);
  $('.sav_bal').text(savings_balance);
  $('#check_add').click(add_to_check);
  $('#check_minus').click(minus_to_check);
  $('#sav_add').click(add_to_savings);
  $('#sav_minus').click(minus_to_savings);
});

//starting balance
var checking_balance = 500;
var savings_balance = 1000;
var amount = 0;

function global_balance()
{
  $('#total_balance').text(checking_balance + savings_balance);
}

function add_to_check(amount)
{
  amount = parseInt($('#check_edit').val());
  checking_balance += amount;
  global_balance();
  $('.check_bal').text(checking_balance);
}

function minus_to_check(amount)
{
  amount = parseInt($('#check_edit').val());
  checking_balance -= amount;
  global_balance();
  $('.check_bal').text(checking_balance);
}

function add_to_savings(amount)
{
  amount = parseInt($('#sav_edit').val());
  savings_balance += amount;
  global_balance();
  $('.sav_bal').text(savings_balance);
}

function minus_to_savings(amount)
{
  amount = parseInt($('#sav_edit').val());
  savings_balance -= amount;
  global_balance();
  $('.sav_bal').text(savings_balance);
}

