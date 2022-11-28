const video = document.getElementById("video");
const btn = document.querySelectorAll("button");
const span = document.querySelector("span");
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("../models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("../models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("../models"),
  faceapi.nets.faceExpressionNet.loadFromUri("../models"),
  faceapi.nets.ageGenderNet.loadFromUri("../models"),
]).then(startVideo());

function startVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err) {
      console.log(err);
    });
}

video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.getElementById("video-box").append(canvas);
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);
  setInterval(async () => {
    const predictions = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withAgeAndGender();

    const resizedDetections = faceapi.resizeResults(predictions, displaySize);
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);

    resizedDetections.forEach((result) => {
      const { age } = result;
      new faceapi.draw.DrawTextField(
        [`${faceapi.round(age, 0)} 세`],
        result.detection.box.bottomLeft
      ).draw(canvas);
      Age = age;
    });

    localStorage.setItem("Age", Age);
    if (Age > 55) {
      location.href = "elderly-main.html";
    }
  }, 100);
});
