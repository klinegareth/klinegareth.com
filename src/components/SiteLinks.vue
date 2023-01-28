<script>
export default {
  props: {
    title: String,
  },
};
</script>

<template>
  <div id="container">
    <h1>{{ title ? title : "navigation" }}</h1>
    <div id="content">
      <nav>
        <RouterLink
          id="links"
          v-for="route in $router.options.routes"
          :key="route.path"
          :to="route.path"
          >{{ route.name }}</RouterLink
        >
      </nav>
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
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
