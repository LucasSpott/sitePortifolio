<?php 

    $hostname = "localhost";
    $username = "root";
    $password = "";
    $database = "form";
    $port = 3306;

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Headers: *');

    $conn = new mysqli($hostname, $username, $password, $database, $port);

    $body = json_decode(file_get_contents("php://input"), true);

    $nome = $_POST ['nome'];
    $email = $_POST ['email'];
    $assunto = $_POST ['assunto'];
    $msg = $_POST ['msg'];
    $tel = $_POST ['tel'];

    $sql = "INSERT INTO form (nome, email, assunto, msg, tel) VALUES ('$nome', '$email', '$assunto', '$msg', '$tel')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    mysqli_close($conn);
    ?>