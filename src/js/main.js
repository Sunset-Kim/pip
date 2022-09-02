window.onload = function () {
  const video = $(".video");
  const button = $(".button");

  button.addEventListener("click", () => togglePIP(video));

  function togglePIP(videoElement) {
    if (document.pictureInPictureElement) {
      document
        .exitPictureInPicture()
        .then(() => console.log("Document Exited from Picture-in-Picture mode"))
        .catch((err) => console.error(err));
    } else {
      if (videoElement) {
        videoElement.requestPictureInPicture();
      }
    }
  }

  function $(selector) {
    const result = document.querySelectorAll(selector);
    return result.length === 1 ? result[0] : result;
  }
};
