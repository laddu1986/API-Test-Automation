Feature: This feature file will cover the test scenario for the API call


@smoke
Scenario: Assert the Acceptance Criteria are correct when perform a GET call
 Given a user perform a GET call
  And the response return a statusCode of 200
  Then the total number of item return is equal to 30
  And each item has a fields object with a defined title





