<template>
    <div class="about">
        <h1>Log in</h1>
        <br/>
        <div class="container">
            <div class="row">
                <div class="col-sm"></div>
                <div class="col-sm">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" v-model="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <br/>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Lozinka</label>
                            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <br/>
                        <button type="button" @click="login" class="btn btn-primary">LOG IN</button>
                        <br/>
<!--ne dela-->          <a>Novi korisnik?</a><router-link to="/signup"> Sign up!</router-link> 
                    </form>
                </div>
                <div class="col-sm"></div>
            </div>
        </div>
    </div>
</template>
<script>
import { firebase } from '@/firebase.js';

export default {
    name: "login",
    data(){
        return{
            username: "",
            password: "",
        }
    },
    methods: {
        login(){
            console.log("login..." + this.username);
      
        firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then((result) => {
            console.log('uspješna prijava', result);

            this.$router.replace({ name: 'Home' });
        })
        .catch(function(e){
            console.error('greška', e);
        });
      },
    },
};
</script>