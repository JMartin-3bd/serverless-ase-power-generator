console.log("NEW SCRIPT IS LOADING");

const aseForm = document.getElementById("aseForm");

const analysisLoading = document.getElementById("analysisLoading");

const aseProfile = document.getElementById("aseProfile");

// Retreve data for the final
const loadParticipantsButton =
document.getElementById("loadParticipantsButton");

const participantsTableBody =
document.getElementById("participantsTableBody");


console.log("aseForm:", aseForm);
console.log("analysisLoading:", analysisLoading);
console.log("aseProfile:", aseProfile);

function chooseRandom(options) {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function analyzeSoul(race, pull, soulTemperament) {
    //  Divinity Rules //
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

               //  Beastial Rules //

                if (race === "beastial" &&
            pull === "fire") 
            {
                return {
                    classification: "Beastial",
                    lineage: "Lycan",
                    expression: "Lycanthorpe",
                    technique: "Sonic Scorch",
                    weakness: "Their instincts may betray their common sense.",
                    heritage: "You are a Lycan! Many Lycans are Boudas, descendants of a curse meant to destroy their people beneath the full moon. The curse backfired, instead making bitten humans to being turned 'Were'. Today, Beastials survive beneath the banner of PRIDE and remain at war with the Black Mamba Couldron and King Solomon."
                };
            }

             if (race === "beastial" &&
            pull === "water") 
            {
                return {
                    classification: "Beastial",
                    lineage: "Pantherathorpe",
                    expression: "Panthera",
                    technique: "Prowl",
                    weakness: "Their speed and stamina decreases when their body becomes dehydrated.",
                    heritage: "You carry the Panthera Beastial expression, combining feline instincts with the adaptable force of water. Panthera are part of the Beastial nations protected beneath the banner of PRIDE. Their speed, hunting instincts, and battlefield awareness have helped their people survive King Solomon's attempts to destroy them."
                };
            }

            if (race === "beastial" &&
            pull === "earth") 
            {
                return {
                    classification: "Beastial",
                    lineage: "Scales",
                    expression: "Reptile Beastial",
                    technique: "Poison Stone Fangs",
                    weakness: "The thicker the armor, speed and mobility taks a hit",
                    heritage: "You carry the Scales Beastial expression, descenting from Drakons marked by armored skin, immense durability, and a powerful connection to the earth. Scales survive beneath the banner of PRIDE, where their natural defenses make them valuable protectors against King Solomon's forces."
                };
            }

            if (race === "beastial" && pull === "light") {
    return {
        classification: "Beastial",
        lineage: "Primape",
        expression: "Beast of Nobility",
        technique: "Solar Simian",
        weakness:
            "Their immense strength drains energy quickly during prolonged combat.",
        heritage:
            "You carry the Prime Ape Beastial expression, known for overwhelming strength, intelligence, and natural leadership. Prime Apes stand among the Beastial nations protected by PRIDE, using their power and battlefield intellect to resist King Solomon's attempts to invade the Pridelands."
    };
}

            if (race === "beastial" && pull === "wind") {
                const lineage = chooseRandom([
                "Fowl",
                "Feathered-Raptor"
]);

    return {
        classification: "Winged Beastial",
        lineage: lineage,
        expression: "Sky-Born Beastial",
        technique: "Razor Wind Dive",
        weakness:
            "Their aerial movement becomes limited in enclosed spaces and during severe injury.",
        heritage:
            "You carry a winged Beastial expression tied to the open sky. Fowl and Feathered Raptors serve among the Beastial nations protected beneath the banner of PRIDE. Their aerial speed, vision, and hunting instincts make them dangerous scouts and warriors against King Solomon's forces."
    };
}
// Not to self: Do Not Code in Google Doc on your fone!!!!!!! Find an actual code app LMAO. try mimo!!!
                if (race === "beastial" && pull === "dark") {
                    const lineage = chooseRandom([
                    "Black Panthera",
                    "Moon-bred Lycan",
                    "Eclipse Scales",
                    "Ebony Feather",
                    "Shadow Prime Ape"
]);

    return {
        classification: "Black Beastial",
        lineage: lineage,
        expression: "Obsidian Beastial",
        technique: "Umbral Shock and Awe",
        weakness:
            "Their power becomes weaker under intense light.",
        heritage:
            "You carry a Beastial expression altered by the Dar. Shadow-touched Beastials are rare, feared even among other supernatural races, but they remain part of the nations protected beneath the banner of PRIDE. Their heightened instincts and darkened Ase make them deadly opponents against King Solomon's forces."
    };
}

if (race === "soul-born" && pull === "fire") {
    return {
        classification: "Fire Soul-Born",
        lineage: "Fire School",
        expression: "Spirit Flame Manipulation",
        technique: "Scorching Spirit Seal",
        weakness:
            "Their magic becomes unstable when anger overwhelms their concentration.",
        heritage:
            "You were born with the ability to understand and manipulate the spirit of fire. As a member of the Fire School, you shape flame through spiritual knowledge rather than ordinary physical control. Under King Solomon's empire, schools outside the School of Death are outlawed unless specifically permitted in service to the Black Mamba Cauldron."
    };
}

if (race === "soul-born" && pull === "water") {
    return {
        classification: "Water Soul-Born",
        lineage: "Maui Soul Surf School",
        expression: "Spirit Water Manipulation",
        technique: "Cyclone's Revenge",
        weakness:
            "Their magic weakens when they become dehydrated or loase emotional focus",
        heritage:
            "You were born with the ability to understand and manipulate the spirit of water. Members of the Water School can influence water by communicating with its spiritual nature rather than controlling it through physical force. Under King Solomon's empire, schools outside the School of Death are outlawed unless specifically permitted by the Black Mamba Cauldron."
    };
}

if (race === "soul-born" && pull === "earth") {
    return {
        classification: "Earth Soul-Born",
        lineage: "Terra School of Life",
        expression: "Spirit Nature Manipulation",
        technique: "Cave Collapse",
        weakness:
            "Artificial environments weaken their connection to living soil.",
        heritage:
            "You were born with the ability to understand and manipulate the very spirits within the earth and plants life Terrabelle. The Terra School is outlawed under King Solomon unless its practitioners submit to his control. Many female Nature users bear a magically applied black-and-yellow serpent tattoo that Solomon can use to punish or control them."
    };
}

if (race === "soul-born" && pull === "wind") {
    return {
        classification: "Wind Soul-Born",
        lineage: "School of the Clouds",
        expression: "Spirit Wind Manipulation",
        technique: "Breath of the Tempest",
        weakness:
            "Their magic becomes difficult to control in enclosed spaces or when their breathing is restricted.",
        heritage:
            "You were born with the ability to understand and manipulate the spirit of air. Members of the Air School influence wind, pressure, and movement through knowledge of the unseen spirits traveling across Terrabelle. Under King Solomon's empire, schools outside the School of Death are outlawed unless specifically permitted in service to Black Mamba Cauldron."
    };
}

if (race === "soul-born" && pull === "light") {
    const lineage = chooseRandom([
        "Light School",
        "Life School",
        "Holy School"
//NOTE TO SELF: Find Code to make Holy Rarer than the other two when randomly selected.
    ]);

    return {
        classification: "Light Soul-Born",
        lineage: lineage,
        expression: "Radiant Spirit Manipulation",
        technique: "Shine Spirit Seal",
        weakness:
            "Their magic weakens when fear or doubt disrupts their spiritual focus.",
        heritage:
            "You were born with the ability to understand and manipulate spirits connected to light, life, and holy energy. These schools are outlawed under King Solomon unless their practitioners submit to his authority. The men are hunted while Women belonging to the Nature, Light, Life, and Holy schools are forcibly marked with a magical black-and-yellow serpent tattoo that Solomon can use to control them."
    };
}

if (race === "soul-born" && pull === "dark") {
    const lineage = chooseRandom([
        "Galaxy School",
        "Death School"
        
//NOTE TO SELF: Find Code to make Universal/Galaxy EXTREMELY Rarer than the other when randomly selected. LIKE 1/50 TIMES CHANCE
    ]);

   return {
        classification: "Dark Soul-Born",
        lineage: lineage,
        expression: "Death Spirit Manipulation",
        technique: "Black Serpent Binding",
        weakness:
            "Their connection to death spirits can slowly poison their own soul and body.",
        heritage:
            "You were born with the ability to understand and manipulate spirits connected to death and very rarely the universe its self. Members of the School of Death serve under King Solomon and proudly bear a magically applied black-and-yellow serpent tattoo, usually placed on the arm. The mark allows Solomon to punish or control those who disobey him."
    };
}

if (race === "nightkin" && pull === "dark") {
    return {
        classification: "Nightkin",
        lineage: "Vampyr",
        expression: "Full Night-Born Vampyr",
        technique: "Crimson Shadow Feast",
        weakness:
            "Feeding on sentient souls grants more power to the night but corrupts the Vampyr making them more susceptable to blood lust.",
        heritage:
            "You carry the full expression of a night-born Vampyr. Your bloodline is shaped by hunger, darkness, and an ancient curse that was intended to destroy the Vampyr but instead transformed their existence. As a full blood you belong to one of the four Vampyr Clans(Drake, Akasha, Maximilian, and Selighn)."
    };
}

if (race === "nightkin" && pull === "wind") {
    return {
        classification: "Nightkin",
        lineage: "Nocturne",
        expression: "Soul-Fasting Vampyr",
        technique: "Silent Gale Step",
        weakness:
            "Refusing to feed on beings with souls leaves them physically weaker than other Vampyrs.",
        heritage:
            "You are a Nocturne, a Vampyr who refuses to feed on beings with a soul. Your bloodline survives through discipline and restraint, choosing hunger over the corruption caused by feeding on sentient life."
    };
}

if (race === "nightkin" && pull === "light") {
    return {
        classification: "Daywalker",
        lineage: "Dhampyr",
        expression: "Sun-Walking Vampyr",
        technique: "Daybreak",
        weakness:
            "Feeding on humans gradually weakens their ability to survive in sunlight.",
        heritage:
            "You are a Dhampyr, a half-Vampyr capable of living in sunlight and aging similarly to a human. However, feeding on humans slowly corrupts this gift, causing your resistance to sunlight to fade but empowering you in the process."
    };
}

if (race === "nightkin" && pull === "water") {
    return {
        classification: "Nightkin",
        lineage: "Turned",
        expression: "New Blood",
        technique: "Crimson Tide Bind",
        weakness:
            "Their hunger and newly awakened senses are difficult to control.",
        heritage:
            "You are Bloodbound, a newly turned Vampyr still adjusting to the hunger and changes within your body. Bloodbound often serve as thralls, devotees, or followers of a powerful Vampyr house or clan."
    };
}

if (race === "nightkin" && pull === "fire") {
    return {
        classification: "Nightkin",
        lineage: "Wraithe",
        expression: "Frenzied Vampyr",
        technique: "Burning Blood Frenzy",
        weakness:
            "Their hunger can overwhelm their mind, causing them to lose control and attack without recognizing friend or enemy.",
        heritage:
            "You are a Wraithe, a Vampyr whose soul and spirit are being consumed by the body's need to feed. The hunger has nearly taken control, leaving your existence trapped between immense power and total self-destruction."
    };
}

if (race === "nightkin" && pull === "earth") {
    return {
        classification: "Nightkin",
        lineage: "Ghoul",
        expression: "Failed Vampyr Transformation",
        technique: "Graveborn Crushing Grip",
        weakness:
            "Their incomplete transformation causes constant physical decay and an uncontrollable hunger.",
        heritage:
            "You are a Ghoul, a human bitten by a Vampyr who escaped before the transformation could be completed. Your body remains trapped between humanity and Nightkin corruption, slowly deteriorating beneath a curse that never fully claimed you. You must find a Vampyr Master before your complete deterioration turns you Zombie."
    };
}

if (race === "human" && pull === "fire") {
    return {
        classification: "Biotech",
        lineage: "L3ZR Carrier",
        expression: "Apprime-Gene Experiment",
        technique: "Super Strength",
        weakness:
            "Their body may reject the unstable Apprime-coded power forced into their genetic structure.",
        heritage:
            "You are an L3ZR Carrier, a human created through Confederate States experimentation using stolen Apprime genetic material. Your power is not natural Ase, but an engineered imitation designed to produce the perfect soldier."
    };
}

if (race === "human" && pull === "light") {
    return {
        classification: "Biotech",
        lineage: "Augmented",
        expression: "Enhanced Human Prototype",
        technique: "Light Speed Reflexes",
        weakness:
            "Their artificial enhancements can overload, causing pain, temporary blindness, and nervous-system failure.",
        heritage:
            "You are an Augmented human altered through Confederate States experimentation's quest for creating the perfect human. Your abilities are not true Ase, but artificial enhancements designed to increase strength, speed, reflexes, durability, and combat efficiency."
    };
}
if (race === "human" && pull === "water") {
    return {
        classification: "Biotech",
        lineage: "Gene-Spliced",
        expression: "Gene Modification",
        technique: "Super Adaptive",
        weakness:
            "Their altered DNA may mutate unpredictably under physical stress.",
        heritage:
            "You are a Gene-Spliced human created through Confederate States experimentation. Your body was altered using Beastial, Human, and supernatural genetic material to produce abilities beyond normal human limits. This power is not true Ase, but an unstable imitation engineered for military use."
    };
}

if (race === "human" && pull === "earth") {
    return {
        classification: "Biotech",
        lineage: "Cybernetic",
        expression: "Mechanical Combat Augmentation",
        technique: "Titan Impact",
        weakness:
            "Damage to their cybernetic systems can disrupt movement, senses, and combat processing.",
        heritage:
            "You are a Cybernetic human rebuilt through Confederate States experimentation. Mechanical systems were fused with your body to increase strength, durability, reflexes, and battlefield efficiency. Your abilities are not true Ase, but engineered power designed to turn humans into weapons."
    };
}

if (race === "human" && pull === "dark") {
    return {
        classification: "Biotech",
        lineage: "Experiment Gone Wrong",
        expression: "Unstable Human Mutation",
        technique: "Aberration Surge",
        weakness:
            "Their body continues to mutate, making their abilities painful and unpredictable.",
        heritage:
            "You are the result of a failed Confederate States experiment. Scientists attempted to force supernatural abilities into a human body, but the procedure created an unstable mutation instead. Your power is not true Ase, and every use risks further damaging what remains of your humanity."
    };
}

if (race === "human" && pull === "wind") {
    const lineage = chooseRandom([
        "Augmented",
        "Gene-Spliced",
        "Cybernetic",
        "L3ZR Carrier",
        "Experiment Gone Wrong"
    ]);

    return {
        classification: "Biotech",
        lineage: lineage,
        expression: "Adaptive Combat Experiment",
        technique: "Velocity Override",
        weakness:
            "Their experimental enhancements can malfunction when pushed beyond their engineered limits.",
        heritage:
            "You are a human altered through Confederate States experimentation. Your abilities are not true Ase, but an artificial attempt to imitate supernatural power and create the perfect soldier. Your final form depends on which experimental program changed your body."
    };
}

// Unkownsection temporary... do not touch till all rules done
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

function applyTemperamentModifier(
    aseResult,
    pull,
    temperamentElement
) {
    console.log("Modifier running:", pull, temperamentElement)
    if (pull === temperamentElement) {
        aseResult.expression =
        "Resonant" + aseResult.expression;

        aseResult.technique =
        aseResult.technique + " - Perfect Resonance";

        aseResult.weakness =
        aseResult.weakness + " Perfect Resonance increases power but causes faster exhaution.";

    } else {
        aseResult.expression =
        temperamentElement + "-influenced " +
        aseResult.expression;

        aseResult.technique =
        aseResult.technique + " - " +
        temperamentElement + " variant";

        aseResult.weakness = 
        aseResult.weakness + " Conflicting Influence can make technique unstable."
    }

    return aseResult;
    }
    


//Form listener should follow//
aseForm.addEventListener("submit", function (event) {
    event.preventDefault();

console.log("Form submitted.");



    const participantName = document.getElementById("participantName").value.trim();
    const participantEmail = document.getElementById("participantEmail").value.trim();
    const mailingListConsent = document.getElementById("mailingListConsent").checked;
    const race = document.getElementById("race").value;
    const pull = document.getElementById("pull").value;
    const soulTemperament = document.getElementById("soulTemperament").value;
    

//I broke the mailing list consent somehow by fixing the participant email?????????????
    
console.log("Checkbox consent value:", mailingListConsent);

//Addition of Soul Temperament
    const baseResult = analyzeSoul(race, pull, soulTemperament);
    const temperamentElement = determineTemperamentElement(soulTemperament);
    const aseResult = applyTemperamentModifier(baseResult, pull, temperamentElement);
    const threatLevel = chooseRandom([
        "LOW",
        "MODERATE",
        "HIGH",
        "EXTREME"
    ]);

    const participantData = {
        name: participantName,
        email: participantEmail,
        mailingListConsent: mailingListConsent,
        race: race,
        pull: pull,
        soulTemperament: soulTemperament,
        classification: aseResult.classification,
        lineage: aseResult.lineage,
        expression: aseResult.expression,
        technique: aseResult.technique,
        weakness: aseResult.weakness,
        heritage: aseResult.heritage
    };

    console.log("Sending to Backend:", participantData);

    fetch("/api/participants", {
        method:"POST",
        headers: {
            "content-type": "application/json"
        },
        body: (JSON.stringify(participantData))
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log("Backend response:", data);
        })
        .catch(function(error) {
            console.error("Participant submission failed:", error);
        });

    analysisLoading.classList.remove("d-none");
    aseProfile.classList.add("d-none");

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
        document.getElementById("resultThreatLevel").textContent = threatLevel;
        
        
        const threatBadge = document.getElementById("resultThreatLevel");

        threatBadge.classList.remove(
            "threat-low",
            "threat-moderate",
            "threat-high",
            "threat-extreme"
        );

        threatBadge.classList.add(
            "threat-" + threatLevel.toLowerCase()
        );
        
    }, 2000);
});

// Addin a Retreive-> select -> get for final
// Note to self I DO NOT INCLUDE email from the retrieve.

loadParticipantsButton.addEventListener("click", async function () {
    loadParticipantsButton.disabled = true;
    loadParticipantsButton.textContent = "Accessing Records...";

    try {
        const response = await fetch("/api/participants");

        if (!response.ok) {
            throw new Error ("Records could nto be retreived.");
        }

        const data = await response.json();

        participantsTableBody.innerHTML = "";

        data.participants.forEach(function (participant) {
            const row = document.createElement("tr");

            const participantValues = [
                participant.name || "NOT RECORDED",
                participant.race || "NOT RECORDED",
                participant.pull || "NOT RECORDED",
                participant.soulTemperament || "NOT RECORDED",
                participant.lineage || "NOT RECORDED",
            ];

            participantValues.forEach(function (value) {
                const tableCell = document.createElement("td");
                tableCell.textContent = value;
                row.appendChild(tableCell);
            });

//adding and Edit function through added Action in HTML
const actionCell = document.createElement('td');

const editButton = document.createElement("button");
editButton.type = 'button';
editButton.className = "btn btn-warning btn-sm";
editButton.textContent = "Edit";
editButton.dataset.participantId = participant.participantId;

editButton.addEventListener("click", async function () {
    const updatedName = prompt(
        "Enter the updated participant Name:",
        participant.name || ""
    );

    if (updatedName === null) {
        return;
    }

    const updatedEmail = prompt (
        "Enter the updated email:",
        participant.email || ""
    );

    if (updatedEmail === null) {
        return;
    }

    try {
        console.log ("Update being sent:", {
            name: updatedName,
            email:updatedEmail
        });
        const response = await fetch(
            `/api/participants/${participant.participantId}`,
            {
                method:"PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: updatedName,
                    email: updatedEmail
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error (data.message);
        }
        alert ("Fugitive record updated successfully.");

        loadParticipantsButton.click();
    } catch (error) {
        console.error("Participant update failed:", error);
        alert("The Fugitibe record could not be updated.");
    }
});

actionCell.appendChild(editButton);
row.appendChild(actionCell);


            participantsTableBody.appendChild(row);
        });
    }   catch (error) {
        console.error("Record display failed:", error);

        participantsTableBody.innerHTML = ` 
        <tr>
            <td colspan = "6" class = "text-center">
                Confederate records could not be accessed.
            </td>
            </tr>
            `;
    }   finally 
    //YES FINALLY! JEEZ
    {
        loadParticipantsButton.disabled = false;
        loadParticipantsButton.textContent = "View Fugitive Records";
    }
    });
    

