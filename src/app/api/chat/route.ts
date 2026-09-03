import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Missing GEMINI_API_KEY environment variable." },
        { status: 500 }
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request payload. Expected an array of messages." },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: "You are an AI assistant representing Christian Faith Mestola, a Graphic Designer × Creative Frontend Developer. You are embedded as a floating chatbot on his personal portfolio website. Your role is to answer questions about Christian, his skills, and his work, in a professional, creative, and slightly playful tone. Keep answers concise. If asked about hiring him, enthusiastically encourage them to reach out via the Contact section. You are talking directly to potential clients or recruiters."
    });

    let formattedHistory = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }]
    }));

    // Gemini requires the history to start with a 'user' role
    while (formattedHistory.length > 0 && formattedHistory[0].role === "model") {
      formattedHistory.shift();
    }

    const chat = model.startChat({
      history: formattedHistory,
    });

    const latestMessage = messages[messages.length - 1].content;
    const result = await chat.sendMessage(latestMessage);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ role: "model", content: text });
  } catch (error: any) {
    console.error("Chatbot API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate response.", details: error.message },
      { status: 500 }
    );
  }
}
