<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \games2019\data\BD;

require 'vendor/autoload.php';
require_once 'controllers/best_score.php';
require_once 'controllers/new_score.php';
require_once './bd.php';

$configuration = [
    'settings' => [
        'displayErrorDetails' => true,
    ],
];
$c = new \Slim\Container($configuration);
$app = new \Slim\App($c);
//$app = new \Slim\App;

//Dependencias
$c = $app->getContainer();
$c['bd'] = function ($container) {
    return new BD();
};


//Rutas
$app->get('/{game}',\BestScore::class);
$app->post('/{game}',\NewScore::class);

$app->run();
?>
