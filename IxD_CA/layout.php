<?php require_once 'ti.php' ?>
<?php include("includes/_config.php");?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Letha - <?php print $PAGE_TITLE;?></title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content="<?php print $KEYWORDS;?>" />
        <meta name="description" content="<?php print $DESCRIPTION;?>" />
<!--        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">-->
        <link href="https://fonts.googleapis.com/css?family=Lato|Parisienne" rel="stylesheet">
        <link rel="stylesheet" href="css/base.css">
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <?php startblock('head') ?>

        <?php endblock() ?>

    </head>
    <body>

<!--        --><?php //if ($CURRENT_PAGE == "Index") {include("includes/index_header.php"); } else {include("includes/header.php");};?>
        <?php include("includes/header.php"); ?>
        <?php startblock('content') ?>

        <?php endblock() ?>

        <footer class="margin-top-140">
            <div class="site-map">
                <div class="link-container">
                    <a href="/products.php">Shoe Types</a>
                    <a href="">Oxford</a>
                    <a href="">Brouge</a>
                    <a href="">Derbies</a>
                    <a href="">Hiking</a>
                </div>
                <div class="link-container">
                    <a href="/products.php">Accessories</a>
                    <a href="">Belts</a>
                    <a href="">Polish</a>
                    <a href="">Wallets</a>
                </div>
                <div class="link-container">
                    <a href="/about.php">About Us</a>
                    <a href="">Vision</a>
                    <a href="">History</a>
                    <a href="">Business Goals</a>
                </div>
                <div class="link-container">
                    <a href="/contact.php">Contact Us</a>
                    <a href="">Store Location</a>
                    <a href="">Contact Us</a>
                </div>
            </div>
        </footer>

        <script type="text/javascript" src="/js/main.js"></script>
        <?php startblock('scripts') ?>

        <?php endblock() ?>

    </body>
</html>
