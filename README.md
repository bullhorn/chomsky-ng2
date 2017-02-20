# Chomsky-NG2 [![npm version](https://badge.fury.io/js/chomsky-ng2.svg)](http://badge.fury.io/js/chomsky-ng2) [![Build Status](https://travis-ci.org/bullhorn/chomsky-ng2.svg?branch=master)](https://travis-ci.org/bullhorn/chomsky-ng2) [![Code Climate](https://codeclimate.com/github/bullhorn/chomsky-ng2/badges/gpa.svg)](https://codeclimate.com/github/bullhorn/chomsky-ng2) [![Test Coverage](https://codeclimate.com/github/bullhorn/chomsky-ng2/badges/coverage.svg)](https://codeclimate.com/github/bullhorn/chomsky-ng2/coverage)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/bullhorn/Open-Source?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Dependency Status](https://david-dm.org/bullhorn/chomsky-ng2.svg)](https://david-dm.org/bullhorn/chomsky-ng2)
[![devDependency Status](https://david-dm.org/bullhorn/chomsky-ng2/dev-status.svg)](https://david-dm.org/bullhorn/chomsky-ng2#info=devDependencies)
[![Issue Stats](http://issuestats.com/github/bullhorn/chomsky-ng2/badge/pr?style=flat)](http://issuestats.com/github/bullhorn/chomsky-ng2)
[![Issue Stats](http://issuestats.com/github/bullhorn/chomsky-ng2/badge/issue?style=flat)](http://issuestats.com/github/bullhorn/chomsky-ng2)

## Dependencies

- [NodeJS v4.0+](https://nodejs.org/en/)
- [NPM v3.0+](https://github.com/npm/npm)

## Quick Start

    # Clone the project
    git clone git@github.com:bullhorn/chomsky-ng2.git

    # Change directory
    cd chomsky-ng2

    # Install
    npm install

    # Start
    npm start

## Integrating into a project

    # Install the modile
    npm install --save chomsky-ng2

Depending on what system you are using (SystemJS, Webpack, etc..) the setup will vary.

## Build/Release/Publish

> Automatically runs the tests, updates the `package.json` version, generates the `CHANGELOG.md`, generates a GitHub release, uploads the demo to GH-Pages and publishes.

    # Bump the version up via NPM
    npm version patch|major|minor

    # This runs the following scripts AUTOMATICALLY
    # npm test
    # npm run changelog (pushes git)
    # npm run github-release
    # npm run clean
    # npm run compile (demo/bundles)
    # npm run deploy:gh-pages
    # npm publish

## Scripts

**clean**
Cleans up the generated files/folders.

    npm run clean

**compile**
Compiles the main lib and bundles the SystemJS modules

    npm run compile

    # This runs the following scripts AUTOMATICALLY
    # npm run compile:lib
    # npm run compile:system

**compile:lib**
Compiles the `src` folder into `lib` via babel

**compile:system**
Compiles the SystemJS bundles, adding all required dependencies

**prepublish** / **postpublish**
Hooks into the publish script to compile and deploy to gh-pages

**start**
Starts up the Webpack Dev Server for local development

**test**
Runs all specs via Karma in the `src` folder

**changelog**
Generates the `CHANGELOG.md` file

**github-release**
Generates a github release for the project/version

**preversion** / **version** / **postversion**
Updates the projects version, runs the changelog and commits and pushes

**build:prod**
Builds the `dist` folder for the demo

## Contribute

There are many ways to **[contribute](https://github.com/bullhorn/chomsky-ng2/blob/master/CONTRIBUTING.md)** to our OpenSource projects.
* **[Submit bugs](https://github.com/bullhorn/chomsky-ng2/issues)** and help us verify fixes as they are checked in.
* Review **[source code changes](https://github.com/bullhorn/chomsky-ng2/pulls)**.
* **[Contribute bug fixes](https://github.com/bullhorn/chomsky-ng2/blob/master/CONTRIBUTING.md)**.

> TL;DR; Fork this repository, make any required change and then submit a PR :)

# License

Copyright (c) forever [Bullhorn](http://www.bullhorn.com).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.