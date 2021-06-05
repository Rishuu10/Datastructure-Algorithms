var reverseString = function(s) {
  let arr=s.toString()
  let rishav=""
  for(let i=arr.length-1;i>=0;i--){
      rishav += arr[i]
  }
return rishav
};
  console.log(reverseString("gaandloda"))
