
<!DOCTYPE html>
<html>
<head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title></title>
</head>
<body>
<?php
// Implementación patron singleton en la clase Tigger
class Tigger { 
    private static $instance = NULL;
    private $count;  // contador de rugidos

    private function __construct() {
            echo "Building character..." . "<br>";
    }
    public static function getInstance()
    {
        if (is_null(self::$instance)) {    //si el objeto no existe entonces lo crea
            self::$instance = new Tigger();
        }
        return self::$instance;
    }

    public function roar() {
            $this->count++;
            echo "Grrr!" . "<br>";
    }    

    public function getCounter() {
            return $this->count;            
    }

}

$tiger = Tigger::getInstance();
$tiger->roar();
$tiger->roar();
$tiger->roar();
$tiger->roar();
echo "total de Grrrs: " .$tiger->getCounter() . "<br>";

?>
</body>
</html>