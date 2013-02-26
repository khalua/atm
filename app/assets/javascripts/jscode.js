$(function() {
  //initialize the display
  $('#total_balance').text(global_balance);
  $('.checking_balance_output').text(checking_balance);
  $('.savings_balance_output').text(savings_balance);
  //buttons
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

function update_checking_balance_display(checking_balance)
{
  if (checking_balance === 0)
  {
    $('.checking_balance_output').addClass("zero");
  }
  $('.checking_balance_output').text(checking_balance);
  global_balance();
}

function update_savings_balance_display(savings_balance)
{
  if (savings_balance === 0)
  {
    $('.savings_balance_output').addClass("zero");
  }
  $('.savings_balance_output').text(savings_balance);
  global_balance();
}


function add_to_check(amount)
{
  amount = parseInt($('#check_edit').val());
  checking_balance += amount;
  update_checking_balance_display(checking_balance);
}

function minus_to_check(amount)
{
  amount = parseInt($('#check_edit').val());
  if(amount <= checking_balance)
  {
    checking_balance -= amount;
    update_checking_balance_display(checking_balance);
  }
  else
  {
    if(amount <= savings_balance && checking_balance >= 0)
      {
        savings_balance += checking_balance;
        checking_balance = 0;
        update_checking_balance_display(checking_balance);
        savings_balance -= amount;
        update_savings_balance_display(savings_balance);
      }
    else if (amount <= savings_balance)
      {
        savings_balance -= amount;
        update_savings_balance_display(savings_balance);
      }
    else
      {
        $('.alert').text("insufficient funds homie");
        $('.alert').addClass("zero")
      }
  }
}

function add_to_savings(amount)
{
  amount = parseInt($('#sav_edit').val());
  savings_balance += amount;
  update_savings_balance_display(savings_balance);
}

function minus_to_savings(amount)
{
  amount = parseInt($('#sav_edit').val());
  if (amount <= savings_balance)
  {
    savings_balance -= amount;
    update_savings_balance_display(savings_balance);
  }
  else
  {
    $('.alert').text("insufficient funds homie");
    $('.alert').addClass("zero")
  }

}

