<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item @click="$router.push('/')" index="1">Images</el-menu-item>
        <el-menu-item @click="$router.push('/upload')" index="2"
          >Upload images</el-menu-item
        >
        <el-menu-item @click="$router.push('/info')" index="3"
          >Info</el-menu-item
        >
      </el-menu>
    </el-header>
    <el-main><router-view></router-view></el-main>
    <el-footer>footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style>
.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  max-height:auto;
}
body {
  margin: 20px auto;
}
</style>