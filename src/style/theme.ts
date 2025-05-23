export type ThemeName = "light" | "dark";
export type ColorKey = "primary" | "background" | "secondary" | "third" | "border" | "text";

export type HeadingSize = "large"|"medium"|"small";
export type ButtonSize = "large"|"medium"|"small";
export type ButtonScheme = "primary"|"normal" | "like";
export type LayoutWidth = "large" | "medium" | "small";
export type MediaQuery = "mobile" | "tablet" | "desktop";

export interface Theme {
  name: ThemeName;
  color: Record<ColorKey, string>;
  heading : Record<HeadingSize, {fontSize : string}>;
  button : Record<ButtonSize, {fontSize : string, padding : string}>;
  buttonScheme : Record<ButtonScheme, {color : string, backgroundColor : string}>;
  borderRadius : {default : string};
  layout : {
    width : Record<LayoutWidth, string>;
  };
  mediaQuery : Record<MediaQuery, string>;
}

export const light: Theme = {
  name: "light",
  color: {
    primary: "#F9B857",
    background: "lightgray",
    secondary: "#5F5F5F",
    third: "green",
    border:"gray",
    text : "black"
  },
  heading : {
    large: {
      fontSize:"2rem"
    },
    medium : {
      fontSize:"1.5rem"
    },
    small : {
      fontSize:"1rem"
    }
  },
  button :{
    large: {
      fontSize :"1.5rem",
      padding : "1rem 2rem"
    },
    medium : {
      fontSize :"1rem",
      padding : "0.5rem 1rem"
    },
    small : {
      fontSize:"0.75rem",
      padding : "0.25rem 0.5rem"
    }
  },
  buttonScheme :{
    primary: {
      color : "white",
      backgroundColor : "midnightblue",
    },
    normal: {
      color : "black",
      backgroundColor : "lightgray"
    },
    like: {
      color : "white",
      backgroundColor : "#F9B857",
    }
  },
  borderRadius:{
    default: "4px"
  },
  layout : {
    width : {
      large : "1020px",
      medium : "760px",
      small : "320px"
    }
  },
  mediaQuery : {
    mobile : "(max-width : 768px)",
    tablet : "(max-width : 1024px)",
    desktop : "(min-width : 1025px)",
  }
};

export const dark: Theme = {
  ...light,
  name: "dark",
  color: {
    primary: "coral",
    background: "midnightblue",
    secondary: "darkblue",
    third: "darkgreen",
    border:"gray",
    text : "black"
  },
};

export const getTheme = (themeName : ThemeName):Theme => {
  switch(themeName){
    case "light":
      return light;
    case "dark":
      return dark;
  }
}