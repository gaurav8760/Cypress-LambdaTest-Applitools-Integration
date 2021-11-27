describe("AppTest", () => {

    it(`LambdaTest/Applitools Integration`, function () {
       
        // First Batch //
        // cy.visit('https://demo.applitools.com');

        // Second Batch // 
        cy.visit('https://demo.applitools.com/index_v2.html');

        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'Integration - LambdaTest-Applitools',
            testName: 'First Test - LambdaTest-Applitools',
        })

        // check the login page with fluent api, see more info here
        // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
        cy.eyesCheckWindow({
            tag: "Login Window",
            target: 'window',
            fully: true
        });

        cy.get('#log-in').click()

        // Check the app page
        cy.eyesCheckWindow({
            tag: "App Window",
            target: 'window',
            fully: true
        });

        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

});
