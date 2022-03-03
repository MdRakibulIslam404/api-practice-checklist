// 1. call Object method and print any property
const obj = {
    name: "Rokib",
    religion: "Islam",
    laptop: {
        brand: "hp",
        mouse: true,
        price: 20000,
    },
    products: ["mobile", "pc", "keyboard"],
    totalPrice: function (mistakeMoney) {
        this.laptop.price = this.laptop.price + mistakeMoney;
        // console.log(this.laptop.price);
        return this.laptop.price;
    },
};
const total = obj.totalPrice(10000);
// console.log(total);

// 2. declare a ` ` string var and set any 3 property dynamically
const me = `My religion is ${obj.religion}. I have a ${obj.products[1]}. This price is ${obj.laptop.price}. Thank You.`;
// console.log(me);

// 3.1 no param arrow func. return 89.
const hudai = () => 89;
// console.log(hudai());

// 3.2 parameter divided by 7
const divided7 = num => num / 7;
// console.log(divided7(14));

// 3.3 addition 2 parameter and divided by 2
const addDiv = (n1, n2) => (n1 + n2) / 2;
// console.log(addDiv(10, 10));

// 3.4 add 2 parameter with 7 and again addition 2 param result
const multi = (num1, num2) => {
    const num1Res = num1 + 7;
    const num2Res = num2 + 7;
    return num1Res + num2Res;
};
// console.log(multi(5, 5));

// 4. map an array and divided by 7 all elements
const arr = [7, 14, 28, 56, 112, 224];
const mapDiv7 = arr.map(num => num / 7);
console.log(mapDiv7);

// 5. filter an array and print only number less than 50
const less50 = arr.filter(numb => numb <= 50);
console.log(less50);

// 6. destructuring in an obj
const mySelf = {
    name: "Rokib",
    religion: "Islam",
    brand: "hp",
    mouse: true,
    price: 20000,
};
const { name, price } = mySelf;
console.log(name, price);

// 6. destructuring in an arr
const people = ["akas", "batas", "mati", "chanachur", "kotkoti"];
const balance = people[1];
console.log(balance);