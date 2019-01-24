<template>
    <div class="me">这是我的
      <router-link :to="{name: 'FirstPage'}">跳转到first页面</router-link>
    </div>

</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
.me{
  font-size: 0.6rem;
}
</style>
