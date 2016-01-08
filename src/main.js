var Vue = require("vue");
var vueResource = require("vue-resource");
var vueRouter = require("vue-router");
var vueValidator = require("vue-validator");
var filters = require("./filters.js");
var routers = require("./routers.js");
var app = Vue.extend({});
Vue.use(vueResource);
Vue.use(vueRouter);
Vue.use(vueValidator);

$.ajaxSettings.crossDomain = true;

Object.keys(filters).forEach(function(k){
	Vue.filter(k,filters[k]);
})

var router = new vueRouter({
	hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});
routers(router);

router.start(app,"#app")