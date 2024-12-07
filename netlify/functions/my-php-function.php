<?php
// my-php-function.php
header('Content-Type: application/json');

$data = array(
    "message" => "Hello, Netlify from PHP!"
);

echo json_encode($data);
