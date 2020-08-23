<template>
  <div class="page-container">
    <ts-layout-header />
    <section class="ts-content">
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </section>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";

export default {
  name: "ts-index",
  components: {
    [Header.name]: Header
  },
  data() {
    return {};
  },
  computed: {
    //对于不同router指向同一个component的情况，采用标注key的方式，使得组件能够重新渲染触发钩子
    key() {
      return this.$route.fullPath;
    }
  },
  filters:{
    timefmt:function(timelong){
      if(!timelong) return '--';
      return new Date(timelong).format("yyyy/MM/dd");
    }
  },
  methods: {}
};
</script>

<style lang="less">
@import url('../assets/less/var.less');

.ts-content{
  position: relative;
  padding: 0 20px;
}
.ts-bread{
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 10;
}
</style>
