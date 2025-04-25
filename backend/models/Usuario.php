<?php

class Usuario {
    private $conn;
    private $tabela = "usuarios";

    public $nome;
    public $email;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function cadastrar(){
        $query = "INSERT INTO " . $this->tabela . " (nome, email) VALUES (:nome, :email)";

        $stmt = $this->conn->prepare($query);
        
        $this->nome = htmlspecialchars(strip_tags($this->nome));
        $this->email = htmlspecialchars(strip_tags($this->email));

        $stmt->bindParam(":nome", $this->nome);
        $stmt->bindParam(":email", $this->email);

        if($stmt->execute()) {
            return ["mensagem" => "Usuário cadastrado com sucesso!"];
        }
        
        return ["erro" => "Erro ao cadastrar usuário."];
    }

    public function listar() {
        $query = "SELECT nome, email FROM " . $this->tabela;
    
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
    
        return $stmt;
    }
    
}
