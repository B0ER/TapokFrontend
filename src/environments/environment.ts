// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentType } from "./environment.type";

export const environment: EnvironmentType = {
  production: false,
  apiUrl: "http://localhost:3000",
  paypal: {
    clientId: "ARYcMr3L4M45NuTNriN6K2-wfkjPeyCLNdmps60lXPaGzF5fJW2wxlY63pnA8l34RizUDP70EuwZ5z37"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
