const arr1 = [1, 2, 3, 4, 5, 6, 7];

arr1.forEach((item) => console.log(item));

arr1.forEach((item, index) => {
  console.log("item:", item, "index:", index);
});
