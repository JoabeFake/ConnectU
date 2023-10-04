<?php
include 'connectbanco.php';

$nome = $_POST["nome_usuario"];
$telefone = $_POST["telefone"];
$email = $_POST["email"];
$instituicao = $_POST["instituicao"];
$senha = $_POST["senha"];
$linkedin = $_POST["linkedin"];

$sql = "INSERT INTO registros (nome_usuario, telefone, email, instituicao, senha, linkedin)
VALUES ('$nome', '$telefone', '$email', '$instituicao', '$senha', '$linkedin')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>