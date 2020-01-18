<template>
    <div class="center-column">
        <h1>Login</h1>
        <form @submit.prevent="signIn" class="center-column">
            <input
                v-model.trim="username"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
            >
            <input
                v-model.trim="password"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
            >

            <input type="submit" value="Sign in" :disabled="isDisabled">
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapActions } from 'vuex'

@Component({
  ...mapActions({
    login: 'login'
  })
})
export default class LoginForm extends Vue {
  username: string = ''

  password: string = ''

  signIn () {
    // this.$store.dispatch('login', { name: this.username, password: this.password })
    this.$router.push('home')
  }

  get isDisabled () {
    return !this.username || !this.password
  }
}
</script>

<style lang="scss" scoped>

form {
    padding: 150px 0;
}

div {
    min-width: 400px;

    background-color: white;
    box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.2);
}

.center-column {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h1 {
    margin-top: 25px;
}

input[type=text], input[type=password] {
    width: 250px;
    height: 40px;

    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid black;

    margin: 10px 0;
}

input[type=submit] {
    padding: 5px 50px;
    margin: 20px;
    color: #fff;
    background-color: rgb(43, 142, 255);
    border: none;
    border-radius: 20px;
    transition: ease 250ms;
    outline: none;
}

input[type=submit]:disabled {
    background-color: rgb(26, 73, 128);
}

input[type=submit]:hover:enabled {
    transform: translateY(-0.1em);
}

</style>
