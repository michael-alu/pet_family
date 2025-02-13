const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

if (id > 0) {
  fetch("../data/dogProfiles.json")
    .then(response => response.json())
    .then(dogProfiles => {
      const profile = dogProfiles.find(function (profile) {
        return profile.id === id;
      });

      if (profile) {
        console.log("Profile >>>", profile);

        const dogName = document.querySelector("#name");

        if (dogName) {
          dogName.innerText = profile.name;
        }

        const dogBio = document.querySelector("#bio");

        if (dogBio) {
          dogBio.innerText = `Hi, I am ${profile.name}, a hot single ${profile.breed} in your area.`;
        }
      }
    })
    .catch(error => {
      console.log("Error fetching data", error);
    });
}
