<template>
    <div class="about">
        <h1>Create a new Job</h1>

        <form>
            <label>Customer: </label>
            <input v-model="form.Customer"
                   class="input"
                   type="text"
                   placeholder="Customer"
                   minlength="1" 
                   maxlength="64"/><br />
            <label>Startdate: </label>
            <input v-model="form.StartDate" 
                   class="input" 
                   type="date" /><br />
            <label>Number of days: </label>
            <input v-model.number="form.Days"
                   class="input"
                   type="number"
                   placeholder="Number of days"
                   min="1" /><br />
            <label>Location: </label>
            <input v-model="form.Location"
                   class="input"
                   type="text"
                   placeholder="Location" 
                   minlength="1"
                   maxlength="128"/><br />
            <label>Comments: </label>
            <input v-model="form.Comments"
                   class="input inputComment"
                   type="text"
                   placeholder="Futher comments (max 2000)" 
                   minlength="1"
                   maxlength="2000"/><br />

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
                    Customer: "",
                    StartDate: "",
                    Days: null,
                    Location: "",
                    Comments: "",
                },
            };
        },

        props: {
            msg: String,
        },
        methods: {
            async send(url) {
                try {
                    await fetch(url, {
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
                        else alert("You don't have permission");
                    });
                } catch (error) {
                    alert("Something bad happened " + error);
                }
            },
            createJob() {
                var url = "https://localhost:44368/api/Jobs";
                this.send(url);
            },
        },
    };
</script>
