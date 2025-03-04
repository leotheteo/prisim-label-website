import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {},
    "index": {}
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />


window.addEventListener('resize', function() {
  let width = window.innerWidth;
  
  if (width <= 600) {
    document.body.style.fontSize = '14px';
    document.querySelector('.container').style.width = '100%';
    document.querySelector('.container').style.padding = '10px';
  } else if (width > 600 && width <= 1024) {
    document.body.style.fontSize = '16px';
    document.querySelector('.container').style.width = '80%';
    document.querySelector('.container').style.padding = '20px';
  } else {
    document.body.style.fontSize = '18px';
    document.querySelector('.container').style.width = '60%';
    document.querySelector('.container').style.padding = '30px';
  }
});

// Initial load
window.dispatchEvent(new Event('resize'));
