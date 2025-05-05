import React from "react";
import { Svg, Path, Line, Rect, Text } from "react-native-svg";

export const DateFilterIcon = () => (
  <Svg width={295} height={35} viewBox="0 0 295 35" fill="none">
    <Rect
      x={77.5}
      y={3.17447}
      width={144}
      height={29.4918}
      rx={8.5}
      fill="#1D1C1F"
      stroke="#CBB7B7"
    />
    <Line x1={189.5} y1={10.2974} x2={189.5} y2={25.5433} stroke="#CBB7B7" />
    <Path
      d="M200.891 10.8537V12.8104"
      stroke="#CBB7B7"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M206.109 10.8537V12.8104"
      stroke="#CBB7B7"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M197.956 15.4779H209.044"
      stroke="#CBB7B7"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M209.37 15.0931V20.637C209.37 22.5936 208.392 23.8981 206.109 23.8981H200.891C198.608 23.8981 197.63 22.5936 197.63 20.637V15.0931C197.63 13.1365 198.608 11.832 200.891 11.832H206.109C208.392 11.832 209.37 13.1365 209.37 15.0931Z"
      stroke="#CBB7B7"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Text
      x={88}
      y={21.6594}
      fill="#CBB7B7"
      fontSize={14}
      fontWeight="500"
      letterSpacing="0.02em"
    >
      02 / 04 / 2025
    </Text>
  </Svg>
);

export const IncreaseIcon = ({ size = 30 }) => (
  <Svg width={size} height={size} viewBox="0 0 30 31" fill="none">
    <Path
      d="M23.35 17.8661L19.3375 13.8536L16.8875 11.3911C15.85 10.3536 14.1625 10.3536 13.125 11.3911L6.64997 17.8661C5.79997 18.7161 6.41247 20.1661 7.59997 20.1661H14.6125H22.4C23.6 20.1661 24.2 18.7161 23.35 17.8661Z"
      fill="#269A26"
    />
  </Svg>
);

export const DecreaseIcon = ({ size = 26 }) => (
  <Svg width={size} height={size} viewBox="0 0 26 26" fill="none">
    <Path
      d="M19.9709 15.0522L16.6211 11.7024L14.5757 9.64662C13.7096 8.78047 12.3008 8.78047 11.4346 9.64662L6.02905 15.0522C5.31944 15.7618 5.83078 16.9723 6.82215 16.9723H12.6765H19.1778C20.1796 16.9723 20.6805 15.7618 19.9709 15.0522Z"
      fill="#269A26"
    />
  </Svg>
);
