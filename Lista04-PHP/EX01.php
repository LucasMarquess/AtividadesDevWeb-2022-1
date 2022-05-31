<?php 
    $nome = "Lucas Marques";

    $nota1 = 8;
    $nota2 = 10;
    $nota3 = 4;

    $media = (($nota1 + $nota2 + $nota3)/3);

    $resultado;

    if ($media <= 4){
        $resultado = "REPROVADO.";
    } else if ($media < 7) {
        $resultado = "EM PROVA FINAL.";
    } else {
        $resultado = "APROVADO.";
    }
    
    echo "O aluno $nome obteve média $media e está $resultado ";

?>