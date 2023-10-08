<?php require_once 'ti.php' ?>
<?php include("includes/_config.php");?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Community Science Museum - <?php print $PAGE_TITLE;?></title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content="museum community science exhibitions robotics AI biology history cosmology" />
        <meta name="description" content="Come see your local community science museum for all we have to offer, we have plenty of exhibitions about fantastic subjects like cosmlogy, biology and robotics" />
        <link rel="stylesheet" href="https://use.typekit.net/gmx3mnm.css">
        <link rel="stylesheet" href="css/base.css">
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <?php startblock('head') ?>

        <?php endblock() ?>

    </head>
    <body>
        <header>
            <img class="icon" src="images/logo.svg" alt="icon for the community science museum">

            <div class="hero-img"></div>

            <nav id="nav" class="nav">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a class="nav-link <?php if ($CURRENT_PAGE == "Index") {?>active<?php }?>" href="index.php" title="Home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php if ($CURRENT_PAGE == "Exhibitions") {?>active<?php }?>" href="exhibitions.php" title="Exhibition spaces">Exhibitions</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php if ($CURRENT_PAGE == "Involvement") {?>active<?php }?>" href="involvement.php" title="Get involved with the museum">Get Involved</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php if ($CURRENT_PAGE == "Contact") {?>active<?php }?>" href="contact.php" title="Contact Us">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php if ($CURRENT_PAGE == "Visit Us") {?>active<?php }?>" href="visit.php" title="Visit Us">Visit Us</a>
                    </li>
                </ul>
            </nav>

            <img id="mobile-button" src="images/menu.svg" alt="mobile meu button">

            <div class="hero-banner">
                <h1>Community Science Museum</h1>
                <h2>Explore Together</h2>
            </div>
        </header>



        <?php startblock('content') ?>

        <?php endblock() ?>

        <footer>

            <img class="icon" src="images/logo.svg" alt="icon for the community science museum">

            <div class="link-container">
                <a class="nav-link <?php if ($CURRENT_PAGE == "Index") {?>active<?php }?>" href="index.php" title="Home">Home</a>
                <a class="nav-link" href="index.php#what-we-do" title="Home">What We Do</a>
                <a class="nav-link" href="index.php#for-kids" title="Home">For Kids</a>
                <a class="nav-link" href="index.php#for-teachers" title="Home">For Teachers</a>
                <a class="nav-link" href="index.php#for-researchers" title="Home">For Researchers</a>
            </div>
            <div class="link-container">
                <a class="nav-link <?php if ($CURRENT_PAGE == "Exhibitions") {?>active<?php }?>" href="exhibitions.php" title="Exhibition spaces">Exhibitions</a>
                <a class="nav-link" href="exhibitions.php#cosmology" title="Home">Cosmology</a>
                <a class="nav-link" href="exhibitions.php#evolution" title="Home">Evolution</a>
                <a class="nav-link" href="exhibitions.php#biology" title="Home">Biology and Medicine</a>
                <a class="nav-link" href="exhibitions.php#robotics" title="Home">Robotics and AI</a>
                <a class="nav-link" href="exhibitions.php#ecology" title="Home">Ecology</a>
            </div>
            <div class="link-container">
                <a class="nav-link <?php if ($CURRENT_PAGE == "Involvement") {?>active<?php }?>" href="involvement.php" title="Get involved with the museum">Get Involved</a>
                <a class="nav-link" href="involvement.php#support" title="Home">Support</a>
                <a class="nav-link" href="involvement.php#volunteer" title="Home">Volunteers</a>
                <a class="nav-link" href="involvement.php#internships" title="Home">Internships</a>
            </div>
            <div class="link-container">
                <a class="nav-link <?php if ($CURRENT_PAGE == "Contact") {?>active<?php }?>" href="contact.php" title="Contact Us">Contact Us</a>
                <a class="nav-link" href="contact.php#email" title="Home">By Email</a>
                <a class="nav-link" href="contact.php#phone" title="Home">By Phone</a>
                <a class="nav-link" href="contact.php#address" title="Home">Our Address</a>
            </div>
            <div class="link-container">
                <a class="nav-link <?php if ($CURRENT_PAGE == "Visit Us") {?>active<?php }?>" href="visit.php" title="Visit Us">Visit Us</a>
                <a class="nav-link" href="visit.php#location" title="Home">Location</a>
                <a class="nav-link" href="visit.php#hours" title="Home">Opening Hours</a>
                <a class="nav-link" href="visit.php#shop" title="Home">Gift Shop</a>
                <a class="nav-link" href="visit.php#admission" title="Home">Admission</a>
                <a class="nav-link" href="visit.php#tours" title="Home">Guided Tours</a>
                <a class="nav-link" href="visit.php#impaired" title="Home">Accessibility</a>
                <a class="nav-link" href="visit.php#food" title="Home">Food and Drinks</a>
            </div>
        </footer>

        <script type="text/javascript" src="js/main.js"></script>
        <?php startblock('scripts') ?>

        <?php endblock() ?>

    </body>
</html>
