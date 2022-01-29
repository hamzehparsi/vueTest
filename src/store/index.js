import { createStore } from "vuex";
import news from './modules/news'

const store = createStore({
    namespace: true,
    modules: {
        news
    }
})

export default store;