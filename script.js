let hunger = 100;
let fun = 100;

function updateStatus() {
  document.getElementById("hunger").textContent = `${hunger}%`;
  document.getElementById("fun").textContent = `${fun}%`;
}

function feedPet() {
  hunger = Math.min(hunger + 20, 100);
  updateStatus();
}

function playWithPet() {
  fun = Math.min(fun + 20, 100);
  updateStatus();
}

// Kurangi setiap detik
setInterval(() => {
  hunger = Math.max(hunger - 1, 0);
  fun = Math.max(fun - 1, 0);
  updateStatus();
}, 1000); // 1000 ms = 1 detik

updateStatus();