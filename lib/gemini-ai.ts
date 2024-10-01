import { GEMINI_API_KEY } from "@/config";
import { GoogleGenerativeAI } from "@google/generative-ai";
const apikey = GEMINI_API_KEY;

if (!apikey) {
  throw new Error("GEMINI_API_KEY is not defined");
}

const genAI = new GoogleGenerativeAI(apikey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};
export const chatSession = model.startChat({
  generationConfig,
  history: [],
});
