<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <title>Exercício 02</title>
</head>

<body>
    <div class="col d-flex justify-content-center mt-5">
        <table border="1">
            <tr>
                <td><b>Códido do produto</b></td>
                <td><b>Preço Unitário</b></td>
            </tr>
            <tr>
                <td>1001</td>
                <td>5,93</td>
            </tr>
            <tr>
                <td>1234</td>
                <td>6,45</td>
            </tr>
            <tr>
                <td>6548</td>
                <td>2,37</td>
            </tr>
            <tr>
                <td>0987</td>
                <td>5,32</td>
            </tr>
            <tr>
                <td>7623</td>
                <td>6,45</td>
            </tr>
        </table>
    </div>


    <?php

        echo (
        "<body>
            <div align='center'>
                <form method='post' action='EX02-calculator.php'>
                    <label for='fname'>Código:</label><br>
                    <input type='text' id='codigo' name='codigo' value=''>
                    <br>
                    <label for='lname'>Quantidade:</label><br>
                    <input type='text' id='quantidade' name='quantidade' value=''><br><br>
                    
                    <input type='submit' value='Calcular'>
                </form>
            </div>
        </body>");


    ?>
</body>

</html>