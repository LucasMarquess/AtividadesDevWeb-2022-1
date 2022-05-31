<?php

    $idade = $_POST["idade"];
    $peso = ((($idade - 6) / 4.4) + ((2.3 * ($idade - 6)) + 22));

    echo "O peso normal seria $peso kg";

?>