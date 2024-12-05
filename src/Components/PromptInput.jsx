import React from "react";
import { Wand2 } from 'lucide-react';

const PromptInput = ({ generateImage, inputRef, isLoading }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        generateImage();
      }}
      className="w-full max-w-3xl"
    > 
      <div className="relative">
        <input  
          type="text"      
          ref={inputRef}    
          placeholder="Describe the image you want to generate..."
          className="w-full px-4 py-3 pr-24 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          disabled={isLoading}  //Disables the input field when the app is busy generating an image (isLoading is true).
        />
        <button
          type="submit"
          disabled={isLoading}  //Disables the button when the app is busy generating an image (isLoading is true).
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Wand2 size={18} />
          Generate
        </button>  
      </div>
    </form>
  );
};

export default PromptInput;

