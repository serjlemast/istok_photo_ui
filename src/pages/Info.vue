<template>
  <div class="info">
    <el-tabs type="border-card">
      <el-tab-pane label="Statistic">
        <el-row type="flex" class="gallery-row">
          <el-col :span="6" justify="!end">
            <div class="grid-content">
              <div class="small">
                <bar-chart :chart-data="renderChart"></bar-chart>
              </div>
            </div>
          </el-col>
          <el-col :span="6" justify="!end">
            <div class="small">
              <doughnut-chart :chart-data="renderChart"></doughnut-chart>
            </div>
          </el-col>
        </el-row>
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
import BarChart from "../components/BarChart.js";
import DoughnutChart from "../components/DoughnutChart.js";

export default {
  components: {
    BarChart,
    DoughnutChart,
  },
  name: "Info",
  data() {
    return {
      tabPosition: "left",
      renderChart: {
        labels: ["13", "10"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [24, 17],
          },
          {
            label: "Data two",
            backgroundColor: "#f0000",
            data: [25, 37],
          },
        ],
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>

<style>
.small {
  max-width: 300px;
  min-width: 150px;
  margin: 20px auto;
}
</style>
