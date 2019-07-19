CREATE DATABASE  IF NOT EXISTS `healthdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `healthdb`;
-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: healthdb
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clinics`
--

DROP TABLE IF EXISTS `clinics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `clinics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clinicName` varchar(100) DEFAULT NULL,
  `clinicAddr` varchar(255) DEFAULT NULL,
  `LatCoords` float DEFAULT NULL,
  `LonCoords` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clinics`
--

LOCK TABLES `clinics` WRITE;
/*!40000 ALTER TABLE `clinics` DISABLE KEYS */;
INSERT INTO `clinics` VALUES (5,'Национален център по заразни и паразитни болести','бул. „ген. Николай Г. Столетов 44 А, 1233 ж.к. Банишора, София, България',42.709,23.307),(8,'НЕРЕЯ','Sofia, Sq. Pozitano 46, България',42.6969,23.3146),(9,'KFC22','бул. „Александър Стамболийски“ 28, 1000 Old City Center, София, България',42.6974,23.3181),(11,'КАЛИНАС','ул. „Цар Самуил“ 107, 1000 Център, София, България',42.6998,23.3189),(12,'Елдорадо','ул. „Лавеле“ 18, 1000 Old City Center, София, България',42.6968,23.3193),(14,'МЦ Пентаграм','ул. „Враня“ 109 - 111, 1309 ж.к. Банишора, София, България',42.7069,23.3031),(16,'Втора градска болница','бул. „Христо Ботев“ 120, 1202, 1202 Център, София, България',42.7061,23.3184),(17,'МБАЛ \"Надежда\"','ул. „Блага вест“ 3, 1373 ж.к. Красна поляна 2, София, България',42.6889,23.2746),(18,'Втора градска болница','бул. „Христо Ботев“ 120, 1202, 1202 Център, София, България',42.7061,23.3184),(32,'Медицински институт на МВР','бул. „Ген. Скобелев“ 79, 1606 Център, София, България',42.6932,23.3095),(33,'СДВР','ул. „Антим I-ви“ 5, 1303 ж.к. Зона Б-5-3, София, България',42.6971,23.3126),(34,'МБАЛ Сердика ЕООД','ул. „Дамян Груев“ 6, 1303 Pette Kyosheta, София, България',42.6966,23.3141),(35,'Лесотехнически Университет','бул. „св. Климент Охридски“ 10, 1756 ж.к. Дървеница, София, България',42.6537,23.3586);
/*!40000 ALTER TABLE `clinics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persons`
--

DROP TABLE IF EXISTS `persons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `persons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personName` varchar(100) DEFAULT NULL,
  `personAddr` varchar(255) DEFAULT NULL,
  `LatCoords` float DEFAULT NULL,
  `LonCoords` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persons`
--

LOCK TABLES `persons` WRITE;
/*!40000 ALTER TABLE `persons` DISABLE KEYS */;
/*!40000 ALTER TABLE `persons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `userName` varchar(45) DEFAULT NULL,
  `passWord` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Lubo','Brantchev','skycube@gmail.com','12345'),(2,'Teo','D.','teo@teo.com','12345'),(3,'Marto','','marto@marto.com','12345');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-19 15:58:41
