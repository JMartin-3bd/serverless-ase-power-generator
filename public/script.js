console.log("Script loaded successfully.");

const aseForm = document.getElementById("aseForm");

const analysisLoading = document.getElementById("analysisLoading");

const aseProfile = document.getElementById("aseProfile");

console.log("aseForm:", aseForm);
console.log("analysisLoading:", analysisLoading);
console.log("aseProfile:", aseProfile);


//Form listener should follow//
aseForm.addEventListener("submit", function (event) {
    event.preventDefault();

console.log("Form submitted.");

    const participantName = document.getElementById("participantName").value;
    const race = document.getElementById("race").value;
    const pull = document.getElementById("pull").value;
    const soulTemperament = document.getElementById("soulTemperament").value;

    analysisLoading.classList.remove("d-none");
    aseProfile.classList.add("d-none");

console.log("Loading card should now be visible)")

    setTimeout(function () {
        console.log("showing Ase profile");


        analysisLoading.classList.add("d-none");
        aseProfile.classList.remove("d-none");

        document.getElementById("resultName").textContent = participantName;
        document.getElementById("resultRace").textContent = race;
        document.getElementById("resultPull").textContent = pull;
        document.getElementById("resultTemperament").textContent = soulTemperament;
    }, 2000);
});

