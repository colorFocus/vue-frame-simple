<template>
  <nav class="ts-navi-bar">
    <div class="ts-logo-wrapper">
      <img src="../../assets/img/logo.png" />
      <div class="ts-logo-name">电子病历内涵质控</div>
    </div>
    <el-menu :default-active="activeIndex" class="ts-menu" @select="selectMenu">
      <el-menu-item index="1">
        <i class="el-icon-monitor"></i>
        <span slot="title">全景概览</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-operation"></i>
          <span>规则管理</span>
        </template>
        <el-menu-item index="2-1">规则列表</el-menu-item>
        <el-menu-item index="2-2">自定义规则</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-data-analysis"></i>
        <span slot="title">数据管理</span>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script>
import invert from "lodash/invert";

export default {
  name: "ts-layout-navbar",
  data: function() {
    return {
      map: {
        "2-1": "rule-list",
        "2-2": "rule-detail"
      }
    };
  },
  computed: {
    activeIndex() {
      var name = this.$route.name;
      var map_revert = invert(this.map);
      return map_revert[name];
    }
  },
  mounted: function() {},
  methods: {
    selectMenu: function(index) {
      this.$router.push({
        name: this.map[index]
      });
    }
  }
};
</script>

<style lang="less">
@import "../../assets/less/var.less";
@ts-menu-bg: #616b80;
@ts-menu-bg2: #808899;

.ts-navi-bar {
  color: #fff;
  background-color: @ts-menu-bg;
  .ts-logo-wrapper {
    margin-top: 12px;
    text-align: center;
    img {
      width: 141px;
    }
    .ts-logo-name {
      width: 143px;
      margin: 5px auto;
      font-size: 12px;
      border-top: 1px solid #6099ff;
      padding-top: 6px;
      padding-left: 2px;
      letter-spacing: 5px;
    }
  }
  .ts-menu {
    margin-top: 60px;
  }
  .el-menu,
  .el-submenu {
    border: none;
    background-color: @ts-menu-bg;
    .el-menu-item,
    .el-submenu__title {
      color: #fff;
      font-weight: normal;
      height: 56px;
      line-height: 56px;
      border-right: 2px solid transparent;
      i {
        color: #fff;
      }
      &.is-active,
      &.is-active:hover {
        border-right-color: #1c5afc;
        background-color: #fff;
        color: #303133;
        i {
          color: #303133;
        }
      }
      &:hover {
        color: #fff;
        background-color: @ts-menu-bg2;
      }
    }
  }
  .el-submenu {
    .el-menu-item {
      height: 40px;
      line-height: 40px;
      padding-left: 47px !important;
    }
    .el-submenu__icon-arrow {
      color: #fff;
    }
  }
}
</style>
