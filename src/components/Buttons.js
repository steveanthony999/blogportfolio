import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonOutline = styled(motion.button)`
  width: ${(props) => props.size}px;
  height: 60px;
  margin-right: ${(props) => props.marginRight}rem;
  background: transparent;
  border: 2px solid ${(props) => props.borderColor};
  color: ${(props) => props.textColor};
  font-size: 1.2rem;
  font-weight: bold;
  position: relative;
  z-index: 10;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.backgroundHexOnHover} !important;
    border-color: ${(props) => props.backgroundHexOnHover} !important;
  }
`;

const ButtonSolid = styled(motion.button)`
  width: ${(props) => props.size}px;
  height: 60px;
  margin-right: ${(props) => props.marginRight}rem;
  background: ${(props) => props.backgroundHex};
  border: 2px solid ${(props) => props.borderColor};
  color: ${(props) => props.textColor};
  font-size: 1.2rem;
  font-weight: bold;
  position: relative;
  z-index: 10;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.backgroundHexOnHover} !important;
    border-color: ${(props) => props.backgroundHexOnHover} !important;
    color: ${(props) => props.textColorOnHover};
  }
`;

export const OutlinedButton = ({
  text,
  textColor,
  borderHex,
  backgroundHexOnHover,
  small,
  medium,
  large,
  xlarge,
  marginRight,
}) => {
  return (
    <ButtonOutline
      borderColor={borderHex}
      backgroundHexOnHover={backgroundHexOnHover}
      textColor={textColor}
      size={small ? 100 : medium ? 200 : large ? 300 : xlarge && 400}
      marginRight={marginRight}
      whileHover={{ scale: 1.2 }}
      transition={{ type: 'spring', stiffness: 500 }}
    >
      {text}
    </ButtonOutline>
  );
};

export const SolidButton = ({
  text,
  backgroundHex,
  textColor,
  textColorOnHover,
  borderHex,
  backgroundHexOnHover,
  small,
  medium,
  large,
  xlarge,
  marginRight,
}) => {
  return (
    <ButtonSolid
      backgroundHex={backgroundHex}
      borderColor={borderHex}
      textColor={textColor}
      textColorOnHover={textColorOnHover}
      backgroundHexOnHover={backgroundHexOnHover}
      size={small ? 100 : medium ? 200 : large ? 300 : xlarge && 400}
      marginRight={marginRight}
      whileHover={{ scale: 1.2 }}
      transition={{ type: 'spring', stiffness: 500 }}
    >
      {text}
    </ButtonSolid>
  );
};
