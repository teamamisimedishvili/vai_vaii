

var btn = document.getElementById("addButton");

btn.onclick = function() {
   
    var task = document.getElementById("value");

    var taskList = document.getElementById("taskList");



  if(task.value.trim() !== '' ) {
   var listItem = document.createElement("li");

    var check = document.createElement("input");
    check.setAttribute("type","checkbox");
    check.classList.add("me-3");


    

    var span = document.createElement("span");
    span.innerText = task.value;
    span.setAttribute("contenteditable", "true");
    span.classList.add("spanstyle");

    
    var saveBtn = document.createElement("button");
       saveBtn.style.display = "none";
       saveBtn.setAttribute("class", "btn btn-success me-2");
       saveBtn.textContent = "Save";




       span.oninput = function() {
           saveBtn.style.display = "block";
       };

       saveBtn.onclick = function() {
           span.innerText = span.innerText;
           saveBtn.style.display = "none";
       };

   
   
    var removeButton = document.createElement("addbutton");
    removeButton.setAttribute("class", "btn btn-danger");
    removeButton.setAttribute("style", "margin-left: auto");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function() {
        taskList.removeChild(listItem);
    });

    listItem.prepend(check);
    listItem.appendChild(span);
    listItem.appendChild(saveBtn);
    taskList.appendChild(listItem);
    listItem.appendChild(removeButton);

    task.value = "";
  }

}