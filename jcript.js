let totalPrice = document.getElementById("totalPrice");
let total = document.getElementById("total");

// memory update cost
function memory(inputID) {

  let memoryGB = document.getElementById("extraMemory").innerText;
  let totalAmount = document.getElementById("totalPrice").innerText;

  // update 8Gb unified memory
  if (memoryGB > 0 && inputID === "eightGBMemory") {
    document.getElementById("extraMemory").innerText = 0;
    totalPrice.innerText = totalAmount - 180;
    total.innerText = totalAmount - 180;
  }

  // update 16Gb unified memory
  if (memoryGB === '0'  && memoryGB < 181 && inputID === 'sixteenGBMemory') {
    document.getElementById("extraMemory").innerText = 180;
    totalPrice.innerText = parseInt(totalAmount) + 180;
    total.innerText = parseInt(totalAmount) + 180;
  }
}

document.getElementById("eightGBMemory").addEventListener("click", function () {
  memory("eightGBMemory");
});

document.getElementById("sixteenGBMemory").addEventListener("click", function () {
    memory("sixteenGBMemory");
});


// update storage cost
function storage(inputID) {

  let extraStorage = document.getElementById("extraStorage").innerText;
  let totalAmount = document.getElementById("totalPrice").innerText;
  let storage = document.getElementById("extraStorage");
  
  // update 1TB SSD storage
  if (inputID === "1TB") {
    if (extraStorage === '100') {
      totalPrice.innerText = parseInt(totalAmount) + 80;
      total.innerText = parseInt(totalAmount) + 80;
    }
    if (extraStorage === '0') {
      totalPrice.innerText = parseInt(totalAmount) + 180;
      total.innerText = parseInt(totalAmount) + 180;
    }
    storage.innerText = 180;
  }

  // update 512GB SSD storage
  if (inputID === "512GB") {
    if (extraStorage === '0') {
      totalPrice.innerText = parseInt(totalAmount) + 100;
      total.innerText = parseInt(totalAmount) + 100;
    }
    if (extraStorage === '180') {
      totalPrice.innerText = parseInt(totalAmount) - 80;
      total.innerText = parseInt(totalAmount) - 80;
    }
    storage.innerText = 100;
  }

  // update 256GB SSD storage
  if (inputID === "256GB") {
    if (extraStorage === '100') {
      totalPrice.innerText = parseInt(totalAmount) - 100;
      total.innerText = parseInt(totalAmount) - 100;
    }
    if (extraStorage === '180') {
      totalPrice.innerText = parseInt(totalAmount) - 180;
      total.innerText = parseInt(totalAmount) - 180;
    }
    storage.innerText = 0;
  }
}

document.getElementById("1TB").addEventListener("click", function () {
  storage("1TB");
});

document.getElementById("512GB").addEventListener("click", function () {
  storage("512GB");
});

document.getElementById("256GB").addEventListener("click", function () {
  storage("256GB");
});


// update delivery cost
function delivery(inputID) {

  let cost = document.getElementById("deliveryCharge").innerText;
  let totalAmount = document.getElementById("totalPrice").innerText;
  let deliveryCharge = document.getElementById("deliveryCharge");

  // update Friday, Auf 25 free delivery
  if (inputID === "freeDelivery") {
    if (cost > 0) {
      totalPrice.innerText = parseInt(totalAmount) - 20;
      total.innerText = parseInt(totalAmount) - 20;
    }
    deliveryCharge.innerText = 0;
  }

  // update Friday, Auf 21 free delivery
  if (inputID === "chargeDelivery") {
    if (cost === '0') {
      totalPrice.innerText = parseInt(totalAmount) + 20;
      total.innerText = parseInt(totalAmount) + 20;
    }
    deliveryCharge.innerText = 20;
  }
}

document.getElementById("freeDelivery").addEventListener("click", function () {
  delivery("freeDelivery");
});

document.getElementById("chargeDelivery").addEventListener("click", function () {
  delivery("chargeDelivery");
});


// update promo code
document.getElementById("promoCodeBtn").addEventListener("click", function () {
  let discount = document.getElementById("promoCode").value.trim();

  if (discount === 'stevekaku') {
    let totalCost = document.getElementById('totalPrice').innerText;
    let cost = (totalCost / 100) * 20;
    console.log(cost);
    document.getElementById('total').innerText = parseFloat(totalCost - cost);
  }
  document.getElementById("promoCode").value=' ';
});
