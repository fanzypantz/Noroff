<?php include 'layout.php' ?>

<?php startblock('content') ?>

<section class="index-header">
    <div class="header-content">
        <div class="header-image">
            <img src="/images/header.jpg" alt="">
        </div>
        <div class="header-text">

        </div>
    </div>

</section>


<div class="mini-container" style="margin-top: 75px">
    <div class="rotated-background"></div>
    <div class="content">
        <h2>Recent Arrivals</h2>
    </div>
</div>

<section class="big-container">
    <div class="rotated-background"></div>
    <div class="content-level">
        <div class="product-container">
            <?php for ($x = 0; $x <= 2; $x++) { ?>
                <div class="product">
                    <img src="<?php echo SHOES[$x]['image'] ?>" alt="">
                    <a href="/products.php#<?php echo SHOES[$x]['subCategory'] ?>">
                        <div class="text">
                            <h2 class="title"><?php echo SHOES[$x]['title'] ?></h2>
                            <h3>From <?php echo SHOES[$x]['price'] ?>$</h3>
                        </div>
                    </a>
                </div>
                <?php if( $x !== 2 ) {?>
                    <div class="vertical-line">
                        <svg  xmlns="http://www.w3.org/2000/svg">
                            <line x1="2px" y1="10%" x2="2px" y2="90%" />
                        </svg>
                    </div>
                <?php } ?>
            <?php } ?>
        </div>

        <div class="horizontal-line">
            <svg  xmlns="http://www.w3.org/2000/svg">
                <line x1="10%" y1="32px" x2="90%" y2="32px" />
            </svg>
            <div class="spacer"></div>
            <svg  xmlns="http://www.w3.org/2000/svg">
                <line x1="10%" y1="32px" x2="90%" y2="32px" />
            </svg>
            <div class="spacer"></div>
            <svg  xmlns="http://www.w3.org/2000/svg">
                <line x1="10%" y1="32px" x2="90%" y2="32px" />
            </svg>
        </div>

        <div class="product-container">
            <?php for ($x = 3; $x <= 5; $x++) { ?>
                <div class="product">
                    <img src="<?php echo SHOES[$x]['image'] ?>" alt="">
                    <a href="/products.php#<?php echo SHOES[$x]['subCategory'] ?>">
                        <div class="text">
                            <h2 class="title"><?php echo SHOES[$x]['title'] ?></h2>
                            <h3>From <?php echo SHOES[$x]['price'] ?>$</h3>
                        </div>
                    </a>
                </div>
                <?php if( $x !== 5 ) {?>
                    <div class="vertical-line">
                        <svg  xmlns="http://www.w3.org/2000/svg">
                            <line x1="2px" y1="10%" x2="2px" y2="90%" />
                        </svg>
                    </div>
                <?php } ?>
            <?php } ?>
        </div>
    </div>
</section>

<section class="big-container margin-top-140">
    <div class="rotated-background"></div>
    <div class="content-level">
        <div class="two-row history-index">
            <div class="overlay-image">
                <img src="/images/history.jpg" alt="">
                <div class="center-text">
                    <a href="/about.php#history"><h2>History</h2></a>
                </div>
            </div>
            <div class="vertical-line">
                <svg  xmlns="http://www.w3.org/2000/svg">
                    <line x1="2px" y1="10%" x2="2px" y2="90%" />
                </svg>
            </div>
            <div class="info">
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        <div class="two-row history-index">
            <div class="info">
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div class="vertical-line">
                <svg  xmlns="http://www.w3.org/2000/svg">
                    <line x1="2px" y1="10%" x2="2px" y2="90%" />
                </svg>
            </div>
            <div class="overlay-image">
                <img src="/images/craftsmanship.jpg" alt="">
                <div class="center-text">
                    <a href="/about.php#craftsmanship"><h2>Craftsmanship</h2></a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="big-container margin-top-140">
    <div class="rotated-background"></div>
    <div class="content-level persona">
        <div class="two-row">
            <div class="persona-container">
                <img class="persona-img" src="/images/persona.jpg" alt="">
            </div>

            <div class="vertical-line">
                <svg  xmlns="http://www.w3.org/2000/svg">
                    <line x1="2px" y1="10%" x2="2px" y2="90%" />
                </svg>
            </div>

            <div class="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p class="position">Founder/CEO - Letha</p>
                <p class="position">George Bush</p>
            </div>
        </div>
    </div>


</section>

<?php endblock() ?>
