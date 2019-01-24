<template>
    <div class="pc-first">
      这是pc页面
      <h1 class="h1">{{ $t('message.100000')}}</h1>
      <h2 class="h2">{{ $t('message.100001')}}</h2>
      <h3 class="h3">{{ $t('message.100002')}}</h3>\
      <div>123</div>
      <el-button type="primary" @click="changeLang('en')">中文</el-button>
      <el-button type="primary" @click="changeLang('zh')">English</el-button>
    </div>
</template>

<script>
    export default {
        name: "firstPage",
      methods: {
          changeLang (lang) {
            if (lang === 'zh') {
              this.$i18n.locale = 'en'
            } else {
              this.$i18n.locale = 'zh'
            }
          }
      }
    }
</script>

<style scoped>

</style>
