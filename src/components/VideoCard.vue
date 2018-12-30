<template>
  <div>
    <section class="hero is-primary is-medium">
      <VueRouter />
      <div class="hero-foot">
        <div class="columns is-mobile">
          <div v-for="movieChoice in movieChoices" class="column">
            <i
              :class="[
                { 'fa fa-check-circle favorite-check': movieChoice.favorite }
              ]"
              aria-hidden="true"
            ></i>
            <img :src="`${movieChoice.smallImgSrc}`" class="desktop" />
          </div>
        </div>
      </div>
    </section>
    <p class="appreciation-tag">
      Inspired by @makv25's
      <a
        href="https://dribbble.com/shots/3720358-Daily-Ui-025-TV-app"
        target="_blank"
        >daily dribble</a
      >
    </p>
  </div>
</template>
<script>
import VueRouter from "vue-router";
const movies = {
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
};

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
  name: "VideoCard",
  data() {
    return {
      movieChoices: movies
    };
  }
};
</script>

<style lang="scss" scoped>
// Best viewed in full page view
// https://codepen.io/itslit/full/MvvjZr

$small: 589px;
$medium: 767px;
$large: 1023px;

html,
body {
  height: 100%;
  background: linear-gradient(to bottom right, #7f3737, #2a2122);
  @extend .vertical-align;

  .hero {
    @media screen and (max-width: $medium) {
      max-width: 536px;
    }

    background: #1e1d1d !important;
    position: relative;
    max-width: 1021px;
    box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.25);

    .hero-body {
      background-color: rgba(0, 0, 0, 0.7);
      background-blend-mode: multiply;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      padding-bottom: 4rem !important;
      padding-top: 4.5rem !important;

      @media screen and (max-width: $medium) {
        background-color: rgba(0, 0, 0, 0.8);
      }

      .container {
        width: 100%;

        .home-intro {
          font-size: 60px;
          letter-spacing: 8px;
          color: red;
          text-align: center;
          text-transform: uppercase;
        }
      }

      .nav {
        position: absolute;
        top: 10px;
        width: 100%;
        box-shadow: 0px 0px 0px !important;

        .nav-item {
          .fa-bars {
            color: #ce2424;
            font-size: 40px;
          }

          .tag {
            font-size: 15px;
          }

          .title {
            color: red;
            font-size: 18px;
            font-weight: 600;
            text-align: center;
            text-transform: uppercase;
          }
        }

        .nav-right {
          .nav-item {
            float: right;
          }
        }
      }

      .column {
        padding-left: 50px;
        min-height: 264px;

        .title {
          font-size: 45px;
          font-weight: 600;

          @media screen and (max-width: $medium) {
            font-size: 35px;
          }
        }

        .subtitle {
          font-size: 15px;
          font-weight: 600;
          color: red;

          @media screen and (max-width: $medium) {
            font-size: 14px;
          }

          .subtitle-tag {
            display: inline;
          }
        }

        .description {
          font-size: 15px;
          margin-bottom: 24px;
          max-width: 450px;
        }

        .links {
          .play-button {
            background: #ce2424;
            color: #fff;
            border-radius: 15px;
            border: 0px;
            margin-right: 20px;
            padding: 15px;

            .fa-play {
              padding-left: 7px;
            }

            @media screen and (max-width: $medium) {
              font-size: 14px;
            }
          }

          .favorites-button {
            text-decoration: none;
            color: #fff;

            &:hover {
              background: none;
              text-decoration: none;
            }

            .fa-plus-square-o {
              padding-left: 10px;
              padding-top: 2px;
            }

            @media screen and (max-width: $medium) {
              background: #fff;
              color: #4a4a4a;
              border-radius: 15px;
              font-size: 14px;

              &:hover {
                background: #fff;
              }
            }
          }

          @media screen and (max-width: $medium) {
            text-align: center;
          }
        }
      }
    }

    .trailer-body {
      padding: 0;
      height: 376px;
    }

    .hero-foot {
      background: linear-gradient(to bottom right, #7d1e24, #bb2d35);

      .columns {
        padding: 20px;
        padding-bottom: 30px;
        text-align: center;

        .movie-choice {
          position: relative;
          list-style: none;
          cursor: pointer;

          .favorite-check {
            position: absolute;
            right: 5px;
            top: 5px;
            z-index: 1;
            color: #fcff4c;

            @media (max-width: $medium) {
              position: initial;
              display: block;
            }
          }

          img {
            opacity: 0.9;
          }

          .movie-title {
            &:active {
              font-weight: 600;
            }
          }
        }
      }
    }
  }

  .appreciation-tag {
    color: #fff;
    text-align: center;

    a {
      color: #ce2424;
      font-weight: 600;
    }
  }

  .twitter-section {
    position: absolute;
    right: 10px;
    bottom: 10px;

    .fa-twitter-square {
      color: #fff;
      font-size: 30px;
    }
  }

  .medium-section {
    position: absolute;
    left: 10px;
    bottom: 10px;

    .fa-medium {
      font-size: 15px;
    }
  }

  // Miscellaneous
  .vertical-align {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
  }

  .movie-title-active {
    font-size: 18px;
    font-weight: 600;
  }

  .iframe-box {
    max-width: 1280px; /* video width */
    max-height: 720px; /* video height */
  }

  .favorite-shadow {
    box-shadow: 0 0 50px 15px rgba(251, 255, 15, 0.25);
  }

  .desktop {
    display: block;

    @media screen and (max-width: $medium) {
      display: none;
    }
  }

  .mobile {
    display: none;

    @media screen and (max-width: $medium) {
      display: block;
    }
  }

  .hide {
    display: none;
  }
}
</style>
