import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import PromptInput from "./PromptInput";
import ImageDisplay from "./ImageDisplay";
import Gallery from "./Gallery";

const ImageGenerator = () => {
  const { generateImage, inputRef, isLoading, imageUrl, errorMessage } =
    useOutletContext();
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    fetchGalleryImages();
  }, [imageUrl]);

  const fetchGalleryImages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/images");
      setGalleryImages(response.data);
    } catch (error) {
      console.error("Error fetching gallery images:", error);
    }
  };


  return (
    <div className="flex flex-col items-center gap-8 p-8">
      {errorMessage && (
        <p className="text-red-500 font-medium">{errorMessage}</p>
      )}
      <PromptInput
        generateImage={generateImage}
        inputRef={inputRef}
        isLoading={isLoading}
      />
      <ImageDisplay imageUrl={imageUrl} isLoading={isLoading} />
      <Gallery images={galleryImages} />
    </div>
  );
};

export default ImageGenerator;

