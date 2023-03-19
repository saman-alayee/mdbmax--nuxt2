import Vuex from 'vuex'
import login from './modules/login'

const createStore = () => {
    return new Vuex.Store({
        state: {
        },
        mutations: {
        },
        actions: {
        },
        getters: {
        },
        modules: {
            login
        }

    })
}
export default createStore