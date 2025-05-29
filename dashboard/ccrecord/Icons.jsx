// Icons.jsx
import React from "react";
import { Svg, Path, Line, Rect, Text } from "react-native-svg";
import Feather from "react-native-vector-icons/Feather";
import dayjs from "dayjs";

export const DateFilterIcon = ({ date }) => {
  const formattedDate = dayjs(date).format("MM / DD / YYYY");

  return (
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
        {formattedDate}
      </Text>
    </Svg>
  );
};

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
      d="M6.029 10.9478L9.37879 14.2976L11.4243 16.3534C12.2904 17.2195 13.6992 17.2195 14.5654 16.3534L19.971 10.9478C20.6806 10.2382 20.1692 9.02769 19.1778 9.02769H13.3235H6.82215C5.82038 9.02769 5.31944 10.2382 6.029 10.9478Z"
      fill="#FF3B3B"
    />
  </Svg>
);

//export const NeutralIcon = ({ size = 20, color = "#9E9E9E" }) => (
  //<Feather name="minus" size={size} color={color} />
//);


/*export const IncreaseIcon = ({ size = 20, color = "#4CAF50" }) => (
  <Feather name="arrow-up-right" size={size} color={color} />
);

export const DecreaseIcon = ({ size = 20, color = "#F44336" }) => (
  <Feather name="arrow-down-right" size={size} color={color} />
);*/

export const NeutralIcon = ({ size = 20, color = "#9E9E9E" }) => (
  <Feather name="minus" size={size} color={color} />
);

