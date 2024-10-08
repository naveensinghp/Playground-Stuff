import React from 'react';
import styled, { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
* {
	@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');
    font-family: "Comfortaa", sans-serif !important;
            // CSS you want global. 
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  --bg: #101018;
  --color: #DBDEDF;
	line-height: 1.5;
  background: var(--bg);
  color: var(--color);
  font-family: "Comfortaa", sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

pre  {
  background: rgb(37 37 47);
  font-family: "Comfortaa", sans-serif;
  font-size: 16px;
  border-radius: 8px !important;
}

`

export default GlobalStyles;
