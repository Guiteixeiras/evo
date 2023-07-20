<?php include('config.php'); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>dropdown</title>
    <link href="<?php echo INCLUDE_PATH; ?>style.css" type="text/css" rel="stylesheet">
</head>

<body>

    <ul class="separar">
        <li><a href="#">inicio</a></li>
        <li>
            <a href="#">suporte ↓</a>
            <ul class="dropdown">
                <li><a href="<?php echo INCLUDE_PATH; ?>iphone">iphone</a></li>
                <li><a href="<?php echo INCLUDE_PATH; ?>android">android</a></li>
                <li><a href="#">tablet</a></li>
                <li><a href="#">notebook</a></li>
            </ul>
        </li>
        <li><a href="#">contato</a></li>
        <li><a href="#">compra</a></li>
    </ul>

    <?php
    $url = isset($_GET['url']) ? $_GET['url'] : 'começo';
    if (file_exists('paginas/' . $url . '.php')) {
        include('paginas/' . $url . '.php');
    } else {
        //caso de erro ou a pagina não exista
        include('paginas/erro.php');
    }
    ?>

</body>

</html>