 CREATE DATABASE `balance` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

DROP TABLE IF EXISTS `categorias`;
CREATE TABLE `categorias` (
  `idcategorias` smallint(6) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idcategorias`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `idusuarios` smallint(6) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idusuarios`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `operaciones`;
CREATE TABLE `operaciones` (
  `idopereacion` smallint(6) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) DEFAULT NULL,
  `concepto` varchar(45) DEFAULT NULL,
  `monto` int(11) DEFAULT NULL,
  `fecha` varchar(45) DEFAULT NULL,
  `idusuarios` smallint(6) ,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
   PRIMARY KEY (`idopereacion`),
   foreign key (`idusuarios`) references usuarios(`idusuarios`)
 
 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `catopera`;
CREATE TABLE `catopera` (
  `idcatopera`   smallint(6)  NOT NULL,
  `idopereacion` smallint(6)  ,
  `idcategorias` smallint(6) ,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idcatopera`),
  foreign key (`idopereacion`) references operaciones(`idopereacion`),
  foreign key (`idcategorias`) references categorias(`idcategorias`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
	