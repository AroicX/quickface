let myVideoStream;

// class VideoCall {

// }

const createVideo = (stream) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const videoContainer = document.getElementById("video");
  const myStream = document.createElement("video");
  const videContent = document.createElement("div");
  const videContentCaption = document.createElement("div");
  const videContentCaptionSpan = document.createElement("span");
  videContent.className = "video__content";
  videContentCaption.className = "video__content--caption";
  videContentCaptionSpan.innerHTML = "Stranger 1";
  videContentCaption.appendChild(videContentCaptionSpan);
  videContent.appendChild(videContentCaption);
  videContent.style.background = `#${randomColor}`;
  myStream.srcObject = stream;
  // console.object(myStream);
  myStream.addEventListener("loadedmetadata", () => {
    myStream.play();
  });
  videContent.appendChild(myStream);

  videoContainer.appendChild(videContent);
};

export const muteUnmute = () => {
  const enabled = myVideoStream.getAudioTracks()[0].enabled;
  console.log("Vidoe is:", `${enabled ? "Muted" : "Unmuted"}`);

  if (enabled) {
    myVideoStream.getAudioTracks()[0].enabled = false;
    return enabled;
  } else {
    myVideoStream.getAudioTracks()[0].enabled = true;
    return enabled;
  }
};

/**
 * Toggle Video Off
 */

export const offVideo = () => {
  const enabled = myVideoStream.getVideoTracks()[0].enabled;
  console.log("Vidoe is:", `${enabled ? "Off" : "On"}`);

  if (enabled) {
    myVideoStream.getVideoTracks()[0].enabled = false;
    return enabled;
  } else {
    myVideoStream.getVideoTracks()[0].enabled = true;
    return enabled;
  }
};

export const initializeRequest = () => {
  return navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: true,
    })
    .then((stream) => {
      myVideoStream = stream;
      createVideo(stream);
    });
};
