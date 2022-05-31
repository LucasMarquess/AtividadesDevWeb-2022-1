<?php 

    $cod = $_POST["codigo"];
    $qtd = $_POST["quantidade"];


    switch ($cod){
        case 1001:
            echo 'O total é ' .($qtd * 5.32);
            break;
        case 1234:
            echo 'O total é ' .($qtd * 6.45);
            break;
        case 6548:
            echo 'O total é ' .($qtd * 2.37);
            break;
        case 987:
            echo 'O total é ' .($qtd * 5.32);
            break;
        case 7623:
            echo 'O total é ' .($qtd * 6.45);
            break;
    }
?>