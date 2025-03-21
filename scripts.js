function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    /male0001.webp
    /male0002.webp
    /male0003.webp
    /male0004.webp
    /male0005.webp
    /male0006.webp
    /male0007.webp
    /male0008.webp
    /male0009.webp
    /male0010.webp
    /male0011.webp
    /male0012.webp
    /male0013.webp
    /male0014.webp
    /male0015.webp
    /male0016.webp
    /male0017.webp
    /male0018.webp
    /male0019.webp
    /male0020.webp
    /male0021.webp
    /male0022.webp
    /male0023.webp
    /male0024.webp
    /male0025.webp
    /male0026.webp
    /male0027.webp
    /male0028.webp
    /male0029.webp
    /male0030.webp
    /male0031.webp
    /male0032.webp
    /male0033.webp
    /male0034.webp
    /male0035.webp
    /male0036.webp
    /male0037.webp
    /male0038.webp
    /male0039.webp
  /male0040.webp
    /male0041.webp
    /male0042.webp
    /male0043.webp
    /male0044.webp
    /male0045.webp
    /male0046.webp
    /male0047.webp
    /male0048.webp
    /male0049.webp
    /male0050.webp
    /male0051.webp
     ./male0052.webp
     ./male0053.webp
     ./male0054.webp
     ./male0055.webp
     ./male0056.webp
     ./male0057.webp
     ./male0058.webp
     ./male0059.webp
     ./male0060.webp
     ./male0061.webp
     ./male0062.webp
     ./male0063.webp
     ./male0064.webp
     ./male0065.webp
     ./male0066.webp
     ./male0067.webp
     ./male0068.webp
     ./male0069.webp
     ./male0070.webp
     ./male0071.webp
     ./male0072.webp
     ./male0073.webp
     ./male0074.webp
     ./male0075.webp
     ./male0076.webp
     ./male0077.webp
     ./male0078.webp
     ./male0079.webp
     ./male0080.webp
     ./male0081.webp
     ./male0082.webp
     ./male0083.webp
     ./male0084.webp
     ./male0085.webp
     ./male0086.webp
     ./male0087.webp
     ./male0088.webp
     ./male0089.webp
     ./male0090.webp
     ./male0091.webp
     ./male0092.webp
     ./male0093.webp
     ./male0094.webp
     ./male0095.webp
    ./male0096.webp
    ./male0097.webp
    ./male0098.webp
    ./male0099.webp
    ./male0100.webp
    ./male0101.webp
    ./male0102.webp
    ./male0103.webp
    ./male0104.webp
    ./male0105.webp
    ./male0106.webp
    ./male0107.webp
    ./male0108.webp
    .male0109.webp
    .male0110.webp
    .male0111.webp
    .male0112.webp
    .male0113.webp
    .male0114.webp
    .male0115.webp
    .male0116.webp
    .male0117.webp
    .male0118.webp
    .male0119.webp
    .male0120.webp
    .male0121.webp
    .male0122.webp
    .male0123.webp
    .male0124.webp
    .male0125.webp
    .male0126.webp
    .male0127.webp
    .male0128.webp
    .male0129.webp
    .male0130.webp
    .male0131.webp
    .male0132.webp
    .male0133.webp
    .male0134.webp
    .male0135.webp
    .male0136.webp
    .male0137.webp
    .male0138.webp
    .male0139.webp
    .male0140.webp
    .male0141.webp
    .male0142.webp
    .male0143.webp
    .male0144.webp
    .male0145.webp
    .male0146.webp
    .male0147.webp
    .male0148.webp
    .male0149.webp
    .male0150.webp
    .male0151.webp
    .male0152.webp
    .male0153.webp
    .male0154.webp


 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
