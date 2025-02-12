const dogProfiles = [
  {
    id: 1,
    name: "Bambi",
    breed: "Chihuahua",
    age: 3,
    image: "./IMAGES/girly.jpg",
  },
  {
    id: 2,
    name: "Max",
    breed: "Labrador",
    age: 5,
    image: "./IMAGES/max-2.jpg",
  },
  {
    id: 3,
    name: "Bella",
    breed: "Poodle",
    age: 4,
    image: "./IMAGES/bella.jpg",
  },
  {
    id: 4,
    name: "Charlie",
    breed: "Boxer",
    age: 2,
    image: "./IMAGES/jag.jpg",
  },
  {
    id: 5,
    name: "Lucy",
    breed: "Beagle",
    age: 6,
    image: "./IMAGES/cute dog.jpg",
  },
];

console.log("dog profiles>>", dogProfiles);

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".dog-profiles");
  // use foreach, for loop, while loop, map
  dogProfiles.map((profile) => {
    console.log("unique", profile);
    const dogCard = document.createElement("article");
    dogCard.className = "dog-card";
    dogCard.innerHTML = `
       <img src="${profile.image}">
       <h3>${profile.name}</h3>
       <p>${profile.breed}, ${profile.age} years old</p>
    `;
    dogCard.onclick = () => {
      window.location = `./HTML/profile.html?id=${profile.id}`;
    };
    container.appendChild(dogCard);
  });
});
