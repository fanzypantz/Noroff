<?php include 'layout.php' ?>

<?php startblock('scripts') ?>

<script type="text/javascript" src="/js/products.js"></script>

<?php endblock() ?>

<?php startblock('content') ?>

<div id="oxford" class="mini-container margin-top-140">
    <div class="rotated-background"></div>
    <div class="content">
        <h2>Oxford</h2>
    </div>
</div>

<section class="big-container">
    <div class="rotated-background"></div>

    <div class="content-level product-details"  style="display: none;">

        <div class="breadcrumb">
            <p><a class="back">Categories</a> > <a class="back">Oxford</a> > Stoneygate Dark Tan</p>
        </div>

        <div id="product-01" class="product-page">
            <img class="product-image" src="/images/shoes01.jpg" alt="">

            <div class="vertical-line">
                <svg  xmlns="http://www.w3.org/2000/svg">
                    <line x1="2px" y1="10%" x2="2px" y2="90%" />
                </svg>
            </div>

            <div class="product-description">
                <h3 class="name">Stoneygate Dark Tan</h3>
                <p class="sub-title">TAMPANATO CALF LEATHER OXFORD GROGUE</p>
                <p class="description">Stoneygate, our new, dark tan leather oxford brogue is an update of our classic Aldeburgh. It combines a robust Goodyear Welted construction with hand-finished tamponato styling, where layer upon layers of colour is added to the upper whilst it is on the last, and then ‘edge finished’ with darker tones along the seams, to create a great depth to the upper. Finished with our signature green sole.</p>
                <p class="sub-title size">Sizes</p>
                <div class="sizes">
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                </div>
                <p class="price">399$</p>
            </div>
        </div>
        <div class="buttons">
            <button class="product-button back">Back</button>
            <button class="product-button add-cart">Add To Cart</button>
        </div>
    </div>

    <div class="content-level category">
        <div class="product-container">
            <?php for ($x = 0; $x <= 2; $x++) { ?>
                <div id="<?php echo $x ?>" class="product">
                    <img src="<?php echo SHOES[$x]['image'] ?>" alt="">
                    <div class="text">
                        <h2 class="title"><?php echo SHOES[$x]['title'] ?></h2>
                        <h3>From <?php echo SHOES[$x]['price'] ?>$</h3>
                    </div>
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
                <div id="<?php echo $x ?>" class="product">
                    <img src="<?php echo SHOES[$x]['image'] ?>" alt="">
                    <div class="text">
                        <h2 class="title"><?php echo SHOES[$x]['title'] ?></h2>
                        <h3>From <?php echo SHOES[$x]['price'] ?>$</h3>
                    </div>
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

<div id="brouge" class="mini-container margin-top-140">
    <div class="rotated-background"></div>
    <div class="content">
        <h2>Brouge</h2>
    </div>
</div>

<section class="big-container">
    <div class="rotated-background"></div>
    <div class="content-level product-details"  style="display: none;">

        <div class="breadcrumb">
            <p><a class="back">Categories</a> > <a class="back">Brogue</a> > Stoneygate Dark Tan</p>
        </div>

        <div id="product-01" class="product-page">
            <img class="product-image" src="/images/shoes01.jpg" alt="">

            <div class="vertical-line">
                <svg  xmlns="http://www.w3.org/2000/svg">
                    <line x1="2px" y1="10%" x2="2px" y2="90%" />
                </svg>
            </div>

            <div class="product-description">
                <h3 class="name">Stoneygate Dark Tan</h3>
                <p class="sub-title">TAMPANATO CALF LEATHER OXFORD GROGUE</p>
                <p class="description">Stoneygate, our new, dark tan leather oxford brogue is an update of our classic Aldeburgh. It combines a robust Goodyear Welted construction with hand-finished tamponato styling, where layer upon layers of colour is added to the upper whilst it is on the last, and then ‘edge finished’ with darker tones along the seams, to create a great depth to the upper. Finished with our signature green sole.</p>
                <p class="sub-title size">Sizes</p>
                <div class="sizes">
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                </div>
                <p class="price">399$</p>
            </div>
        </div>
        <div class="buttons">
            <button class="product-button back">Back</button>
            <button class="product-button add-cart">Add To Cart</button>
        </div>
    </div>

    <div class="content-level category">
        <div class="product-container">
            <?php for ($x = 6; $x <= 8; $x++) { ?>
                <div id="<?php echo $x ?>" class="product">
                    <img src="<?php echo SHOES[$x]['image'] ?>" alt="">
                    <div class="text">
                        <h2 class="title"><?php echo SHOES[$x]['title'] ?></h2>
                        <h3>From <?php echo SHOES[$x]['price'] ?>$</h3>
                    </div>
                </div>
                <?php if( $x !== 8 ) {?>
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
            <?php for ($x = 9; $x <= 11; $x++) { ?>
                <div id="<?php echo $x ?>" class="product">
                    <img src="<?php echo SHOES[$x]['image'] ?>" alt="">
                    <div class="text">
                        <h2 class="title"><?php echo SHOES[$x]['title'] ?></h2>
                        <h3>From <?php echo SHOES[$x]['price'] ?>$</h3>
                    </div>
                </div>
                <?php if( $x !== 11 ) {?>
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

<div id="derbies" class="mini-container margin-top-140">
    <div class="rotated-background"></div>
    <div class="content">
        <h2>Derbies</h2>
    </div>
</div>

<section class="big-container">
    <div class="rotated-background"></div>
    <div class="content-level product-details"  style="display: none;">

        <div class="breadcrumb">
            <p><a class="back">Categories</a> > <a class="back">Derbies</a> > Stoneygate Dark Tan</p>
        </div>

        <div id="product-01" class="product-page">
            <img class="product-image" src="/images/shoes01.jpg" alt="">

            <div class="vertical-line">
                <svg  xmlns="http://www.w3.org/2000/svg">
                    <line x1="2px" y1="10%" x2="2px" y2="90%" />
                </svg>
            </div>

            <div class="product-description">
                <h3 class="name">Stoneygate Dark Tan</h3>
                <p class="sub-title">TAMPANATO CALF LEATHER OXFORD GROGUE</p>
                <p class="description">Stoneygate, our new, dark tan leather oxford brogue is an update of our classic Aldeburgh. It combines a robust Goodyear Welted construction with hand-finished tamponato styling, where layer upon layers of colour is added to the upper whilst it is on the last, and then ‘edge finished’ with darker tones along the seams, to create a great depth to the upper. Finished with our signature green sole.</p>
                <p class="sub-title size">Sizes</p>
                <div class="sizes">
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                    <div class="size-container">
                        <p>UK: 6.0</p>
                    </div>
                </div>
                <p class="price">399$</p>
            </div>
        </div>
        <div class="buttons">
            <button class="product-button back">Back</button>
            <button class="product-button add-cart">Add To Cart</button>
        </div>
    </div>

    <div class="content-level category">
        <div class="product-container">
            <?php for ($x = 12; $x <= 14; $x++) { ?>
                <div id="<?php echo $x ?>" class="product">
                    <img src="<?php echo SHOES[$x]['image'] ?>" alt="">
                    <div class="text">
                        <h2 class="title"><?php echo SHOES[$x]['title'] ?></h2>
                        <h3>From <?php echo SHOES[$x]['price'] ?>$</h3>
                    </div>
                </div>
                <?php if( $x !== 14 ) {?>
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
            <?php for ($x = 15; $x <= 17; $x++) { ?>
                <div id="<?php echo $x ?>" class="product">
                    <img src="<?php echo SHOES[$x]['image'] ?>" alt="">
                    <div class="text">
                        <h2 class="title"><?php echo SHOES[$x]['title'] ?></h2>
                        <h3>From <?php echo SHOES[$x]['price'] ?>$</h3>
                    </div>
                </div>
                <?php if( $x !== 17 ) {?>
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

<div id="accessories" class="mini-container margin-top-140">
    <div class="rotated-background"></div>
    <div class="content">
        <h2>Accessories</h2>
    </div>
</div>

<section class="big-container">
    <div class="rotated-background"></div>
    <div class="content-level product-details"  style="display: none;">

        <div class="breadcrumb">
            <p><a class="back">Categories</a> > <a class="back">Accessories</a> > Welsh Wallet</p>
        </div>

        <div id="product-01" class="product-page">
            <img class="product-image" src="/images/wallet.jpg" alt="">

            <div class="vertical-line">
                <svg  xmlns="http://www.w3.org/2000/svg">
                    <line x1="2px" y1="10%" x2="2px" y2="90%" />
                </svg>
            </div>

            <div class="product-description">
                <h3 class="name">Welsh Wallet</h3>
                <p class="sub-title">HANDCRAFTED WALLET FROM WALES</p>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p class="sub-title size">Sizes</p>
                <div class="sizes">
                    <div class="size-container">
                        <p>Small</p>
                    </div>
                    <div class="size-container">
                        <p>Medium</p>
                    </div>
                    <div class="size-container">
                        <p>Large</p>
                    </div>
                </div>
                <p class="price">39$</p>
            </div>
        </div>
        <div class="buttons">
            <button class="product-button back">Back</button>
            <button class="product-button add-cart">Add To Cart</button>
        </div>
    </div>

    <div class="content-level category">
        <div class="product-container">
            <?php for ($x = 0; $x <= 2; $x++) { ?>
                <div id="acc<?php echo $x ?>" class="product">
                    <img src="<?php echo ACCESSORIES[$x]['image'] ?>" alt="">
                    <div class="text">
                        <h2 class="title"><?php echo ACCESSORIES[$x]['title'] ?></h2>
                        <h3>From <?php echo ACCESSORIES[$x]['price'] ?>$</h3>
                    </div>
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
                <div id="acc<?php echo $x ?>" class="product">
                    <img src="<?php echo ACCESSORIES[$x]['image'] ?>" alt="">
                    <div class="text">
                        <h2 class="title"><?php echo ACCESSORIES[$x]['title'] ?></h2>
                        <h3>From <?php echo ACCESSORIES[$x]['price'] ?>$</h3>
                    </div>
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

<?php endblock() ?>
