<template>
  <div id="Empty__layout" class="absolute full-width full-height">
    <Nuxt />
  </div>
</template>

<style>
  body{
    margin: 0;
    padding: 0;

    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
  }

  #Empty__layout{
    background: radial-gradient(50% 50% at 50% 50%, #334F8B 0%, #203667 100%);

  }
</style>
