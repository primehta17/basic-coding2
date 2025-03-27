//bubble sort (with third variable)
let arr=[9,34,12,55,67]
function bubblesorttemp(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(bubblesorttemp(arr));

let a=2;
let b=3;
let temp= a;
a=b;
b=temp;
console.log("a",a);
console.log("b",b);