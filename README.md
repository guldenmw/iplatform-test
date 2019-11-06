# My Music App

## Requirements

For development, you will only need Node.js installed on your environement.
All other dependencies are located in package.json.

### Node

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

## Install

    $ git clone https://github.com/guldenmw/iplatform-test.git
    $ cd iplatform-test
    $ yarn install

## Start & watch

    $ yarn start

## Simple build for production

    $ yarn run build

## Languages & tools

### JavaScript

- [TypeScript](https://www.typescriptlang.org/docs/home.html) is used to provide typing to Javascript.
- [React](http://facebook.github.io/react) is used for UI.
- [Redux](https://redux.js.org/introduction/getting-started) is used as a state manager.
