<?php
//you are given a variable $number which has either an odd or even value

// Write your code here to find out if $number is even or odd 

//don't worry about the php tags

$temp=0; //set temp to 0 if $number is even
$number=10;        //set temp to 1 if $number is odd

function evenOdd($number){
  
if($number % 2 == 0){
     echo 'even';
}else{
    echo 'odd';
}

}
evenOdd(10);

