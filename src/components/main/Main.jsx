import React from "react";
import "./main.css";
import WebDesktopImg from "../../assets/images/image-web-3-desktop.jpg";
import IMG1 from "../../assets/images/image-gaming-growth.jpg";
import IMG2 from "../../assets/images/image-retro-pcs.jpg";
import IMG3 from "../../assets/images/image-top-laptops.jpg";

const data = [
  {
    id: 1,
    img: IMG2,
    number: "01",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades? ",
  },
  {
    id: 2,
    img: IMG3,
    number: "02",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
  },
  {
    id: 3,
    img: IMG1,
    number: "03",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
  },
];

export default function () {
  return (
    <main id="main">
      <div className="container container__main">
        <div className="content__top">
          <div className="content__main-1">
            <img src={WebDesktopImg} alt="main-pic" className="main__image" />
          </div>
          <div className="content__main-2">
            <h1>The bright future of web 3.0?</h1>
          </div>
          <div className="content__main-3">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <a href="#" className="btn btn-primary">
              Read more
            </a>
          </div>
          <div className="content__main-4">
            <div className="float__main">
              <h2>New</h2>
              <h4>Hydrogen VS Electric Cars</h4>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className="float__main">
              <h4>The Downsides of AI Artistry</h4>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="float__main">
              <h4>s VC Funding Drying Up? </h4>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="content__bottom">
          <div className="content__bottom-container">
            {data.map(({ id, img, number, title, description }) => {
              return (
                <div key={id} className="content__reviews">
                  <div className="content__review-img">
                    <img src={img} alt={title} />
                  </div>
                  <div className="content__text">
                    <h3>{number}</h3>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
