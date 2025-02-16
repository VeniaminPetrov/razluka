<script setup>
definePageMeta({
  layout:'users'
})
const {user_id} = useRoute().params

const {data} = await useFetch(`https://dummyjson.com/users/${user_id}`)
</script>
<template>
  <div>

    <Head>
      <Title>User ID :{{ user_id}}</Title>
      <Meta name="description" content="All Users" />
    </Head>


    <h1 class="text-danger mb-4">User ID :{{ user_id}}</h1>
  <div class="card shadow-lg">
      <div class="row g-0">
<!--        image-->
        <div class="col-md-4" >
          <img :src="data.image" alt="img" class="img-fluid rounded-start h">
        </div>
<!--        User info-->
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">{{data.firstName}} {{data.lastName}}</h2>
            <p class="card-text text-muted"> ID : {{user_id}} | AGE : {{data.age}}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Email :</strong> {{data.email}}</li>
              <li class="list-group-item"><strong>Phone :</strong> {{data.phone}}</li>
              <li class="list-group-item"><strong>Address :</strong> {{data.address.city}}
              {{data.address.state}} {{data.address.postalcCode}}
              </li>
              <li class="list-group-item">
                <strong>Company :</strong>{{data.company.name}} - {{data.company.title}}
                <p class="mb-0"> Department :{{ data.company.department }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
<p>User :{{data.firstName}} {{data.lastName}}</p>

  </div>
</template>

<style>
h1{
  color: red;
}
</style>
