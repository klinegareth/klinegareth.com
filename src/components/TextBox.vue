<script>
export default {
  props: {
    title: String,
    content: String,
  },
};
</script>
<template>
  <div id="container">
    <h1>{{ title }}</h1>
    <div id="content">
      {{ content }}
    </div>
  </div>
</template>
<style scoped>
#container {
  display: flex;
  flex-direction: column;
  background-color: var(--color-box-bg);
  border: solid 1px var(--color-text);
  padding: 15px;
}

h1 {
  color: var(--color-highlight);
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
}

#content {
  color: var(--color-text);
  text-align: justify;
}
</style>
