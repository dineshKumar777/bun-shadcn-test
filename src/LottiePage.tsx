import React from 'react';
import Lottie from 'react-lottie';
import animationData from './assets/spiderLottie.json';

const LottiePage: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">About</h1>
      <p>simple lottie page</p>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LottiePage;
