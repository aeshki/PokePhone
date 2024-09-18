import Svg, { Path } from 'react-native-svg';
import BaseTypeIcon from './BaseTypeIcon';

export default function NormalTypeIcon(props) {
  return (
    <BaseTypeIcon bgColor='#A0A29F'>
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
          d="M15.031 8c0 3.883 -3.148 7.031 -7.031 7.031S0.969 11.883 0.969 8 4.117 0.969 8 0.969s7.031 3.148 7.031 7.031m-3.013 0c0 2.219 -1.799 4.018 -4.018 4.018S3.982 10.219 3.982 8 5.781 3.982 8 3.982 12.018 5.781 12.018 8"
          fill="white"
        />
      </Svg>
    </BaseTypeIcon>
  );
};