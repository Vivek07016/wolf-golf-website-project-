
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
});


gsap.to("#nav", {
    backgroundColor: "black",
    height: "100px",
    duration: 2,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }

});

gsap.to("#main", {
    backgroundColor: "black",
    duration: 3,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -20%",
        end: "top -60%",
        scrub: 2,
    }
});

gsap.to("#cards img", {
    scale:1.15,
    opacity:1,
    duration:"8",
    scrollTrigger: {
        trigger: "#cards img",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 2,
    }
});


// var h4all = document.querySelector("#nav h4")
//     h4all.forEach(function (elem) {
//        elem.addEventListener("mouseenter", function () {
//         crsr.style.scale = 2;
//         crsr.style.border = "1px solid #fff";
//         crsr.style.backgroundColor = "Transparent";
//     })
    
// });


gsap.from("#col1", {
    y: -60,
    x: -60,
    scrollTrigger: {
      trigger: "#col1",
      scroller: "body",
      // markers:true,
      start: "top 45%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#col2", {
    y: 60,
    x: 60,
    scrollTrigger: {
      trigger: "#col2",
      scroller: "body",
      // markers:true,
      start: "top 95%",
      end: "top 58%",
      scrub: 4,
    },
  });

  gsap.from("#black-box-2 #b4", {
    y:70,
    scrollTrigger: {
      trigger: "#b4",
      scroller: "body",
      // markers:true,
      start: "top 90%",
      end: "top 80%",
      scrub: 3,
    },
  });