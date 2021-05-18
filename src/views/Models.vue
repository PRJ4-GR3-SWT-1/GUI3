<template>
    <div class="about">
        <h1>Create a new Model</h1>
        
        <form>
            <!-- Firstname -->
            <label>Enter firstname: </label>
            <input v-model="form.firstname" class="input" type="text" placeholder="Firstname" maxlength="64"   minLength="1" /><br />
            <!-- Lastname -->
            <label>Enter lastname: </label>
            <input v-model="form.lastname" class="input" type="text" placeholder="Lastname" maxlength="32"   minLength="1"/><br />
            <!-- Email -->
            <label>Enter Email: </label>
            <input name="form.email" v-model="form.email" class="input" type="email" placeholder="Enter email" maxlength="254"  minLength="1"/><br />
            <!-- Phonenumber -->
            <label>Enter phone number: </label>
            <input v-model="form.phoneno" class="input" type="text" placeholder="Phone number" maxlength="12"  minLength="1"/><br />
            <!-- Adress line 1 -->
            <label>Enter Address line 1: </label>
            <input v-model="form.addressline1" class="input" type="text" placeholder="Address line 1" maxlength="64"  minLength="1"/><br />
            <!-- Address line 2 -->
            <label>Enter Address line 2: </label>
            <input v-model="form.addressline2" class="input" type="text" placeholder="Address line 2" maxlength="64"  minLength="1"/><br />
            <!-- Zip code -->
            <label>Enter Zip code: </label>
            <input v-model="form.zip" class="input" type="text" placeholder="Zipcode" maxlength="9"  minLength="1"/><br />
            <!-- City -->
            <label>Enter City: </label>
            <input v-model="form.city" class="input" type="text" placeholder="City" maxlength="64"  minLength="1"/><br />
            <!-- Country -->
            <label>Enter Country: </label>
            <input v-model="form.country" class="input" type="text" placeholder="Country" maxlength="64" minLength="1" /><br />
            <!-- Birthday -->
            <label>Enter Birthday: </label>
            <input v-model="form.birthday" class="input" type="date" placeholder="Birthday"  /><br />
            <!-- Nationality -->
            <label>Enter nationality: </label>
            <input v-model="form.nationality" class="input" type="text" placeholder="Nationality" maxlength="64"  minLength="1"/><br />
            <!-- Height -->
            <label>Enter height: </label>
            <input v-model.number="form.height" class="input" type="number" placeholder="Height"/><br />
            <!-- ShoeSize -->
            <label>Enter Shoe Size: </label>
            <input v-model.number="form.shoesize" class="input" type="number" placeholder="Shoe size" /><br />
            <!-- HairColour -->
            <label>Enter Hair Color: </label>
            <input v-model="form.haircolor" class="input" type="text" placeholder="Hair color" maxlength="32"  minLength="1"/><br />
            <!-- Eye Colour -->
            <label>Enter Eye color: </label>
            <input v-model="form.eyecolor" class="input" type="text" placeholder="Eye color" maxlength="32"  minLength="1"/><br />
            <!-- Comments  -->
            <label>Comments: </label>
            <input v-model="form.comments" class="inputComment" type="text" placeholder="Comments (max 1000 charaters)" maxlength="1000" /><br />
            <!-- Password -->
            <label>Enter Password: </label>
            <input v-model="form.password" class="input" type="password" placeholder="Password" maxlength="60"  minLength="1"/><br />

        </form>
        <button v-on:click="createModel" class="create">Create Model</button>


    </div>
</template>


<script>
    export default {
        name: "CreateModelComponent",
        data: function () {
            return {
                form: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    phoneno: '',
                    addressline1: '',
                    addressline2: '',
                    zip: '',
                    city: '',
                    country: '',
                    birthday: '',
                    nationality: '',
                    height: Number,
                    shoesize: Number,
                    haircolor: '',
                    eyecolor: '',
                    comments: '',
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
            }
        }
    };

</script>