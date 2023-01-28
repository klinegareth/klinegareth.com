<script>
export default {
  data() {
    return {
      perPage: 10,
      page: 0,
    };
  },
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
  methods: {
    pages() {
      // thank god for this guy idk why i was losing my mind over this https://codereview.stackexchange.com/questions/266170/table-pagination
      const items = this.links.links;
      const range = (size) => [...Array(size).keys()];
      const pageCount = Math.ceil(items.length / this.perPage);
      const getPage = (pageNo) =>
        range(this.perPage)
          .map((noInPage) => items[pageNo * this.perPage + noInPage])
          .filter((link) => link != undefined);
      return range(pageCount).map((pageNo) => getPage(pageNo));
    },
    log(msg) {
      console.log(msg);
    },
    nextPage() {
      if (this.page < this.pages().length - 1) {
        this.page++;
      }
    },
    prevPage() {
      if (this.page >= 1) {
        this.page--;
      } else {
        this.page = 0;
      }
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
    <div v-if="pages().length > 0" id="page-navigation">
      <button v-if="page > 0" @click="prevPage" type="button">
        {{ "<-" }}
      </button>
      <button v-if="page <= pages().length - 2" @click="nextPage" type="button">
        {{ "->" }}
      </button>
    </div>
    <div v-for="(link, index) in pages()[page]" :key="index">
      <a :href="link.url" target="_blank" rel="noopener" class="link-title">{{
        link.name
      }}</a>
      <p :v-if="link.description" class="link-description">
        {{ link.description }}
      </p>
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
