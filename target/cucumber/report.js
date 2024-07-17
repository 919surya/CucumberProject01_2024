$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/TechfiosLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios Login functionality validation",
  "description": "",
  "id": "techfios-login-functionality-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to login with current credential",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-current-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters username as \"demo@codefios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 99692800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@codefios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 1830601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 39200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 9799,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 9701,
  "status": "passed"
});
});