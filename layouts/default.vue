
<template>
  <div>
    <header class="bg-dark p-3">
      <ul class="nav container">
        <li class="nav-item"><NuxtLink to="/" class="nav-link text-white">Home page</NuxtLink></li>
        <li class="nav-item"><NuxtLink to="/contact" class="nav-link text-white">Contacts</NuxtLink></li>
        <li class="nav-item"><NuxtLink to="/users" class="nav-link text-white">Users</NuxtLink></li>
      </ul>
    </header>
    <div class="container py-5">
<slot/>
    </div>

  </div>
</template>

<style>
header a:not(.router-link-exact-active):hover{
  text-decoration: underline;
}
header a.router-link-exact-active {
  color: yellow!important;
  font-weight: 500;
}

h1{
  color: red;
}
</style>
<script setup lang="ts">
</script>