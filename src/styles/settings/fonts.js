import { injectGlobal } from "styled-components";
/* eslint-disable */

const fonts = {
  "Helveticaneue Thin": [
    require("../../assets/fonts/Helveticaneue/helveticaneue.woff2"),
    require("../../assets/fonts/Helveticaneue/helveticaneue.woff")
  ],
  "Helveticaneue Medium": [
    require("../../assets/fonts/Helveticaneue/HelveticaNeue-medium.woff2"),
    require("../../assets/fonts/Helveticaneue/HelveticaNeue-medium.woff")
  ],

  "RobotoSlab Regular": [
    require("../../assets/fonts/Roboto/RobotoSlab-Regular.woff2"),
    require("../../assets/fonts/Roboto/RobotoSlab-Regular.woff")
  ],
  "RobotoSlab Thin": [
    require("../../assets/fonts/Roboto/RobotoSlab-Thin.woff2"),
    require("../../assets/fonts/Roboto/RobotoSlab-Thin.woff")
  ],
  "Novecento Bold": [
    require("../../assets/fonts/Novecento/Novecentosanswide-Bold-webfont.woff2"),
    require("../../assets/fonts/Novecento/Novecentosanswide-Bold-webfont.woff")
  ],
  "Novecento DemiBold": [
    require("../../assets/fonts/Novecento/Novecentosanswide-DemiBold.woff2"),
    require("../../assets/fonts/Novecento/Novecentosanswide-DemiBold.woff")
  ],
  "Novecento Medium": [
    require("../../assets/fonts/Novecento/Novecentosanswide-Medium-webfont.woff2"),
    require("../../assets/fonts/Novecento/Novecentosanswide-Medium-webfont.woff")
  ]
};

const injectFonts = Object.keys(fonts)
  .map(font => {
    return `
    @font-face {
      font-family: ${font};
      src: url(${fonts[font][0]}) format('woff2'),
          url(${fonts[font][1]}) format('woff');
    }
  `;
  })
  .join("\n");

injectGlobal`
  ${injectFonts}
`;
