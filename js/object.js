const myInfo = {
  name: "sabbir",
  age: 22,
  address: "rajshahi ",
  contact: {
    phone: 432243,
    email: "abc@gmail.com",
  },
};

const obj2 = { ...myInfo };
obj2.married = false;
obj2.age = 26;
console.log(myInfo);
console.log(obj2);

// destructuring
const { name, age, address } = myInfo;
const {
  contact: { email },
} = myInfo;
console.log(email);

console.log(name, age, address);
