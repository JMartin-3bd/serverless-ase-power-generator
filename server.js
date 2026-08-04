const express = require("express");

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb")

const { randomUUID } = require("crypto");

const {
    DynamoDBDocumentClient,
    PutCommand
} = require("@aws-sdk/lib-dynamodb");


const app = express();
const PORT = 3000;

const TABLE_NAME = "AseParticipants";

const dynamoClient = new DynamoDBClient({
    region: "us-east-1"
});

const dynamoDB = 
DynamoDBDocumentClient.from(dynamoClient);

app.use(express.json());
app.use(express.static("public"));

app.post("/api/participants", async function (request, response) {
    //Basic Validation and requirements for the app
    const participantData = request.body;
    const requiredFields = [
        "name",
        "race",
        "pull",
        "soulTemperament"
    ];

const missingFeilds = requiredFields.filter(function(field) {
    return !participantData[field];
});

    if (missingFeilds.length > 0) {
        return response.status(400).json({
            massage: "Required participant information is missing.",
            missingFields: missingFeilds
        });
    }
    console.log("Participant received:", participantData);

    const participantRecord = {
        participantId: randomUUID(),
        name: participantData.name,
        email: participantData.email,
        mailingListConsent: participantData.mailingListConsent,
        race: participantData.race,
        pull: participantData.pull,
        soulTemperament: participantData.soulTemperament,

        classification: participantData.classification,
        lineage: participantData.lineage,
        expression: participantData.expression,
        technique: participantData.technique,
        weakness: participantData.weakness,
        heritage: participantData.heritage,


        createdAt: new Date().toISOString()
    };

try {
    const command = new PutCommand({
        TableName: TABLE_NAME,
        Item: participantRecord
    });

    await dynamoDB.send(command);

    console.log("Participant saved:", participantRecord);

    response.status(201).json({
        message: "Participant saved Successfully.",
        participant: participantRecord
    });
} catch(error) {
    console.error("DynamoDB save failed.", error);

    response.status(500).json({
        message: "participant could not be saved."
    });
}
});


app.listen(PORT, function () {
    console.log(`Server running at http://localhost:${PORT}`);
});