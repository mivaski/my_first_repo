Feature: Book Store Cart Functionality test

  Background:
    Given User is on the Non-fiction page
    And User adds the first Non-fiction book to the cart

  Scenario: Adding book to the cart
    When User closes the cart popup
    Then the cart counter should be greater than 0

  Scenario: User can clear cart and see empty cart message
    When User clears the cart from the popup
    Then User should see an empty cart message

  Scenario: Cart count equals 0 after clearing cart
    When User clears the cart from the popup
    And User closes the cart popup
    Then the cart counter should be 0
