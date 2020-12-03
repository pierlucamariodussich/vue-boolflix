

const boolflix = new Vue ({

  el:'#root',
  data:{
    movies:[],
    searchInput:'',


  },


  methods: {
    findMovies(){
      axios.get("https://api.themoviedb.org/3/search/movie",
        {
          params:{
              'api_key':'ecff05cdf4ac75835ef0849a53b9c11c',
              language: 'it-IT',
              query: this.searchInput,
        }
      })
      .then(response =>{
        return this.movies = response.data.results;

        return this.searchInput = '';
      })
    },

    star(n){
      axios.get("https://api.themoviedb.org/3/search/movie",
        {
          params:{
              'api_key':'ecff05cdf4ac75835ef0849a53b9c11c',
              language: 'it-IT',
              query: this.searchInput,
        }
      })
      return this.movies.vote_average = Math.ceil(n/2)
    },

    log(e){
      e.target.src='img/notfound.svg'
    }


  },
});
