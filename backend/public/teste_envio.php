<?php

// Dados que vamos enviar para o cadastro
$dados = [
    "nome" => "Layza Teste",
    "email" => "Layza@teste.com"
];

// Inicializa o cURL
$ch = curl_init("http://localhost:8000/cadastro.php");

// Configurações do cURL
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true); // método POST
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($dados)); // envia os dados em JSON
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json"
]);

// Executa a requisição
$resposta = curl_exec($ch);
curl_close($ch);

// Exibe a resposta
echo "Resposta do servidor: " . $resposta;
