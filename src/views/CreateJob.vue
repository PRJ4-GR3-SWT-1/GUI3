<template>
    <div class="about">
        <h1>Create a new Job</h1>
        <input v-model="form.Custumer" class="input" type="text" placeholder="Custumer" /><br />
        <input v-model="form.StartDate"  class="input" type="date" /><br />
        <input v-model.number="form.Days" class="input" type="number" placeholder="Number of days" /><br />
        <input v-model="form.Location"  class="input" type="text" placeholder="Location" /><br />
        <input v-model="form.Comments" class="input" type="text" placeholder="Futher comments" /><br />

        <button v-on:click="createJob">Create new Job</button>


    </div>
</template>


<script>export default {
        name: "CreateJobComponent",
        data: function () {
            return {
                form: {
                    Customer: '',
                    StartDate: '',
                    Days: Number,
                    Location: '',
                    Comments: ''
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
            createJob() {
                var url = "https://localhost:44368/api/Jobs";
                this.send(url);
            }
        }
    };</script>