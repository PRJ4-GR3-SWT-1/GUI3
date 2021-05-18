<template>
    <div class="LoginComponent">
        <p>
            Type in username and password below
        </p>

        <form>
            <label>Username: </label>
            <input name="email" v-model="form.email" class="input" type="email" placeholder="Enter email" /> <br />
            <label>Password: </label>
            <input v-model="form.password" class="input" type="password" placeholder="MeGetAvanc4RetPaSsW0rD" />
            <br />
            <br />
        </form>
        <button v-on:click="login" class="create">Login</button>

    </div>
</template>

<script>
export default {
        name: "LoginComponent",
        data: function(){
            return {
                form: {
                    email: '',
                    password: ''
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
                        body: JSON.stringify(this.form),//Assumes data is in an object called 'form'
                        headers: new Headers({
                            "Content-Type": "application/json"
                        })
                    });

                    if (response.ok) {
                        let token = await response.json();
                        localStorage.setItem("token", token.jwt);
                       //Goto frontpage
                        this.$router.push('/');
                    }
                    else {
                        alert("Server returned: " + response.statusText);
                    }
                } catch (err) {
                    alert("Error: " + err);
                }
                return;
            },
           
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
