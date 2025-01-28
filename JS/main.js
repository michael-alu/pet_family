document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector("button");
  console.log("my button", addButton);
  addButton.addEventListener("click", () => {
    alert("someone has clicked....");
  });
});
