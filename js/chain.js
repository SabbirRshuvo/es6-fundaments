const myInfo = {
  name: "jolonto kholil",
  contact: {
    phone: 43234,
    email: "abc@gmail.com",
  },
  pet: {
    name: "lofie",
    info: {
      color: "black",
      weight: "1.3kkg",
    },
  },
  food: ["apple", "orange", "papeya"],
};

console.log(myInfo?.name);
console.log(myInfo?.contact?.phone);
console.log(myInfo?.pet?.info?.color);
console.log(myInfo?.food[2]);
