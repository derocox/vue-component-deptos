
Vue.component('deptos-list', {
    props: ['deptos'],
    template: '<li>{{deptos.name}}</li>'
  })


//comentario en JS
var app = new Vue({ 
    el: '#app',
    data () {
        return {
            dptos: null,
        }
    },
    mounted() {
        axios.get('https://api-colombia.com/api/v1/Department').then(response => this.dptos = response.data)
    },
});