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
      $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $this->con->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    } catch (PDOException $e){
      throw $e;
    }
  }


  public function addScore($game, $player, $score){
    $sql = "insert into scores(player, game_id, score)
            values('$player', (select id from games where name='$game'), $score);";
    $n_rows = $this->con->exec($sql);

    $sql = "select count(*) as position
            from scores s, games g
            where s.game_id=g.id and g.name='$game' and score>=$score;";
    $res = $this->con->query($sql);
    return $res->fetchObject();
  }


  public function getScores($game){
    $sql = "select player, score, time_stamp
            from scores s, games g
            where s.game_id=g.id and g.name='$game'
            order by score, time_stamp;";
    $res = $this->con->query($sql);
    return $res->fetchAll();
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
