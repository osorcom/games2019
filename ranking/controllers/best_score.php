<?php
use Psr\Container\ContainerInterface;

class BestScore
{
   protected $container;

   public function __construct(ContainerInterface $container) {
     $this->container = $container;
   }

   public function __invoke($request, $response, $args) {
     try{
       $out = $this->container->bd->getScores($args['game']);
     }catch(PDOException $e){
       $out = $e;
     }
     $response = $response->withJson($out);
     return $response;
   }
}
?>
