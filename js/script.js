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
  const ulPage = document.getElementById("ulPage")
  const checkedLi =  document.querySelectorAll("input[type='checkbox']:checked");
  
  checkedLi.forEach(item => {
    const itemParent = item.parentNode;
    ulPage.removeChild(itemParent);
  })
  
  
  
})