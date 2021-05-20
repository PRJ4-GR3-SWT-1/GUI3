<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Click around. You will find that as a manager you have more access than a
      model.
        <br />
        ************* OBS: NOTE FROM DEVELOPERS! ****************
        <br />
        There have been made some changes to the WebAPI, which Poul Ejner gave us. <br />
        The changes can be seen in the ExpensesController (l. 107). <br />
        The change automatically adds modelId to expense or 8055 if a manager adds an expense to job.  

    </p>
  </div>
</template>

<script>
// let login = localStorage.getitem('jwt');
export default {
  name: "HelloWorld",
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
