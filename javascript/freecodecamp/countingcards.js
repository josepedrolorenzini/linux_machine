let count = 0;

function cc(card) {
    // Only change code below this line
    let result;
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
           count =  count + 1;
           result =   count + ' Bet';
           break;
        case 7:
        case 8:
        case 9:
          //  count = 0;
            result =   count + ' Hold';
            break;
        case 10:
        case 'J':
        case 'Q': 
        case 'K': 
        case 'A':
          count = count - 1;  
          result =   count + ' Hold';
          break;
            
    }
  
    return result;
    // Only change code above this line
  }
  
console.log(cc(2));
console.log(cc('K'));
console.log(cc('A'));
console.log(cc(7));
console.log(cc(3));
console.log(cc(2))
/*
Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
*/