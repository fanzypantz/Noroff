<template>
  <div class="container-main">
    <section id="header-index" class="one-page scrolltarget"></section>

    <section class="container-normal history scrolltarget">
      <h2 class="fade">Making</h2>
      <h2 id="history" class="fade">Hi</h2>
      <div class="reflight fade">
        <h3>First reflight</h3>
        <svg xmlns="http://www.w3.org/2000/svg">
          <line x1="0%" y1="5px" x2="100%" y2="5px" />
        </svg>
        <h3>First delivery</h3>
      </div>
      <p class="text fade">
        SpaceX has gained worldwide attention for a series of historic
        milestones. It is the only private company capable of returning a
        spacecraft from low Earth orbit, which it first accomplished in 2010.
        The company made history again in 2012 when its Dragon spacecraft became
        the first commercial spacecraft to deliver cargo to and from the
        International Space Station.
      </p>
      <a href="rockets.html" class="hangar fade">
        <img src="../assets/images/hangar.jpg" alt="spacex hangar" />
        <div class="link-text">
          <h3>Falcon Rockets</h3>
        </div>
      </a>
    </section>

    <Slogan
      id="hero01"
      slogan="If you get up in the morning and think the future is going to be
            better, it is a bright day. Otherwise, it's not."
      author="Elon Musk"
    />

    <Gallery />

    <Slogan
      id="hero02"
      slogan="When Henry Ford made cheap, reliable cars, people said, 'Nah, what's
    wrong with a horse?' That was a huge bet he made, and it worked."
      author="Elon Musk"
    />

    <section id="index-cta" class="container-normal scrolltarget">
      <a id="dragon-space" href="">
        <img
          class="fade"
          src="../assets/images/dragon_capsule.jpg"
          alt="dragon capsule in space"
        />
        <div class="link-text fade">
          <h3>Dragon Capsules</h3>
        </div>
      </a>
      <div id="two-row-dragon">
        <a id="landing" href="">
          <img
            class="fade"
            src="../assets/images/ofc_ilu_landing.jpg"
            alt="falcon core landing"
          />
          <div class="link-text fade">
            <h3>Launch Missions</h3>
          </div>
        </a>
        <a id="core-hangar" href="">
          <img
            class="fade"
            src="../assets/images/falcon_core.jpg"
            alt="falcon core in hangar"
          />
          <div class="link-text fade">
            <h3>Falcon Cores</h3>
          </div>
        </a>
      </div>
    </section>

    <Slogan
      id="hero03"
      slogan="We're going to make it happen. As God is my bloody witness, I'm
    hell-bent on making it work."
      author="Elon Musk"
    />

    <section id="business" class="container-normal scrolltarget">
      <div class="column">
        <h1 id="dreams" class="fade">Relive your dreams</h1>
        <img
          class="fade"
          src="../assets/images/business01.jpg"
          alt="man looking at planning board"
        />
      </div>
      <div class="column">
        <img
          class="fade"
          src="../assets/images/elon_musk.jpg"
          alt="elon musk"
        />
        <h1 id="jobs" class="fade">Available Jobs</h1>
        <a
          class="career-button fade"
          href="https://www.spacex.com/careers"
          target="_blank"
          >Career</a
        >
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

import Slogan from '../components/Slogan';
import Gallery from '../components/Gallery';

export default {
  name: 'Home',
  components: { Gallery, Slogan },
};
</script>
