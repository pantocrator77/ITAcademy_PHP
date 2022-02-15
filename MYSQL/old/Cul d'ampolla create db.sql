CREATE SCHEMA IF NOT EXISTS `culdampolla` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `culdampolla` ;

-- -----------------------------------------------------
-- Table `mydb`.`Provedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Provedor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `calle` VARCHAR(45) NOT NULL,
  `numero` VARCHAR(45) NOT NULL,
  `piso` VARCHAR(45) NOT NULL,
  `puerta` VARCHAR(45) NOT NULL,
  `ciudad` VARCHAR(45) NOT NULL,
  `codigo postal` VARCHAR(45) NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `fax` VARCHAR(45) NOT NULL,
  `NIF` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`gafas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`gafas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `marca` VARCHAR(45) NOT NULL,
  `graduacion` VARCHAR(45) NOT NULL,
  `montura` VARCHAR(45) NOT NULL,
  `color montura` VARCHAR(45) NOT NULL,
  `color cristales` VARCHAR(45) NOT NULL,
  `precio` INT NOT NULL,
  `Provedor_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_gafas_Provedor1`
    FOREIGN KEY (`id`)
    REFERENCES `mydb`.`Provedor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `direccion` VARCHAR(45) NULL,
  `telefono` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `fecha alta` DATETIME NULL,
  `cliente referencia` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Ventas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Ventas` (
  `idVentas` INT NOT NULL AUTO_INCREMENT,
  `nombre vendedor` VARCHAR(45) NOT NULL,
  `fecha venta` DATETIME NOT NULL,
  `Ventascol` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idVentas`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Clientes_compra_gafas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Clientes_compra_gafas` (
  `Clientes_id` INT NOT NULL,
  `gafas_id` INT NOT NULL,
  `nombre vendedor` VARCHAR(45) NULL,
  `fecha venta` DATETIME NULL,
  PRIMARY KEY (`Clientes_id`, `gafas_id`),
  INDEX `fk_Clientes_has_gafas_gafas1_idx` (`gafas_id` ASC) VISIBLE,
  INDEX `fk_Clientes_has_gafas_Clientes1_idx` (`Clientes_id` ASC) VISIBLE,
  CONSTRAINT `fk_Clientes_has_gafas_Clientes1`
    FOREIGN KEY (`Clientes_id`)
    REFERENCES `mydb`.`Clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Clientes_has_gafas_gafas1`
    FOREIGN KEY (`gafas_id`)
    REFERENCES `mydb`.`gafas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
