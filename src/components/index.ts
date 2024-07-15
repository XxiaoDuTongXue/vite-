import App from "@/App.vue"
import Pagination from "@/components/Pagination/index.vue"
import Svgicon from "@/components/Svgicon/index.vue"
// import { install } from "element-plus"
// console.log(Svgicon,Pagination);

const allcomponents = {Pagination, Svgicon}

// console.log(object.keys);

export default {
    install(app:any) {
        Object.keys(allcomponents).forEach(key => {
            app.component(key,allcomponents[key])
        })
    }
}

