/**
 * NPM import
 */
import React from 'react';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
 * Local import
 */
import App from 'src/components/App';
import store from 'src/store';

/**
 * Setup
 */
Enzyme.configure({ adapter: new Adapter() });

/**
 * Tests
 */
describe('App (React component)', () => {
  it('is a stateless function', () => {
    expect(App).to.be.a('function');
  });

  describe('<App />', () => {
    let provider;
    let app;

    beforeEach(() => {
      const rootComponent = (
        <Provider store={store}>
          <App />
        </Provider>
      );
      // @see https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
      provider = mount(rootComponent);
      app = provider.childAt(0);
    });

    it('is a <div> with id "app"', () => {
      // @see http://airbnb.io/enzyme/docs/api/render.html
      expect(app.render().is('div#app')).to.be.true;
    });

    it('says hello!', () => {
      const expectedText = /^Hello World.*$/;
      expect(app.text()).to.match(expectedText);
    });
  });
});
