<template>
  <div id="app">
	  <router-view />
	  <Batter-main />
  </div>
</template>

<script>
import BatterMain from 'components/content/BatterMain.vue';

import router from './router/index.js';
import store from './store/index.js';
import {request} from 'network/request.js'


export default {
  name: 'app',
  router,
  store,
  components:{
	  BatterMain
  },
  created(){  }
}
</script>

<style>
	@import url("assets/css/base.css");
	#app{
		height: 100%;
	}
</style>
