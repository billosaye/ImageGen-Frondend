 How It All Works Together
Step 1: User enters a description in the PromptInput component and clicks "Generate."

This triggers the generateImage function in the App component.
Step 2: The app sends the description to the backend server.

While waiting for the server to respond, a loading spinner is displayed in ImageDisplay.
Step 3: The backend returns a URL of the generated image.

This URL is displayed in ImageDisplay.
Step 4: The gallery is updated with all previously generated images, including the new one.
