<?php

class Database {
    private $host = "localhost";
    private $db_name = "academia";
    private $username = "academia_user";
    private $password = "senha123";
    public $conn;
    
    public function connect(){
        $this->conn = null;

        try {
            $this->conn = new PDO(
                "pgsql:host={$this->host};dbname={$this->db_name}",
                $this->username,
                $this->password
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e){
            echo "Erro na conexão: " . $e->getMessage();
        }
        return $this->conn;
    }
}

