<template>
    <div class="about">
        <h1>Create a new Person</h1>
        <input name="form.email" v-model="form.email" class="input" type="email" placeholder="Enter email" /><br />
        <input name="form.email" v-model="form.firstname" class="input" type="text" placeholder="First Name" /><br />
        <input name="form.email" v-model="form.lastname" class="input" type="text" placeholder="Last name" /><br />
        <input name="form.email" v-model="form.password" class="input" type="password" placeholder="Password" /><br />
        <input v-model="form.phonenumber" class="input" type="number" placeholder="phone number" /><br />

        <button v-on:click="createManager">Create Manager</button>
        <button v-on:click="createModel">Create Model</button>


    </div>
</template>


<script>
    export default {
        name: "CreatePersonComponent",
        data: function () {
            return {
                form: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    phonenumber: '',
                    password: ''
                }
            }
        },

        props: {
            msg: String,
        },
        methods: {
            send(url) {
                try {
                    fetch(url, {
                        method: 'POST',
                        body: JSON.stringify(this.form), // data is saved in form
                        credentials: 'include',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        }
                    }).then(responseJson => {
                        this.response = responseJson;
                        alert(responseJson.statusText)
                    })
                }
                catch (error) {
                    alert('Something bad happened ' + error);
                }
            },
            createModel() {
                var url = "https://localhost:44368/api/Models";
                this.send(url);
            },
            createManager() {
                var url = "https://localhost:44368/api/Managers";
                this.send(url);
            }
            

        }

    };

</script>