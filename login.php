<?php


    if(isset($_POST['submit'])){
        $un=$_POST['username'];
        $ps=$_POST['password'];

        if($un=='username' && $ps=='password'){
            header('location:index.html');
            exit();
        }else{
            echo "invalid password/uername";
        }
    }
?>