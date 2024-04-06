// video palyer
  function toggleVideo() {
      var video = document.getElementById("myVideo");
      var button = document.querySelector(".video-button");

      if (video.paused || video.ended) {
        video.play();
        button.style.display = "none"; // مخفی کردن دکمه پس از شروع پخش
      } else {
        video.pause();
      }
    }
// carousel
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
/////////////////////