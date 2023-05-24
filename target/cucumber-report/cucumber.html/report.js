$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("banktest.feature");
formatter.feature({
  "line": 1,
  "name": "As A User I Want To Verify All The Banking Functionalities",
  "description": "",
  "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Verify That Bank Manager Can Add A New Customer Successfully",
  "description": "",
  "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-bank-manager-can-add-a-new-customer-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I Click On Bank Manager Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Click On Add Customer Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Enter \"\u003cfirstName\u003e\" Into First Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Enter \"\u003clastName\u003e\" Into Last Name Filed",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Enter \"\u003cpostCode\u003e\" Into Postcode Field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Click On The Add Customer Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Can Verify The Customer Successfully Added Text In The Alert Box",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-bank-manager-can-add-a-new-customer-successfully;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "postCode"
      ],
      "line": 15,
      "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-bank-manager-can-add-a-new-customer-successfully;;1"
    },
    {
      "cells": [
        "James",
        "Bond",
        "SW11 2JB"
      ],
      "line": 16,
      "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-bank-manager-can-add-a-new-customer-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6908849000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I Am On The Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "Verify That Bank Manager Can Add A New Customer Successfully",
  "description": "",
  "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-bank-manager-can-add-a-new-customer-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    },
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I Click On Bank Manager Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Click On Add Customer Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Enter \"James\" Into First Name Field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Enter \"Bond\" Into Last Name Filed",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Enter \"SW11 2JB\" Into Postcode Field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Click On The Add Customer Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Can Verify The Customer Successfully Added Text In The Alert Box",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerPageSteps.iClickOnBankManagerLoginButton()"
});
formatter.result({
  "duration": 504776400,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerPageSteps.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 323597500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James",
      "offset": 9
    }
  ],
  "location": "AddCustomerPageSteps.iEnterIntoFirstNameField(String)"
});
formatter.result({
  "duration": 427854100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bond",
      "offset": 9
    }
  ],
  "location": "AddCustomerPageSteps.iEnterIntoLastNameFiled(String)"
});
formatter.result({
  "duration": 125101500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SW11 2JB",
      "offset": 9
    }
  ],
  "location": "AddCustomerPageSteps.iEnterIntoPostcodeField(String)"
});
formatter.result({
  "duration": 160586200,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerPageSteps.iClickOnTheAddCustomerButton()"
});
formatter.result({
  "duration": 108770800,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerPageSteps.iCanVerifyTheCustomerSuccessfullyAddedTextInTheAlertBox()"
});
formatter.result({
  "duration": 43705000,
  "status": "passed"
});
formatter.after({
  "duration": 765475700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Verify That Bank Manager Can Open A New Account Successfully",
  "description": "",
  "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-bank-manager-can-open-a-new-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@sanity"
    },
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I Click On Bank Manager Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I Click On Open Account Button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Select The \"\u003ccustomer\u003e\" From Customer Drop Down",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select The \"\u003ccurrency\u003e\" From Currency Drop Down",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Click On Process Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Can Verify The Account Creation Confirmation Text",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-bank-manager-can-open-a-new-account-successfully;",
  "rows": [
    {
      "cells": [
        "customer",
        "currency"
      ],
      "line": 27,
      "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-bank-manager-can-open-a-new-account-successfully;;1"
    },
    {
      "cells": [
        "Hermoine Granger",
        "Pound"
      ],
      "line": 28,
      "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-bank-manager-can-open-a-new-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3830056900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I Am On The Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 28,
  "name": "Verify That Bank Manager Can Open A New Account Successfully",
  "description": "",
  "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-bank-manager-can-open-a-new-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    },
    {
      "line": 18,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I Click On Bank Manager Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I Click On Open Account Button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Select The \"Hermoine Granger\" From Customer Drop Down",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select The \"Pound\" From Currency Drop Down",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Click On Process Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Can Verify The Account Creation Confirmation Text",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerPageSteps.iClickOnBankManagerLoginButton()"
});
formatter.result({
  "duration": 570247100,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountPageSteps.iClickOnOpenAccountButton()"
});
formatter.result({
  "duration": 376186600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hermoine Granger",
      "offset": 14
    }
  ],
  "location": "OpenAccountPageSteps.iSelectTheFromCustomerDropDown(String)"
});
formatter.result({
  "duration": 569564000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 14
    }
  ],
  "location": "OpenAccountPageSteps.iSelectTheFromCurrencyDropDown(String)"
});
formatter.result({
  "duration": 239711800,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountPageSteps.iClickOnProcessButton()"
});
formatter.result({
  "duration": 81539200,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountPageSteps.iCanVerifyTheAccountCreationConfirmationText()"
});
formatter.result({
  "duration": 14155700,
  "status": "passed"
});
formatter.after({
  "duration": 707991500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Verify That Customer Can Login And Logout Successfully",
  "description": "",
  "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-customer-can-login-and-logout-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@smoke"
    },
    {
      "line": 30,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I Click On Customer Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I Select \"\u003ccustomer\u003e\" From Customer Drop Down",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Click On Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Verify That The Logout Tab Is Displayed",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Click On The Logout Tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Can Verify That Your Name Text Is Displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-customer-can-login-and-logout-successfully;",
  "rows": [
    {
      "cells": [
        "customer"
      ],
      "line": 39,
      "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-customer-can-login-and-logout-successfully;;1"
    },
    {
      "cells": [
        "Hermoine Granger"
      ],
      "line": 40,
      "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-customer-can-login-and-logout-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3676607100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I Am On The Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 40,
  "name": "Verify That Customer Can Login And Logout Successfully",
  "description": "",
  "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-customer-can-login-and-logout-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@smoke"
    },
    {
      "line": 30,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I Click On Customer Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I Select \"Hermoine Granger\" From Customer Drop Down",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Click On Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Verify That The Logout Tab Is Displayed",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Click On The Logout Tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Can Verify That Your Name Text Is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerLoginAndLogoutPageSteps.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 946963600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hermoine Granger",
      "offset": 10
    }
  ],
  "location": "CustomerLoginAndLogoutPageSteps.iSelectFromCustomerDropDown(String)"
});
formatter.result({
  "duration": 245105500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerLoginAndLogoutPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 118115500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerLoginAndLogoutPageSteps.iVerifyThatTheLogoutTabIsDisplayed()"
});
formatter.result({
  "duration": 312749300,
  "status": "passed"
});
formatter.match({
  "location": "CustomerLoginAndLogoutPageSteps.iClickOnTheLogoutTab()"
});
formatter.result({
  "duration": 46084600,
  "status": "passed"
});
formatter.match({
  "location": "CustomerLoginAndLogoutPageSteps.iCanVerifyThatYourNameTextIsDisplayed()"
});
formatter.result({
  "duration": 32922200,
  "status": "passed"
});
formatter.after({
  "duration": 719428600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "Verify That Customer Can Deposit Money Into Their Account Successfully",
  "description": "",
  "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-customer-can-deposit-money-into-their-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@smoke"
    },
    {
      "line": 42,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I Click On Customer Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I Select \"\u003ccustomer\u003e\" From The Customer Drop Down",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I Click On Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I Click On The Deposit Button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Enter The \"\u003camount\u003e\" Into Amount Field",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I Click On Deposit Button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Can Verify The Successful Deposit Message Text",
  "keyword": "And "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-customer-can-deposit-money-into-their-account-successfully;",
  "rows": [
    {
      "cells": [
        "customer",
        "amount"
      ],
      "line": 52,
      "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-customer-can-deposit-money-into-their-account-successfully;;1"
    },
    {
      "cells": [
        "Hermoine Granger",
        "100"
      ],
      "line": 53,
      "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-customer-can-deposit-money-into-their-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3727629400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I Am On The Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 53,
  "name": "Verify That Customer Can Deposit Money Into Their Account Successfully",
  "description": "",
  "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-customer-can-deposit-money-into-their-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@smoke"
    },
    {
      "line": 42,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I Click On Customer Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I Select \"Hermoine Granger\" From The Customer Drop Down",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I Click On Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I Click On The Deposit Button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Enter The \"100\" Into Amount Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I Click On Deposit Button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Can Verify The Successful Deposit Message Text",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerLoginAndLogoutPageSteps.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 1037881500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hermoine Granger",
      "offset": 10
    }
  ],
  "location": "DepositPageSteps.iSelectFromTheCustomerDropDown(String)"
});
formatter.result({
  "duration": 243508100,
  "status": "passed"
});
formatter.match({
  "location": "CustomerLoginAndLogoutPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 136967800,
  "status": "passed"
});
formatter.match({
  "location": "DepositPageSteps.iClickOnTheDepositButton()"
});
formatter.result({
  "duration": 333074400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 13
    }
  ],
  "location": "DepositPageSteps.iEnterTheIntoAmountField(Integer)"
});
formatter.result({
  "duration": 377137200,
  "status": "passed"
});
formatter.match({
  "location": "DepositPageSteps.iClickOnDepositButton()"
});
formatter.result({
  "duration": 110491500,
  "status": "passed"
});
formatter.match({
  "location": "DepositPageSteps.iCanVerifyTheSuccessfulDepositMessageText()"
});
formatter.result({
  "duration": 56050700,
  "status": "passed"
});
formatter.after({
  "duration": 705622000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 56,
  "name": "Verify That Customer Can Withdraw Money From Their Account Successfully",
  "description": "",
  "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-customer-can-withdraw-money-from-their-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "I Click On Customer Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I Choose \"\u003ccustomer\u003e\" From Customer Drop Down",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I Click On Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I Click On Withdraw Button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I Enter The \"\u003camount\u003e\" Into Amount Field",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I Click On Withdraw Button After Entering The Amount",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I Can Verify That Transaction Successful Message Text",
  "keyword": "Then "
});
formatter.examples({
  "line": 64,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-customer-can-withdraw-money-from-their-account-successfully;",
  "rows": [
    {
      "cells": [
        "customer",
        "amount"
      ],
      "line": 65,
      "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-customer-can-withdraw-money-from-their-account-successfully;;1"
    },
    {
      "cells": [
        "Hermoine Granger",
        "50"
      ],
      "line": 66,
      "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-customer-can-withdraw-money-from-their-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3959986400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I Am On The Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 66,
  "name": "Verify That Customer Can Withdraw Money From Their Account Successfully",
  "description": "",
  "id": "as-a-user-i-want-to-verify-all-the-banking-functionalities;verify-that-customer-can-withdraw-money-from-their-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "I Click On Customer Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I Choose \"Hermoine Granger\" From Customer Drop Down",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I Click On Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I Click On Withdraw Button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I Enter The \"50\" Into Amount Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I Click On Withdraw Button After Entering The Amount",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I Can Verify That Transaction Successful Message Text",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerLoginAndLogoutPageSteps.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 947234700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hermoine Granger",
      "offset": 10
    }
  ],
  "location": "WithdrawalPageSteps.iChooseFromCustomerDropDown(String)"
});
formatter.result({
  "duration": 209595300,
  "status": "passed"
});
formatter.match({
  "location": "CustomerLoginAndLogoutPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 136817900,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawalPageSteps.iClickOnWithdrawButton()"
});
formatter.result({
  "duration": 601943200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 13
    }
  ],
  "location": "DepositPageSteps.iEnterTheIntoAmountField(Integer)"
});
formatter.result({
  "duration": 138991400,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawalPageSteps.iClickOnWithdrawButtonAfterEnteringTheAmount()"
});
formatter.result({
  "duration": 102284500,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawalPageSteps.iCanVerifyThatTransactionSuccessfulMessageText()"
});
formatter.result({
  "duration": 38529700,
  "status": "passed"
});
formatter.after({
  "duration": 725047300,
  "status": "passed"
});
});