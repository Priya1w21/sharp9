function handleFormSubmit(event){
    event.preventDefault();
    let obj={
        expense:event.target.expense.value,
        description:event.target.description.value,
        category:event.target.category.value
    };
    const string=obj.expense + "-" +obj.description + "-" + obj.category;
    const newList=document.createElement('li');
    const newListText=document.createTextNode(string);
    newList.appendChild(newListText);
    //create delete button
    const delbutton=document.createElement('button');
    delbutton.innerHTML="delete Expense";
    delbutton.addEventListener('click',function(){
        newList.remove();
    })
    newList.appendChild(delbutton);
    //create edit button
    const editbutton=document.createElement('button');
    editbutton.innerHTML="Edit Expense";
    editbutton.addEventListener('click',function(){
        newList.remove();
        event.target.expense.value=obj.expense;
        event.target.description.value=obj.description;
        event.target.category.value=obj.category;
    })
    newList.appendChild(editbutton);

    const list = document.querySelector("ul");
    list.appendChild(newList);
    event.target.reset();
}
module.exports = handleFormSubmit;