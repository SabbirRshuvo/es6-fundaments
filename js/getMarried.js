const boys = [
  { name: "abul", job: "govt", salary: 15000 },
  { name: "babul", job: "govt", salary: 23000 },
  { name: "kabul", job: "non-govt", salary: 35000 },
  { name: "dabul", job: "non-govt", salary: 52000 },
  { name: "mabul", job: "non-govt", salary: 45000 },
];

const jamai = boys.filter(
  (pola) =>
    (pola.job === "govt" && pola.salary >= 20000) ||
    (pola.job === "non-govt" && pola.salary >= 50000)
);
console.log(jamai);

const lottery = Math.floor(Math.random() * jamai.length);
console.log(jamai[lottery].name, "tumi jitso bro");
