const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/api/participants", function (request, response) {
    const participantData = request.body;

    console.log("Participant received:", participantData);

    response.json({
        message: "Participant information received.",
        participant: participantData
    });
});

app.listen(PORT, function () {
    console.log(`Server running at http://localhost:${PORT}`);
});