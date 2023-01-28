<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
  },
};
</script>

<template>
  <div id="container">
    <a :href="link" target="_blank" rel="noreferrer">
      <img :src="`/images/${image}`" />
    </a>
  </div>
</template>

<style scoped>
img,
a {
  position: absolute;
  translate-x: -50%;
  translate-y: -50%;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
#container {
  position: relative;
  flex: 40% 1 0;
  display: flex;
  flex-direction: column;
  background-color: var(--color-box-bg);
  border: solid 1px var(--color-text);
}
</style>
