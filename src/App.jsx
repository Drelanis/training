import React from 'react';
import Colors from './Colors.jsx';

const RED = '#ff0000';
const GREEN = '#008000';
const BLUE = '#0000ff';

const App = () => {
  return (
    <div className="colors">
      <Colors color={RED} />
      <Colors color={GREEN} />
      <Colors color={BLUE} />
    </div>
  );
};

export default App;
