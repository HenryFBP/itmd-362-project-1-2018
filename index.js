log = function(it) {console.log(it);}

var elems = {"email":'#email', "phone":'#phone', "birthday":'#birthday', "accept":'#accept'};
var nums = '0123456789'.split(''); // ['0', '1', '2', ..., '9']

var problemsID = '#problems ol';

var invisLi = '<li class="hidden"></li>';

function scontains(haystack, needle)
{
  // log("Seeing if '"+haystack+"' has '"+needle+"' in it.")
  return (haystack.toString().indexOf(needle) !== -1);
}

function resetValidity(elems, c='invalid')
{
  Object.keys(elems).forEach(key => {
    $(elems[key]).removeClass(c);
  });
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
  //if at least 1 number in phone number
  for(var i = 0; i < nums.length; i++)
  {
    if(scontains(phone,nums[i]))
    {
      return true;
    }
  }
  return false;
}

function checkDate(date)
{
  //if at least 1 number in date
  for(var i = 0; i < nums.length; i++)
  {
    if(scontains(date,nums[i]))
    {
      return true;
    }
  }
  return false;
}

function checkBox(box)
{
  return box["0"].checked;
}

$('#sign-up').on('submit', function(e) { //someone wants to submit
  e.preventDefault();
  
  resetValidity(elems)
  
  $(problemsID).empty();
  
  var valid = true;
  
  // check email
  if(checkEmail($(elems["email"]).val()))
  {
    log('Email OK!');
    $(problemsID).append(invisLi);
  }
  else
  {
    valid = false;
    $(elems["email"]).addClass('invalid');
    $(problemsID).append(('<li><a href="' + elems["email"] + '">Email is invalid.</a></li>'));
  }
  
  // check phone
  if(checkPhone($(elems["phone"]).val()))
  {
    log('Phone OK!');
    $(problemsID).append(invisLi);
  }
  else
  {
    valid = false;
    $(elems["phone"]).addClass('invalid');
    $(problemsID).append(('<li><a href="' + elems["phone"] + '">Phone is invalid.</a></li>'));
  }
  
  // check birthday
  if(checkDate($(elems["birthday"]).val()))
  {
    log('Birthday OK!');
    $(problemsID).append(invisLi);
  }
  else
  {
    valid = false;
    $(elems["birthday"]).addClass('invalid');
    $(problemsID).append(('<li><a href="#birthday">Birthday is invalid.</a></li>'));
  }
  
  // check TOS checkbox
  if(checkBox($(elems["accept"])))
  {
    log('TOS Ok!');
    $(problemsID).append(invisLi);
  }
  else
  {
    valid = false;
    $(elems["accept"]).addClass('invalid');
    $(problemsID).append(('<li><a href="' + elems["accept"] + '">TOS must be accepted.</a></li>'));
  }
  
  if(valid)
  {
    $('#problems').addClass('hidden');
    
    var thanks = ('<p>Thank you, ' + $('#email').val() + '.</p>');
    
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
