<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Tuupola\Middleware\HttpBasicAuthentication;
use \Firebase\JWT\JWT;
require __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../bootstrap.php';
require_once __DIR__ . '/models/Client.php';
require_once __DIR__ . '/models/Product.php';
 
const JWT_SECRET = "makey1234567";

$app = AppFactory::create();
$app->addErrorMiddleware(true, true, true);

//create JWT
function createJWT(Response $response, $login, $password): Response{

    $issuedAt = time();
    $expirationTime = $issuedAt + 600;
    $payload = array(
        'login' => $login,
        'password' => $password,
        'iat' => $issuedAt,
        'exp' => $expirationTime
    );
    $token_jwt = JWT::encode($payload, JWT_SECRET, "HS256");
    $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");
    
    return $response;
}


$options = [
    "attribute" => "token",
    "header" => "Authorization",
    "regexp" => "/Bearer\s+(.*)$/i",
    "secure" => false,
    "algorithm" => ["HS256"],
    "secret" => JWT_SECRET,
    "path" => ["/api"],
    "ignore" => ["/api/login", "/api/signup"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide');
        $response = $response->withStatus(401);
        return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }
];


function  addHeaders (Response $response) : Response {
    $response = $response
    ->withHeader("Content-Type", "application/json")
    ->withHeader('Access-Control-Allow-Origin', '*')
    ->withHeader('Access-Control-Allow-Headers', 'Content-Type,  Authorization')
    ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    ->withHeader('Access-Control-Expose-Headers', 'Authorization');

    return $response;
}

#region USER 

//login
$app->post('/api/login', function (Request $request, Response $response, $args) {   
    $err=false;
    $inputJSON = file_get_contents('php://input');
    $body = json_decode( $inputJSON, TRUE ); 
    $login = $body['login'] ?? ""; 
    $password = $body['password'] ?? "";

    //check format login and password
    if (empty($login) || empty($password)|| !preg_match("/^[a-zA-Z0-9]+$/", $login) || !preg_match("/^[a-zA-Z0-9]+$/", $password)) {
        $err=true;
    }

    global $entityManager;
    $user = $entityManager->getRepository('Client')->findOneBy(array('login' => $login, 'password' => $password));
    $id = $user->getId();

    if (!$err && $user) {
        $response = createJwT($response, $login, $password);
        $response = addHeaders($response);
        $data = array('login' => $login, 'id' => $id);
        $response->getBody()->write(json_encode($data));
    }
    else{          
        $response = $response->withStatus(401);
    }
    return $response;
});

#endregion

#region PRODUCTS

$app->get('/api/product', function (Request $request, Response $response, $args) {
    global $entityManager;
    $products = $entityManager->getRepository('Product')->findAll();
    $response = addHeaders($response);
    $response->getBody()->write(json_encode ($products));
    return $response;
});

$app->get('/api/product/{id}', function (Request $request, Response $response, $args) {
    global $entityManager;
    $product = $entityManager->getRepository('Product')->findOneBy(array('id' => $args['id']));
    $response = addHeaders($response);
    $response->getBody()->write(json_encode ($product));
    return $response;
});

$app->post('/api/product', function (Request $request, Response $response, $args) {
    $inputJSON = file_get_contents('php://input');
    $body = json_decode( $inputJSON, TRUE ); //convert JSON into array 
    $id = $body ['id'] ?? "";
    $name = $body ['name'] ?? ""; 
    $price = $body ['price'] ?? "";
    $description = $body ['description'] ?? "";
    $image = $body ['image'] ?? "";
    $category = $body ['category'] ?? "";
    $err=false;

    //check format name, price, description and image
    if (empty($name) || empty($price) || empty($description) || empty($image) || 
    !preg_match("/^[a-zA-Z0-9]+$/", $name) || !preg_match("/^[0-9]+$/", $price) || !preg_match("/^[a-zA-Z0-9]+$/", $description) || 
    !preg_match("/^[a-zA-Z0-9]+$/", $image)) {
        $err=true;
    }

    if (!$err) {
        global $entityManager;
        $product = new Product;
        $product->setName($name);
        $product->setPrice($price);
        $product->setDescription($description);
        $product->setImage($image);
        $product->setCategory($category);
        $entityManager->persist($product);
        $entityManager->flush();
        $response = addHeaders($response);
        $response->getBody()->write(json_encode ($product));
    }
    else{          
        $response = $response->withStatus(401);
    }
    return $response;
});

$app->put('/api/product/{id}', function (Request $request, Response $response, $args) {
    $inputJSON = file_get_contents('php://input');
    $body = json_decode( $inputJSON, TRUE ); //convert JSON into array 
    $name = $body ['name'] ?? ""; 
    $price = $body ['price'] ?? "";
    $description = $body ['description'] ?? "";
    $image = $body ['image'] ?? "";
    $category = $body ['category'] ?? "";
    $err=false;

    //check format name, price, description and image
    if (empty($name) || empty($price) || empty($description) || empty($image) || 
    !preg_match("/^[a-zA-Z0-9]+$/", $name) || !preg_match("/^[0-9]+$/", $price) || !preg_match("/^[a-zA-Z0-9]+$/", $description) || 
    !preg_match("/^[a-zA-Z0-9]+$/", $image)) {
        $err=true;
    }

    if (!$err) {
        $id = $args ['id'];
        global $entityManager;
        $product = $entityManager->getRepository('Product')->findOneBy(array('id' => $id));
        $product->setName($name);
        $product->setPrice($price);
        $product->setDescription($description);
        $product->setImage($image);
        $product->setCategory($category);
        $entityManager->persist($product);
        $entityManager->flush();
        $response = addHeaders($response);
        $response->getBody()->write(json_encode ($product));
    }
    else{          
        $response = $response->withStatus(401);
    }
    return $response;
});

$app->delete('/api/product/{id}', function (Request $request, Response $response, $args) {
    $id = $args ['id'];
    global $entityManager;
    $product = $entityManager->getRepository('Product')->findOneBy(array('id' => $id));
    $entityManager->remove($product);
    $entityManager->flush();
    $response = addHeaders($response);
    $response->getBody()->write(json_encode ($product));
    return $response;
});

#endregion

#region CLIENT

//get all client from ./mock/clients.json
$app->get('/api/client', function (Request $request, Response $response, $args) {
    global $entityManager;
    $clients = $entityManager->getRepository('Client')->findAll();
    $response = addHeaders($response);
    $response->getBody()->write(json_encode ($clients));
    return $response;
});

//get client by id from ./mock/clients.json
$app->get('/api/client/{id}', function (Request $request, Response $response, $args) {
    global $entityManager;
    $id = $args ['id'];
    $client = $entityManager->getRepository('Client')->findOneBy(array('id' => $id));
    $response = addHeaders($response);
    $response->getBody()->write(json_encode ($client));
    return $response;
});

//add client to the array ./mock/clients.json
$app->post('/api/signup', function (Request $request, Response $response, $args) {
    $inputJSON = file_get_contents('php://input');
    $body = json_decode( $inputJSON, TRUE ); //convert JSON into array
    $lastName = $body ['lastname'] ?? ""; 
    $firstName = $body ['firstname'] ?? "";
    $email = $body ['email'] ?? "";
    $phone = $body ['phone'] ?? "";
    $address = $body ['address'] ?? "";
    $city = $body ['city'] ?? "";
    $codecity = $body ['codecity'] ?? "";
    $country = $body ['country'] ?? "";
    $login = $body ['login'] ?? "";
    $password = $body ['password'] ?? "";
    $civility = $body ['civility'] ?? "";
    $err=false;

    
    if (!$err) {
        global $entityManager;
        $client = new Client;
        $client->setLastname($lastName);
        $client->setFirstname($firstName);
        $client->setEmail($email);
        $client->setPhone($phone);
        $client->setAddress($address);
        $client->setCity($city);
        $client->setCodecity($codecity);
        $client->setCountry($country);
        $client->setLogin($login);
        $client->setPassword($password);
        $client->setCivility($civility);
        $entityManager->persist($client);
        $entityManager->flush();
        $response = addHeaders($response);
        $response->getBody()->write(json_encode ($client));
    }
    else{          
        //401 with error message
        $response = $response->withStatus(401);
        $response->getBody()->write(json_encode ($err));

    }
    return $response;
});

//update client to ./mock/clients.json
$app->put('/api/client/{id}', function (Request $request, Response $response, $args) {
    $inputJSON = file_get_contents('php://input');
    $body = json_decode( $inputJSON, TRUE ); //convert JSON into array 
    $lastName = $body ['lastName'] ?? ""; 
    $firstName = $body ['firstName'] ?? "";
    $email = $body ['email'] ?? "";
    $phone = $body ['phone'] ?? "";
    $address = $body ['address'] ?? "";
    $city = $body ['city'] ?? "";
    $codecity = $body ['codeCity'] ?? "";
    $country = $body ['country'] ?? "";
    $login = $body ['login'] ?? "";
    $password = $body ['password'] ?? "";
    $civility = $body ['civility'] ?? "";
    $err=false;

    //check format name, email and password
    if (empty($lastName) || empty($firstName) || empty($email) || empty($phone) || empty($address) || empty($city) || empty($codecity) || empty($country) || empty($login) || empty($password) || empty($civility) || 
        !preg_match("/^[a-zA-Z0-9]+$/", $lastName) || !preg_match("/^[a-zA-Z0-9]+$/", $firstName) ||  
        !preg_match("/^[a-zA-Z0-9]+$/", $city) || 
        !preg_match("/^[0-9]+$/", $codecity) || !preg_match("/^[a-zA-Z0-9]+$/", $country) || !preg_match("/^[a-zA-Z0-9]+$/", $civility)) {
        $err=true;
    }

    if (!$err) {
        $id = $args ['id'];
        global $entityManager;
        $client = $entityManager->find('Client', $id);
        $client->setLastname($lastName);
        $client->setFirstname($firstName);
        $client->setEmail($email);
        $client->setPhone($phone);
        $client->setAddress($address);
        $client->setCity($city);
        $client->setCodecity($codecity);
        $client->setCountry($country);
        $client->setLogin($login);
        $client->setPassword($password);
        $client->setCivility($civility);
        $entityManager->persist($client);
        $entityManager->flush();
        $response = addHeaders($response);
        $response->getBody()->write(json_encode ($client));
    }
    else{          
        $response = $response->withStatus(401);
    }
    return $response;
});

//delete client to ./mock/clients.json
$app->delete('/api/client/{id}', function (Request $request, Response $response, $args) {
    $id = $args ['id'];
    global $entityManager;
    $client = $entityManager->find('Client', $id);
    $entityManager->remove($client);
    $entityManager->flush();
    $response = addHeaders($response);
    $response->getBody()->write(json_encode ($client));
    return $response;
});

#endregion
$app->add(new Tuupola\Middleware\JwtAuthentication($options));
$app->add(new Tuupola\Middleware\CorsMiddleware([
    "origin" => ["*"],
    "methods" => ["GET", "POST", "PUT", "PATCH", "DELETE"],
    "headers.allow" => ["Authorization", "Content-Type"],
    "headers.expose" => ["Authorization"],
    "headers.origin" => ["*"],
]));
$app->run ();
