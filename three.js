//rotate by 1 in right

let arr= [1,2,3,4,5];
//[2,3,4,5,1]
let copy=arr[0];let len=arr.length-1;
for(let i=0;i<arr.length;i++){
    arr[i]=arr[i+1];
}
arr[arr.length-1] =copy
console.log(arr);