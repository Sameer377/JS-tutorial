console.log("Hello sameer");
console.error("this is error");
console.warn("hi ");
console.log("hello",true);
var arr =[1,2,"sameer",4,5]
console.log(arr[2]);

function avg(a,b){
    return a/b;
}
console.log(avg(4,2));

for(i=0;i<arr.length;i++){
    console.log(arr[i])
}

arr.forEach(function(ele){
    console.log(ele);
})
console.clear()
arr =[1,2,"sameer",4,5]
//remove last element
console.log(arr ,'length : ' +arr.length);
arr.pop();
//append ele at the end of arr
arr.push("sameer");
//delete first ele
arr.shift();
console.log("length : ",arr.length);
arr=[2,3,1,4]
arr.sort();
console.log(arr);


//strings

let str="hello sameer";

console.log(str);

str.replace("hello","hi");
console.log(str);

let j = str.indexOf("e");
console.log(j);
j=str.lastIndexOf("e");
console.log(j); 

console.log(str.slice(1,3));
console.log(str);

let mydate=new Date();
console.log(mydate);
