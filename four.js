//rotate by left

let arr=[1,2,3,4,5];
//[5,1,2,3,4]
let last = arr[arr.length-1];
for(let i=arr.length-1;i>=0;i--){
   arr[i]=arr[i-1];
}
arr[0] =last;
console.log(arr);