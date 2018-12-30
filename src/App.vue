<template>
  <!-- prettier-ignore -->
  <div id="app">
   <Card></Card>
  <div class="player-holder">
    <aplayer :audio="audio" :showLrc="false" autoPlay="true" controls="true" fixed />
  </div>

  </div>
</template>

<script>
// 2. Define routes
import VideoCard from "./components/VideoCard.vue";

// 1. Define route components.
const Intro = {
  template: `
    <div class="hero-body" style="background: #1e1d1d">
      <div class="container has-text-centered">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter vertical-align">
            <h1 class="home-intro">
              VueFlix
            </h1>
            <p class="home-subintro">Select a movie below from the list of critically acclaimed Christopher Nolan films.</p>
          </div>
        </div>
      </div>
    </div>`
};

const Movie = {
  template: `<div :class="[{ 'favorite-shadow': selectedMovie.favorite }, 'hero-body']" :style="{ 'background-image': selectedMovie.largeImgSrc }">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <a class="nav-item">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </a>
              <router-link to="/" class="nav-item is-active">
                Home
              </router-link>
              <a class="nav-item is-active">
                <span class="tag is-rounded">
                Films
                </span>
              </a>
              <a class="nav-item is-active">
                Shows
              </a>
              <a class="nav-item is-active">
                Music
              </a>
            </div>
            <div class="nav-right desktop">
              <span class="nav-item">
                <router-link to="/"  class="title">
                  VueFlix
                </router-link>
              </span>
            </div>
          </div>
        </header>
        <div class="container description-container">
          <div class="columns">
            <div class="column is-three-quarters">
              <h1 class="title">
                {{ selectedMovie.title }}
              </h1>
              <h4 class="subtitle">
                <p class="subtitle-tag">{{ selectedMovie.duration }} |</p>
                <p class="subtitle-tag">{{ selectedMovie.genre }} |</p>
                <p class="subtitle-tag">{{ selectedMovie.releaseDate }}</p>
              </h4>
              <p class="description">{{ selectedMovie.description }}</p>
              <div class="links">
                <router-link :to="{path: '/' + $route.params.id + '/trailer'}" class="button play-button">Play <i class="fa fa-play"></i></router-link>
                <a class="button is-link favorites-button" @click="addToFavorites(selectedMovie)">
                  <span :class="[{ 'hide': selectedMovie.favorite }]">Add to</span><span :class="[{ 'hide': !selectedMovie.favorite }]">Remove from </span>&nbsp;favorites <i class="fa fa-plus-square-o"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>`,
  data() {
    return {
      selectedMovie: movies[this.$route.params.id]
    };
  },
  watch: {
    $route() {
      this.selectMovie();
    }
  },
  methods: {
    selectMovie() {
      this.selectedMovie = movies[this.$route.params.id];
    },
    addToFavorites(selectedMovie) {
      movies[this.$route.params.id].favorite = !movies[this.$route.params.id]
        .favorite;
    }
  }
};
export default {
  name: "App",
  data() {
    return {
      audio: {
        name: "Deep Pop Sessions",
        artist: "SubWolf",
        url:
          "https://doc-04-a0-docs.googleusercontent.com/docs/securesc/kn34ps45nk3fcjmq5r4eoshanncr4kp0/qm6tuot8397ga7hkqc7a0q04s00kajrd/1545228000000/11304993440855744086/06634775264392287248/1PwA9LGuHECjGQN3_gxgtmlUPXPfV4bgr?h=11050585682322580203&e=download",
        cover:
          "https://somatic.media/wp-content/cache/podlove/65/6157a32c3cc0c38c1622065715080e/bright-colour-sound-podcast_500x281.jpg"
      },
      movies: {
        dunkirk: {
          id: "dunkirk",
          title: "Dunkirk",
          subtitle: "Dunkirk",
          description: `Miraculous evacuation of Allied soldiers from Belgium, Britain, Canada, and France, who were cut off and surrounded by the German army from the beaches and harbor of Dunkirk, France, during the Battle of France in World War II.`,
          largeImgSrc: `url('https://image.tmdb.org/t/p/w780/fudEG1VUWuOqleXv6NwCExK0VLy.jpg')`,
          smallImgSrc:
            "https://image.tmdb.org/t/p/w185/fudEG1VUWuOqleXv6NwCExK0VLy.jpg",
          releaseDate: "July 21 2017",
          duration: "1hr 46min",
          genre: "Action, Drama, History",
          trailerPath: "https://www.youtube.com/embed/F-eMt3SrfFU",
          favorite: false
        },
        interstellar: {
          id: "interstellar",
          title: "Interstellar",
          subtitle: "Interstellar",
          description: `Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.`,
          largeImgSrc: `url('https://image.tmdb.org/t/p/w780/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg')`,
          smallImgSrc:
            "https://image.tmdb.org/t/p/w185/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
          releaseDate: "November 7 2014",
          duration: "2hr 49min",
          genre: "Adventure, Drama",
          trailerPath: "https://www.youtube.com/embed/zSWdZVtXT7E",
          favorite: false
        },
        "the-dark-knight-rises": {
          id: "the-dark-knight-rises",
          title: "The Dark Knight Rises",
          subtitle: "TDKR",
          description: `Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.`,
          smallImgSrc:
            "https://image.tmdb.org/t/p/w185/3bgtUfKQKNi3nJsAB5URpP2wdRt.jpg",
          largeImgSrc: `url('https://image.tmdb.org/t/p/w780/3bgtUfKQKNi3nJsAB5URpP2wdRt.jpg')`,
          releaseDate: "July 20 2012",
          duration: "2hr 44min",
          genre: "Action, Thriller",
          trailerPath: "https://www.youtube.com/embed/g8evyE9TuYk",
          favorite: false
        },
        inception: {
          id: "inception",
          title: "Inception",
          subtitle: "Inception",
          description: `Cobb, a skilled thief is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.`,
          smallImgSrc:
            "https://image.tmdb.org/t/p/w185/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg",
          largeImgSrc: `url('https://image.tmdb.org/t/p/w780/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg')`,
          releaseDate: "July 10 2010",
          duration: "2hr 28min",
          genre: "Action, Adventure, Sci-Fi",
          trailerPath: "https://www.youtube.com/embed/8hP9D6kZseM",
          favorite: false
        },
        "the-prestige": {
          id: "the-prestige",
          title: "The Prestige",
          subtitle: "Prestige",
          description: `A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy - to create the ultimate illusion whilst sacrificing everything they have to outwit the other.`,
          smallImgSrc:
            "https://image.tmdb.org/t/p/w185/c5o7FN2vzI7xlU6IF1y64mgcH9E.jpg",
          largeImgSrc: `url('https://image.tmdb.org/t/p/w780/c5o7FN2vzI7xlU6IF1y64mgcH9E.jpg')`,
          releaseDate: "October 20 2006",
          duration: "2hr 10min",
          genre: "Drama, Mystery, Sci-Fi",
          trailerPath: "https://www.youtube.com/embed/ijXruSzfGEc",
          favorite: false
        }
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
body
  margin: 0 !important
#app
  background-image: url("https://cosmic-s3.imgix.net/3a71bd80-03b4-11e9-9da0-ab18468a16a0-01_Polygon-Abstract-Background.jpg")
  background-size: cover
  width:98vw
  height:98vh
  overflow-x:hidden
  overflow-y:hidden

.player-holder
  width:50%
  position:relative
  top:50
</style>
