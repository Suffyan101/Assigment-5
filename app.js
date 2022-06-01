// Chapter 17-20
// Question 1

// var multiArray = [[0,1],[2,3],[4,5]];

// Question 2

// var multiArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// console.log(multiArray)


// Question 3
// for(i = 1; i <= 10;  i++){
//     document.write(i + "<br>")
// }


// Question 4
// var tableName = +prompt("Enter a number to show its multiplication table")
// var tableLength = +prompt("Enter Length multiplication table")

// for(i = 1; i <= tableLength ; i++){
//     document.write(tableName + " X " + i + " = " + tableName*i + "<br>")
// }


// Question 5
// var fruits = ["apple" , "banana", "mango", "orange", "strawberry"];

// for(i = 0; i<=fruits.length-1; i++){
//     document.write("Element  at index " + i + " is " + fruits[i] + "<br>")
// }


// Question 6
// document.write("<h3>"+"Counting"+"</h3>")
// for(i = 1; i <=15 ; i++){
//     document.write(i + ", ")
// // }

// document.write("<h3>"+"Reverse counting"+"</h3>")
// var a = [1,2,3,4,5,6,7,8,9,10]
// document.write(a.reverse())
// document.write("<h3>"+"Even"+"</h3>")
// for(i = 0; i<=20; i++){
//     a = i % 2
//     if(a === 0){
//         document.write(i+ ", ")
//     }
// }
// document.write("<h3>"+"Odd"+"</h3>")
// for(i = 0; i<=20; i++){
//     a = i % 2
//     if(a !== 0){
//         document.write(i+ ", ")
//     }
// }
// document.write("<h3>"+"Series"+"</h3>")
// for(i = 1; i<=20; i++){
//     a = i % 2
//     if(a === 0){
//         document.write(i+ "k, ")
//     }
// }


// Question 7

// var valueUser = prompt("Please enter the desert name you want")
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var b = "Not Match"
// for(i = 0; i<=a.length; i++){
//     if(valueUser === a[i]){
//         b = "Match"
//         document.write(a[i])
//     }
// }
// if(b === "Not Match"){
 // document.write(valueUser+"Not Available Right Now")
// }

// Question 8

// var maxCheck = [24,53,78,91,12]
// var max = Math.max(...maxCheck)
// document.write("Array Items: "+maxCheck+"<br>")
// document.write("The Largest number is "+max) 


// Question 9 


// var maxCheck = [24,53,78,91,12]
// var max = Math.min(...maxCheck)
// document.write("Array Items: "+maxCheck+"<br>")
// document.write("The Largest number is "+max) 


// Question 10

// for(i=1;i<=20;i++){
//     document.write(i*5+", ")
// }
