// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
// Organize the Testing Env. For Current Angular App
import { getTestBed } from '@angular/core/testing';
//platformBrowserDynamicTesting: Bootstrap the Angular MOdule for Testing in Testing Env.
// BrowserDynamicTestingModule: Manage the Component Rendering in the Testing Env.
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// CReate a 'map()' for all '.spec.ts' or '.test.ts' in the current project
// al these files contain the Unit testing code
declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    <T>(id: string): T;
    keys(): string[];
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().forEach(context);
