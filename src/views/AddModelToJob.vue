<template>
    <div>
        <h1>Add/Remove a model to/from a job</h1>
        <button v-on:click="load">Show All models</button>

        <table width="100%">
            <thead>
                <tr>
                    <th>ModelId</th>
                    <th>Name</th>
                    <th>PhoneNumber</th>
                    <th>City</th>
                    <th>Birthday</th>
                    <th>Nationality</th>
                </tr>
            </thead>
            <tr v-for="(model, index) in models" v-bind:key="index">
                <td>{{model.efModelId}}</td>
                <td>{{model.firstName}} {{model.lastName}}</td>
                <td>{{model.phoneNo}}</td>
                <td>{{model.city}}</td>
                <td>{{model.birthDate}}</td>
                <td>{{model.nationality}}</td>
            </tr>
        </table>
        <hr />
        <hr />

        <input v-model="ModelJobForm.ModelIdNumber" class="input" type="number" placeholder="Model Id" /><br />
        <input v-model="ModelJobForm.JobIdNumber" class="input" type="number" placeholder="Job Id" /><br />

        <button v-on:click="AddModelJob" class="create">Add Model to job</button> <br />
        <button v-on:click="RemoveModelJob" class="create">Remove Model from job</button>


    </div>
</template>


<script>
    export default {
        name: "AddModelToJobComponent",
        data: function () {
            return {
                ModelJobForm: {
                    ModelIdNumber: Number,
                    JobIdNumber: Number
                },
                models: []
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
                        body: JSON.stringify(this.ModelJobForm), // data is saved in form
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
            load() {
                var url = "https://localhost:44368/api/Models";
                try {
                    fetch(url, {
                        method: 'GET',
                        //body: JSON.stringify(this.form), // data is saved in form
                        credentials: 'include',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        }
                    }).then(response =>
                        //this.jobs = responseJson;
                        response.json()
                    )
                        .then(data => {
                            this.models = data;
                        })
                }
                catch (error) {
                    alert('Something bad happened ' + error);
                }
            },
            AddModelJob()
            {
                var url = "https://localhost:44368/api/Jobs/" + this.ModelJobForm.JobIdNumber + "/model/" + this.ModelJobForm.ModelIdNumber;
                try {
                    fetch(url, {
                        method: 'POST',
                        body: "", // data is saved in form
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
            RemoveModelJob() {
                var url = "https://localhost:44368/api/Jobs/" + this.ModelJobForm.JobIdNumber + "/model/" + this.ModelJobForm.ModelIdNumber;
                try {
                    fetch(url, {
                        method: 'DELETE',
                        body: "", // data is saved in form
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
            }
        },
        
    };

</script>