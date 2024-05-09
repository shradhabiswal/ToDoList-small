let todoList = [
    {
        item: 'Study DSA',
        duedate: '2024-05-15'
    },
    {
        item: 'Submit Project',
        duedate: '2024-05-20'
    }
];
updateList();

function addtask(){
    let inputElement = document.querySelector("#inputTask");
    let inputDATE = document.querySelector("#inputDate");
    let todoItem = inputElement.value;
    let todoDate = inputDATE.value;
    todoList.push({item: todoItem, duedate: todoDate});
    inputElement.value = '';
    inputDATE.value = '';
    updateList();
}

function updateList(){
    let listsItem = document.querySelector(".lists");
    let newHtml = '';
    for(let i = 0; i < todoList.length; i++){
        let {item, duedate} = todoList[i];
        newHtml += `
        <div class="tasks">
         <span>${item}</span>
         <span>${duedate}</span>
         <button onclick= "todoList.splice(${i}, 1);
         updateList();">Delete</button>
        </div> 
        `;
    }
    listsItem.innerHTML = newHtml;
     
}