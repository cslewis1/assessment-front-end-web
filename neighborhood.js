const restaurantBtn = document.querySelector("#restaurant");
const recBtn = document.querySelector("#recreation");
const result = document.querySelector("#randomResult");

const restaurantArr = [
  "Nibbles Kitchen & Bar",
  "SGC Chicken & Seafood",
  "Suga's Cheese Shop & Cafe",
  "Skint Chestnut Brewing",
];

const pickRestaurant = (event) => {
  const random = Math.floor(Math.random() * restaurantArr.length);
    result.textContent = `***We recommend dining at ${restaurantArr[random]}.***`
};

restaurantBtn.addEventListener("click", pickRestaurant);
