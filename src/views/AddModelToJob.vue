<template>
    <div>
        <h1>Add/Remove a model to/from a job</h1>
        <button v-on:click="load" class="create">Show All models</button>

        <table width="100%">
            <thead>
                <tr>
                    <th>ModelId</th>
                    <th>Name</th>
                    <th>PhoneNumber</th>
                    <th>City</th>
                    <th>Email</th>
                    <th>Nationality</th>
                </tr>
            </thead>
            <tr v-for="(model, index) in models" v-bind:key="index">
                <td>{{model.efModelId}}</td>
                <td>{{model.firstName}} {{model.lastName}}</td>
                <td>{{model.phoneNo}}</td>
                <td>{{model.city}}</td>
                <td>{{model.email}}</td>
                <td>{{model.nationality}}</td>
            </tr>
        </table>
        <hr />
        <h3>Actions:</h3>
        <hr />

        <input v-model="ModelJobForm.ModelIdNumber" class="input" type="number" placeholder="Model Id" min="1" /><br />
        <input v-model="ModelJobForm.JobIdNumber" class="input" type="number" placeholder="Job Id" min="1"/><br />

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
                    ModelIdNumber: null,
                    JobIdNumber: null
                },
                models: []
            }

        },

        props: {
            msg: String,
        },
        methods: {
           async load() {
                var url = "https://localhost:44368/api/Models";
                try {
                   await fetch(url, {
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
                    alert("You don't have permission for this");
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
                        if (this.response.status >= 200 && this.response.status < 300) alert("Successfully added model to job");
                        else alert("Model already added to job")
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
                        if (this.response.status >= 200 && this.response.status < 300) alert("Successfully removed model from job");
                        else alert("Model already removed from job")
                    })
                }
                catch (error) {
                    alert('Something bad happened ' + error);
                }
            }
        },
        
    };

</script>