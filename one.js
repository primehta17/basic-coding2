// bubble sort(without third variable)

let arr =[ 4,55,2,33,42];
function bubblesort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                arr[j] = arr[j]+arr[j+1];
                arr[j+1]=arr[j]-arr[j+1];
                arr[j]=arr[j]-arr[j+1];
            }
        }
    }
    return arr;
}
console.log(bubblesort(arr));


let a=2;
let b=3;

a=a+b;
b=a-b;
a=a-b;
console.log(a ,b);