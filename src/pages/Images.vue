<template>
  <div class="images">
    <div class="gallery-row">
      <ul>
        <div class="gallery-container">
          <lightbox :items="images"></lightbox>
        </div>
        <div class="pagination">
          <el-pagination background layout="prev, pager, next" :total="100">
          </el-pagination>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import lightbox from "../components/lightbox.vue";
import "../components/lightbox.css";

export default {
  name: "Images",
  components: {
    lightbox,
  },
  data() {
    return {
      images: [
        "https://i.wifegeek.com/200426/f9459c52.jpg",
        "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
        "https://i.wifegeek.com/200426/5fa51df3.jpg",
        "https://i.wifegeek.com/200426/663181fe.jpg",
        "https://i.wifegeek.com/200426/2d110780.jpg",
        "https://i.wifegeek.com/200426/e73cd3fa.jpg",
        "https://i.wifegeek.com/200426/15160d6e.jpg",
        "https://i.wifegeek.com/200426/d0c881ae.jpg",
        "https://i.wifegeek.com/200426/a154fc3d.jpg",
        "https://i.wifegeek.com/200426/71d3aa60.jpg",
        "https://i.wifegeek.com/200426/d17ce9a0.jpg",
        "https://i.wifegeek.com/200426/7c4deca9.jpg",
        "https://i.wifegeek.com/200426/64672676.jpg",
        "https://i.wifegeek.com/200426/de6ab9c6.jpg",
        "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
        "https://i.wifegeek.com/200426/4085d03b.jpg",
        "https://i.wifegeek.com/200426/177ef44c.jpg",
        "https://i.wifegeek.com/200426/d74d9040.jpg",
        "https://i.wifegeek.com/200426/81e24a47.jpg",
        "https://i.wifegeek.com/200426/43e2e8bb.jpg",
      ],
    };
  },
};
</script>

<style>
.gallery-container {
  height: 604.8px;
  width: 750px;
}

.gallery-row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
