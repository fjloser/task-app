import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
console.log(Vuex)
// strict: true
const store = new Vuex.Store({
    strict: true,
    state: {
        titlex: '',
        desx: '',
        startTimex: '',
        endTimex: '',
    },
    mutations: {
        changeTitle(state, payload) {
                state.titlex = payload.title
				state.desx = payload.des
				state.startTimex = payload.startTime
				state.endTimex = payload.endTime
                // console.log(payload.count)
         }
    }
})

export default store