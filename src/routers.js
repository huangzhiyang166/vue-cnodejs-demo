"user strict"

module.exports = function(router){
	router.map({
		"/" : {
			name : "index",
			component : require("./views/index.vue")
		}
	})
}