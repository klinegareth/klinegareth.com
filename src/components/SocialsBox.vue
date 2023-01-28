<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    links: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div id="container">
    <h1>{{ title ? title : "links" }}</h1>
    <div v-if="links.description" class="header-description">
      {{ links.description }}
    </div>
    <div v-for="(link, index) in links.links" :key="index">
      <a :href="link.url" target="_blank" rel="noopener" class="link-title">{{
        link.name
      }}</a>
    </div>
  </div>
</template>

<style scoped>
#container {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--color-box-bg);
  border: solid 1px var(--color-text);
  padding: 15px;
  overflow: hidden;
}

#page-navigation {
  gap: 15px;
  margin: 0px 15px 15px;
  display: flex;
  justify-content: center;
}

.header-description {
  margin: 0px 15px 15px;
  text-align: center;
}

.link-title {
  margin-bottom: 0px;
  margin-top: 0px;
}

.link-description {
  margin-top: 0px;
}

button {
  font-family: Cozette;
  color: var(--color-box-bg);
  border: none;
  background: var(--color-highlight);
}

h1 {
  color: var(--color-highlight);
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 15px;
}

#content {
  color: var(--color-text);
  text-align: justify;
}
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
