import axios from "axios"

const news = {
    namespaced: true,
    state: {
        newsItems: [],
        numbers: [2, 5, 1, 8]
    },
    getters: {
        getNews(state) {
            return state.newsItems
        },
        filteredNews(state) {
            return state.newsItems
        },
        sortNews(state) {
            return state.newsItems
        }
    },
    mutations: {
        getNews(state, newsItems) {
            state.newsItems = newsItems
        },
        sortNews(state) {
            state.newsItems.sort((a, b) => {
                // const x = a.created[0].value
                // const y = b.created[0].value
                // if (x > y) {
                //     return 1
                // }
                // if (x < y) {
                //     return -1
                // }
                // return 0
                // return a.nid[0].value - b.nid[0].value
                const x = a.title[0].value.toLowerCase()
                const y = b.title[0].value.toLowerCase()
                if (x > y) {
                    return 1
                }
                if (x < y) {
                    return -1
                }
                return 0
            })
        },
        unSortNews(state) {
            state.newsItems.sort((a, b) => {
                // const x = a.created[0].value
                // const y = b.created[0].value
                // if (x > y) {
                //     return -1
                // }
                // if (x < y) {
                //     return 1
                // }
                // return 0
                // return b.nid[0].value - a.nid[0].value
                const x = a.title[0].value.toLowerCase()
                const y = b.title[0].value.toLowerCase()
                if (x > y) {
                    return -1
                }
                if (x < y) {
                    return 1
                }
                return 0
            })
        },
        filteredNews(state, searchText) {
            if (searchText == '') {
                console.log(getters);
            } else {
                state.newsItems = state.newsItems.filter(item => item.nid[0].value == searchText)
                // console.log(searchText);
            }
        }
    },
    actions: {
        async getNews({ commit }) {
            try {
                const response = await axios.get('http://api.te/api/news')
                commit('getNews', response.data)
            } catch (error) {

            }
        }
    }
}
export default news