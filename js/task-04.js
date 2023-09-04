const counterValue = document.querySelector("#value");
const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");

let currentValue = 0;

const updateCounterValue = () => {
    counterValue.textContent = currentValue;
};

const increment = () => {
    currentValue += 1;
    updateCounterValue();
};

const decrement = () => {
    currentValue -= 1;
    updateCounterValue();
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);