package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	
	 @Given ("^User is on the Techfios login page$")
	 public void user_is_on_the_techfios_login_page() {
		 
	 }
	 
	 @When ("^User enters username as \"([^\"]*)\"$")
	 public void user_enters_username_as(String username) {
		 
	 }
	 
	 @When("^User enters password as \"([^\"]*)\"$")
	 public void user_enters_password_as(String arg1)  {
	   
	 }

	 @Then("^User should land on dashboard page$")
	 public void user_should_land_on_dashboard_page()  {
	     
	 }

	 
	 @When ("^User clicks on the Submit button$")
	 public void user_clicks_on_the_submit_button() {
		 
		 
	 }

}
