let DSA = [];
let WebDev = [];
let selectedSubject;

function displayStudents(subjectArray) {
  console.log("Enrolled students: " + (subjectArray.length > 0 ? subjectArray.join(", ") : "No students enrolled."));
}

while (true) {
  let subjectChoice = prompt("Select a subject:\nA) DSA\nB) WebDev\n(Enter A or B)");
  selectedSubject = (subjectChoice === "A") ? DSA : (subjectChoice === "B") ? WebDev : null;

  if (!selectedSubject) {
    console.log("Invalid subject choice. Please select A or B.");
    continue;
  }

  let operation = prompt("Choose an option:\nA) Enroll\nB) Unenroll\nC) Select Another Subject\nD) Exit\n(Enter A, B, C, or D)");

  if (operation === "A") {
    
    let studentName = prompt("Enter the student's name to enroll:");
    selectedSubject.push(studentName); 
    console.log(studentName + " has been enrolled.");
    displayStudents(selectedSubject);
  } else if (operation === "B") {
    
    displayStudents(selectedSubject);
    let studentName = prompt("Enter the student's name to unenroll:");
    let index = selectedSubject.indexOf(studentName);
    if (index !== -1) {
      selectedSubject.splice(index, 1); 
      console.log(studentName + " has been unenrolled.");
    } else {
      console.log(studentName + " is not in the list.");
    }
    displayStudents(selectedSubject);
  } else if (operation === "C") {
    console.log("Returning to subject selection...");
    continue; 
  } else if (operation === "D") {
    
    console.log("DSA Students: " + (DSA.length > 0 ? DSA.join(", ") : "No students enrolled."));
    console.log("WebDev Students: " + (WebDev.length > 0 ? WebDev.join(", ") : "No students enrolled."));
    console.log("Exiting the program. Goodbye!");
    break; 
  } else {
    console.log("Invalid option. Please enter A, B, C, or D.");
  }
}
