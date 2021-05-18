<template>
  <div class="about">
    <h1>Create a new Model</h1>

    <form>
      <!-- Firstname -->
      <label>Enter firstname: </label>
      <input
        v-model="modelform.firstname"
        class="input"
        type="text"
        placeholder="Firstname"
        maxlength="64"
        minlength="1"
      /><br />
      <!-- Lastname -->
      <label>Enter lastname: </label>
      <input
        v-model="modelform.lastname"
        class="input"
        type="text"
        placeholder="Lastname"
        maxlength="32"
        minlength="1"
      /><br />
      <!-- Email -->
      <label>Enter Email: </label>
      <input
        v-model="modelform.email"
        class="input"
        type="email"
        placeholder="Enter email"
        maxlength="254"
        minlength="1"
      /><br />
      <!-- Phonenumber -->
      <label>Enter phone number: </label>
      <input
        v-model="modelform.phoneno"
        class="input"
        type="text"
        placeholder="Phone number"
        maxlength="12"
        minlength="1"
      /><br />
      <!-- Adress line 1 -->
      <label>Enter Address line 1: </label>
      <input
        v-model="modelform.addressline1"
        class="input"
        type="text"
        placeholder="Address line 1"
        maxlength="64"
        minlength="1"
      /><br />
      <!-- Address line 2 -->
      <label>Enter Address line 2: </label>
      <input
        v-model="modelform.addressline2"
        class="input"
        type="text"
        placeholder="Address line 2"
        maxlength="64"
        minlength="1"
      /><br />
      <!-- Zip code -->
      <label>Enter Zip code: </label>
      <input
        v-model="modelform.zip"
        class="input"
        type="text"
        placeholder="Zipcode"
        maxlength="9"
        minlength="1"
      /><br />
      <!-- City -->
      <label>Enter City: </label>
      <input
        v-model="modelform.city"
        class="input"
        type="text"
        placeholder="City"
        maxlength="64"
        minlength="1"
      /><br />
      <!-- Country -->
      <label>Enter Country: </label>
      <input
        v-model="modelform.country"
        class="input"
        type="text"
        placeholder="Country"
        maxlength="64"
        minlength="1"
      /><br />
      <!-- Birthday -->
      <label>Enter Birthday: </label>
      <input
        v-model="modelform.birthdate"
        class="input"
        type="date"
        placeholder="Birthday"
      /><br />
      <!-- Nationality -->
      <label>Enter nationality: </label>
      <input
        v-model="modelform.nationality"
        class="input"
        type="text"
        placeholder="Nationality"
        maxlength="64"
        minlength="1"
      /><br />
      <!-- Height -->
      <label>Enter height: </label>
      <input
        v-model.number="modelform.height"
        class="input"
        type="number"
        placeholder="Height"
        min="1"
      /><br />
      <!-- ShoeSize -->
      <label>Enter Shoe Size: </label>
      <input
        v-model.number="modelform.shoesize"
        class="input"
        type="number"
        placeholder="Shoe size"
        min="1"
      /><br />
      <!-- HairColour -->
      <label>Enter Hair Color: </label>
      <input
        v-model="modelform.haircolor"
        class="input"
        type="text"
        placeholder="Hair color"
        maxlength="32"
        minlength="1"
      /><br />
      <!-- Eye Colour -->
      <label>Enter Eye color: </label>
      <input
        v-model="modelform.eyecolor"
        class="input"
        type="text"
        placeholder="Eye color"
        maxlength="32"
        minlength="1"
      /><br />
      <!-- Comments  -->
      <label>Comments: </label>
      <input
        v-model="modelform.comments"
        class="inputComment"
        type="text"
        placeholder="Comments (max 1000 charaters)"
        maxlength="1000"
      /><br />
      <!-- Password -->
      <label>Enter Password: </label>
      <input
        v-model="modelform.password"
        class="input"
        type="password"
        placeholder="Password"
        maxlength="60"
        minlength="1"
      /><br />
    </form>

    <button v-on:click="createModel" class="create">Create Model</button>
  </div>
</template>

<script>
export default {
  name: "CreateModelComponent",
  data: function () {
    return {
      modelform: {
        firstname: "",
        lastname: "",
        email: "",
        phoneno: "",
        addressline1: "",
        addressline2: "",
        zip: "",
        city: "",
        country: "",
        birthdate: "",
        nationality: "",
        height: null,
        shoesize: null,
        haircolor: "",
        eyecolor: "",
        comments: "",
        password: "",
      },
    };
  },

  props: {
    msg: String,
  },
  methods: {
    send(url) {
      try {
        fetch(url, {
          method: "POST",
          body: JSON.stringify(this.modelform), // data is saved in form
          credentials: "include",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }).then((responseJson) => {
          this.response = responseJson;
          if (responseJson.status >= 200 && responseJson.status < 300)
            alert("Creation Successful");
          else
            alert(
              "Could not post data. Maybe you don't have permission for this. "
            );
        });
      } catch (error) {
        alert(
          "Could not post data. Maybe you don't have permission for this. " +
            error
        );
      }
    },
    createModel() {
      var url = "https://localhost:44368/api/Models";
      this.send(url);
    },
  },
};
</script>
