const colorElements = document.querySelectorAll('.color');
const price = document.querySelector('.price');

const colorsCount = {
    mint: 1,
    purple: 0,
    blue: 0,
}

const calculateEntriesAmount = () => Object.keys(colorsCount).reduce((acc, curr) => acc + colorsCount[curr], 0);
const calculatePrice = () => `$${calculateEntriesAmount() * 85}.00`;

colorElements.forEach(color => {
    const decreaseButton = color.querySelector('button:first-of-type');
    const increaseButton = color.querySelector('button:last-of-type');
    const countText = color.querySelector('p');

    decreaseButton.onclick = () => {
        if (colorsCount[color.classList[1]] - 1 >= 0) {
            colorsCount[color.classList[1]] -= 1;

            if (calculateEntriesAmount() < 1) {
                colorsCount[color.classList[1]] += 1;
            }

            countText.textContent = colorsCount[color.classList[1]];


            price.textContent = calculatePrice();
        }
    }

    increaseButton.onclick = () => {
        colorsCount[color.classList[1]] += 1;
        countText.textContent = colorsCount[color.classList[1]];
        
        price.textContent = calculatePrice();
    }
});
