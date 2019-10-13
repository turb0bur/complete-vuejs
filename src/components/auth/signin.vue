<template>
  <div id="signin">
    <div class="signin-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Mail</label>
          <input type="email" id="email" v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password">
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    import axios from '../../axios-auth'

    export default {
        data() {
            return {
                email:    '',
                password: ''
            }
        },
        methods: {
            onSubmit() {
                const formData = {
                    email:    this.email,
                    password: this.password,
                };
                console.log(formData);
                axios.post('/accounts:signInWithPassword?key=AIzaSyC9LMd_cDiHTpdysIvHI-ARuK_KftPPkGg', {
                    email:             formData.email,
                    password:          formData.password,
                    returnSecureToken: true
                })
                    .then(response => console.log(response))
                    .catch(error => console.error(error))
            }
        }
    }
</script>

<style scoped>
  .signin-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eeeeee;
    padding: 20px;
    box-shadow: 0 2px 3px #cccccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #cccccc;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eeeeee;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #cccccc;
    background-color: transparent;
    color: #cccccc;
    cursor: not-allowed;
  }
</style>
