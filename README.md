# Apphack Website

Before you edit. Please go through the Angular tutorial. 

## Contribute

* Clone the project onto your local machine
* Run the command `npm install` to install dependencies from the repo
* Install AngularCLI
* Run locally by typing in the terminal `ng serve` 

* Once done with editing:
  - Make sure to change all relative path to have it start with `apphack/${PATH}`
  - In your terminal, run `ng build --base-href="/apphack/" --deploy-url="/apphack/" --prod`
* `scp` the contents of the `dist` folder into `cs.appstate.edu` server. Make sure to backup the previous contents, remove them, then `scp` 
