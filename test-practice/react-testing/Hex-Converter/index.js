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

function ErrorComponent({ children }) {
  return <span style={{ color: "red", fontSize: ".75rem" }}>{children}</span>;
}

function TextInput({ value, handleChange }) {
  return <input type="text" value={value} onChange={handleChange} />;
}

function useErrorState(initialErrorState) {
  const [isError, setIsError] = useState(initialErrorState);

  function isValidRgb() {
    if (!color || typeof color !== "string") return false;

    const splitColors = color.split(",");

    cosnt[(r, g, b, a)] = splitColors.map((colorValue) =>
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

  function isValidHex() {
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

  const hexColorConverter = (colorValue) => {};

  return (
    <>
      <TextInput value={colorValue} handleChange={hexColorConverter} />
      {isError && <ErrorComponent />}
    </>
  );
}

function RGBValue() {
  const { colorValue, updateState, type } = useContext(ColorContext);
  const { checkIsValidAndSetErrorState, resetErrorState, isError } =
    useErrorState(false);

  const rgbColorConverter = (colorValue) => {};

  return (
    <React.Fragment>
      <TextInput value={colorValue} handleChange={rgbColorConverter} />
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
