import React from "react";

// Importing Navigation Bar
import PrimaryNavigation from "../navigation/PrimaryNavigation";

// Importing Style Sheet
import classes from "../Styles/Home.module.css";

// Importing React Icons
import { AiFillTwitterCircle } from "react-icons/ai";

// Importing Lotties
import Lottie from "react-lottie";
import chartAnimation from "../lotties/chart-lottie-section-one.json";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: chartAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <PrimaryNavigation />


      {/* Header Start */}

      <header className={classes.header_container}>
        <div className={classes.header_inner_container}>
          <div className={classes.header_title}>
            <h1>DungeonDeets</h1>
          </div>
          <div className={classes.header_sub}>
            <p>Where do you stand?</p>
          </div>
          <div className={classes.header_cta}>
            <button>Join Now</button>
          </div>
          <div className={classes.social_container}>
            <div className={classes.social_item}>
              <AiFillTwitterCircle
                className={classes.twitter}
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Header End */}


      {/* Section One Start */}

      <section className={classes.scone_container}>
        <div className={classes.scone_inner_container}>
          <div className={classes.scone_text_container}>
            <div className={classes.scone_badge}>
              <span>About Us</span>
            </div>
            <div className={classes.scone_title}>
              <h2>DungeonDeets is a safe and reliable stat tracking system.</h2>
            </div>
            <div className={classes.scone_subtitle}>
              <h5>Built for players</h5>
            </div>
            <div className={classes.scone_description}>
              <p>
                DungeonDeets is an all inclusive stat tracker for realm of the mad god. We are completely transparent and open to community interest. Through profile pages and additional features, we offer incentive to tracking your realm of the mad god stats.
              </p>
            </div>
          </div>
          <div className={classes.scone_lottie_container}>
            <Lottie options={defaultOptions} height={200} width={200} />
          </div>
        </div>
      </section>

      {/* Section One End */}


      {/* Section Two Start */}

      <section className={classes.sctwo_container}>
        <div className={classes.sctwo_inner_container}>
          <div className={classes.sctwo_text_container}>
            <div className={classes.sctwo_badge}>
              <span>Stats</span>
            </div>
            <div className={classes.sctwo_title}>
              <h2>Title</h2>
            </div>
            <div className={classes.sctwo_subtitle}>
              <h5>Subtitle</h5>
            </div>
            <div className={classes.sctwo_description}>
              <p>
                Welcome to "TITLE"! We are here to give you a great experience
                outside of rotmg. Check on your characters, individual stats and
                compare them with your friends!
              </p>
            </div>
          </div>
          <div className={classes.sctwo_lottie_container}>
            <Lottie options={defaultOptions} height={200} width={200} />
          </div>
        </div>
      </section>      

      {/* Section Two End */}
    </>
  );
};

export default Home;
