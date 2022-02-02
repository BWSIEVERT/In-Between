import React from "react";

import classes from '../Styles/Loading.module.css'

// Import Lottie
import Lottie from 'react-lottie'
import loadingLottie from '../lotties/loading-lottie.json'


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingLottie,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loading = () => (
  <div className={classes.spinner}>
    <Lottie options={defaultOptions} height={200} width={200} />
  </div>
);

export default Loading;