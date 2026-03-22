import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// Fix __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));

// API route
app.post("/api/chat", async (req, res) => {
    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.API_KEY}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(req.body)
            }
        );

        const data = await response.json();

        console.log("API RESPONSE:", data);

        if (data.error) {
            return res.status(400).json(data);
        }
        
        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// Default route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
    console.log("🚀 Server running at http://localhost:3000");
});