/* eslint-disable quotes */

// !! Exp for example, replace this with your data !!

// state
export const state = () => ({
    exp: [], // Change the state property name to 'exp'
})

// getters
export const getters = {
    getExp(state) { // Change the getter name to 'getExp'
        return state.exp
    },
}

// mutations
export const mutations = {
    SET_EXP(state, exp) { // Change the mutation name to 'SET_EXP'
        state.exp = exp
    },
}

// actions
// export const actions = {
//     async nuxtServerInit({ dispatch }, { $axios }) {
//         // Change "id_address" to the id of your sanity
//         // v2022-03-07 = version, you can change
//         const exp = await $axios.$get('https://id_address.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == "exp"]{id, title, description,"imageId":image{asset,alt}, slug, new, price, stripeUrl}')

//         await dispatch('setExp', exp.result)
//     },
//     setExp({ commit }, exp) {
//         commit('SET_EXP', exp)
//     },
// }
