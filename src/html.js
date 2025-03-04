import React from "react"
import PropTypes from "prop-types"
import QAPI from "../qapi"

if (typeof window !== "undefined") {
  window.QAPI = QAPI
} else {
  global.QAPI = QAPI
}

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {props.headComponents}
      </head>

      <body {...props.bodyAttributes}>
        {props.preBodyComponents}

        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{
            __html: props.body,
          }}
        />

        {props.postBodyComponents}
      </body>
    </html>
  )
}
HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}




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
