log = function(it) {console.log(it);}

let elems = ['#email','#phone','#birthday','#accept'];
let nums = '0123456789'.split(''); // ['0', '1', '2', ..., '9']

let problemsID = '#problems ol';

let invisLi = '<li class="hidden"></li>';

function scontains(haystack, needle)
{
  // log("Seeing if '"+haystack+"' has '"+needle+"' in it.")
  return (haystack.toString().indexOf(needle) !== -1);
}

function resetValidity(elems, c='invalid')
{
  for (var i = 0; i < elems.length; i++)
  {
    $(elems[i]).removeClass(c);
  }
}

function checkEmail(email, char='@')
{
  if(scontains(email, char))
  {
    return true;
  }
  return false;
}

function checkPhone(phone)
{
  let valid = false;

  //if at least 1 number in phone number
  for(var i = 0; i < nums.length; i++)
  {
    if(scontains(phone,nums[i]))
    {
      valid = true;
    }
  }
  return valid;
}

function checkDate(date)
{
  let valid = false;

  //if at least 1 number in date
  for(var i = 0; i < nums.length; i++)
  {
    if(scontains(date,nums[i]))
    {
      valid = true;
    }
  }
  return valid;
}

function checkBox(box)
{
  return box["0"].checked;
}

$('#sign-up').on('submit', function(e) { //someone wants to submit
  e.preventDefault();
  
  resetValidity(elems)
  
  $(problemsID).empty();
  
  let valid = true;
  
  // check email
  if(checkEmail($('#email').val()))
  {
    log('Email OK!');
    $(problemsID).append(invisLi);
  }
  else
  {
    valid = false;
    $('#email').addClass('invalid');
    $(problemsID).append(('<li>Email is invalid.</li>'));
  }
  
  // check phone
  if(checkPhone($('#phone').val()))
  {
    log('Phone OK!');
    $(problemsID).append(invisLi);
  }
  else
  {
    valid = false;
    $('#phone').addClass('invalid');
    $(problemsID).append(('<li>Phone is invalid.</li>'));
  }
  
  // check birthday
  if(checkDate($('#birthday').val()))
  {
    log('Birthday OK!');
    $(problemsID).append(invisLi);
  }
  else
  {
    valid = false;
    $('#birthday').addClass('invalid');
    $(problemsID).append(('<li>Birthday is invalid.</li>'));
  }
  
  if(checkBox($('#accept')))
  {
    log('TOS Ok!');
    $(problemsID).append(invisLi);
  }
  else
  {
    valid = false;
    $('#accept').addClass('invalid');
    $(problemsID).append(('<li>TOS must be accepted.</li>'));
  }
  
  if(valid)
  {
    $('#problems').addClass('hidden');
    
    let thanks = ('<p>Thank you, ' + $('#email').val() + '.</p>');
    
    $('#sign-up').empty();
    
    $('#sign-up').append(thanks)
    
  }
  else
  {
    $('#problems').removeClass('hidden');
  }
  
})


$('document').ready(function() {
  
  log('Doc is ready!');
  
})
