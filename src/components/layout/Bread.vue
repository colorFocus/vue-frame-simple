<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in levelList" :key="item.path">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "ts-layout-breadcrumb",
  data: function() {
    return {
      levelList: []
    };
  },
  computed: {},
  watch: {
    $route(route) {
      this.getBreadcrumb();
    }
  },
  created: function() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      this.levelList = this.$route.matched.filter(item => item.meta && item.meta.title);
    }
  }
};
</script>

<style lang="less">
</style>
