<?php
use Psr\Container\ContainerInterface;

class BestScore
{
   protected $container;

   public function __construct(ContainerInterface $container) {
     $this->container = $container;
   }

   public function __invoke($request, $response, $args) {
     $out = [4,3,2,1];
     $response = $response->withJson($out);
     return $response;
   }
}
?>
