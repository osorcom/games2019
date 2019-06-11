--
-- Base de dades: games2019
--
CREATE DATABASE IF NOT EXISTS {{dbname}} DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE games2019;

-- --------------------------------------------------------

--
-- Estructura de la taula game
--

CREATE TABLE IF NOT EXISTS games (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de la taula scores
--

CREATE TABLE IF NOT EXISTS scores (
  time_stamp timestamp NOT NULL DEFAULT current_timestamp(),
  player varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  game_id int(11) NOT NULL,
  score int(11) NOT NULL,
  PRIMARY KEY (time_stamp,player,game_id),
  FOREIGN KEY (game_id) REFERENCES games(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Insert juegos disponibles
--
INSERT INTO games(name) values ('ahorcado');
INSERT INTO games(name) values ('break_block');
