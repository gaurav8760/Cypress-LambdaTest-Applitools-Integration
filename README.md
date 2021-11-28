# Applitools Tutorial - Cypress

Get started with Applitools Eyes visual testing with this example of using the [Cypress](https://www.cypress.io/) and the [Eyes Cypress SDK](https://www.npmjs.com/package/@applitools/eyes-cypress).

Learn more about how to install and start this project with our [Cypress tutorial](https://applitools.com/tutorials/cypress.html)!


## Getting Started With Cypress Integration With LambdaTest and Applitools

### 1. Fork this repo
If you want to experiment with running this project in Continous Integration, you'll need to [fork](https://github.com/gaurav8760/Cypress-LambdaTest-Applitools-Integration) it first.

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/gaurav8760/Cypress-LambdaTest-Applitools-Integration

## cd into the cloned repo
cd Cypress-LambdaTest-Applitools-Integration

## Intall The Applitools Eye And Dependencies ##
# install the npm dependencies
npm install

# Set up Applitools Eyes
npx eyes-setup

# Install Applitools Eyes dependencies
npm install @applitools/eyes-cypress --save-dev


## Install LambdaTest CLI and Dependencies ##
# install LambdaTest CLI
npm install -g lambdatest-cypress-cli

# Generate LambdaTest Config
lambdatest-cypress init
```
## Running the Example Project ##
## Steps 
1. Enable the first URL in the spec.js file and run your first test. This will create the screenshots of your web url on the Applitools platform. Applitools visual AI will by default consider the screenshots of first test as a base image.

    Run Command:
    lambdatest-cypress run

2. Enable the second URL in the spec.js file and run your second test. Applitools visual AI will compare the resulted screenshots of second test with the corresponding screenshots (base images) of first test and highlight the differences if any.

    Run Command:
    lambdatest-cypress run


## More Information ##
More about the Eyes Cypress SDK:
* https://www.npmjs.com/package/@applitools/eyes-cypress
* https://applitools.com/docs/api/eyes-sdk/indexm/classindex-cypress-javascript.html
