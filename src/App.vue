<template>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: "Main",
  created() {
    window.newConsole = Object.assign({}, window.console);
    window.console = Object.assign({}, window.newConsole);
  },
};
</script>

<style></style>
