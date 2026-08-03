console.log("Script loaded successfully.");

const aseForm = document.getElementById("aseForm");

const analysisLoading = document.getElementById("analysisLoading");

const aseProfile = document.getElementById("aseProfile");

console.log("aseForm:", aseForm);
console.log("analysisLoading:", analysisLoading);
console.log("aseProfile:", aseProfile);

function chooseRandom(options) {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function analyzeSoul(race, pull, soulTemperament) {
    if (race === "divinity" &&
        pull === "water")
        {
            return {
                classification: "Water Apprime",
                lineage: "Kin of Yemoja",
                expression: "Ice Manipulation",
                technique: "Frozen Palace",
                weakness: "Extended use gradually weakens the body",
                heritage: "You are Kin of Yemoja, one of the nearly extinct Apprime bloodlines. Most of your people were massacred during humanity's campaign for supremacy against the divine races, leaving only scattered survivors across Terrabelle."
            };
        }

        if (race === "divinity" &&
            pull === "fire") 
            {
                return {
                    classification: "Fire Apprime",
                    lineage: "Arms of Agni",
                    expression: "Divine Flame Manipulation",
                    technique: "Infernus Knuckles",
                    weakness: "Their power becomes harder to control as their emotions intensify.",
                    heritage: "You are one of the Arms of Agni, an Apprime bloodline carrying divine fire. Like the other Apprime bloodlines, most of your people were massacred during humanity's campaign for supremacy against the divine races."
                };
            }

        if (race === "divinity" &&
            pull === "earth") 
            {
                return {
                    classification: "Earth Apprime",
                    lineage: "Kin of Aganju",
                    expression: "Divine Earth Manipulation",
                    technique: "Fissure Canyon",
                    weakness: "Their strongest techniques require contect with solid ground.",
                    heritage: "You are Kin of Aganju, an Apprime bloodline carrying divine earth. Like the other Apprime bloodlines, most of your people were massacred during humanity's campaign for supremacy against the divine races."
                };
            }

            if (race === "divinity" &&
            pull === "dark") 
            {
                return {
                    classification: "dark Apprime",
                    lineage: "Kin of Adroa",
                    expression: "Void Manipulation",
                    technique: "Ebony Sky",
                    weakness: "Extended use can distort the user's perception of reality.",
                    heritage: "You are Kin of Adroa, an Apprime bloodline carrying the power of the unknown. Like the other Apprime bloodlines, most of your people were massacred but not by humanities conquest of Eden but an ancient internal conflict fought by the Apprime."
                };
            }

            if (race === "divinity" &&
            pull === "wind") {
                const lineage = chooseRandom([
                    "Kin of Shango",
                    "Kin of Oya"
                ]);

                return {
                    classification: "Wind Apprime",
                    lineage: lineage,
                    expression: "Divine Storm Manipulation",
                    technique: "Tornado Corridor",
                    weakness: "Their strongest attacks become difficult to control in enclosed spaces.",
                    heritage: "You descend from one of the Apprime houses connected to wind, storms, and the living sky. Most of your people were massacred but not by humanity's campaign for supremacy against the divine races." 
                };
            }

 if (race === "divinity" &&
            pull === "light") {
                const lineage = chooseRandom([
                    "Ray of Obatala",
                    "Beam of Inti"
                ]);

                return {
                    classification: "Light Apprime",
                    lineage: lineage,
                    expression: "Divine Light Manipulation",
                    technique: "Aurora's Judgment",
                    weakness: "Overuse temporarily damages the users nervouse system.",
                    heritage: "You descend from an Apprime bloodline connect to divine light. Most of your people were massacred during humanitiy's campaign for supremacy against the divine races." 
                };
            }

        return {
            classification: "Unknown",
            lineage: "Unknown Lineage",
            expression: "Ase signature not yet recorded",
            technique: "undiscovered",
            weakness: "Unknown",
            heritage: "The Terrabelle Registry does not yet contain a complete record for this combination."
        };
}


function determineTemperamentElement(soulTemperament) {
    if (
        soulTemperament === "calm" ||
        soulTemperament === "intense" 
    ) {
        return "water";
}
if (
        soulTemperament === "compassionate" ||
        soulTemperament === "reckless" 
    ) {
        return "wind";
    }
if (
        soulTemperament === "curious" ||
        soulTemperament === "cunning" 
    ) {
        return "dark";
    }
if (
        soulTemperament === "disciplined" ||
        soulTemperament === "stoic" 
    ) {return "earth";

    }
if (
        soulTemperament === "fierce" ||
        soulTemperament === "ambitious" 
    ) {
        return "fire";
    }
if (
        soulTemperament === "patient" ||
        soulTemperament === "protective" 
    ) {
        return "light";
}

return "unknown";
}


//Form listener should follow//
aseForm.addEventListener("submit", function (event) {
    event.preventDefault();

console.log("Form submitted.");



    const participantName = document.getElementById("participantName").value;
    const race = document.getElementById("race").value;
    const pull = document.getElementById("pull").value;
    const soulTemperament = document.getElementById("soulTemperament").value;
    const aseResult = analyzeSoul(race, pull, soulTemperament);
    analysisLoading.classList.remove("d-none");
    aseProfile.classList.add("d-none");

const temperamentElement = determineTemperamentElement(soulTemperament);

console.log("Temperament element:", temperamentElement);

console.log("Loading card should now be visible");

    setTimeout(function () {
        console.log("showing Ase profile");


        analysisLoading.classList.add("d-none");
        aseProfile.classList.remove("d-none");

        document.getElementById("resultName").textContent = participantName;
        document.getElementById("resultRace").textContent = race;
        document.getElementById("resultPull").textContent = pull;
        document.getElementById("resultTemperament").textContent = soulTemperament;
        document.getElementById("resultClassification").textContent = aseResult.classification;
        document.getElementById("resultLineage").textContent = aseResult.lineage;
        document.getElementById("resultExpression").textContent = aseResult.expression;
        document.getElementById("resultTechnique").textContent = aseResult.technique;
        document.getElementById("resultWeakness").textContent = aseResult.weakness;
        document.getElementById("resultHeritage").textContent = aseResult.heritage;
    }, 2000);
});

