<template>
  <div class="LoginComponent">
    <p>
      Type in username and password below</p>
      <form>
          <input v-model="this.form.username"/>
          <input v-model="this.form.password"/>
      </form>
        <button v-on:click="login">Login</button>

    
  </div>
</template>

<script>
export default {
        name: "LoginComponent",
        data: function(){
            return {
                form: {
                    username: "mail@mail.dk",
                    password: "LillaKatrinebjerg"
                }
            }
        },
            
        props: {
            msg: String,
        },
        methods: {
            async login() {
                let url = "https://localhost:44368/api/account/login";
                try {
                    let response = await fetch(url, {
                        method: "POST",
                        body: JSON.stringify(this.form),//Assumes data is in an object called form
                        headers: new Headers({
                            "Content-Type": "application/json"
                        })
                    });

                    if (response.ok) {
                        let token = await response.json();
                        localStorage.setItem("token", token.jwt);
                        //Change view to some other component
                        // ...
                    }
                    else {
                        alert("Server returned: " + response.statusText);
                    }
                } catch (err) {
                    alert("Error: " + err);
                }
                return;
            }
        }
        
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
