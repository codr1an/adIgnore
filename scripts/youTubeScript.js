(function () {
  let isAdMutedByScript = false;

  const muteAdVideo = (videoElement) => {
    if (!videoElement.muted) {
      isAdMutedByScript = true;
      videoElement.muted = true;
    }
  };

  const unmuteVideo = (videoElement) => {
    if (isAdMutedByScript) {
      videoElement.muted = false;
      isAdMutedByScript = false;
    }
  };

  // youtube security policy does not allow to simulate click on skip button so this function is not working
  const skipAd = () => {
    const skipButton = document.querySelector(".ytp-skip-ad-button");
    if (skipButton) {
      skipButton.click();
    }
  };

  const handleAdPlayback = () => {
    const player = document.querySelector(".html5-video-player");
    if (player && player.classList.contains("ad-showing")) {
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
