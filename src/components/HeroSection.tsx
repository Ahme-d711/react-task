import  { useEffect, useState } from "react";

const sliderData = [
  {
    id: 1,
    title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
    offer: "Limited Time Offer 30% Off",
    buttonText1: "Buy now",
    imgSrc: "/header_headphone_image.png",
  },
  {
    id: 2,
    title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
    offer: "Hurry up only few lefts!",
    buttonText1: "Shop Now",
    imgSrc: "/header_playstation_image.png",
  },
  {
    id: 3,
    title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
    offer: "Exclusive Deal 40% Off",
    buttonText1: "Order Now",
    imgSrc: "/header_macbook_image.png",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) =>
          prev === sliderData.length - 1 ? 0 : prev + 1
        ),
      3000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" mt-6 w-full flex flex-col gap-4">
      <div className="flex gap-8 justify-between items-center bg-card rounded-md w-full p-12 text-center md:text-start md:p-16 lg:p-24">
        <div className="flex-1">
          <h2 className=" font-bold text-destructive">
            {sliderData[currentSlide].offer}
          </h2>
          <h1 className="text-2xl lg:text-4xl pt-4 mb-6 font-bold">
            {sliderData[currentSlide].title}
          </h1>
            <button className=" bg-destructive rounded-full text-white font-bold py-2 px-6 hover:bg-destructive/80 cursor-pointer transition-all">
              {sliderData[currentSlide].buttonText1}
            </button>
        </div>
        <div className="flex-1 hidden md:block relative w-full h-64">
          <img
            src={sliderData[currentSlide].imgSrc}
            alt={sliderData[currentSlide].title}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-1 mx-auto">
        <span
          style={{
            backgroundColor: sliderData[currentSlide].id === 1 ? "orange" : "",
          }}
          className="w-2 h-2 rounded-full bg-foreground"
        ></span>
        <span
          style={{
            backgroundColor: sliderData[currentSlide].id === 2 ? "orange" : "",
          }}
          className="w-2 h-2 rounded-full bg-foreground"
        ></span>
        <span
          style={{
            backgroundColor: sliderData[currentSlide].id === 3 ? "orange" : "",
          }}
          className="w-2 h-2 rounded-full bg-foreground"
        ></span>
      </div>
    </div>
  );
}
