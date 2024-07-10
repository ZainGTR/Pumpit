import {
  AI_API,
  AI_API_SECRET,
  AI_API_BASE_URL,
  AI_API_MODEL_ID,
} from "@/config/env";

export const GenerateNewImage = async (
  tokenId: number,
  ville: boolean,
  theme: number
) => {
  const authHeader =
    "Basic " + Buffer.from(`${AI_API}:${AI_API_SECRET}`).toString("base64");

  const headers = {
    accept: "application/json",
    Authorization: authHeader,
  };

  // Make a POST request to create an inference
  fetch(`${AI_API_BASE_URL}/generate/txt2img`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      modelId: AI_API_MODEL_ID,
      prompt: "factory",
      numInferenceSteps: 30,
      numSamples: 2,
      guidance: 7.5,
      width: 1024,
      height: 1024,
      negativePrompt: "ugly, bad, low quality, blurry",
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    })
    .then((data) => {
      console.log(data);
      const inferenceId = data.inference.id;

      // Function to poll the inference status
      const pollInferenceStatus = async () => {
        let status = "";
        let inferenceData;
        while (!["succeeded", "failed"].includes(status)) {
          // Fetch the inference details
          const inferenceResponse = await fetch(
            `${AI_API_BASE_URL}/models/${AI_API_MODEL_ID}/inferences/${inferenceId}`,
            {
              method: "GET",
              headers,
            }
          );
          inferenceData = await inferenceResponse.json();
          status = inferenceData.inference.status;
          console.log(`Inference status: ${status}`);

          // Wait for a certain interval before polling again
          await new Promise((resolve) => setTimeout(resolve, 5000)); // Polling every 5 seconds
        }

        // Handle the final status
        if (status === "succeeded") {
          console.log("Inference succeeded!");
          console.log(inferenceData); // Print inference data
        } else {
          console.log("Inference failed!");
          console.log(inferenceData); // Print inference data
        }
      };

      // Start polling the inference status
      pollInferenceStatus();
    })
    .catch((error) => {
      console.error(error);
    });
};
