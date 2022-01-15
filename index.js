function scuberGreetingForFeet(feetNumber){
  if (feetNumber > 2500)
    return 'No can do.'
  else if (feetNumber >= 2000) 
    return 'I will gladly take your thirty bucks.'
  else if (feetNumber <= 400)
    return 'This one is on me!'
}

function ternaryCheckCity(someCity){
return (someCity === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tipCharm){
switch (tipCharm){
  case 'generous':
    return 'Thank you so much.';
    break;
  case 'not as generous':
    return 'Thank you.'
    break;
  default:
    return 'Bye.';
    break;
}
}