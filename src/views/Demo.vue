<template>
  <div class="ts-entry">
    Demo
  </div>
</template>

<script>
import Vue from "vue";
import moduleApi from "@/api.js";
import AppUtil from "@/utils/AppUtil.js";

export default {
  name: "ts-entry",
  components: {
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    
  },
  watch: {
    
  },
  filters:{
    
  },
  created(){
    
  },
  mounted() {
    window.ts_entry = this; //TODO:
  },
  methods: {
    
  }
};
</script>

<style lang="less">
@import url("../assets/less/var.less");

.ts-entry {
  width: 100%;
  height: 100%;
}
</style>
