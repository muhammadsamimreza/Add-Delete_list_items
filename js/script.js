const addButton = document.getElementById("addBtn");

const addList = () => {
  const inputField = document.getElementById("inputField");
  const textValue = inputField.value;
  
  const ul = document.getElementById("ulPage");
  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox">
    <span>${textValue}</span>
    <button>Delete</button>
   `;

   ul.appendChild(li);
};

addButton.addEventListener("click", () => {
  addList();
});
