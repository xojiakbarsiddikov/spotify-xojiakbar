<template>
  <div>
    <vHeader class="header"/>
    <NavBar />
  </div>
  <div class="container-album">
    <div class="content" v-for="album in albums" :key="album.id">
      <div class="content-wrapper" v-for="img_2 in images" :key="img_2.id">
        <div class="img_2">
                   <img :src="require(`/src/assets/img/${img_2.img}`)">
        </div>
        <div class="text_2">
          <h4>{{img_2.description}}</h4>
          <h1>{{img_2.title}}</h1>
          <div class="flex-img">
                       <img :src="require(`/src/assets/img/${album.img}`)">
            <div class="ul-main">
              <ul>
                <li>{{album.li}}</li>
                <li>{{album.li2}}</li>
                <li>{{album.li3}}</li>
                <li>{{album.li4}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="audion-container">
      <section>
        <div class="content" >
          <div class="start-wrapper">
            <div class="flex-start">
              <div class="player-controls__item -xl js-play btn_2" @click="play">
                <i class="play_2 fa-solid fa-play" v-if="inshow"></i>
                <i class="fa-solid fa-pause color_black" v-if="show_2"></i>
              </div>
              <div class="like margin">
                <i class="fa-solid fa-heart js"></i>
              </div>
              <div class="download margin">
                <i class="fa-solid fa-arrow-down-long"></i>
              </div>
              <div class="dotted margin">
                <span>&#x2022; &#x2022; &#x2022;</span>
              </div>
            </div>
            <div class="box">
              <div class="reset" @click="reset">
                <div class="power-switch">
                  <input type="checkbox" />
                  <div class="button">
                    <svg class="power-off">
                      <use xlink:href="#line" class="line" />
                      <use xlink:href="#circle" class="circle" />
                    </svg>
                    <svg class="power-on">
                      <use xlink:href="#line" class="line" />
                      <use xlink:href="#circle" class="circle" />
                    </svg>
                  </div>
                </div>

                <!-- SVG -->
                <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" id="line">
                    <line x1="75" y1="34" x2="75" y2="58"/>
                  </symbol>
                  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" id="circle">
                    <circle cx="75" cy="80" r="35"/>
                  </symbol>
                </svg>

                <!--- ## DRIBBBLE + TWITTER ############# -->
                <div class="socials">
                  <a class="dribbble" href="https://dribbble.com/shots/9532615-Power-switch-animation-CodePen" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" fill="white" d="M16 0C7.16703 0 0 7.16703 0 16C0 24.833 7.16703 32 16 32C24.8156 32 32 24.833 32 16C32 7.16703 24.8156 0 16 0ZM26.5683 7.37527C28.4772 9.70065 29.6226 12.6681 29.6573 15.8785C29.2061 15.7918 24.6941 14.872 20.1475 15.4447C20.0434 15.2191 19.9566 14.9761 19.8525 14.7332C19.5748 14.0738 19.2625 13.397 18.9501 12.7549C23.9826 10.7072 26.2733 7.75705 26.5683 7.37527ZM16 2.36009C19.4707 2.36009 22.6464 3.66161 25.0586 5.7961C24.8156 6.14317 22.7505 8.90239 17.8915 10.7245C15.6529 6.61171 13.1714 3.24512 12.7896 2.72451C13.8134 2.48156 14.8894 2.36009 16 2.36009ZM10.1866 3.64425C10.551 4.13015 12.9805 7.5141 15.2538 11.5401C8.86768 13.2408 3.22777 13.2061 2.62039 13.2061C3.50542 8.9718 6.36876 5.44902 10.1866 3.64425ZM2.32538 16.0174C2.32538 15.8785 2.32538 15.7397 2.32538 15.6009C2.9154 15.6182 9.54447 15.705 16.3644 13.6573C16.7636 14.4208 17.128 15.2017 17.4751 15.9826C17.3015 16.0347 17.1106 16.0868 16.9371 16.1388C9.89154 18.4121 6.14317 24.6247 5.8308 25.1453C3.6616 22.7332 2.32538 19.5228 2.32538 16.0174ZM16 29.6746C12.8416 29.6746 9.92625 28.5987 7.61822 26.7939C7.86117 26.2907 10.6377 20.9458 18.3427 18.256C18.3774 18.2386 18.3948 18.2386 18.4295 18.2213C20.3557 23.2017 21.1367 27.3839 21.3449 28.5813C19.6963 29.2928 17.8915 29.6746 16 29.6746ZM23.6182 27.3319C23.4794 26.4989 22.7505 22.5076 20.9631 17.5965C25.2495 16.9197 28.9978 18.0304 29.4664 18.1866C28.8764 21.987 26.6898 25.2668 23.6182 27.3319Z"></path></svg></a>
                  <a class="twitter" href="https://twitter.com/MilanRaring" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 72 72"><path fill="white" d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"></path></svg></a>
                </div>
              </div>
              <div class="search">
                <i class="fa-solid fa-magnifying-glass div1"></i>
                <input type="text" placeholder="search" v-model="search" class="" />
              </div>
            </div>
          </div>
          <div class="audio" v-for="album in albums" :key="album.id">
            <div class="text">
              <div class="flex-box">
                <ul class="opacity justify">
                  <div class="ul-wrapper">
                    <li>{{album.name}}</li>
                    <li style="padding: 0 25px;">{{album.ul}}</li>
                  </div>
                  <li>{{album.start}}</li>
                  <li>{{album.music}}</li>
                  <li class="margin_2"><i class="fa-solid fa-clock"></i></li>
                </ul>
              </div>
              <div class="border-top"></div>
              <div class="container_audio">
                <div class="audio-ul" v-for="audio in filteredPosts" :key="audio.id">
                  <div class="ul_1">
                    <ul class="justify ul_hover">
                      <div class="flex">
                        <li class="opacity_2 play-start_2">
                          {{audio.id}}
                        </li>
                        <li class="li">
                          <h4 :class="{green: toggle}">{{audio.title}}</h4>
                          <p class="opacity_2">{{audio.li}}</p>
                        </li>
                      </div>
                      <div class="player-controls__item -xl js-play btn_2" @click="play">
                        <i class="play_2 fa-solid fa-play" v-if="inshow"></i>
                        <i class="fa-solid fa-pause color_black" v-if="show_2"></i>
                      </div>
                      <div class="ul-li">
                        <li>{{audio.number}}</li>
                      </div>
                      <li>{{audio.second}}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <div class="wrapper" id="app">
    <div class="content__2">
      <div class="start">
        <div class="img">
          <img :src="require('/src/assets/img/ego-jah.jpg')" alt="vue-logo">
        </div>
        <div class="text">
          <h1>{{ name }}</h1>
          <p>{{ first_name }}</p>
        </div>
      </div>
      <div class="center">
        <div class="icons">
          <div class="shuffle">
            <i class="fa-solid fa-shuffle"></i>
          </div>
          <div class="prev">
            <i class="fa-solid fa-backward-step"></i>
          </div>
          <div class="player-controls__item -xl js-play btn_2" @click="play">
            <i class="play_2 fa-solid fa-play" v-if="inshow"></i>
            <i class="fa-solid fa-pause color_black" v-if="show"></i>
          </div>
          <div class="next">
            <i class="fa-solid fa-forward-step"></i>
          </div>
          <div class="repeat">
            <i class="fa-solid fa-rotate-right"></i>
          </div>
        </div>
        <div class="flex_time">
          <div class="progress__time">{{ currentTime }}</div>
          <div class="progress__bar" @click="clickProgress">
            <div class="progress__current" :style="{ width : barWidth }"></div>
          </div>
          <div class="progress__duration">{{ duration }}</div>
        </div>
      </div>
      <div class="end">
        <i class="fa-solid fa-microphone"></i>
        <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-computer"></i>
        <i class="fa-solid fa-volume-high"></i>
        <div class="sound"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import vHeader from "@/components/vHeader";
import NavBar from "@/components/vNavBar";
export default {
  name: "vEgo",
  data() {
    return {
      albums: [],
      toggle: false,
      audios: [],
      count: 0,
      ids: [],
      change: false,
      search: '',
      inshow: true,
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      first_name: 'Jah Khalib',
      name: 'Заново',
      images: [],
      tracks: [
        {
          name: "Mekanın Sahibi",
          id: 1,
          artist: "Norm Ender",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Everybody Knows",
          id: 2,
          artist: "Leonard Cohen",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
          url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
          favorited: true
        },
        {
          name: "Extreme Ways",
          id: 3,
          artist: "Moby",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
          url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
          favorited: false
        },
        {
          name: "Butterflies",
          id: 4,
          artist: "Sia",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
          url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
          favorited: false
        },
        {
          name: "The Final Victory",
          id: 5,
          artist: "Haggard",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3",
          url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
          favorited: true
        },
        {
          name: "Genius ft. Sia, Diplo, Labrinth",
          artist: "LSD",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3",
          url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
          favorited: false
        },
        {
          name: "The Comeback Kid",
          artist: "Lindi Ortega",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3",
          url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
          favorited: true
        },
        {
          name: "Overdose",
          artist: "Grandson",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3",
          url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
          favorited: false
        },
        {
          name: "Rag'n'Bone Man",
          artist: "Human",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null,
      show: false,
      show_2: false
    }
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
        this.show = true
        this.show_2 = true
        this.inshow = false
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
        this.show = false
        this.show_2 = false
        this.inshow = true
      }
    },
    reset() {
      this.play()
      this.audio.pause()
      this.audio.currentTime = 0
      this.show_2 = false
      this.show = false
      this.inshow = true
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
          this.currentTrackIndex
          ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function () {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function () {
      vm.generateTime();
    };
    this.audio.onended = function () {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  },
  mounted() {

    console.log(this.audios)

    let i = document.querySelector('.js')
    i.addEventListener('click', () => {
      i.classList.toggle('color')
    })

    axios
        .get('http://localhost:3000/album')
        .then(response => (this.albums = response.data))

    axios
        .get('http://localhost:3000/audios')
        .then(response => (this.audios = response.data))

    axios
        .get('http://localhost:3000/img')
        .then(response => (this.images = response.data))
  },
  computed: {
    filteredPosts() {
      return this.audios.filter(audio =>
          audio.title.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  components: {
    vHeader,
    NavBar,
  }
}
</script>

<style scoped>
.container-album {
  background: #0323ac;
}
.img_2 img {
  height: 393px;
  padding: 80px 0;
}
.text_2 h1 {
  font-size: 80px;
  padding: 25px 0;
}
.text_2 h4 {
  font-size: 15px;
}

.color_black {
  color: #000000!important;
}
.header {
  background: #0323ac !important;
  width: 97%!important;
}
.fa-pause {
  color: #000000!important;
}
.content {
  justify-content: center;
  margin: 20px 0;
}

.reset {
  cursor: pointer;
}

.box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 18%;
}
.flex-img img {
  width: 30px;
  height: 30px;
  border-radius: 50px;
}
ul {
  display: flex;
}
ul li {
  padding: 0 5px;
  list-style: none;
  color: #fff;
}
.flex-img {
  display: flex;
  align-items: center;
}
.text_2 {
  color: #fff;
  margin: 20px;
}
.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: end;
  max-width: 50%;
}
.audion-container {
  display: flex;
  justify-content: end;
  max-width: 100%;
  background: #101010;
  padding: 27px 0;
  min-height: 98vh;
}
.start-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 94%;
}
.margin_2 {
  margin: 0 38px;
}
.fa-play,

.fa-pause{
  color: #000000;
  font-size: 20px;
}
.color {
  color: red!important;
}
.size {
  font-size: 18px!important;
}

.background_2 {
  background: red;
}

input
{
  position:absolute;
  -webkit-transform:translate(-50%,-50%);
  width:20px;
  height:20px;
  border-style:none;
  border-radius:20px;
  padding: 19px;
  background-color: #000000;
  outline:none;
  transition-duration:500ms;
  cursor:pointer;
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAAWpJREFUWEfNljFOxDAQRbehoKDnIjTcgYtwAHpOwhE4BA3Vig6Je9ABYZ60kZbVc5xkifRHelrleRzP2rGT3TAM0ahMQmUSKpNQmYTKJFQmoTIJlUmonMFlcV88FW/F5+GXazzt1m8xKjvcFh/FVNBOnvVfhMoJHorvgtgXzNZNcXX45RpPkEe+3Wc2KhswIwz6VTwWF4Xl4Wknj/yzZlKlwDM1LiuDW84p5BH0W/1MqhRYOoLla83cKeSNy01/y+miUmB3EksHGv8Y/a29i0qBI4RgI1h7C/IJ+lt7F5UC5xzBbrX2FuQT9Lf2LiqF+BmMfwbHgWJ3cfw5CEvfJD8FcVdY3ixUTrDkXTzGe3Fd2P26qOww92uGmaM4YnWRKmfAM8VssTs5QlrfgxR1VpEq/5mzilS5AauLVLkRq4pUuSHHRb4WlvMHlRtDkS/F85FrojIJlUmoTEJlEiqTUJmEyiRUJqEyh2H3Cz4WH1fC57RBAAAAAElFTkSuQmCC);
  background-repeat:no-repeat;
  font-size:15px;
  color:transparent;
  overflow:hidden;
}
input:focus
{
  width:200px;
  cursor:text;
  padding-left:40px;
  color:#A0A0A0;
}
input:hover,input:focus
{
  background-color:#FFFFFF;
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJTSURBVFiF7ZdNSxtRFIafM5PgJGqXxXy4DIziJhBdFLrwnyi4cym40S4ClkJ/g2B/Qv+BC0s3CtkIDWYZasWtXxEzebswQxGt3sk0Nou8cHfnPTycc+fOOSaJUZb3vwFe0hgwrcaAaTUGTKuRB8wMYrLZ2dxEd3rVPC2aqAoqBi0ZDfXs8DZzsad2++ZfAFrSP0m+NPdO4gtQeSasZcbK9c8f39PAQcIW50vzmxIHQEXQkGzdU2+pc6c3nnpLkq0LGkBF4iBfmt9MC+hcwX7lDgBhfOycTu5IR3ePElotGxSvthFbgJnxPlUlJb14KJdzQSE8CQqhgmJYd/EExbAeFEIFhfCEcjnn4nnqOLV4oju9Sr+tndPJHRdP53RyJ2533z+QnADN0yIAst2n2vqUpKM7ZLsP/EMDFFUAn+gwSfI4PvYPIidA9Z+U6641kySP4/X8k/Ss3CoILYB8RmGS5HF87B9EbhU0GgARfqK7FMfH/kHkBtiz+7tnWjOrZV08ZrUsprUH/mEB3mYu9oCWQTUoXm27eILi1bZBFWj1/cMDVLt9Y8YK0ENs5Upz9b9V0qyWzZXm6ogPAF6PjTSDQ6Jh4f5frE+AJ2gg2/WJDq+71sxnFEb4i5jW+pWL1fS7/vLl+fHZ0AHvId2mGa/HRs/jMxCmgUwMCO7z4NTbhZkoE+2ngRwIMInSQg595L88Pz7zu/4y0ATCKBPtT71dmHH1v8pOkgby1ZamR5DZ6KuL71W3uj+Q9k3SLxfP0D+StBr5vXgMmFZjwLQaA6bVyAP+BkJqfmMbSKF/AAAAAElFTkSuQmCC);
}
.div1
{
  position:absolute;
  left:0px;
  top:45px;
  width:50px;
  height:5px;
}

.search {
  margin: 0 58px;
}
.play{
  background: #32f832;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  opacity: 1!important;
}
.color_white {
  color: #ffffff;
  font-size: 17px;
}
.green {
  color: #32f832!important;
}
.container_audio {
  margin: 30px 0;
}
.fa-play {
  color: #000000!important;
  font-size: 15px;
}
.ul-li li {
  width: 102px;
}
.margin_2 {
  margin: 0 38px;
}

.fa-pause{
  color: #ffffff;
  font-size: 20px;
}
.color {
  color: red!important;
}
.size {
  font-size: 18px!important;
}
.ul_hover {
  padding: 5px 25px;
  border-radius: 6px;
}
.dn {
  display: none;
}
.db {
  display: block;
}
.ul_1 {
  cursor: pointer;
}
.ul_1 ul:hover {
  transition: .1s ease-in-out;
  background: #373636;
}
.margin:hover {
  opacity: 1!important;
  transition: .2s ease-in-out;
}
.flex {
  display: inherit;
  align-items: center;
  width: 22%;
}
.ul-wrapper {
  display: flex;
  margin: 0 26px;
  width: 18%;
}
.background_color {
  background: #626161!important;
}
ul li {
  list-style: none;
  text-align: center;
  color: #fff;
  font-size: 18px;
}
.js {
  font-size: 31px;
}
ul {
  display: flex;
  align-items: center;
}
.justify {
  justify-content: space-between;
  max-width: 99%;
}
.opacity{
  opacity: .5;
}
.download {
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 3px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-start {
  display: flex;
  align-items: center;
  margin: 0 32px;
}
.margin {
  margin: 0 20px;
  opacity: .8;
  color: #ffffff;
  cursor: pointer;
}
section {
  width: 88%;
}
.audio {
  margin: 50px 0;
}
.border-top {
  border-bottom: 1px solid #fff;
  padding: 13px 0;
  width: 97%;
  margin: 0 auto;
}
.li h4{
  padding: 10px 0;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  text-align: start;
}
.li p{
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  text-align: start;
}
.opacity_2 {
  opacity: .6;
}
.li {
  margin: 0 27px;
}
.audio-ul {
  margin: 10px 3px;
  align-items: center;
  justify-content: space-between;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
.btn{
  display: flex;
  justify-content: center;
}
.text h1 {
  font-size: 20px;
}
.text p {
  font-size: 14px;
  opacity: .8;
  padding: 5px 0;
}
.text {
  font-weight: 400;
  color: #ffffff;
  margin: 0 15px;
}
.start {
  display: flex;
  width: 18%;
}
.end {
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 14%;
  width: 50%;
}
.sound{
  height: 4px;
  width: 140px;
  cursor: pointer;
  background-color: #ffffff;
  display: inline-block;
  border-radius: 10px;
}
.content__2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 97%;
  margin: 0 auto;
}
.wrapper {
  width: 100%;
  background: #1c1c1c;
  z-index: 2;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #4a4a4a;
}
.center {
  width: 87%;
}
.img img {
  width: 47px;
  height: 47px;
  margin: 0 10px;
}
.fa-play{
  font-size: 22px;
}
.icons{
  color: #ffffff;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  max-width: 15%;
  align-items: center;
  margin: 21px auto;
}
.flex_time{
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 42%;
  margin: 14px auto;
}
@media screen and (max-width: 700px), (max-height: 500px) {
  .wrapper {
    flex-wrap: wrap;
    flex-direction: column;
  }
}
.fa-solid{
  opacity: .8;
}
.fa-solid:hover {
  transition: .2s ease-in-out;
  opacity: 1;
}
.btn_2 {
  background: #ffffff;
  opacity: .8;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000!important;
}
.fa-pause {
  font-size: 22px;
}

.btn_2:hover {
  opacity: 1;
  transition: .2s ease-in-out;
}

.player {
  background: #eef3f7;
  width: 410px;
  min-height: 480px;
  box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
  border-radius: 15px;
  padding: 30px;
}
@media screen and (max-width: 576px), (max-height: 500px) {
  .player {
    width: 95%;
    padding: 20px;
    margin-top: 75px;
    min-height: initial;
    padding-bottom: 30px;
    max-width: 400px;
  }
}
.player__top {
  display: flex;
  align-items: flex-start;
  position: relative;
  z-index: 4;
}
@media screen and (max-width: 576px), (max-height: 500px) {
  .player__top {
    flex-wrap: wrap;
  }
}
.player-cover {
  width: 300px;
  height: 300px;
  margin-left: -70px;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  border-radius: 15px;
  z-index: 1;
}
@media screen and (max-width: 576px), (max-height: 500px) {
  .player-cover {
    margin-top: -70px;
    margin-bottom: 25px;
    width: 290px;
    height: 230px;
    margin-left: auto;
    margin-right: auto;
  }
}
.player-cover__item {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  position: absolute;
  left: 0;
  top: 0;
}
.player-cover__item:before {
  background: inherit;
  width: 100%;
  height: 100%;
  box-shadow: 0px 10px 40px 0px rgba(76, 70, 124, 0.5);
  display: block;
  z-index: 1;
  position: absolute;
  top: 30px;
  transform: scale(0.9);
  filter: blur(10px);
  opacity: 0.9;
  border-radius: 15px;
}
.player-cover__item:after {
  background: inherit;
  width: 100%;
  height: 100%;
  box-shadow: 0px 10px 40px 0px rgba(76, 70, 124, 0.5);
  display: block;
  z-index: 2;
  position: absolute;
  border-radius: 15px;
}
.player-cover__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0px 10px 40px 0px rgba(76, 70, 124, 0.5);
  user-select: none;
  pointer-events: none;
}
.player-controls {
  flex: 1;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (max-width: 576px), (max-height: 500px) {
  .player-controls {
    flex-direction: row;
    padding-left: 0;
    width: 100%;
    flex: unset;
  }
}
.player-controls__item {
  display: inline-flex;
  font-size: 30px;
  padding: 5px;
  margin-bottom: 10px;
  color: #acb8cc;
  cursor: pointer;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease-in-out;
}
@media screen and (max-width: 576px), (max-height: 500px) {
  .player-controls__item {
    font-size: 26px;
    padding: 5px;
    margin-right: 10px;
    color: #acb8cc;
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-bottom: 0;
  }
}
.player-controls__item::before {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #fff;
  transform: scale(0.5);
  opacity: 0;
  box-shadow: 0px 5px 10px 0px rgba(76, 70, 124, 0.2);
  transition: all 0.3s ease-in-out;
  transition: all 0.4s cubic-bezier(0.35, 0.57, 0.13, 0.88);
}
@media screen and (min-width: 500px) {
  .player-controls__item:hover {
    color: #532ab9;
  }
  .player-controls__item:hover::before {
    opacity: 1;
    transform: scale(1.3);
  }
}
@media screen and (max-width: 576px), (max-height: 500px) {
  .player-controls__item:active {
    color: #532ab9;
  }
  .player-controls__item:active::before {
    opacity: 1;
    transform: scale(1.3);
  }
}
.player-controls__item .icon {
  position: relative;
  z-index: 2;
}
.player-controls__item.-xl {
  display: inline-flex;
  color: #ffffff;
}
@media screen and (max-width: 576px), (max-height: 500px) {
  .player-controls__item.-xl {
    margin-left: auto;
    font-size: 75px;
    margin-right: 0;
  }
}
.player-controls__item.-xl:before {
  display: none;
}
.player-controls__item.-favorite.active {
  color: red;
}
.progress {
  width: 100%;
  margin-top: -15px;
  user-select: none;
}
.progress__top {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.progress__duration {
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  opacity: 0.7;
}
.progress__time {
  margin-top: 2px;
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  opacity: 0.7;
}
.progress__bar {
  height: 4px;
  width: 81%;
  cursor: pointer;
  background-color: #aca7a7;
  display: inline-block;
  border-radius: 10px;
}
.progress__current {
  height: inherit;
  width: 0%;
  background-color: #ffffff!important;
  opacity: 1!important;
  border-radius: 10px;
}
.album-info {
  color: #71829e;
  flex: 1;
  padding-right: 60px;
  user-select: none;
}
@media screen and (max-width: 576px), (max-height: 500px) {
  .album-info {
    padding-right: 30px;
  }
}
.album-info__name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  line-height: 1.3em;
}
@media screen and (max-width: 576px), (max-height: 500px) {
  .album-info__name {
    font-size: 18px;
    margin-bottom: 9px;
  }
}
.album-info__track {
  font-weight: 400;
  font-size: 20px;
  opacity: 0.7;
  line-height: 1.3em;
  min-height: 52px;
}
@media screen and (max-width: 576px), (max-height: 500px) {
  .album-info__track {
    font-size: 18px;
    min-height: 50px;
  }
}
.github-btn {
  position: absolute;
  right: 40px;
  bottom: 50px;
  text-decoration: none;
  padding: 15px 25px;
  border-radius: 4px;
  box-shadow: 0px 4px 30px -6px rgba(36, 52, 70, 0.65);
  background: #24292e;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
}
@media screen and (min-width: 500px) {
  .github-btn:hover {
    transform: scale(1.1);
    box-shadow: 0px 17px 20px -6px rgba(36, 52, 70, 0.36);
  }
}
@media screen and (max-width: 700px) {
  .github-btn {
    position: relative;
    bottom: auto;
    right: auto;
    margin-top: 20px;
  }
  .github-btn:active {
    transform: scale(1.1);
    box-shadow: 0px 17px 20px -6px rgba(36, 52, 70, 0.36);
  }
}
.scale-out-enter-active {
  transition: all 0.35s ease-in-out;
}
.scale-out-leave-active {
  transition: all 0.35s ease-in-out;
}
.scale-out-enter {
  transform: scale(0.55);
  pointer-events: none;
  opacity: 0;
}
.scale-out-leave-to {
  transform: scale(1.2);
  pointer-events: none;
  opacity: 0;
}
.scale-in-enter-active {
  transition: all 0.35s ease-in-out;
}
.scale-in-leave-active {
  transition: all 0.35s ease-in-out;
}
.scale-in-enter {
  transform: scale(1.2);
  pointer-events: none;
  opacity: 0;
}
.scale-in-leave-to {
  transform: scale(0.55);
  pointer-events: none;
  opacity: 0;
}


.power-switch {
  --color-invert: #fff;
  --width: 78px;
  --height: 156px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--width);
  height: var(--height);
}
.power-switch .button {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.power-switch .button:after {
  width: 100%;
  height: 100%;
  position: absolute;
  background: radial-gradient(circle closest-side, var(--color-invert), transparent);
  filter: blur(20px);
  opacity: 0;
  transition: opacity 1s ease, transform 1s ease;
  transform: perspective(1px) translateZ(0);
  backface-visibility: hidden;
}
.power-switch .button .power-on, .power-switch .button .power-off {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  fill: none;
  stroke: var(--color-invert);
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.power-switch .button .power-on .line, .power-switch .button .power-off .line {
  opacity: 0.2;
}
.power-switch .button .power-on .circle, .power-switch .button .power-off .circle {
  opacity: 0.2;
  transform: rotate(-58deg);
  transform-origin: center 80px;
  stroke-dasharray: 220;
  stroke-dashoffset: 40;
}
.power-switch .button .power-on {
  filter: drop-shadow(0px 0px 6px rgba(255, 255, 255, .8));
}
.power-switch .button .power-on .line {
  opacity: 0;
  transition: opacity 0.3s ease 1s;
}
.power-switch .button .power-on .circle {
  opacity: 1;
  stroke-dashoffset: 220;
  transition: transform 0s ease, stroke-dashoffset 1s ease 0s;
}
.power-switch input {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
  cursor: pointer;
  opacity: 0;
  left: 28px;
  top: 78px;
}
.power-switch input:checked + .button:after {
  opacity: 0.15;
  transform: scale(2) perspective(1px) translateZ(0);
  backface-visibility: hidden;
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.power-switch input:checked + .button .power-on, .power-switch input:checked + .button .power-off {
  animation: click-animation 0.3s ease forwards;
  transform: scale(1);
}
.power-switch input:checked + .button .power-on .line, .power-switch input:checked + .button .power-off .line {
  animation: line-animation 0.8s ease-in forwards;
}
.power-switch input:checked + .button .power-on .circle, .power-switch input:checked + .button .power-off .circle {
  transform: rotate(302deg);
}
.power-switch input:checked + .button .power-on .line {
  opacity: 1;
  transition: opacity 0.05s ease-in 0.55s;
}
.power-switch input:checked + .button .power-on .circle {
  transform: rotate(302deg);
  stroke-dashoffset: 40;
  transition: transform 0.4s ease 0.2s, stroke-dashoffset 0.4s ease 0.2s;
}
@keyframes line-animation {
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(10px);
  }
  40% {
    transform: translateY(-25px);
  }
  60% {
    transform: translateY(-25px);
  }
  85% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes click-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
body {
  background: #1b1a23;
  height: 100vh;
 font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
body .socials {
  position: fixed;
  display: block;
  left: 20px;
  bottom: 20px;
}
body .socials gt
a {
  display: block;
  width: 30px;
  opacity: 0.2;
  transform: scale(var(--scale, 0.8));
  transition: transform 0.3s cubic-bezier(0.38, -0.12, 0.24, 1.91);
}
body .socials .gt
a:hover {
  --scale: 1;
}

</style>