import React from 'react';
import Headline from '../Components/Headline';

export default function App() {
  const greeting = "Hello - Functional component"

  return <div>
    <h2>App component Content</h2>
    <Headline value={greeting} />
  </div>
}
