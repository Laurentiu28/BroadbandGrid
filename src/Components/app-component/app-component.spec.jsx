import 'isomorphic-fetch';
var fetchMock = require('fetch-mock');
import React from 'react';
import App from './app-component';
import renderer from 'react-test-renderer';


// test('App changes the class when hovered', () => {

//   fetch.mockResponse(JSON.stringify({ deals: [{ name: 'x' }] }))

//   const component = renderer.create(
//     <App />
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

test('GIVEN results WHEN filtering by Broadband THEN show the 3 broadband only deals', () => {
  // fetch.mockResponse(JSON.stringify({ deals:mockDeals.deals }));

  // const component = renderer.create(
  //   <App />
  // );
  
  // let tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
})