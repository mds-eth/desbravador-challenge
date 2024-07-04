import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const Tooltip = ({ content, children }) => {
  return (
    <>
      <div data-tooltip-id="tooltip" data-tooltip-content={content}>
        {children}
      </div>
      <ReactTooltip id="tooltip" place="left" effect="solid" />
    </>
  );
};

export default Tooltip;
