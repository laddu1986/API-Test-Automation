Feature: This feature file will cover the test scenario for the API call
         covered in the Practical Test (API)
         Current Acceptance Criteria for the tests will be declared in the BDD



@smoke
Scenario: Assert the Acceptanc Criteria are correct when perform a GET call
 Given a user perform a GET call
  When the response return a statusCode of 200
  Then the response contains the name "Carbon credits"
  And the response proptery CanRelist is set to true
    And the Promotions property contains an Item "Gallery" with Description contains "2x larger image"





 