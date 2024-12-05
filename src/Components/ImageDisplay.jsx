import React from 'react';
import { Loader2 } from 'lucide-react';
import Passport from '../Assets/Images/Passport.jpg';

const ImageDisplay = ({ imageUrl, isLoading }) => {
  return (
    <div className="relative w-1/3 aspect-square max-w-2xl rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
        </div>
      ) : imageUrl ? (
        <img
          src={imageUrl}
          alt="AI Generated"
          className="w-full h-full object-cover"
        />
      ) : (
        <img
        src={Passport}
        alt="AI Generated"
        className="w-full h-full object-cover"
      />

      )}
    </div>
  );
};

export default ImageDisplay;

