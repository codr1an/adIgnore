//ytp-time-current
//ytp-time-duration
//ytp-skip-ad-button__text
//video-ads ytp-ad-module
//ytp-ad-player-overlay-layout__ad-info-container
//ad-simple-attributed-string
//ad-simple-attributed-string
//1 of 2 arialabel

console.log("e mande adihw");

(function () {
  let isAdMutedByScript = false;

  const observer = new MutationObserver(() => {
    const player = document.querySelector(".html5-video-player");

    if (player && player.classList.contains("ad-showing")) {
      console.log("Ad is playing");

      const videoElement = player.querySelector("video");
      if (videoElement) {
        if (!videoElement.muted) {
          isAdMutedByScript = true;
          videoElement.muted = true;
          console.log("Video muted by script");
        }
      }
    } else if (player) {
      console.log("No ad is playing");

      const videoElement = player.querySelector("video");
      if (videoElement && isAdMutedByScript) {
        videoElement.muted = false;
        isAdMutedByScript = false;
        console.log("Video unmuted by script");
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
