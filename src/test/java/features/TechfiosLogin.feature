Feature: Techfios Login functionality validation

 Scenario: User should be able to login with current credential
   Given User is on the Techfios login page
   When User enters username as "demo@codefios.com"
   When User enters password as "abc123"
   When User clicks on the Submit button
   Then User should land on dashboard page