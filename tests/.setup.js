/**
 * Frameworks/librairies de test
 * Code à utiliser, tout ou partie, dans les fichiers *.test.js
 */
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import chai from 'chai';
// import chaiEnzyme from 'chai-enzyme';
// import React from 'react';
// import { expect } from 'chai';
// import { mount } from 'enzyme';
// Enzyme.configure({ adapter: new Adapter() });
// chai.use(chaiEnzyme());


/**
 * ES6 -> ES5
 */
const path = require('path');
const babelRegister = require('babel-register');
const babelResolver = require('babel-resolver');
const app = path.join(__dirname, '..', 'app');
const resolveModuleSource = babelResolver(app);
babelRegister({ resolveModuleSource });


/**
 * JSDOM
 */
const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;
function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);
