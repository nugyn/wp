var qty = 1;
var result = document.getElementById("qty");

function plus(){
  qty++;
  result.value = qty;
}

function minus(){
  if(qty > 0){
  qty--;
  result.value = qty;
 }
}

function submitValue(){
  if(typeof qty != number || qty <= 0){
    alert("Quantity must be a number bigger than 0!");
    return false;
  }
  else{
    return true;
  }
}
