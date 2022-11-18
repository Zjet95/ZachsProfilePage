
alert("Welcome To The Coffee Junkie Coffee Shop!");
let usersName = prompt("What is your favortie coffee type?");
usersName;
if (usersName === "") {
    alert("You didnt give me your favorite coffee type")
}
else {
    icedOrHot()
}
let yesNo = prompt("Do you want to see our Coffee selections? Please type yes or no")
if (yesNo === "yes") {
    alert("Well come on in Enjoy the great coffee selections!");
}
else {
    window.location.href =
        ("https://zjet95.github.io/ZachsProfilePage/about.html")

};

function icedOrHot() {
    let typeName = prompt("Do you enjoy iced or hot coffee?");
    console.log("The Customers favortie type of coffee is:" + typeName);
    if (typeName === "")
        alert("You didnt tell what type of coffee you enjoy")
    return typeName;
}



    //     }

// icedOrHot();
// let usersName = prompt("What is your name?");
// if (usersName == "") {
//     alert("You didnt type a name..");
// }

// function addTwoNumbers(number1,number2) {
//     let sum = number1 + number2;
//     return sum;
//     }

//     console.log(addTwoNumbers(9,5));