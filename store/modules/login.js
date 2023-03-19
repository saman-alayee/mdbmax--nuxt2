import axios from 'axios'


const login = {
    namespaced: true,
    state: {
        token: "",
        username: "",
        email: "",
        password: "",
    },
    mutations: {
        setUsername(state, username) {
            localStorage.setItem("username", JSON.stringify(username))
            state.username = localStorage.getItem("username")
        },
        setEmail(state, email) {
            state.email = email
        },
        setPassword(state, password) {
            state.password = password
        }

    },
    actions: {
        async stroeToken({ commit }, { email, password }) {
            try {
                const response = await axios.post('https://reqres.in/api/register/', {
                    email: email,
                    password: password
                })

                console.log(response.data)
                commit('setToken', response.data.token)
                console.log(state)

            } catch (error) {

            }
        },
        setItems({ commit }, { email, password, username }) {
            commit('setUsername', username)
            commit('setEmail', email)
            commit('setPassword', password)

        }

    },
    // getters: {
    //     loadedToken(state) {
    //         return state.token
    //     },

    // }
}
export default login;