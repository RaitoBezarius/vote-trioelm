/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';

import VoteSystem from 'containers/VoteSystem'

export function HomePage() {
  return (
    <main>
      <VoteSystem />
    </main>
  );
}

export default HomePage;
