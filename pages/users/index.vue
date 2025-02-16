<script setup>


definePageMeta({
  layout: 'users'
})

// const users = ref([
//  {id: 1, name: 'Alex'},
//  {id: 2, name: 'Bob'},
//  {id: 3, name: 'John'}
// ])

 const {data} = await useFetch('https://dummyjson.com/users')
 const Users = ref(data.value.users)

</script>
<template>
  <div>
  <Head>
    <Title>All Users  from webSite</Title>
    <Meta name="description" content="All Users" />
  </Head>
    <h1>Users page</h1>
      <ul class="d-flex  justify-content-between flex-wrap list-unstyled gap-3">
        <li v-for="user in Users"
        :key="user.id"
        >

<!--          <NuxtLink   :to="`/users/user-${user.id}`"  class="btn btn-primary">{{user.firstName}} {{user.lastName}}</NuxtLink>-->
    <UserLink  :user="user" />
        </li>
      </ul>
  </div>
</template>

<style>
h1 {
  color: red;
}
</style>
