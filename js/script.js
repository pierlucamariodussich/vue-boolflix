

const boolflix = new Vue ({

  el:'#root',
  data:{
    movies:[],
    searchInput:'',
    apiKey:'ecff05cdf4ac75835ef0849a53b9c11c',
  },


  methods: {

   findMovies: function(){
    axios.get("https://api.themoviedb.org/3/search/movie", {
      params:{
       'api_Key':this.apiKey,
       query: this.searchInput,

      }
    })
    .then(response =>{
      this.movies = response.data.results
    })
    }
  },
});
