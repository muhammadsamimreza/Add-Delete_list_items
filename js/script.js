const addButton = document.getElementById("addBtn");
// Add list Functionality Here.........///
const addList = () => {
  const inputField = document.getElementById("inputField");
  const textValue = inputField.value;
  
  if(textValue !== ''){
    const ul = document.getElementById("ulPage");
  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox">
    <span>${textValue}</span>
    <button>Delete</button>
   `;

   ul.appendChild(li);
   inputField.value ='';
  }else{
    alert("Enter a valid text")
  }
  
};

addButton.addEventListener("click", () => {
  addList();
});


//  Delete Button Functionality Here..........//

deleteBtn.addEventListener("click", ()=>{
  const ul =  document.getElementById('ulPage');
  
  
})