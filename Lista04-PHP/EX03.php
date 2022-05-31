<?php
$valor = 28000;
$depreciacao = 4000;
echo " 
    <div align='center'>
        <table border='1'>
            <tr>
                <td><b>Ano</b></td>
                <td><b>Depreciação</b></td>
                <td><b>Valor no fim do ano</b></td>
                <td><b>Depreciação acumulada</b></td>
            </tr>
            <tr>
                <td>1</td>
                <td>$depreciacao</td>
                <td>". ($valor - $depreciacao * 1 ) ."</td>
                <td>" . ($depreciacao * 1) . "</td>
            </tr>
            <tr>
                <td>2</td>
                <td>$depreciacao</td>
                <td>". ($valor - $depreciacao * 2 ) ."</td>
                <td>" . ($depreciacao * 2) . "</td>
            </tr>
            <tr>
                <td>3</td>
                <td>$depreciacao</td>
                <td>". ($valor - $depreciacao * 3 ) ."</td>
                <td>" . ($depreciacao * 3) . "</td>
            </tr>
            <tr>
                <td>4</td>
                <td>$depreciacao</td>
                <td>". ($valor - $depreciacao * 4 ) ."</td>
                <td>" . ($depreciacao * 4) . "</td>
            </tr><tr>
                <td>5</td>
                <td>$depreciacao</td>
                <td>". ($valor - $depreciacao * 5 ) ."</td>
                <td>" . ($depreciacao * 5) . "</td>
            </tr>
            <tr>
                <td>6</td>
                <td>$depreciacao</td>
                <td>". ($valor - $depreciacao * 6 ) ."</td>
                <td>" . ($depreciacao * 6) . "</td>
            </tr>
            <tr>
                <td>7</td>
                <td>$depreciacao</td>
                <td>". ($valor - $depreciacao * 7 ) ."</td>
                <td> " . ($depreciacao * 7) . " </td>
            </tr>
        </table>
    </div>"
?>