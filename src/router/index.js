import Images from "../pages/Images.vue"
import Info from "../pages/Info.vue"
import UploadImages from "../pages/UploadImages.vue"
import VueRouter from "vue-router"

const routes = [
    { path: '/', component: Images, name: "Images" },
    { path: '/upload', component: UploadImages, name: "UploadImages" },
    { path: '/info', component: Info, name: "Info" }
]

const router = new VueRouter({
    routes
})

export default router