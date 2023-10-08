<?php include 'layout.php' ?>

<?php startblock('head') ?>

    <style>
        body {
            background-color: white;
        }

        header {
            height: 100vh; /*500px*/
        }

        header .hero-banner {
            top: 50%;
            left: 50%;
        }

        .icon {
            width: 100px;
            top: 50%;
            transform: translateY(-50%)
        }

        footer {
            box-shadow: 0 -10px 20px 2px rgba(0, 0, 0, 0.4)
        }

    </style>

<?php endblock() ?>

<?php startblock('scripts') ?>

<!--    <script type="text/javascript" src="js/index.js"></script>-->

<?php endblock() ?>

<?php startblock('content') ?>

    <main class="container index">
        <article id="about" class="column text-blob shadow-inset">
            <div class="text">
                <p>
                    Come join us at the Community Science Museum where we’re committed to making science accessible to all.
                </p>
                <p>
                    Over the course of human history, science has developed from our early understanding of fire, wind, water, and earth to exploring everything from galaxies far away to the very building blocks of life itself.
                </p>
            </div>

        </article>

        <article class="column about">
            <div class="description text">
                <h2>What We Do</h2>
                <p>
                    The aim of our museum is to create a space where everyone can experience the wonders of our discoveries and perhaps even ignite a lifelong passion to continue the exploration of the world around us.
                </p>
                <p>
                    We believe science should not be confined to the textbook, but brought to live through exhibits. This is why we have over 1000 different exhibits on the many varied subjects of science to explore. Many of these exhibits are designed for you to interact with and play around to see science come to life (apart from the dinosaur exhibits – they only come to life at night when everyone’s gone home).
                </p>
            </div>
            <div id="what-we-do" class="img"></div>

        </article>

        <article id="club" class="column text-blob shadow-inset">
            <div class="text">
                <p>
                    During the school holidays we run special holiday clubs where you can join other children your age to go on a journey of discovery. Each holiday we pick a new theme to explore. To find out more about the holiday club and how you can join, send us a message.
                </p>
            </div>

        </article>

        <article class="column about">
            <div id="for-kids" class="img"></div>
            <div class="description text">
                <h2>For Kids</h2>
                <p>
                    Are you a young person looking to learn more about science? Come on down to our museum, there’s plenty to see and do.
                </p>
                <p>
                    You can learn about Newtonian physics from our bumper swing, or why not travel back in time and meet our resident Woolly Mammoth? Our exhibits are designed to be accessible for interested minds, so make sure you come ready to learn and explore.
                    We also have the Young Stars club which meets once a week on a Saturday between 10:00 and 13:00 where you’ll get to explore and experiment with our team of experts.
                </p>
            </div>

        </article>

        <article id="entrance" class="column text-blob shadow-inset">
            <div class="text">
                <p>
                    The entrance is free for all.
                </p>
                <p>
                    There are guided tours of the museum that leave every hour. These tours are 70 NOK per person and include a handy printed guide of the museum. If you would like to organise a guided tour for your group of 6 or more people, please contact us to arrange the tour.
                </p>
            </div>

        </article>

        <article class="column about">
            <div class="description text">
                <h2>For Teachers</h2>
                <p>
                    As a community-driven museum, we want to work with schools to create places of learning and exploring. Our team are on hand to give your students guided tours of the museum, teach them in our learning laboratory, and provide great video presentations that will excite and inspire them.
                </p>
                <p>
                    Please get in touch with us here to find out more about our facilities and to arrange a time to bring your students through for a visit.
                </p>
            </div>
            <div id="for-teachers" class="img"></div>
        </article>

        <article id="accessibility" class="column text-blob shadow-inset">
            <div class="text">
                <p>
                    The museum has wheelchair accessibility ramps. It also has audio guides and braille display signs for the visually impaired.
                </p>
                <p>
                    There is a café attached to the museum where you can get light lunches, soft drinks, coffee, snacks and more.
                </p>
                <p>
                    Our shop offers a range of memorabilia from the museum as well as great gifts and activity packs that allow you to continue to explore science even after you’ve left the museum.
                </p>
            </div>
        </article>

        <article class="column about">
            <div id="for-researchers" class="img"></div>
            <div class="description text">
                <h2>For Researchers</h2>
                <p>
                    Are you looking to get involved with our team of researchers and academics? Our museum offers various ways for you to use our resources and contribute towards them. We have online records, laboratory space, and a working relationship with a number of universities around the country.
                </p>
            </div>
        </article>

    </main>

<?php endblock() ?>
