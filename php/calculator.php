<?php


?>
<form action="<?php echo $_SERVER['PHP_SELF']?>" method="get">
<input type="text"   name='num1' placeholder='num1'><br>
<input type="text"   name='num2' placeholder='num2'><br>
<select name="operator[]" id="operator">
	<option value="">--- Choose a operator ---</option>
	<option value="+">+</option>
	<option value="-">-</option>
	<option value="*">*</option>
    <option value="/">/</option>
</select>
<input type="submit" name='submit'>
</form>

<?php

if(isset($_GET['submit'])){
    $operator = $_GET['operator'];
    $num1     = $_GET['num1'];
    $num2     = $_GET['num2'];
   

    if(!empty($num1) && !empty($num2)){
        echo "form submited ";
        echo "<br>";
        $jsonencode = json_encode($operator);
        $jsonencodeNum1 = json_encode($num1);
        $jsonencodeNum2 = json_encode($num2);
            echo "<script>
            localStorage.setItem('phpdata',$jsonencode)
            localStorage.setItem('num1', $jsonencodeNum1)
            localStorage.setItem('num2', $jsonencodeNum2)
            console.log(Number(localStorage.getItem('num1')) +  Number(localStorage.getItem('num2')))
            </script>";
        foreach ($operator as $key => $value) {
            $message = " el resultado de $num1 $value $num2 es : ";
            echo  $message ;
            
            operatorSwitch($value,$num1,$num2);
            echo "<br>";
            echo $value  . " operator" ; 
            echo "<br>";
            
          }
    }else{
        echo ' <script>alert("no empty values")</script>';
    }
   
}

function operatorSwitch($value , $num1 ,$num2 ){
    switch ($value) {
        case '+':
            echo $num1 + $num2;
            break;
        case '-':
            echo $num1 - $num2;
            break;
        case '*':
            echo $num1 * $num2;
            break;
        case '/':
            echo $num1 / $num2;
            break;
        default:
           echo "Wrong operator" ; 
            break;
    }
}


function ops($e){
    $num1  = 0;
    $num2  = 0;
    $Operator = ['+' , '-' , '*' , ' /']; 
    foreach ($Operator as $key => $value) {
        echo $value ; 
        switch ($value) {
            case '+':
                echo $num1 + $num2;
                break;
            case '-':
                echo $num1 - $num2;
                break;
            case '*':
                echo $num1 * $num2;
                break;
            case '/':
                echo $num1 / $num2;
                break;
            default:
               echo "Wrong operator" ; 
                break;
        }
    }
}
