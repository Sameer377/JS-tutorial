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