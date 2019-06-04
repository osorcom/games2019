<?php
namespace games2019\data;

require_once "config.php";

use games2019\data\ConfigDB;
use \PDO;

class BD{
  private $con;

  function __construct(){
    try {
      $dsn = ConfigDB::SGBD.":host=".ConfigDB::HOST.";dbname=".ConfigDB::NAME;
      $this->con = new PDO($dsn, ConfigDB::USER, ConfigDB::PASS);
      $this->con->setAttribute(PDO::ATTRR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $this->con->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    } catch (PDOException $e){
      throw $e;
    }
  }

  public static function installBD(){
    try{
      echo "\033[93mCreating database ".ConfigDB::NAME."...\n";
      $dsn = ConfigDB::SGBD.":host=".ConfigDB::HOST.";";
      $con = new PDO($dsn, ConfigDB::USER, ConfigDB::PASS);
      $sql = file_get_contents("bd.sql");
      $sql = \str_replace("{{dbname}}", ConfigDB::NAME, $sql);
      $con->exec($sql);
    }catch(PDOException $e){
      echo $e->getMessage();
    }
  }
}
?>
