import Svg, { Path } from 'react-native-svg';
import BaseTypeIcon from './BaseTypeIcon';

export default function IceTypeIcon(props) {
  return (
    <BaseTypeIcon bgColor='#75D0C1'>
      <Svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m12.009 1.22 0.049 4.323 -3.771 1.81 -0.046 -4.082z"
          fill="white"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m15.79 8.033 -3.733 2.135 -3.735 -2.139 3.733 -1.961z"
          fill="white"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m7.657 8.033 -3.733 2.135L0.189 8.029l3.733 -1.961z"
          fill="white"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m3.883 1.202 3.875 1.919 -0.099 4.182 -3.658 -1.812z"
          fill="white"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m12.115 14.798 -3.875 -1.919 0.099 -4.182 3.658 1.812z"
          fill="white"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m4.016 14.837 -0.049 -4.323 3.771 -1.81 0.046 4.082z"
          fill="white"
        />
      </Svg>
    </BaseTypeIcon>
  );
};