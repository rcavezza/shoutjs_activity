#Feature: Hear Shout

#  Shouts have a range of approximately 1000m

  Scenario: In range shout is heard
    Given Lucy is at 0, 0 with a volume of 1000
    And Sean is at 0, 900 with a volume of 1000
    When Sean shouts
    Then Lucy should hear Sean

  Scenario: Out of range shout is not heard
    Given Lucy is at 0, 0 with a volume of 1000
    And Sean is at 0, 1100 with a volume of 1000
    When Sean shouts
    Then Lucy should hear nothing

