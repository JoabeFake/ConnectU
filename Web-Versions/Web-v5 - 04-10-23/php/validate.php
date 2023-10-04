<?php
    error_reporting(0);
    mysql_pconnect("localhost","root","3306");
    mysql_select_db("connectu");
    $username=$_POST['nome_de_usuario'];
    $password=$_POST['password'];
    $result = mysql_query("select * from  tbl_user where nome_de_usuario='$username' and senha='$password'");
    $row_count = mysql_num_rows();
    if ($row_count > 0) {
        // login correct, add some code to actually log the user in (i. e. some session stuff)
        echo "You were logged in!"; // if you want just true or false say echo 1 instead
    }
    else {
        // login incorrect
        echo "Wrong username or password!"; // or again echo 0
    }
?>