Feature: Hear Shout

  Shouts have a range of approximately 1000m

  Scenario: In range shout is not heard
    Given Lucy is at 0, 0 with volume 0
    And Sean is at 0, 900 with volume 0
    When Sean shouts
    Then Lucy should hear nothing

  Scenario: Out of range shout is not heard
    Given Lucy is at 0, 0 with volumn 800
    And Sean is at 0, 1200 with volumn 1100
    When Sean shouts
    Then Lucy should hear nothing
