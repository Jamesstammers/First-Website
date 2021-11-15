function cost() {
  var pithCost = 100;
  
  if(document.getElementById("pithPaint").checked) {
    pithCost = pithCost+10;
  }
  if(document.getElementById("pithBrasses").checked) {
    pithCost = pithCost+50;
  }
  
   if(document.getElementById("pithCarrier").checked) {
    pithCost = pithCost+25;
  }
  
  var pithQuantity = document.getElementById("pithQuantity").value * pithCost; 
 
  return "Total = £" + pithQuantity;
}

function drumPrice() {
  var drumCost = 200;
  
  if(document.getElementById("drumSticks").checked) {
    drumCost = drumCost+15;
  }
  if(document.getElementById("drumHeads").checked) {
    drumCost = drumCost+23;
  }
  
   if(document.getElementById("drumKey").checked) {
    drumCost = drumCost+5;
  }
  
  var drumTotal = document.getElementById("drumQuantity").value * drumCost; 
 
  return "Total = £" + drumTotal;
}

function buglePrice() {
  var bugleCost = 150;
  
  if(document.getElementById("bugleCloth").checked) {
    bugleCost = bugleCost+3;
  }
  if(document.getElementById("bugleCord").checked) {
    bugleCost =bugleCost+17;
  }
  
   if(document.getElementById("bugleMouthpiece").checked) {
    bugleCost = bugleCost+35;
  }
  
  var bugleTotal = document.getElementById("bugleQuantity").value * bugleCost; 
 
  return "Total = £" + bugleTotal;
  window.bugleTotal2 = bugleTotal;
}

function openForm() {
  document.getElementById("basket").style.display = "block";
}

function closeForm() {
  document.getElementById("basket").style.display = "none";
}