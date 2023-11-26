<template>
  <div>
    <HeadingSection>
      <template #heading>
        The <span class="accent-font">interactive e-book</span>
        you'll be in love with.
      </template>
      <template #description>
        Cyrille is a digital book platform that represents a new vision of
        combining literature with different art forms and techniques.
      </template>
    </HeadingSection>
    <ImageCardSection background="/backgrounds/landing-girl.jpg" />
    <HeadingSection>
      <template #heading>
        While reading, you will come across
        <span class="accent-font">special triggers.</span> By clicking on them,
        you will see additional content.
      </template>
      <template #description>
        Enjoy videos, images, sounds, or visual effects that appear. Close them
        to return to your reading.
      </template>
    </HeadingSection>
    <HeadlessSection>
      <TriggersDemo />
    </HeadlessSection>
    <ImageCardSection background="/backgrounds/landing-explore.png" />
  </div>
</template>
