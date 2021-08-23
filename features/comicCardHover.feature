Feature: Marvel Home Page

Scenario: Testing Comic Event Card on Hover

    Given I open url "https://www.marvel.com/explore"
    When I scrolldown till element "//h3[contains(text(),'Comic Events')]"
    And I save the position of element "//img[@mvl-type='lob' and contains(@mvl-src,'empyre_com_crd_01.jpg')]"
    And I hover on the element "//img[@mvl-type='lob' and contains(@mvl-src,'empyre_com_crd_01.jpg')]"
    Then I expect the element "//img[@mvl-type='lob' and contains(@mvl-src,'empyre_com_crd_01.jpg')]" position should differ from actual position