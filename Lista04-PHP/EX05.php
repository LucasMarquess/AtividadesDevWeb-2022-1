<?php

    $celsius = 0;

    for ($fhrenheit = 0; ;$fhrenheit+=2) {
        $celsius = ($celsius + (($fhrenheit - 30)/2));
        if($celsius >= 60){
            break;
        }
        echo "Fhrenheit:  $fhrenheit Celsius: $celsius <br>";
    }

?>