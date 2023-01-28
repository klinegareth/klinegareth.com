<script setup>
import SiteLinks from "../components/SiteLinks.vue";
import TextBox from "../components/TextBox.vue";
import ImageBox from "../components/ImageBox.vue";
import SocialsBox from "../components/SocialsBox.vue";
import socials from "~/socials";
</script>

<template>
  <div class="all">
    <div class="left">
      <ImageBox image="sunsetkline.png" class="topleft" />
      <SiteLinks class="bottomleft" />
    </div>
    <div class="right">
      <SocialsBox :links="socials" class="topright" />
      <TextBox
        class="bottomright"
        title="hello"
        content="heyo, welcome to my page! i post things here sometimes"
      />
    </div>
  </div>
</template>

<style scoped>
.all {
  padding: 50px;
  width: 40%;
  height: 60%;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: space-around;
  align-content: stretch;
  justify-content: center;
  gap: 20px;
}

@media screen and (max-width: 800px) {
  .all {
    flex-direction: column;
    width: 60%;
    height: 80%;
    overflow-y: scroll;
  }
}

.left {
  flex: 50% 0 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.right {
  flex: 50% 0 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.topleft {
  flex: 60% 0 1;
}
.topright {
  flex: 30% 0 1;
  background-color: var(--color-box-bg);
  border: solid 1px var(--color-text);
}
.bottomleft {
  flex: 1;
}
.bottomright {
  flex: 1;
  background-color: var(--color-box-bg);
  border: solid 1px var(--color-text);
}
</style>
