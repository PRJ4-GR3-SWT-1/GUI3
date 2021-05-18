<template>
  <div class="hello">

    <h1>{{ msg }}</h1>
    <p>
      Click around. You will find that as a manager you have more access than a model. 
    </p>

  </div>
</template>

<script>
   // let login = localStorage.getitem('jwt');
export default {
  name: "Home - Models forever",
  props: {
      msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
