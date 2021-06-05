var isPalindrome = function(s) {
    let rev=""
    let news=""
    let str = s.toLowerCase().replace(/[^a-z\d]/g, '');
    console.log(str)
      for(let i=0;i<str.length;i++){
          if(str[i]!=" " && (str.charCodeAt(i)>96 && str.charCodeAt(i)<123) || (str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57)){
              news+=str[i]
          }
      }
      for(let j=str.length-1;j>=0;j--){
        if(str[j]!=" " && (str.charCodeAt(j)>96 && str.charCodeAt(j)<123) || (str.charCodeAt(j)>=48 && str.charCodeAt(j)<=57)){
            rev+=str[j]
        }
      }
      if(rev===news){
          return true
      }
      else{
          return false
      }
  };
  console.log(isPalindrome("race a car"))
  console.log(isPalindrome("0p"))

 