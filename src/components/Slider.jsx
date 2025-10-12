import { useState, useEffect } from "react";

const images = [
  {
    id: 1,
    src: "../flags/img1.png",
    name: "EXTREME PILOT",
    des: "Experience the thrill of extreme aviation and push the boundaries of flight",
  },
  {
    id: 2,
    src: "../flags/img2.png",
    name: "MOUNTAIN CLIMBER",
    des: "Conquer the highest peaks and challenge yourself in nature",
  },
  {
    id: 3,
    src: "../flags/img3.png",
    name: "NATURE PERFECTOR",
    des: "Discover the beauty of untouched wilderness and pristine landscapes",
  },
  {
    id: 4,
    src: "../flags/img4.png",
    name: "WILDLIFE EXPLORER",
    des: "Encounter amazing creatures in their natural habitat",
  },
  {
    id: 5,
    src: "../flags/img5.png",
    name: "ADVENTURE SEEKER",
    des: "Push your limits and explore the unknown territories",
  },
  {
    id: 6,
    src: "../flags/img6.png",
    name: "OCEAN DIVER",
    des: "Dive deep into the mysteries of the underwater world",
  },
];

export default function Slider() {
  const [slideItems, setSlideItems] = useState(images);
  const [bgImage, setBgImage] = useState(images[0].src);

  const nextSlide = () => {
    setSlideItems((prev) => {
      const newItems = [...prev];
      const first = newItems.shift();
      newItems.push(first);
      setBgImage(newItems[0].src);
      return newItems;
    });
  };

  const prevSlide = () => {
    setSlideItems((prev) => {
      const newItems = [...prev];
      const last = newItems.pop();
      newItems.unshift(last);
      setBgImage(newItems[0].src);
      return newItems;
    });
  };

  useEffect(() => {
    let timeoutId;
    const handleWheel = (e) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        e.deltaY > 0 ? nextSlide() : prevSlide();
      }, 150);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const current = slideItems[0];

  return (
    <div
      className="relative w-full min-h-230 flex items-center justify-center  overflow-hidden  bg-black "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* 🔥 Background Blur Layer */}
      <div
        key={bgImage}
        className="absolute inset-0 bg-cover  transition-all duration-700 ease-in-out scale-110 brightness-[0.5] mb[500px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* 🔥 Overlay Text (rasm ichida) */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 md:p-6 text-white text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-wide drop-shadow-lg animate-fadein">
          {current.name}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl sm:max-w-2xl mx-auto md:mx-0 animate-fadein delay-150">
          {current.des}
        </p>
        <button className="mt-5 md:mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-white text-black font-semibold rounded-lg hover:bg-[#d9ff93] transition-all duration-300 animate-fadein delay-300">
          See more
        </button>
      </div>

      {/* 🔥 Slider Thumbnails */}
      <div id="slide" className="relative w-max mt-[50px] z-10">
        {slideItems.map((img, index) => (
          <div
            key={img.id}
            className={`absolute inline-block bg-cover  rounded-[20px] overflow-hidden shadow-[0_25px_40px_rgba(0,0,0,0.5)] transition-all duration-700 ease-in-out ${
              index === 0
                ? "left 1/2 -translate-x-1/2 top-0 w-[280px] h-[180px] sm:w-[400px] sm:h-[260px] md:w-[600px] md:h-[400px] z-[5] lg:left-60"
                : index === 1
                ? "left-[calc(50%+130px)] sm:left-[calc(50%+200px)] md:left-[calc(50%+250px)] top-1/2 -translate-y-1/2 w-[120px] sm:w-[160px] md:w-[200px] h-[180px] sm:h-[240px] md:h-[300px] z-[4] opacity-80 lg:left-100"
                : index === 2
                ? "left-[calc(50%+260px)] sm:left-[calc(50%+360px)] md:left-[calc(50%+470px)] top-1/2 -translate-y-1/2 w-[100px] sm:w-[140px] md:w-[180px] h-[160px] sm:h-[220px] md:h-[280px] z-[3] opacity-60 lg:left-130"
                : index === 3
                ? "left-[calc(50%+370px)] sm:left-[calc(50%+540px)] md:left-[calc(50%+680px)] top-1/2 -translate-y-1/2 w-[80px] sm:w-[120px] md:w-[150px] h-[140px] sm:h-[200px] md:h-[250px] z-[2] opacity-40 lg:left-150"
                : "left-[calc(50%+480px)] sm:left-[calc(50%+720px)] md:left-[calc(50%+880px)] top-1/2 -translate-y-1/2 w-[60px] sm:w-[100px] md:w-[120px] h-[120px] sm:h-[160px] md:h-[220px] z-[1] opacity-0 lg:left-160"
            }`}
            style={{ backgroundImage: `url(${img.src})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
