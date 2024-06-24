const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "sk-proj-JGfrHBelmV2UunBaCgf4T3Bl",
});

// send text-only input to ChatGPT API
async function sendText() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      {
        role: "user",
        content: "What day is Christmas?",
      },
    ],
    model: "gpt-4o",
  });
  // the response body will also have the same props as above
  console.log(completion.choices[0].message);
}

// send text with 1 image input to ChatGPT API
async function sendTextWithImage() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "What is the creature wearing?" },
          {
            type: "image_url",
            image_url: {
              url: "https://static.vecteezy.com/system/resources/previews/002/285/591/original/green-alien-character-wearing-shoes-backpack-and-black-hat-isolated-white-background-design-vector.jpg",
            },
          },
          /* supports multiple image uploads
          {
            type: "image_url",
            image_url: {
              url: "https://static.vecteezy.com/system/resources/previews/002/285/591/original/green-alien-character-wearing-shoes-backpack-and-black-hat-isolated-white-background-design-vector.jpg",
            },
          },*/
        ],
      },
    ],
    model: "gpt-4o",
  });
  // the response body will also have the same props as above
  console.log(completion.choices[0].message);
}

sendText();
sendTextWithImage();
