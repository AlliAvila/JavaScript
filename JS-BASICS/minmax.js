function minMax(arr){
    let minNum=arr[0];
    for (let i=0; i<arr.length; i++){
       if(arr[i]<minNum){
        minNum=arr[i]
       }
    }
    console.log ("minimum number is: " + minNum)
    return minNum
}

minMax([9,5,23,1,-4.22,13,64,-13])


