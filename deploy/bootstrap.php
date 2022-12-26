<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";
$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$conn = array(
'host' => 'dpg-ceguqu82i3mkhvqh5740-a',
'driver' => 'pdo_pgsql',
'user' => 'met02_eber_fanny_user',
'password' => 'I5cKzQtbZTfc7Iw7vzRMEDA2f6ZDOb5k',
'dbname' => 'met02_eber_fanny',
'port' => '5432'
);
$entityManager = EntityManager::create($conn, $config);
