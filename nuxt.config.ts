// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'usebootstrap'
  ],
  app:{
    head:{
      title : 'Razluka', ///  не логично здесь устанавливать
      meta:[
        {
          name: "charset" , content:'utf-8'
        }
      ]
      // link:[
        // {
        //   rel:'stylesheet' , href:'css'
        // },
      // ]
    }
  },

  compatibilityDate: '2025-02-16',
})