let createList = prompt("Do you want to create a grocery list? (y/n)");

if (createList === "y") {
  let numItems = parseInt(prompt("How many items do you want to add to your grocery list?"));

  let groceryList = []; 

  for (let i = 0; i < numItems; i++) {
    let item = prompt(`Enter item ${i + 1}:`);
    groceryList.push(item);
  }

  let groceryList_Sort = [...groceryList].sort(); 
  let groceryList_Reverse = [...groceryList].reverse(); 

  alert("Original List: " + groceryList.join(", "));
  alert("Sorted List: " + groceryList_Sort.join(", "));
  alert("Reversed List: " + groceryList_Reverse.join(", "));
} else {
  alert("No grocery list created.");
}
