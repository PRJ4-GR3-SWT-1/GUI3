<template>
    <div class="about">
        <h1>Create a new Job</h1>

        <form>
            <label>Customer: </label>
            <input v-model="form.Customer" class="input" type="text" placeholder="Customer" /><br />
            <label>Startdate: </label>
            <input v-model="form.StartDate" class="input" type="date" /><br />
            <label>Number of days: </label>
            <input v-model.number="form.Days" class="input" type="number" placeholder="Number of days" /><br />
            <label>Location: </label>
            <input v-model="form.Location" class="input" type="text" placeholder="Location" /><br />
            <label>Comments: </label>
            <input v-model="form.Comments" class="input" type="text" placeholder="Futher comments" /><br />

            <button v-on:click="createJob" class="create">Create new Job</button>
        </form>



    </div>
</template>


<script>
    export default {
        name: "CreateJobComponent",
        data: function () {
            return {
                form: {
                    Customer: '',
                    StartDate: '',
                    Days: null,
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
                        if (responseJson.status >= 200 && responseJson.status < 300) alert("Creation Successful");
                        else alert("You don't have permission");
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