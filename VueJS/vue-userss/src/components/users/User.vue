<template>
  <div>
    <div class="box">
      <div class="columns">
        <div class="column is-4">
          <img :src="'https://i.pravatar.cc/300?img=' + user.id" :alt="user.name" />
        </div>
        <div class="column is-8">
          <h1 class="title">{{ user.name }}</h1>
          <p>Username: {{ user.username }}</p>
          <p>Email: {{ user.email }}</p>
          <p>Phone: {{ user.phone }}</p>
          <p>Company: {{ user.company.name }}</p>
          <router-link to="/" class="button is-dark">Back To Dashboard</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "User",
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    this.user = result.data;
  },
};
</script>

<style lang="scss" scoped></style>
