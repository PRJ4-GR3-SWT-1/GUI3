<template>
  <div class="about">
    <h1>Create a new manager</h1>
    <form>
      <label> Enter email: </label>
      <input
        v-model="form.email"
        class="input"
        type="email"
        placeholder="Enter email"
        maxlength="254"
        minLength="1"
      /><br />
      <label> Enter firstname: </label>
      <input
        v-model="form.firstname"
        class="input"
        type="text"
        placeholder="First Name"
        maxlength="64"
        minLength="1"
      /><br />
      <label> Enter lastname: </label>
      <input
        v-model="form.lastname"
        class="input"
        type="text"
        placeholder="Last name"
        maxlength="32"
        minLength="1"
      /><br />
      <label> Enter password: </label>
      <input
        v-model="form.password"
        class="input"
        type="password"
        placeholder="Password"
        maxlength="60"
        minLength="1"
      /><br />
    </form>

    <button v-on:click="createManager" class="create">Create Manager</button>
  </div>
</template>

<script>
export default {
  name: "CreatePersonComponent",
  data: function () {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
    };
  },

  props: {
    msg: String,
  },
  methods: {
    send(url) {
      try {
        fetch(url, {
          method: "POST",
          body: JSON.stringify(this.form), // data is saved in form
          credentials: "include",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }).then((responseJson) => {
          this.response = responseJson;
          if (responseJson.status >= 200 && responseJson.status < 300)
              alert("Creation Successful");
          else if (responseJson.status == 400)
              alert("Missing data or incorrect input.");
          else
            alert(
              "Could not post data. Maybe you don't have permission for this. "
            );
        });
      } catch (error) {
        alert("Something bad happened " + error);
      }
    },
    createManager() {
      var url = "https://localhost:44368/api/Managers";
      this.send(url);
    },
  },
};
</script>
