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
  `clinicName` varchar(45) DEFAULT NULL,
  `clinicAddr` varchar(255) DEFAULT NULL,
  `LatCoords` float DEFAULT NULL,
  `LonCoords` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clinics`
--

LOCK TABLES `clinics` WRITE;
/*!40000 ALTER TABLE `clinics` DISABLE KEYS */;
INSERT INTO `clinics` VALUES (5,'Детска Градина \"Мечо Пух\"','гр. София',42.7244,23.3373),(6,'клуб Шугър','ул. „княз Борис I“ 121, 1000 Old City Center, София, България',42.6984,23.3192),(8,'ДИМЕЛА ДИЗАЙН','София, кв. Бенковски, бивш Стопански двор, 1278 София, България',42.7403,23.3504),(9,'KFC22','бул. „Александър Стамболийски“ 28, 1000 Old City Center, София, България',42.6974,23.3181),(11,'Дирекция „Миграция“','1202, бул. „княгиня Мария Луиза“ 48, 1202 София, България',42.7034,23.3237),(12,'Елдорадо','ул. „Лавеле“ 18, 1000 Old City Center, София, България',42.6968,23.3193),(14,'ул. „Враня“ 110','ул. „Враня“ 110, 1309 ж.к. Банишора, София, България',42.7074,23.3013),(16,'2 РПУ - СЕРДИКА','Sofia, ul. Knyaz Boris I 215, България',42.7083,23.3215),(17,'Авточасти ЕООД (италианеца)','бул. „Овча купел“ 87, 1618 ж.к. Овча купел 1, София, България',42.6849,23.2734),(18,'Втора градска болница','бул. „Христо Ботев“ 120, 1202, 1202 Център, София, България',42.7061,23.3184),(19,'Unnamed Road','Unnamed Road, 1309 ж.к. Илинден, София, България',42.7046,23.2964);
/*!40000 ALTER TABLE `clinics` ENABLE KEYS */;
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

-- Dump completed on 2019-07-08 22:41:19
