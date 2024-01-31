# starter-pack-nuxt2 📝
Welcome to my new starter pack for my nuxt 2 projects 👋

Useful to easily start a Nuxt 2 project with tailwind css, sanity, ngrok, fontawesome and many others.

## Installation ⚙️

```bash
# clone the repo
$ git clone https://github.com/zozo404/starter-pack-nuxt2.git

$ cd starter-pack-nuxt2

# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# If that doesn't work, check if the node version is = 16.20
$ nvm list
$ nvm use 16.20

```
## To be modified after installation with your values ⚠️
#### ❗️ Disable the h-screen class that was used to fill the blank

#### nuxt.config.js :
Put the title of its title, its description in content.
```bash
[...]
title: 'Title',
[...]
{ hid: 'description', name: 'description', content: 'Content of website' },
[...]
```
Leave fallback: true for generating the error page :
```bash
[...]
generate: {
    fallback: true,
},
[...]
```
#### Components/Header.vue :
```bash
<!-- <NuxtImg
   :src="Logo.images[0].asset._ref"
   provider="sanity"
   alt="logo"
   class="h-full"
   sizes="xs:100vw"
/> -->
[...]
liens: [
        {
          texte: "Home",
          lien: "/",
        },
        {
          texte: "Part-1",
          lien: "/part1",
        },
        [...]
],
```
#### Components/Footer.vue :
```bash
[...]
sections: [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Part 1", link: "part1" },
        [...]
],
```
#### Components/Contact.vue : 
Put your data (email, google maps, etc...) and make it usable ([Getform.io](https://getform.io/), etc...)
#### Legal mention with your information

#### Store/index.js :
Replace the "exp" with your data :
```bash
[...]
// example:
export const state = () => ({
    exp: [], // Change the state property name to 'exp'
})
[...]
```
Once you have made the changes and added your sanity id, uncomment that :
```bash
[...]
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
```
#### 🔌 Data is stored on Sanity

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).


## Technologies used ⚙️

**Client:** Nuxtjs, TailwindCSS

**Server:** Node, Sanity.io, Stripe


## Authors 📝

- [@zozo404](https://www.github.com/zozo404)