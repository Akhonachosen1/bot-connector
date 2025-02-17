const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// Replace with your actual subscription key
const SUBSCRIPTION_KEY = "adb9956c4e884f9cae0ad14a0ff60738";

// Replace with your actual endpoint URL
const PREDICTION_URL = "https://bizhivelang.cognitiveservices.azure.com/language/:query-knowledgebases?projectName=BizzyBot&api-version=2021-10-01&deploymentName=production";

app.post("/api/messages", async (req, res) => {
    try {
        const response = await axios.post(PREDICTION_URL, req.body, {
            headers: { "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY },
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error processing request");
    }
});

app.listen(3000, () => console.log("Bot is running on port 3000"));
