 function getMonthName(monthNum) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  if (monthNum < 1 || monthNum > 12) {
    return "Invalid month number";
  }

  return months[monthNum - 1];
}

console.log(getMonthName(3)); 
console.log(getMonthName(12)); 


var dateToday = "26/03/26";
const terms = dateToday.split("/");
console.log(getMonthName(terms[1]));
