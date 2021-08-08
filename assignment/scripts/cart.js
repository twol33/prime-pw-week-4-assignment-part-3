console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []
function addItem( item ){
  console.log('added', item, "to basket");
  basket.push( item );
  return true;
}

function listItems( basket ){
  return basket;
}

function empty(){
  return basket = [];
}

console.log('basket is ',  basket );
console.log('Adding apples', addItem('apples') );
console.log('basket is now,', basket );

console.log('added', addItem('pear'));
console.log('added', addItem('orange'));
console.log('basket is now,', basket );

console.log('item name: ', listItems( 'apples' ))
console.log('item name: ', listItems( 'pear' ))
console.log('item name: ', listItems( 'orange' ))
