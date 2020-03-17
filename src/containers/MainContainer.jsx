/**
 * ************************************
 *
 * @module  MainContainer.jsx
 * @author Timothy Mai
 * @date 3/16/20
 * @description main container for app
 *
 * ************************************
 */

import React from 'react';

function MainContainer() {
  const books = [
    {
      title: 'swag book',
      author: 'Tim',
      publisher: 'swag corps',
      publishedDate: '2020',
    },
    {
      title: 'psych rocks',
      author: 'Kelci',
      publisher: 'psych corps',
      publishedDate: '2019',
    },
  ];

  return (
    <div>
      main container
    </div>
  );
}

export default MainContainer;
