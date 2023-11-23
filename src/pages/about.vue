<template>
  <main class="about">
    <div class="about__definition">
      <div class="about__description">
        <p class="about__description-text">
          Cyrille is a digital book platform that represents
          <span class="accent-font">a new vision</span> of combining literature
          with different art forms and techniques.
        </p>
        <CyrRhombus />
      </div>
      <div class="about__control">
        <h1 class="about__title">about</h1>
        <button></button>
      </div>
    </div>

    <div class="about__possibility">
      <p class="about__tagline">
        Our interactive features allow you to engage with the story through
        <span class="about__text_accent"
          >animations, sound effects, and other multimedia elements,</span
        >
        bringing the story to life in a whole new way.
      </p>
      <div class="about__basics">
        <img src="/images/17.png" alt="book" class="about__basics-img" />
        <p class="about__basics-description">
          At <span class="about__text_accent">the heart of our app</span> is a
          community of creative minds -
          <span class="about__text_accent"
            >writers, composers, musicians, designers, illustrators, and
            filmmakers.</span
          >
        </p>
      </div>
    </div>

    <div class="about__team">
      <h2 class="about__team-title">Our team</h2>
      <div class="about__teammates">
        <div class="about__teammate">
          <img
            src="/avatars/cyrille.png"
            alt="human"
            class="about__teammate-avatar"
          />
          <p class="about__teammate-name">
            Cyrille <span class="accent-font">D’essai</span>
          </p>
          <p class="about__teammate-role">Founder</p>
          <p class="about__teammate-description">
            Cyrille D’essai’s mission is to revolutionize the way we read and
            experience literature.
          </p>
        </div>
        <div class="about__teammate">
          <img
            src="https://i.pravatar.cc/150?img=33"
            alt="human"
            class="about__teammate-avatar"
          />
          <p class="about__teammate-name">
            Andrew <span class="accent-font">Gates</span>
          </p>
          <p class="about__teammate-role">IT specialist / frontender</p>
          <p class="about__teammate-description">
            Cyrille D’essai’s mission is to revolutionize the way we read and
            experience literature.
          </p>
        </div>
        <div class="about__teammate">
          <img
            src="https://i.pravatar.cc/300?u=DhY4QbDg6l"
            alt="human"
            class="about__teammate-avatar"
          />
          <p class="about__teammate-name">
            Apa <span class="accent-font">Dovnar</span>
          </p>
          <p class="about__teammate-role">Branding & Ux/Ui designer</p>
          <p class="about__teammate-description">
            Cyrille D’essai’s mission is to revolutionize the way we read and
            experience literature.
          </p>
        </div>
        <div class="about__teammate">
          <img
            src="https://i.pravatar.cc/300?u=leZ89wBXip"
            alt="human"
            class="about__teammate-avatar"
          />
          <p class="about__teammate-name">
            Rick <span class="accent-font">Miles</span>
          </p>
          <p class="about__teammate-role">IT specialist</p>
          <p class="about__teammate-description">
            Cyrille D’essai’s mission is to revolutionize the way we read and
            experience literature.
          </p>
        </div>
      </div>
    </div>

    <div class="about__collaborate">
      <div class="about__collaborate-wrapper">
        <h2 class="about__collaborate-title">
          We collaborate closely to offer you rich and rewarding
          <span class="accent-font">immersive experience</span>, transcending
          boundaries together.
        </h2>
        <div class="about__subtext">
          <p class="about__we-stand">
            We stand for shaping the future of storytelling.
          </p>
          <p class="about__we-stand">
            We stand for symbiotic, creative, experimental.
          </p>
        </div>
      </div>
    </div>

    <div class="about__explore">
      <h2 class="about__genre">
        New genre realm begins here, don’t miss it, explore with us!
      </h2>
    </div>
  </main>
</template>

<style lang="scss">
.about {
  overflow: auto;
  height: 100%;
  background-color: black;
  color: #fbfbfb;

  &__definition {
    position: relative;
    height: 110vh;

    display: flex;
    flex-direction: column;
    padding: 10rem 7rem;

    background-image: url('/backgrounds/about.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  &__description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7rem;
    margin: auto 0;

    text-align: center;
    font-size: 1.1em;
    font-weight: 300;
    letter-spacing: 0.4px;
  }

  &__description-text {
    max-width: 252px;
  }

  &__control {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    font-size: 4.5em;
    font-weight: 500;
    text-transform: uppercase;
  }

  &__possibility {
    position: relative;
    top: -10vh;
    z-index: 1;
    background-color: black;
    border-radius: 5rem;
    padding: 4rem 7rem;
  }

  &__tagline {
    margin-bottom: 10rem;
    max-width: 65%;
    color: rgba(251, 251, 251, 0.5);
    font-size: 2.9em;
    font-weight: 400;
    line-height: normal;
  }

  &__text_accent {
    color: #fbfbfb;
  }

  &__basics {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 10rem;
  }

  &__basics-img {
    border-radius: 1rem;
  }

  &__basics-description {
    margin: 0;
    width: 27rem;
    color: rgba(251, 251, 251, 0.5);
    font-size: 1.1em;
    font-weight: 400;
    line-height: normal;
  }

  &__team {
    padding: 7rem;
  }

  &__team-title {
    font-size: 4em;
    font-weight: 400;
    text-transform: uppercase;
  }

  &__teammates {
    display: flex;
    justify-content: space-between;
  }

  &__teammate {
    max-width: min-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  &__teammate-avatar {
    width: 25rem;
    border-radius: 50%;
    margin-bottom: 4rem;
    filter: grayscale(1);
    transition: 0.4s;
  }

  &__teammate-name {
    margin: 0;
    font-size: 1.6em;
  }

  &__teammate-role {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.1em;
    margin-bottom: 5rem;
  }

  &__teammate-description {
    text-align: center;
    font-family: Georgia;
    font-size: 1em;
    font-style: italic;
    opacity: 0;
  }

  &__teammate:hover .about__teammate-description {
    transition: 0.4s;
    opacity: 0.8;
  }

  &__teammate:hover .about__teammate-avatar {
    filter: grayscale(0);
  }

  &__collaborate {
    height: 135vh;
    padding: 13rem;
    border-radius: 5rem;

    background: linear-gradient(
        0deg,
        #000 0.16%,
        #0e0e0f 6.63%,
        rgba(0, 0, 0, 0) 65.93%
      ),
      url(/backgrounds/pink-woman.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  &__collaborate-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__collaborate-title {
    width: 70rem;
    margin-bottom: 45rem;
    text-align: center;
    font-size: 2.8em;
    font-weight: 400;
  }

  &__subtext {
    align-self: flex-end;
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    margin-right: 24rem;
  }

  &__we-stand {
    width: 18rem;
    font-size: 1.1em;
    font-weight: 400;
    opacity: 0.6;
  }

  &__explore {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__genre {
    width: 60rem;

    color: transparent;
    background-clip: text;
    background-image: linear-gradient(
      90deg,
      rgba(95, 138, 135, 1) 0%,
      rgba(172, 211, 209, 1) 100%
    );
    text-align: center;
    font-size: 2.8em;
    font-weight: 400;
  }
}
</style>

<script setup lang="ts"></script>
