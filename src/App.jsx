import React, { useState, useRef } from "react";
import { ImagePlus } from "lucide-react";
import { Outlet } from "react-router-dom";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef(null);

  const generateImage = async () => {
    const description = inputRef.current.value.trim(); //retrieves the current value of the input field referenced by inputRef, removes any leading or trailing whitespace using trim(), and stores it in the description variable.

    if (!description) {
      setErrorMessage("Please enter an image description.");
      return;
    }
    setErrorMessage("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/generate-image",
        {
          // sends a POST request to the endpoint on the backend, including the description and waits for the response using axios.
          description,
        }
      );

      if (response.data && response.data.imageUrl) {
        setImageUrl(response.data.imageUrl);
      } else {
        throw new Error("Image URL not found in the response");
      }
    } catch (error) {
      console.error("Error generating image:", error);
      setErrorMessage("Failed to generate image. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ImagePlus className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl font-bold text-white">AI Image Studio</h1>
          </div>
          <p className="text-lg text-white/70">
            Transform your imagination into stunning artwork with AI
          </p>
        </header>

        <main>
          <Outlet
            context={{
              generateImage,
              inputRef,
              isLoading,
              imageUrl,
              errorMessage,
            }}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
