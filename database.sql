CREATE DATABASE IF NOT EXISTS `uii8ibdvuz432j2r`;
USE `uii8ibdvuz432j2r`;
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    `username` varchar (30) NOT NULL UNIQUE,
    `email` varchar (100) NOT NULL UNIQUE,
    `password` varchar (1000) NOT NULL,
    `isStudent` tinyint NOT NULL,
    PRIMARY KEY (`id`)
);
