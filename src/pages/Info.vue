<template>
  <div class="info">
    <el-tabs type="border-card">
      <el-tab-pane label="User">
        User
        <h1>Statistic</h1>
      </el-tab-pane>
      <el-tab-pane label="Image management">
        <el-tabs :tab-position="tabPosition" style="height: 200px">
          <el-tab-pane label="Allow Image View">Allow Image View</el-tab-pane>
          <el-tab-pane label="Upload image">Upload image</el-tab-pane>
          <el-tab-pane label="Remove image">Remove image</el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: "Info",
  data() {
    return {
      tabPosition: "left",
    };
  },
};
</script>

<style scoped>
</style>