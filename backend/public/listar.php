<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once "../config/Database.php";
require_once "../models/Usuario.php";

// Conexão
$database = new Database();
$db = $database->connect();

// Instanciar usuário
$usuario = new Usuario($db);

// Buscar usuários
$stmt = $usuario->listar();
$num = $stmt->rowCount();

// Verificar se há usuários
if($num > 0) {
    $usuarios_array = [];

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $usuarios_array[] = [
            "nome" => $nome,
            "email" => $email
        ];
    }

    echo json_encode($usuarios_array);
} else {
    echo json_encode(["mensagem" => "Nenhum usuário encontrado."]);
}
?>
