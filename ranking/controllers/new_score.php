<?php
use Psr\Container\ContainerInterface;

class NewScore
{
   protected $container;

   public function __construct(ContainerInterface $container) {
     $this->container = $container;
   }

   public function __invoke($request, $response, $args) {
     $in = $request->getParsedBody();
     try{
       $out = $this->container->bd->addScore($args['game'], $in['player'], $in['score']);
     }catch(PDOException $e){
       $out = $e;
     }
     $response = $response->withJson($out);
     return $response;
   }
}
?>
