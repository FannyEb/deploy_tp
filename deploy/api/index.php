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

//login
$app->post('/api/login', function (Request $request, Response $response, $args) {   
    $err=false;
    $body = $request->getParsedBody(); 
    $login = $body ['login'] ?? ""; 
    $password = $body ['password'] ?? "";

    //check format login and password
    // if (empty($login) || empty($password)) {
    //     $err=true;
    // }
 
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

#region PRODUCTS

//get all product from ./mock/catalogue.json
$app->get('/api/catalogue', function (Request $request, Response $response, $args) {
    $json = file_get_contents(__DIR__ . "/../mock/catalogue.json");
    $response->getBody()->write($json);
    return $response;
});

//get product by id from ./mock/catalogue.json
$app->get('/api/catalogue/{id}', function (Request $request, Response $response, $args) {
    $json = file_get_contents(__DIR__ . "/../mock/catalogue.json");
    $array = json_decode($json, true);
    $id = $args ['id'];
    $array = $array[$id];
    $response->getBody()->write(json_encode ($array));
    return $response;
});

//add product to ./mock/catalogue.json
$app->post('/api/catalogue', function (Request $request, Response $response, $args) {
    $body = $request->getParsedBody(); 
    $name = $body ['name'] ?? ""; 
    $price = $body ['price'] ?? "";
    $description = $body ['description'] ?? "";
    $image = $body ['image'] ?? "";
    $category = $body ['category'] ?? "";
    $recipe = $body ['recipe'] ?? "";
    $err=false;

    //check format name, price, description and image
    if (empty($name) || empty($price) || empty($description) || empty($image) || !preg_match("/^[a-zA-Z0-9]/", $name) || !preg_match("/^[0-9]/", $price) || !preg_match("/^[a-zA-Z0-9]/", $description) || !preg_match("/^[a-zA-Z0-9]/", $image)) {
        $err=true;
    }

    if (!$err) {
        $json = file_get_contents(__DIR__ . "/../mock/catalogue.json");
        $array = json_decode($json, true);
        $id = count($array);
        $array[] = array('id' => $id, 'name' => $name, 'price' => $price, 'description' => $description, 'image' => $image, 'category' => $category, 'recipe' => $recipe);
        $json = json_encode($array);
        file_put_contents(__DIR__ . "/../mock/catalogue.json", $json);
        $response->getBody()->write($json);
    }
    else{          
        $response = $response->withStatus(401);
    }
    return $response;
});

//update product to ./mock/catalogue.json
$app->put('/api/catalogue/{id}', function (Request $request, Response $response, $args) {
    $body = $request->getParsedBody(); 
    $name = $body ['name'] ?? ""; 
    $price = $body ['price'] ?? "";
    $description = $body ['description'] ?? "";
    $image = $body ['image'] ?? "";
    $category = $body ['category'] ?? "";
    $recipe = $body ['recipe'] ?? "";
    $err=false;

    //check format name, price, description and image
    if (empty($name) || empty($price) || empty($description) || empty($image) || !preg_match("/^[a-zA-Z0-9]/", $name) || !preg_match("/^[0-9]/", $price) || !preg_match("/^[a-zA-Z0-9]/", $description) || !preg_match("/^[a-zA-Z0-9]/", $image)) {
        $err=true;
    }

    if (!$err) {
        $json = file_get_contents(__DIR__ . "/../mock/catalogue.json");
        $array = json_decode($json, true);
        $id = $args ['id'];
        $array[$id] = array('id' => $id, 'name' => $name, 'price' => $price, 'description' => $description, 'image' => $image, 'category' => $category, 'recipe' => $recipe);
        $json = json_encode($array);
        file_put_contents(__DIR__ . "/../mock/catalogue.json", $json);
        $response->getBody()->write($json);
    }
    else{          
        $response = $response->withStatus(401);
    }
    return $response;
});

//delete product to ./mock/catalogue.json
$app->delete('/api/catalogue/{id}', function (Request $request, Response $response, $args) {
    $json = file_get_contents(__DIR__ . "/../mock/catalogue.json");
    $array = json_decode($json, true);
    $id = $args ['id'];
    unset($array[$id]);
    $json = json_encode($array);
    file_put_contents(__DIR__ . "/../mock/catalogue.json", $json);
    $response->getBody()->write($json);
    return $response;
});

#endregion

#region CLIENT

//get all client from ./mock/clients.json
$app->get('/api/clients', function (Request $request, Response $response, $args) {
    $json = file_get_contents(__DIR__ . "/../mock/clients.json");
    $response->getBody()->write($json);
    return $response;
});

//get client by id from ./mock/clients.json
$app->get('/api/clients/{id}', function (Request $request, Response $response, $args) {
    $json = file_get_contents(__DIR__ . "/../mock/clients.json");
    $array = json_decode($json, true);
    $id = $args ['id'];
    $array = $array[$id];
    $response->getBody()->write(json_encode ($array));
    return $response;
});

//add client to ./mock/clients.json
$app->post('/api/clients', function (Request $request, Response $response, $args) {
    $body = $request->getParsedBody(); 
    $lastName = $body ['lastname'] ?? ""; 
    $firstName = $body ['firstname'] ?? "";
    $email = $body ['email'] ?? "";
    $phone = $body ['phone'] ?? "";
    $address = $body ['address'] ?? "";
    $city = $body ['city'] ?? "";
    $codeCity = $body ['codecity'] ?? "";
    $country = $body ['country'] ?? "";
    $login = $body ['login'] ?? "";
    $password = $body ['password'] ?? "";
    $civility = $body ['civility'] ?? "";
    $err=false;

    //check format 
    if (empty($lastName) || empty($firstName) || empty($email) || empty($phone) || empty($address) || empty($city) || empty($codeCity) || empty($country) || empty($login) || empty($password) || empty($civility) || 
        !preg_match("/^[a-zA-Z0-9]/", $lastName) || !preg_match("/^[a-zA-Z0-9]/", $firstName) || !preg_match("/^[a-zA-Z0-9]/", $email) || !preg_match("/^[0-9]/", $phone) || !preg_match("/^[a-zA-Z0-9]/", $address) || !preg_match("/^[a-zA-Z0-9]/", $city) || !preg_match("/^[0-9]/", $codeCity) || !preg_match("/^[a-zA-Z0-9]/", $country) || !preg_match("/^[a-zA-Z0-9]/", $login) || !preg_match("/^[a-zA-Z0-9/" , $password) || !preg_match("/^[a-zA-Z0-9]/", $civility)) {
        $err=true;
    }

    if (!$err) {
        $json = file_get_contents(__DIR__ . "/../mock/clients.json");
        $array = json_decode($json, true);
        $id = count($array);
        $array[] = array('id' => $id, 'lastname' => $lastName, 'firstname' => $firstName, 'email' => $email, 'phone' => $phone, 'address' => $address, 'city' => $city, 'codecity' => $codeCity, 'country' => $country, 'login' => $login, 'password' => $password, 'civility' => $civility);
        $json = json_encode($array);
        file_put_contents(__DIR__ . "/../mock/clients.json", $json);
        $response->getBody()->write($json);
    }
    else{          
        $response = $response->withStatus(401);
    }
    return $response;
});

//update client to ./mock/clients.json
$app->put('/api/clients/{id}', function (Request $request, Response $response, $args) {
    $body = $request->getParsedBody(); 
    $lastName = $body ['lastname'] ?? ""; 
    $firstName = $body ['firstname'] ?? "";
    $email = $body ['email'] ?? "";
    $phone = $body ['phone'] ?? "";
    $address = $body ['address'] ?? "";
    $city = $body ['city'] ?? "";
    $codeCity = $body ['codecity'] ?? "";
    $country = $body ['country'] ?? "";
    $login = $body ['login'] ?? "";
    $password = $body ['password'] ?? "";
    $civility = $body ['civility'] ?? "";
    $err=false;

    //check format 
    if (empty($lastName) || empty($firstName) || empty($email) || empty($phone) || empty($address) || empty($city) || empty($codeCity) || empty($country) || empty($login) || empty($password) || empty($civility) || 
        !preg_match("/^[a-zA-Z0-9]/", $lastName) || !preg_match("/^[a-zA-Z0-9]/", $firstName) || !preg_match("/^[a-zA-Z0-9]/", $email) || !preg_match("/^[0-9]/", $phone) || !preg_match("/^[a-zA-Z0-9]/", $address) || !preg_match("/^[a-zA-Z0-9]/", $city) || !preg_match("/^[0-9]/", $codeCity) || !preg_match("/^[a-zA-Z0-9]/", $country) || !preg_match("/^[a-zA-Z0-9]/", $login) || !preg_match("/^[a-zA-Z0-9/" , $password) || !preg_match("/^[a-zA-Z0-9]/", $civility)) {
        $err=true;
    }

    if (!$err) {
        $json = file_get_contents(__DIR__ . "/../mock/clients.json");
        $array = json_decode($json, true);
        $id = $args ['id'];
        $array[$id] = array('id' => $id, 'lastname' => $lastName, 'firstname' => $firstName, 'email' => $email, 'phone' => $phone, 'address' => $address, 'city' => $city, 'codecity' => $codeCity, 'country' => $country, 'login' => $login, 'password' => $password, 'civility' => $civility);
        $json = json_encode($array);
        file_put_contents(__DIR__ . "/../mock/clients.json", $json);
        $response->getBody()->write($json);
    }
    else{          
        $response = $response->withStatus(401);
    }
    return $response;
});

//delete client to ./mock/clients.json
$app->delete('/api/clients/{id}', function (Request $request, Response $response, $args) {
    $json = file_get_contents(__DIR__ . "/../mock/clients.json");
    $array = json_decode($json, true);
    $id = $args ['id'];
    unset($array[$id]);
    $json = json_encode($array);
    file_put_contents(__DIR__ . "/../mock/clients.json", $json);
    $response->getBody()->write($json);
    return $response;
});

#endregion
$app->run ();
