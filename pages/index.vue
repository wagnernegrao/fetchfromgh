<template>
  <main class="page-wrapper">
    
    <div class="content-wrapper">
      <img src="~/assets/img/inspectocat.jpg" alt="InspectoCat" width="360"/>
    </div>

    <div class="homepage-texts content-wrapper">
      <h1 class="title-page">Fetch from Github</h1>

      <form :action="`/users/${username}`" method="post" class="inline-single-form">
        <p class="form-description">Search by a Github username</p>
        <input type="text" v-model="username" class="textfield" name="username" id="field-username"/>
        <button type="submit">Search</button>
      </form>

      <form action="/users/list" method="get" class="inline-single-form">
        <p class="form-description">Or list from an Id forward</p>
        <input type="number" v-model="since" class="numberfield" name="since" id="field-since"/>
        <button type="submit">List</button>
      </form>
    </div>

  </main>
</template>

<script>
export default {
  data() {
    return {username: "", since: 0};
  },
  asyncData({ params, error, $http }) {
    return $http.$get('/api/users/pinho/details')
      .then(res => {
        return { user: res };
      })
      .catch(e => {
        error({ statusCode: 404, message: 'User not found' });
      });
  }
}
</script>

<style lang="scss">
.page-wrapper {
  .content-wrapper {
    padding: 2em;
    min-width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    // border: 1px solid red;
    img {
      align-self: center;
    }
  }

  .homepage-texts {
    flex-direction: column;
    height: 80%;
    justify-content: space-around;

    .title-page {
      font-weight: 600;
      font-family: 'Roboto Slab', 'Roboto Bold', 'Roboto', 'Arial Black', sans-serif;
      font-size: 40px;
    }
  }
}
</style>
