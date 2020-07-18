import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		author:{
			name:'xdd',
			age:21
		}
	},
	getters:{
		gobalName(state){
			return "China "+state.author.name;
		}
	}
});

export default store;