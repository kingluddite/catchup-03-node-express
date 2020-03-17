# Demo of POST
* We've create a new POST route
  - This route will take in JSON inputs then DO work with them (in this case it will save the JSON to the Database and return a JSON of the new character)

## Postman
* Does everyone have Postman installed?
    - Postman is simply a GUI for development, and then in future opportunities we'll be using jQuery or other front-end code approaches for sending the same post requests

## Steps in sending POST requests in Postman
Step 1. Run your server instance.

Step 2. Open Postman.

Step 3. Select POST in the drop-down next to the link. Then enter the URL of your server's POST route.

Step 4. Click the button: "Body". Click the setting "Raw". Then hit the dropdown that says "Text" and click JSON.

Step 5. Enter in a complete JSON. You can use:

  "routeName": "darthvader",
  "name": "Darth Vader",
  "role": "Sith Lord",
  "age": 42,
  "forcePoints": 1900
}
Step 6. Hit "Send"

Step 7. Now check back to your Star Wars API to confirm that Postman received the request body.

## Last Activity
Use Postman to send a POST request to the server and confirm that your character has been added to the Database correctly


