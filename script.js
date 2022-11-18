
alert("Welcome To The Coffee Junkie Coffee Shop!");
let usersName = prompt("What is your favortie coffee type?");
let response
while (usersName === "") {
    alert("You didnt give me your favorite coffee type");
    usersName = prompt("What is your favorite coffee type");
    console.log(usersName);
}
response = icedOrHot()

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
    if (typeName === "") {
        alert("You didnt tell what type of coffee you enjoy")
    }
    console.log(typeName)
    return typeName;
}
document.write("<p> The Customers favortie type of coffee is " + response + "</p>")

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// let usersName = proompt

// function rateMyPage(){
//     let rating = prompt("How many stars would you rate my website")
//     for (let i = 0; i <rating; i++){
//         document.write("")
//     }
// }

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