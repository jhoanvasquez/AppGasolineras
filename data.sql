-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.3.16-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for data
DROP DATABASE IF EXISTS `data`;
CREATE DATABASE IF NOT EXISTS `data` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `data`;

-- Dumping structure for table data.estaciones
DROP TABLE IF EXISTS `estaciones`;
CREATE TABLE IF NOT EXISTS `estaciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `telefono` bigint(20) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `latitud` double DEFAULT NULL,
  `longitud` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- Dumping data for table data.estaciones: ~19 rows (approximately)
/*!40000 ALTER TABLE `estaciones` DISABLE KEYS */;
INSERT INTO `estaciones` (`id`, `nombre`, `telefono`, `direccion`, `latitud`, `longitud`) VALUES
	(1, 'EDS SAN FERNANDO', NULL, 'Riofrío-Trujllo #3 Oeste-2 a 3 Oeste-250,, Tuluá, ', 4.0876647, -76.2154859),
	(2, 'Gasolinera ESSO', 573226641837, 'a 29-104,, Cl. 18 #292, Tuluá, Valle del Cauca', 4.0898523, -76.1916115),
	(3, 'ESSO', 5722249998, 'Cra. 20 #27a-28, Tuluá, Valle del Cauca', 4.0844881, -76.2019656),
	(4, 'ESSO', 5722243078, 'Cr 40 Cl 13 Esquina, Tulua, Valle del Cauca', 4.0921841, -76.1788096),
	(5, 'ESSO', 5722242707, 'Cra. 40, Tuluá, Valle del Cauca', 4.0653447, -76.1970465),
	(6, 'Estación de Gas Natural', NULL, 'Cl. 42d, Tuluá, Valle del Cauca', 4.0700483, -76.1929702),
	(7, 'Gasolinera Terpel', NULL, 'Cra. 28a #81, Tuluá, Valle del Cauca', 4.1018837, -76.1932215),
	(8, 'Estación de servicio Texaco', NULL, 'Cl. 32, Cra. 40 #Esquina, Tuluá, Valle del Cauca', 4.0768836, -76.1889817),
	(9, 'Estación de Servicio Terpel Tuluá', NULL, 'Tulua, Tuluá, Valle del Cauca', 4.08788, -76.21572),
	(10, 'Gasolineria Terpel', NULL, 'a 30-106,, Cl. 17 #302, Tuluá, Valle del Cauca', 4.0903279, -76.1907331),
	(11, 'Gasolineria Mobil', NULL, 'a 40-80,, Cl. 13 #40-2, Tuluá, Valle del Cauca', 4.0920421, -76.1787312),
	(12, 'Tanqueo Tuluá ESSO', NULL, 'Cl. 27a ##20-95 a 20-1, Tuluá, Valle del Cauca', 4.0846621, -76.2015772),
	(13, 'Gasolineria Verde', NULL, 'Cra. 30 #16a-16, Tuluá, Valle del Cauca', 4.0895741, -76.1918395),
	(14, 'Estacion De Servicio Biomax San Antonio', 2333344, 'Cra. 30 #56 # 18, Bogotá', 4.0897339, -76.1920232),
	(15, 'Terpel', NULL, 'Cra 26A, Tuluá, Valle del Cauca', 4.0714419, -76.1983937),
	(16, 'Estacion De Servicio Terpel Entre Rios', NULL, 'Cra. 30 #163, Tuluá, Valle del Cauca', 4.0908609, -76.1900139),
	(17, 'Estación de Servicio Tuluá', NULL, 'Cl. 34 #3177, Tuluá, Valle del Cauca', 4.07773, -76.19624),
	(18, 'Bomba de gasolina', NULL, 'Tv. 12, Tuluá, Valle del Cauca', 4.0949993, -76.2030714),
	(20, 'Terpel San Cristobal', NULL, 'Cl. 28, Tuluá, Valle del Cauca', 4.0816745, -76.1956939);
/*!40000 ALTER TABLE `estaciones` ENABLE KEYS */;

-- Dumping structure for table data.usuarios
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `numero_documento` int(11) NOT NULL,
  `tipo_documento` varchar(50) NOT NULL,
  `sexo` varchar(50) DEFAULT NULL,
  `nacionalidad` varchar(50) NOT NULL,
  `telefono` int(11) DEFAULT NULL,
  `direccion_residencia` varchar(50) DEFAULT NULL,
  `contrasena` blob NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table data.usuarios: ~0 rows (approximately)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
