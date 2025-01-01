(function () {
  let isAdMutedByScript = false;

  const muteAdVideo = (videoElement) => {
    if (!videoElement.muted) {
      isAdMutedByScript = true;
      videoElement.muted = true;
      console.log("Video muted by script");
    }
  };

  const unmuteVideo = (videoElement) => {
    if (isAdMutedByScript) {
      videoElement.muted = false;
      isAdMutedByScript = false;
    }
  };

  const skipAd = () => {
    const skipButton = document.querySelector(".ytp-skip-ad-button");
    if (skipButton) {
      skipButton.click();
      console.log("Ad skipped");
    }
  };

  const handleAdPlayback = () => {
    const player = document.querySelector(".html5-video-player");
    if (player && player.classList.contains("ad-showing")) {
      console.log("Ad is playing");

      const videoElement = player.querySelector("video");
      if (videoElement) {
        muteAdVideo(videoElement);
      }

      skipAd();
    } else if (player) {
      const videoElement = player.querySelector("video");
      if (videoElement) {
        unmuteVideo(videoElement);
      }
    }
  };

  const observer = new MutationObserver(handleAdPlayback);

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
