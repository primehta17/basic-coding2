//sum of all even(while loop)

let arr=[20,33,44,55,66,77];

let i=0,sum=0;
while(i<=arr.length-1){
    if(arr[i]%2==0){
        sum+=arr[i];
    }
    i++;
};
console.log(sum);