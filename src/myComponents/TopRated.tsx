import React from "react";
import TopRatedCard from "./TopRatedCard";

export default function TopRated() {
  return (
    <section className="p-10">
      <div className="w-full max-w-[1100px] mx-auto px-4">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h4 className="uppercase font-semibold text-base text-dark mb-3">
              Flash Sale Today
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <TopRatedCard
                price={2300}
                alt="Web-cam"
                src="/images/external-webcam.png"
                title="Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..."
              />
              <TopRatedCard
                price={2300}
                alt="Web-cam"
                src="/images/infinix-phone.png"
                title="Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..."
              />
              <TopRatedCard
                price={2300}
                alt="Web-cam"
                src="/images/red-keyboard.png"
                title="Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..."
              />
            </div>
          </div>

          <div>
            <h4 className="uppercase font-semibold text-base text-dark mb-3">
              Best Sellers
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <TopRatedCard
                price={2300}
                alt="Web-cam"
                src="/images/ps5.png"
                title="Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..."
              />
              <TopRatedCard
                price={2300}
                alt="Web-cam"
                src="/images/black-cctv.png"
                title="Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..."
              />
              <TopRatedCard
                price={2300}
                alt="Web-cam"
                src="/images/silver-infinix.png"
                title="Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..."
              />
            </div>
          </div>

          <div>
            <h4 className="uppercase font-semibold text-base text-dark mb-3">
              Top Rated
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <TopRatedCard
                price={2300}
                alt="Web-cam"
                src="/images/led-TV.png"
                title="Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..."
              />
              <TopRatedCard
                price={2300}
                alt="Web-cam"
                src="/images/white-drone.png"
                title="Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..."
              />
              <TopRatedCard
                price={2300}
                alt="Web-cam"
                src="/images/mp-box.png"
                title="Dell Optiplex 7000x7480 All-in-One Computer Monitor"
              />
            </div>
          </div>

          <div>
            <h4 className="uppercase font-semibold text-base text-dark mb-3">
              New Arrivals
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <TopRatedCard
                price={2300}
                alt="Web-cam"
                src="/images/black-pixel.png"
                title="Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..."
              />
              <TopRatedCard
                price={2300}
                alt="Web-cam"
                src="/images/white-hp-pronter.png"
                title="Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..."
              />
              <TopRatedCard
                price={2300}
                alt="Web-cam"
                src="/images/black-game-pad.png"
                title="Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
