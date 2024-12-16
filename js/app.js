const people = [
  {
    id: 1,
    name: "johon Doe",
    age: 30,
    occupration: "software engineer",
    contact: {
      email: "john.doe@example.com",
    },
    address: {
      street: "123 main st",
      city: "san Francisco",
      state: "CA",
      zip: "8340",
    },
    social: {
      twitter: "@johndoe",
    },
    hobbies: ["coding", "hikings", "photography"],
  },
  {
    id: 2,
    name: "Jane carry",
    age: 30,
    occupration: "software engineer",
    contact: {
      email: "john.doe@example.com",
    },
  },
  {
    id: 3,
    name: "Jane cina",
    age: 30,
    occupration: "software engineer",
    contact: {
      email: "john.doe@example.com",
    },
    social: {
      twitter: "@johndoe",
    },
    hobbies: ["coding", "hikings", "photography"],
  },
];

const peopleList = document.getElementById("people-list");
console.log(peopleList);

const personInfo = document.getElementById("person-info");

const renderPeopleList = (people) => {
  people.map((person) => {
    const li = document.createElement("li");
    li.classList.add("cursor-pointer", "text-blue-500", "p-2");
    li.textContent = person.name;

    li.addEventListener("click", () => {
      handlePersonClick(person.id);
    });
    peopleList.appendChild(li);
  });
};
// hobby map cause hobby is a array
const displayPeronInfo = (person) => {
  personInfo.innerHTML = `
<h2 class="text-2xl font-bold mb-2">${person.name}</h2>
<p>City: ${person?.address?.city || "N/A"}</p>

<p>hobby: ${person?.hobbies?.map((hobby) => hobby)}</p>



`;
};

const handlePersonClick = (id) => {
  personInfo.classList.remove("hidden");
  const person = people.find((p) => p.id == id);
  displayPeronInfo(person);
};

renderPeopleList(people);
