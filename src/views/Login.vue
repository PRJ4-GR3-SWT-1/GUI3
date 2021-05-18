<template>
    <div class="LoginComponent">
        <h1>Login to the system</h1>
        <!-- The Concrete login component is stored seperately-->
        <LoginComponent msg="Test" />
    </div>
    
</template>

<script>// @ is an alias to /src
import LoginComponent from "@/components/LoginComponent.vue";
    
export default {
  name: "LoginPage",
  components: {
      LoginComponent,
  },
};</script>