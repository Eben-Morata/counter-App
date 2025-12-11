const myCounter = document.getElementById("myCounter");

const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;
decreaseBtn.onclick = function(){

    count--;
    myCounter.textContent = count;
};

increaseBtn.onclick = function(){

    count++;
    myCounter.textContent = count;
};

resetBtn.onclick = function(){

    count = 0;
    myCounter.textContent = count;
}