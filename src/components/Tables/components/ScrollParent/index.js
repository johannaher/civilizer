import React from 'react';
import { createScrollContainer } from 'react-scroll-view';

export default createScrollContainer()(({ children }) => (
  <div className="scroll-parent">
    {children}
  </div>
));
