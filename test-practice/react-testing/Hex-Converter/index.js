import React, { useCallback, useContext, useMemo, useState } from "react";
import { doNothingExceptReturningPassedArgument } from "../../../utils/default-value-assignment";

const hexType = "hex";

const rgbType = "rgb";

const initialColorValue = "#000";

const initialColorType = hexType;

const ColorContext = React.createContext({
  colorVaue: initialColorValue,
  updateState: doNothingExceptReturningPassedArgument,
  type: initialColorType,
});

function ColorProvider({ children }) {
  const [colorValue, setColorValue] = React.useState(initialColorValue);
  const [typeOfColorValue, setTypeOfColorValue] =
    React.useState(initialColorType);

  const updateState = useCallback(
    ({ value, type = hexType }) => {
      setColorValue(value);
      setTypeOfColorValue(type);
    },
    [setColorValue, setTypeOfColorValue]
  );

  const memoObj = useMemo(() => {
    return {
      colorValue,
      updateState,
      type: typeOfColorValue,
    };
  }, [colorValue, updateState, typeOfColorValue]);

  return (
    <ColorContext.Provider value={memoObj}>{children}</ColorContext.Provider>
  );
}

function rgbToHex([red = 0, green = 0, blue = 0] = []) {
  // Left shift (<<)  operator for color conversion is interesting
  // the color value for each component of an RGB color is between 0 - 255 (8bits)
  // The first 8 bits starting from the right will represent the blue component,
  // the next 8 bits will represent the green component, and the 8 bits after that will represent the red component
  return `#${((red << 16) | (green << 8) | blue).toString(16)}`;
}
function hexToRgb(hex) {
  // working through above shift operator procedure backwards
  // we will right-shift the color bits by multiples of 8 as necessary until
  // we get the target component bits as the first 8 bits from the right
  hex = hex.replace(/^#?([0-9a-f]{6})$/i, "$1");
  hex = Number(`0x${hex}`);
  // we need a way to mask out every other bits except the first 8 bits.
  // & operator can be used to ensure that certain bits are turned off.
  return [
    (hex >> 16) & 0xff, // red
    (hex >> 8) & 0xff, // green
    hex & 0xff, // blue
  ];
}

function ErrorComponent({ children }) {
  return <span style={{ color: "red", fontSize: ".75rem" }}>{children}</span>;
}

function TextInput({ value, handleChange }) {
  function handleInput(e) {
    handleChange(e.target.value);
  }

  return <input type="text" value={value} onChange={handleInput} />;
}

function useErrorState(initialErrorState) {
  const [isError, setIsError] = useState(initialErrorState);

  function isValidRgb(color) {
    if (!color || typeof color !== "string") return false;

    const splitColors = color.split(",");

    let [r, g, b, a] = splitColors.map((colorValue) =>
      Number(colorValue.trim())
    );

    a = a || 0;

    if (
      typeof r !== "number" ||
      typeof g !== "number" ||
      typeof b !== "number" ||
      typeof a !== "number"
    ) {
      return false;
    }

    var regex = /\b(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\b/;
    if (regex.test(r) && regex.test(g) && regex.test(b) && a >= 0 && a <= 1)
      return true;

    return false;
  }

  function isValidHex(color) {
    if (!color || typeof color !== "string") return false;

    // Validate hex values
    if (color.substring(0, 1) === "#") color = color.substring(1);

    switch (color.length) {
      case 3:
        return /^[0-9A-F]{3}$/i.test(color);
      case 6:
        return /^[0-9A-F]{6}$/i.test(color);
      case 8:
        return /^[0-9A-F]{8}$/i.test(color);
      default:
        return false;
    }
  }

  function isValid(type, color) {
    let isValid = true;
    if (type === rgbType) {
      return isValidRgb(color);
    }

    if (type === hexType) {
      return isValidHex(color);
    }

    return isValid;
  }

  function checkIsValidAndSetErrorState(type, color) {
    setIsError(isValid(type, color));
  }

  function resetErrorState() {
    setIsError(initialErrorState);
  }

  return { isError, checkIsValidAndSetErrorState, resetErrorState };
}

function HexValue() {
  const { colorValue, updateState, type } = useContext(ColorContext);
  const { checkIsValidAndSetErrorState, resetErrorState, isError } =
    useErrorState(false);

  const hexColorConverter = (colorValue) => {
    checkIsValidAndSetErrorState(type, colorValue);
    updateState({ value: colorValue, type: hexType });
  };

  const memoedHexValue = useMemo(() => {
    if (isError) return colorValue;

    if (type === hexType) return colorValue;

    return rgbToHex(colorValue.split(",").map((color) => Number(color.trim())));
  }, [colorValue, isError]);

  return (
    <>
      <TextInput value={memoedHexValue} handleChange={hexColorConverter} />
      {isError && <ErrorComponent />}
    </>
  );
}

function RGBValue() {
  const { colorValue, updateState, type } = useContext(ColorContext);
  const { checkIsValidAndSetErrorState, resetErrorState, isError } =
    useErrorState(false);

  const rgbColorConverter = (colorValue) => {
    checkIsValidAndSetErrorState(type, colorValue);
    updateState({ type: rgbType, value: colorValue });
  };

  const memoedRgbValue = useMemo(() => {
    if (isError) return colorValue;

    if (type === rgbType) return colorValue;

    return hexToRgb(colorValue).join(",");
  }, [colorValue, isError]);

  return (
    <React.Fragment>
      <TextInput value={memoedRgbValue} handleChange={rgbColorConverter} />
      {isError && <ErrorComponent />}
    </React.Fragment>
  );
}

export default function App() {
  return (
    <ColorProvider>
      <RGBValue />
      <HexValue />
    </ColorProvider>
  );
}
