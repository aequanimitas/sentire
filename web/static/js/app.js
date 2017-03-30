// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"
import Vue from 'vue/dist/vue.js'
// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".
// import SentireApp from "./sentire.vue"
// import socket from "./socket"

Vue.component("a-verse", {
	props: ["verse"],
	template: "<li>{{ verse.verse }}</li>"
})

new Vue({
	el: "#app",
	data: {
		verses: null
	},
	data: {
  	verses: null
	},
	created() {
	  this.fetchVerses()
	}, 
	methods: {
		fetchVerses() {
			let xhr = new XMLHttpRequest()
	    let self = this
	    let apiUrl = "http://localhost:4000/api/verses"
	    xhr.open("GET", apiUrl)
	    xhr.onload = function() {
				let data = JSON.parse(xhr.responseText)
				self.verses = data.data
				console.log(self.verses[0].verse)
			}
      xhr.send()
		}
  }
})
