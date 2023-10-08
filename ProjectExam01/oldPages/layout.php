<?php require_once 'ti.php' ?>
<?php include("includes/_config.php");?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Letha - <?php print $PAGE_TITLE;?></title>
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content="<?php print $KEYWORDS;?>" />
        <meta name="description" content="<?php print $DESCRIPTION;?>" />
        <link rel="stylesheet" href="https://use.typekit.net/bfn8hng.css">
        <link rel="stylesheet" href="css/base.css">

        <?php startblock('head') ?>

        <?php endblock() ?>

    </head>

    <body>
        <div class="bg-main"></div>

<!--        --><?php //if ($CURRENT_PAGE == "Index") {include("includes/index_header.php"); } else {include("includes/header.php");};?>
        <?php include("includes/header.php"); ?>

        <div class="container-main">
            <?php startblock('content') ?>

            <?php endblock() ?>
        </div>

<!--        <footer>-->
<!---->
<!--        </footer>-->

        <script type="text/javascript" src="/js/main.js"></script>
        <?php startblock('scripts') ?>

        <?php endblock() ?>

    </body>
</html>
