<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="/">
            <img src="@/assets/Logo.png"  height="35" class="d-inline-block align-top"><h1>Book Review</h1>
          </a>
          <div>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarToggler">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li v-if="store.currentUser" class="nav-item">
                    <form  id="search" class="navbar-form form-inline ml-auto">
                      <input 
                      v-model="store.searchTerm" 
                      class="form-control mr-sm-2" 
                      type="search" 
                      placeholder="Pretraži" 
                      aria-label="Search"
                      />
                    </form>
                  </li>
                  
                  <li v-if="store.currentUser" class="nav-item">
                   <div class="dropdown">
                    <button class="btn dropdown-toggle dropbtn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="kategorije">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="currentColor" /><path d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z" fill="currentColor" /><path d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z" fill="currentColor" /></svg>
                    </button>
                    <div class="dropdown-menu dropdown-content" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                  </li>
                  
                  <li v-if="store.currentUser" class="nav-item">
                  <router-link to="/" class="nav-link" title="početna stranica"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 8.77217L14.0208 1.79299C12.8492 0.621414 10.9497 0.621413 9.77817 1.79299L3 8.57116V23.0858H10V17.0858C10 15.9812 10.8954 15.0858 12 15.0858C13.1046 15.0858 14 15.9812 14 17.0858V23.0858H21V8.77217ZM11.1924 3.2072L5 9.39959V21.0858H8V17.0858C8 14.8767 9.79086 13.0858 12 13.0858C14.2091 13.0858 16 14.8767 16 17.0858V21.0858H19V9.6006L12.6066 3.2072C12.2161 2.81668 11.5829 2.81668 11.1924 3.2072Z" fill="currentColor" /></svg></router-link>
                  </li> 

                  <li v-if="!store.currentUser" class="nav-item">
                  <router-link to="/login" class="nav-link" title="login"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4857 20H19.4857C20.5903 20 21.4857 19.1046 21.4857 18V6C21.4857 4.89543 20.5903 4 19.4857 4H15.4857V6H19.4857V18H15.4857V20Z" fill="currentColor" /><path d="M10.1582 17.385L8.73801 15.9768L12.6572 12.0242L3.51428 12.0242C2.96199 12.0242 2.51428 11.5765 2.51428 11.0242C2.51429 10.4719 2.962 10.0242 3.51429 10.0242L12.6765 10.0242L8.69599 6.0774L10.1042 4.6572L16.4951 10.9941L10.1582 17.385Z" fill="currentColor" /></svg></router-link>
                  </li> 

                  <li v-if="store.currentUser" class="nav-item">
                  <router-link to="/favourite" class="nav-link" title="moja lista knjiga"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z" fill="currentColor" /></svg></router-link>
                  </li>

                  <li v-if="store.currentUser" class="nav-item">
                  <router-link to="/addbook" class="nav-link" title="dodaj knjigu"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5 22C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5ZM4 19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V19Z" fill="currentColor" /></svg></router-link>
                  </li> 

                  <li v-if="store.currentUser" class="nav-item"> 
                  <router-link to="/profile" class="nav-link" title="moj profil"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z" fill="currentColor" /></svg></router-link>
                  </li>  

                  <li v-if="store.currentUser" class="nav-item">
                  <a href="#" @click.prevent="logout()" class="nav-link">Logout</a>
                  </li>       
                </ul>
            </div>
          </div>   
    </nav>
    <router-view/>
  </div>
</template>

<script>
import store from "@/store.js";
import { firebase } from '@/firebase';
import router from '@/router';

firebase.auth().onAuthStateChanged(user => {
  const currentRoute = router.currentRoute;

  if (user) {
    // User is signed in.
    console.log(user.email);
    store.currentUser = user.email;

    if (!currentRoute.meta.needsUser){
      router.push({ name: "Home" })
    }

  } else{
    // user is not signed in
    console.log('no user');
    store.currentUser = null;

    if (currentRoute.meta.needsUser){
      router.push({ name: "Login" })
    }
  }
});

export default {
  name: 'app',
  data(){
    return{
    store: store,
    };
  },
  methods:{
    logout(){
      firebase.auth().signOut().then(() =>{
        this.$router.push({name:'Login'});
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Crimson Text', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}

#nav {
  padding: 20px 20px 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-weight: bold;
    color: #645640;
    

    &.router-link-exact-active {
      color: #000000;
      border-radius: 50px;
      background-color: rgba(226, 193, 155, 0.5);
    
    }
    &.nav-link:hover{
      color: #b48130;
    }
  }

  h1{
  color: #645640;
  font-size: 37px;
  display:inline-block;
  }
}
.btn{
    color: #645640;
}
.dropdown-content a:hover {
  background-color: #ddd;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown:hover .dropbtn {
  background-color: rgba(226, 193, 155, 0.5)
}
.card-text{
  text-decoration: none;
  color: #353535;
}
</style>


