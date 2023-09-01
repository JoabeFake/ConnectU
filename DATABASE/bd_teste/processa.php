<?php
include_once("conexao.php");

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);

// echo "Nome: $nome <br>";

$result_usuarios = "INSERT INTO tb_nome(Nome) VALUES('$nome')";

$resultado_usuario = mysqli_query($conn, $result_usuarios);