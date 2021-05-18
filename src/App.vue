<template>
    <div id="app">
        <div id="nav">
            
            <router-link to="/">Home</router-link> |
            <router-link to="/Login">Login</router-link> 
            <div v-if="isLoggedIn()" style="margin: 5px;background-color:lightgray">
                <router-link to="/Managers">Create Manager</router-link> |
                <router-link to="/Models">Create Model</router-link> |
                <router-link to="/Expenses">Expenses</router-link> |
                <router-link to="/CreateJob">Create Job</router-link> |
                <router-link to="/Jobs">Jobs</router-link> |
                <router-link to="/AddModelToJob">JobToModel</router-link>
                <button class="logout" v-on:click="logout()">logout</button>
            </div>
     
        </div>
        <router-view />
    </div>
</template>


<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

        #nav a {
            font-weight: bold;
            color: #2c3e50;
        }

            #nav a.router-link-exact-active {
                color: #42b983;
            }


    .inputComment {
        width: 35%;
        height: 50pt;
    }

    .input {
        margin: 10pt;
        padding: 2pt;
    }

    .create {
        background-color: #008CBA;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
    .logout {
        background-color: palevioletred;
        border: none;
        margin:10px;
    }
</style>

<script>
    export default {
        methods: {
            isLoggedIn() {
                return !!localStorage.getItem('token');
            },
            logout() {
                localStorage.removeItem('token')
                this.$router.push('/');
            }
        }
    }

</script>