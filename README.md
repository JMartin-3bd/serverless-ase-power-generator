# Serverless Ase Power Generator



This project is supposed to be a dynamic, data driven web app based on my novel trilogy and comic book series 'Judgment Day', published though Afronomenon Studio. https://Afronostudio.com



The Idea is if I am at a Comic-Con or even online talking to a reader/potential customer about the lore of Judgment Day, I can direct them to the app to give them an experience oppose to just being "sold" to. They would enter their name, email, race, elemental pull, and soul temperament "creating" their own character. The application then generates a "randomized" character using pre-defined lore rules listing them like a dossier profile.



## Generation includes

* Class
* Lineage
* Ase Expression
* Signature Technique
* Weakness
* Heritage summary (race specific lore)





The app will also store potential customers (participants) records and allow saved records to be retrieved and updated.





## Public Live App Link:

https://y0lh8heabb.execute-api.us-east-1.amazonaws.com



## GitHub Repository:

https://github.com/JMartin-3bd/serverless-ase-power-generator



## User Req

1. Enter a participant name.
2. OPTIONALLY, enter an email address.
3. Choose whether to join the Afronomenon Studio mailing list.
4. Select a race.
5. Select an element pull.
6. Select a soul Temperament.
7. Generate a personalized Ase Profile.
8. Save the generated participant and profile info to a database.
9. Retrieve saved participant records.
10. Update an existing participant's name and email.
11. Access the application through a public cloud url.



## User Stories:

ex: As a \[type of user], I want \[simple goal or feature] so that \[reason or benefit].



As a dev/user, I want to build an email mailing list so that I have more customers to notify when a new book or merch is releasing.



As a dev/user, I want to build an email mailing list so that my books stay active on their minds.



As a dev/user, I want to build an email mailing list so that I have more customer to notify when a new book or merch is releasing.



As a user, I want to enter character info so that I can generate a personalized Ase Profile.



As a user, I want to view these results in a styled readable dossier.



As a user, I want the generated profile to follow established lore rules.\*\*\*



As a admin, I want participant records saved in a cloud data base.



As a admin, I want to be able to retrieved the saved customers records.



As a admin, I want to update a participant's name or email.



As a business owner, I want customers to voluntarily join Afronomenon Studio mailing list.







### Technologies and Frameworks Planning to use:

Frontend

1. HTML
2. CSS
3. Javascript 
4. Bootstrap 5.3.3



Backend

1. Node.js
2. Express.js
3. AWS Lambda - serverless-http
4. AWS SDK for JavaScript
5. DynamoDB



CSP (May have to pay?)

AWS Lambda

Amazon API Gateway

Amazon DynamoDB 



### Souce Control

Git

GitHub



### Planned App Architecture

"text" -> Browser -> Amazon API Gateway -> AWS Lambda -> Express.js API -> DynamoDB





Author Jonathan Maetin

ITMD 504 Programming and Application Foundations



Note: The App was originally an experiment and tinkering serverless databases for my Cloud: Platform as a Service class. I originaly started making an It Asset Tracker app for Programming Foundations but it got super complicated, so I decided to switch and work on this app because it was practical and fun to do.



\---



\---

Brain storm: Build Engagment App for my comic book Judgmentday. Use Judgment Use Ase Power system and unique racial markers.





User->

Names a random character and selecting markers (DnD-like) and the app generates  random character with lore attached to character.



~~App does not save the generation. Ap is just use for engament in the lore/story of judgmentday~~

App will save generation in a database for Name-> email-> \[button]J-Day Emailing List



Divinity/Apprime

Esoteric/Magic

Bestial/Pride

Nightkin/Vampyre

~~Biotech~~/Humans \[Biotech more effective as a pull]



Nature Pull main 6 elements

dark

light

fire

water

wind

earth



HTML Ids -> CSS or Javascript

\*\*\*Using Bootstrap frameworks\*\*\*

\*\*\*ALL Name have to be identical including capital letters\*\*\*



id= "aseForm" -> Form -> JavaScript -> document.getElementById() -> aseForm.addEventListener('submit',)

id= "participantName" -> Potential customer - > JavaScript -> document.getElementById() -> .value.trim()

id= "participantEmail" -> Potential customer - > JavaScript -> document.getElementById() -> .value.trim()

id= "mailingListConsent -> Potential Customer - > JavaScript -> document.getElementById() -> .checked

id= "race" -> selector -> JavaScript -> document.getElementById() -> .value

id= "pull" -> selector -> JavaScript -> document.getElementById() -> .value

id= "soulTemperament"-> selector -> JavaScript -> document.getElementById() -> .value

id= "analysisLoading"-> button -> JavaScript-> document.getElementById() -> classList.add/remove('d-none')



id= "aseProfile"-> results -> JavaScript -> document.getElementById() -> classList.add/remove('d-none')

id= "loadParticipantsButton" -> button -> Javascirpt -> document.getElementById() -> addEventListener('click',)

id= "participantsTableBody" -> app -> JavaScript -> document.getElementById() -> innerHTML / appendChild



<link rel="stylesheet" href="style.css"> -> css

<script src="script.js"></script> -> JavaScritp

<script src="script.js?v=2"></script> -> JavaScript

<script src="script.js?v=3"></script>-> JavaScript

<script src="script.js?v=4"></script>-> JavaScript

<script src="script.js?v=5"></script>-> JavaScript

class="card btn table d-none ..." -> BOOTSTRAP Framework





JavaScript -> HTML

\*\*\*Using Bootstrap frameworks\*\*\*

\*\*\*ALL Name have to be identical including capital letters\*\*\*

id= "resultName" -> Results for APP -> HTML -> document.getElementById() -> .textContent = participantName

id= "resultRace" -> Results for APP -> HTML -> document.getElementById() -> .textContent = race

id= "resultPull" -> Results for APP -> HTML -> document.getElementById() -> .textContent = pull



id= "resultTemperament" Results for APP -> HTML-> document.getElementById() -> .textContent = soulTemperament

id= "resultClassification" Results for APP -> HTML -> document.getElementById() -> .textContent = aseResult.classification

id= "resultLineage" Results for APP -> HTML -> document.getElementById() -> .textContent = aseResult.lineage

id= "resultExpression" Results for APP -> HTML -> document.getElementById() -> .textContent = aseResult.expression

id= "resultTechnique" Results for APP -> HTML -> document.getElementById() -> .textContent = aseResult.technique

id= "resultWeakness" Results for APP -> HTML -> document.getElementById() -> .textContent = aseResult.weakness

id= "resultHeritage" Results for APP -> HTML -> document.getElementById() -> .textContent = aseResult.heritage



JavaScript -> Node.js

\*\*\*Using Bootstrap frameworks\*\*\*

\*\*\*ALL Name have to be identical including capital letters\*\*\*



fetch("/api/participants", {METHOD: "POST"}) -> app.post() -> ROUTE + METHOD -> POST

fetch("/api/participants") -> app.get() -> ROUTE + METHOD -> GET

fetch("/api/participants${participant.participantId}`, {method:"PATCH"}) -> app.patch -> ROUTE + MATCH -> PATCH/PUT



JavaScript Object -> Node request body

participantData.name

participantData.email

participantData.mailingListConsent

participantData.race

participantData.pull

participantData.soulTemperament

participantData.classification

participantData.lineage

participantData.expression

participantData.technique

participantData.weakness

participantData.heritage



JavaScript Object -> DYNAMO

participantRecord.name -> DynamoDB attribute: name

participantRecord.race -> DynamoDB attribute: race

participantRecord.lineage -> DynamoDB attribute: lineage

participantId: randomUUID() -> DynamoDB partition key: participantId



PATCH URL -> Node route param ${participant.participantId}





Server Backend point

https://lyrfm6s7qz3i5sgftdkqpzbpty0tljxf.lambda-url.us-east-2.on.aws/



Motivational Quote generator



https://d-9a675dfdc6.awsapps.com/start



aws sso login --profile ase-admin



restart server

$env:AWS\_PROFILE="ase-admin"

node server.js



rebuild zip

Compress-Archive `

&#x20; -Path lambda.js,server.js,package.json,package-lock.json,public,node\_modules `

&#x20; -DestinationPath ase-lambda.zip `

&#x20; -Force



live app

https://y0lh8heabb.execute-api.us-east-1.amazonaws.com





