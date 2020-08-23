<template>
  <div class="ts-header">
    <div class="ts-header-links">
      <!-- <a href="javascript:;" class="ts-link">帮助</a> -->
      <span class="ts-user">
        <img src="@/assets/img/user.png" />
        <span class="ts-user-name">你好，{{ account }}</span>
        <el-dropdown trigger="click" placement="bottom" @command="handleCommand">
          <i class="ts-icon el-icon-arrow-down"></i>
          <el-dropdown-menu class="ts-header-menu" slot="dropdown">
            <el-dropdown-item command="exit">注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- <i class="ts-icon el-icon-arrow-down"></i> -->
      </span>
    </div>
    <div class="ts-header-logo">
      <!-- <h2 @click="goHome">CareDataParsing</h2> -->
      <img src="@/assets/logo.png" @click="goHome"/>
      <span></span>
      <h1 @click="goHome">专病库数据提取工具</h1>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import { keycloak } from "@/main.js";

export default {
  name: "ts-layout-header",
  data: function() {
    return {
      account: "",
      userId: ""
    };
  },
  mounted: function() {
    this.userId = Cookies.get("fs-user-id");
    this.account = Cookies.get("fs-user-account");
  },
  methods: {
    goHome(){
      this.$router.push({name: 'entry'});
    },
    handleCommand(command) {
      if (command == "exit") {
        this.exit();
      }
    },
    exit(){
      this.$confirm("确定要退出吗?", "提示", {
        type: "warning"
      }).then(async () => {
        Cookies.remove("fs-user-id");
        Cookies.remove("fs-user-account");
        keycloak.logout({ redirectUri: process.env.VUE_APP_KEYCLOAK_REDIRECT_URI });
      });
    }
  }
};
</script>

<style lang="less">
@import "../../assets/less/var.less";

.ts-header{
  position: relative;
  height: 40px;
  line-height: 35px;
  background-color: #fff;
  box-shadow: 0 3px 3px 0 rgba(28,90,252,0.10);
  padding-left: 20px;
  color: #2C404C;
  padding: 0 20px;
  .ts-header-logo{
    img{
      height: 22px;
      margin-right: 10px;
      margin-top: 2px;
    }
    span{
      border-right: 1px solid #E3E3E3;
      height: 26px;
      margin-right: 8px;
      margin-top: 3px;
    }
    h1{
      font-size: 16px;
    }
    *{
      vertical-align: middle;
      cursor: pointer;
      display: inline-block;
    }
  }
  .ts-header-links {
    float: right;
    margin-top: 2px;
    color: @kg-text-1;
    vertical-align: middle;
    .ts-link {
      color: @kg-text-1;
    }
    .ts-user {
      margin-left: 48px;
      img {
        width: 24px;
        height: 24px;
        position: relative;
        top: 6px;
      }
      .ts-user-name {
        margin-left: 11px;
      }
      .ts-icon {
        margin-left: 13px;
        cursor: pointer;
      }
    }
  }
  .ts-header-menu {
    top: 30px !important;
    .popper__arrow {
      left: 33.5px !important;
    }
  }
}
</style>
