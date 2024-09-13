<?php
include_once '../../configuracion.php';
$titulo = "Lista autos";

$datosForm = data_submitted();;
$objAbmPersona = new ABM_Persona();
$objAbmAuto = new ABM_Auto();

$duenio = $objAbmPersona->buscar(['NroDni'=>$datosForm['NroDni']]);
?>

<?php
if (!empty($duenio)) {
    $duenio = $duenio[0];
    $autosDuenio = $objAbmAuto->buscar(['DniDuenio'=>$datosForm['NroDni']]);
    $tieneAutos = !empty($autosDuenio) ? true : false;

    if ($tieneAutos) {
        echo "<table border='1'>
                <th colspan='6'>Persona</th>
                <tr>
                    <th>DNI</th>
                    <th>Apellido</th>
                    <th>Nombre</th>
                    <th>Fecha de nacimiento</th>
                    <th>Tel&eacute;fono</th>
                    <th>Domicilio</th>
                </tr>";
        echo    "<tr>";
        echo       "<td>".$duenio->getNroDni()."</td>";
        echo       "<td>".$duenio->getApellido()."</td>";
        echo       "<td>".$duenio->getNombre()."</td>";
        echo       "<td>".$duenio->getFechaNac()."</td>";
        echo       "<td>".$duenio->getTelefono()."</td>";
        echo       "<td>".$duenio->getDomicilio()."</td>";
        echo    "</tr>";
        echo "</table>";
    
        echo "<table border='1'>";
    
        if (count($autosDuenio) == 1) {
            echo "<th colspan='3'>Auto</th>";
        } else {
            echo "<th colspan='3'>Autos</th>";
        }
        
        echo "<tr>
                <th>Patente</th>
                <th>Marca</th>
                <th>Modelo</th>
             </tr>";
        foreach ($autosDuenio as $unAuto) {
            echo "<tr>";
            echo    "<td>".$unAuto->getPatente()."</td>";
            echo    "<td>".$unAuto->getMarca()."</td>";
            echo    "<td>".$unAuto->getModelo()."</td>";
            echo "</tr>";
        }
        echo "</table>";
        } else {
            echo "No hay autos a nombre de ".$duenio->getApellido()." ".$duenio->getNombre();
    }
} else {
    echo "La persona ingresada no se encuentra en la base de datos";
}

?>