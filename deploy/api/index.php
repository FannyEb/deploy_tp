<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Tuupola\Middleware\HttpBasicAuthentication;
use \Firebase\JWT\JWT;
require __DIR__ . '/../vendor/autoload.php';
 
const JWT_SECRET = "makey1234567";

$app = AppFactory::create();

//create JWT
function createJWT(Response $response): Response{

    $issuedAt = time();
    $expirationTime = $issuedAt + 600;
    $payload = array(
        'userid' => '1',
        'email' => 'fannyeber@gmail.com',
        'pseudo' => 'pandabrutie',
        'iat' => $issuedAt,
        'exp' => $expirationTime
    );
    $token_jwt = JWT::encode($payload, JWT_SECRET, "HS256");
    $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");
    
    return $response;
}

//login
$app->post('/api/login', function (Request $request, Response $response, $args) {   
    $err=false;
    $body = $request->getParsedBody(); 
    $login = $body ['login'] ?? ""; 
    $password = $body ['password'] ?? "";

    //check format login and password
    if (empty($login) || empty($password) || !preg_match("/^[a-zA-Z0-9]+$/", $login) || !preg_match("/^[a-zA-Z0-9]+$/", $password)) {
        $err=true;
    }
 
    if (!$err) {
        $response = createJwT($response);
        $data = array('login' => $login);
        $response->getBody()->write(json_encode($data));
    }
    else{          
        $response = $response->withStatus(401);
    }
    return $response;
});

//hello
$app->get('/api/hello/{name}', function (Request $request, Response $response, $args) {
    $array = [];
    $array ["nom"] = $args ['name'];
    $response->getBody()->write(json_encode ($array));
    return $response;
});

//get user 
$app->get('/api/user', function (Request $request, Response $response, $args) {
    $array = [];
    $array ["nom"] = "Eber";
    $array ["prenom"] = "Fanny";
    $response->getBody()->write(json_encode ($array));
    return $response;
});


$options = [
    "attribute" => "token",
    "header" => "Authorization",
    "regexp" => "/Bearer\s+(.*)$/i",
    "secure" => false,
    "algorithm" => ["HS256"],
    "secret" => JWT_SECRET,
    "path" => ["/api"],
    "ignore" => ["/api/hello", "/api/login"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide');
        $response = $response->withStatus(401);
        return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }
];

$app->add(new Tuupola\Middleware\JwtAuthentication($options));
$app->run ();
