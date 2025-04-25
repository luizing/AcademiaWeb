<?php
// 1. Permitir que qualquer frontend acesse (CORS)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// 2. Incluir os arquivos necessários (conexão e model)
require_once("../config/Database.php");
require_once("../models/Usuario.php");

// 3. Capturar os dados recebidos (em JSON)
$dadosRecebidos = json_decode(file_get_contents("php://input"));

if (!empty($dadosRecebidos->nome) && !empty($dadosRecebidos->email)) {
    // 4. Criar instância da conexão com o banco
    $database = new Database();
    $db = $database->connect();

    // 5. Criar instância do model Usuario
    $usuario = new Usuario($db);
    $usuario->nome = $dadosRecebidos->nome;
    $usuario->email = $dadosRecebidos->email;

    // 6. Tentar cadastrar e retornar a resposta
    $resultado = $usuario->cadastrar();
    echo json_encode($resultado);
} else {
    // 7. Dados faltando
    echo json_encode(["erro" => "Dados incompletos."]);
}
