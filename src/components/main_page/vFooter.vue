<template>
  <div class="wrapper" id="app">
    <div class="content">
      <div class="start">
         <div class="img">
           <img :src="require('/src/assets/logo.png')" alt="vue-logo">
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
              <i class="fa-solid fa-pause play_2" v-if="show"></i>
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
export default {
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Mekanın Sahibi",
          artist: "Norm Ender",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Everybody Knows",
          artist: "Leonard Cohen",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
          url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
          favorited: true
        },
        {
          name: "Extreme Ways",
          artist: "Moby",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
          url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
          favorited: false
        },
        {
          name: "Butterflies",
          artist: "Sia",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
          url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
          favorited: false
        },
        {
          name: "The Final Victory",
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
      name: 'Заново',
      first_name: 'Jah Khalib',
      inshow: true,
      show: false
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
        this.show = true
        this.inshow = false
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
        this.show = false
        this.inshow = true
      }
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
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
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
.content {
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
  width: 37px;
  height: 37px;
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
</style>