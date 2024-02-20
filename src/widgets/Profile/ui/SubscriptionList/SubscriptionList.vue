<template>
  <div :class="$style.profile">
    <div :class="$style.profile__content">
      <CyrRhombus :class="$style.profile__icon" />
      <p :class="$style.profile__description">
        You don’t have any subscription yet.
      </p>
      <p :class="$style.profile__advice">
        Choose the subscription that suits you or try a 7-day free trial period.
      </p>
      <button :class="$style.profile__button">Get free trial</button>
    </div>
  </div>
</template>

<style lang="scss" module>
.profile {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    margin-top: -15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__icon {
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 3.7rem;
  }

  &__description {
    margin: 0;
    font-size: 2.4rem;
  }

  &__advice {
    width: 38rem;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 3.7rem;
  }
  &__button {
    padding: 1.7rem 6rem;
    border-radius: 5.5rem;
    background-color: black;
    color: white;
    text-transform: uppercase;
    border: none;
  }
}
</style>
