

function ageCalculate() {

  let birthDate = document.getElementById('bday').value;
  let name = document.getElementById('name').value;

  let mdate = birthDate.toString();
  let yearThen = parseInt(mdate.substring(0, 4), 10);
  let monthThen = parseInt(mdate.substring(5, 7), 10);
  let dayThen = parseInt(mdate.substring(8, 10), 10);

  let today = new Date();
  let birthday = new Date(yearThen, monthThen - 1, dayThen);
  //   alert(today.valueOf() + " " + birthday.valueOf());
  let differenceInMilisecond = today.valueOf() - birthday.valueOf();
  //  alert(differenceInMilisecond);

  let year_age = Math.floor(differenceInMilisecond / 31536000000);
  let day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

  if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
    alert("Happy Birthday!!!");
  }

  let month_age = Math.floor(day_age / 30);

  day_age = day_age % 30;

  let tMnt = (month_age + (year_age * 12));


  if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
    document.getElementById("age").innerHTML = ("Invalid birthday - Please try again!");
  } else {
    document.getElementById("age").innerHTML = year_age + " years ";
  }

  if (year_age < 9) {
    window.alert("Sorry " + name + " you are too young to use this site! \nPress OK to try again");
    window.location.assign("index.html");

  } else if (year_age > 12) {
    window.alert("Sorry " + name + " you are too old to use this site! \nPress OK to try again");
    window.location.assign("index.html");

  } else {
    window.alert("Welcome " + name + " I hope you have fun!");

  }
 

}