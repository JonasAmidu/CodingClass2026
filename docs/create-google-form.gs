function createCodingClassSignupForm() {
  var form = FormApp.create("Coding Class 2026 Signup");

  form.setDescription(
    "Register your interest in Coding Class 2026. We will use these details only to send course updates, launch dates, setup notes, and enrolment information."
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(false);
  form.setAcceptingResponses(true);

  var name = form.addTextItem()
    .setTitle("Name")
    .setRequired(true);

  var email = form.addTextItem()
    .setTitle("Email")
    .setRequired(true);
  email.setValidation(
    FormApp.createTextValidation()
      .requireTextIsEmail()
      .setHelpText("Enter a valid email address.")
      .build()
  );

  var phone = form.addTextItem()
    .setTitle("Phone")
    .setHelpText("Optional")
    .setRequired(false);

  var experience = form.addMultipleChoiceItem()
    .setTitle("Coding experience")
    .setChoiceValues([
      "New to coding",
      "Some experience",
      "Confident developer"
    ])
    .setRequired(true);

  var interest = form.addMultipleChoiceItem()
    .setTitle("Main interest")
    .setChoiceValues([
      "iOS and Android apps",
      "Web apps",
      "ESP32 hardware",
      "Copilot and Codex workflow",
      "All of it"
    ])
    .setRequired(true);

  var message = form.addParagraphTextItem()
    .setTitle("Anything we should know?")
    .setHelpText("Optional")
    .setRequired(false);

  var consent = form.addCheckboxItem()
    .setTitle("Consent")
    .setChoiceValues([
      "I agree to be contacted about Coding Class 2026 updates."
    ])
    .setRequired(true);

  var response = form.createResponse()
    .withItemResponse(name.createResponse("TEST_NAME"))
    .withItemResponse(email.createResponse("test@example.com"))
    .withItemResponse(phone.createResponse("07123456789"))
    .withItemResponse(experience.createResponse("New to coding"))
    .withItemResponse(interest.createResponse("All of it"))
    .withItemResponse(message.createResponse("TEST_MESSAGE"))
    .withItemResponse(consent.createResponse([
      "I agree to be contacted about Coding Class 2026 updates."
    ]));

  Logger.log("Edit URL: " + form.getEditUrl());
  Logger.log("Public URL: " + form.getPublishedUrl());
  Logger.log("Prefilled URL: " + response.toPrefilledUrl());
}
