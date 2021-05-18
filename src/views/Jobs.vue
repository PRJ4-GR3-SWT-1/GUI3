<template>
  <div class="about" style="align-content:center;">
    <h1>Current Jobs</h1>
      <button v-on:click="load">Show Jobs</button>
      <table width="100%" >
          <thead>
              <tr>
                  <th>JobId</th>
                  <th>Customer</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Days</th>
                  <th>Comments</th>
              </tr>
          </thead>
          <tr v-for="job in jobs" v-bind:key="job" >
              <td>{{job.efJobId}}</td>
              <td>{{job.customer}}</td>
              <td>{{job.location}}</td>
              <td>{{job.startDate}}</td>
              <td>{{job.days}}</td>
              <td>{{job.comments}}</td>
          </tr>
      </table>
  </div>
</template>


<script>export default {
        name: "CreateJobComponent",
        data: function () {
            return {
                jobs: []
            }
        
        },

        
        methods: {
            load() {
                var url = "https://localhost:44368/api/Jobs";
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
                            this.jobs = data;
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
    };
    </script>
<style scoped>
    tr {
        border:dotted;
    }
</style>