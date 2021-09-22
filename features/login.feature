Feature: Register and product checkout

  Scenario Outline: As a user, I can able to register and login to website

    Given I am on the login page
    When I register with test1234@testtest.com
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
