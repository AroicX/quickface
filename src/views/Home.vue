<template>
  <div class="main" id="main">
    <div class="video" id="video"></div>
    <div class="video__buttons">
      <button class="mute" id="mute" @click="toggleMute">
        <img
          v-if="!mute"
          src="https://res.cloudinary.com/aroicx/image/upload/v1655218964/mic.svg"
          alt="unmuted"
        />
        <img
          v-if="mute"
          src="https://res.cloudinary.com/aroicx/image/upload/v1655218964/mic-off.svg"
          alt="mute"
        />
      </button>
      <button class="video-button" id="video-button" @click="toggleVideo">
        <img
          v-if="!video"
          src="https://res.cloudinary.com/aroicx/image/upload/v1655218964/video.svg"
          alt="video-on"
        />
        <img
          v-if="video"
          src="https://res.cloudinary.com/aroicx/image/upload/v1655218964/video-off.svg"
          alt="video-off"
        />
      </button>
      <button class="participants" id="participants">
        <img
          src="https://res.cloudinary.com/aroicx/image/upload/v1655218964/user.svg"
          alt="people"
        />
      </button>
      <button class="leave" id="leave">
        <img
          src="https://res.cloudinary.com/aroicx/image/upload/v1655218964/underline.svg"
          alt="leave"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { initializeRequest, muteUnmute, offVideo } from "@/helpers/script";

export default {
  name: "Home page",
  data() {
    return {
      mute: false,
      video: true,
    };
  },
  methods: {
    initializeRequest,
    async toggleMute() {
      const response = await muteUnmute();
      this.mute = response;
    },
    async toggleVideo() {
      const response = await offVideo();
      this.video = response;
    },
    open() {
      alert("het");
    },
    createVideo(color) {
      const videoContainer = document.getElementById("video");
      const videContent = document.createElement("div");
      const videContentCaption = document.createElement("div");
      const videContentCaptionSpan = document.createElement("span");
      videContent.className = "video__content";
      videContentCaption.className = "video__content--caption";
      videContentCaptionSpan.innerHTML = "Stranger 1";
      videContentCaption.appendChild(videContentCaptionSpan);
      videContent.appendChild(videContentCaption);
      videContent.style.background = `#${color}`;
      videoContainer.appendChild(videContent);
    },
  },
  async mounted() {
    await this.initializeRequest();
    for (let i = 0; i < 5; i++) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      this.createVideo(randomColor);
    }
  },
};
</script>

<style lang="scss">
/* */
</style>
