import Svg, { Path } from 'react-native-svg';
import BaseTypeIcon from './BaseTypeIcon';

export default function DarkIconType(props) {
  return (
    <BaseTypeIcon bgColor='#595761'>
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
          d="M7.168 14.152a6.156 6.156 0 0 0 0.932 0.071c3.375 0 6.111 -2.736 6.111 -6.111S11.475 2 8.1 2c-0.226 0 -0.45 0.012 -0.67 0.036 1.674 1.268 2.781 3.466 2.781 5.964 0 2.626 -1.223 4.92 -3.043 6.152M7.989 16c4.418 0 8 -3.582 8 -8S12.408 0 7.989 0s-8 3.582 -8 8 3.582 8 8 8"
          fill="white"
        />
      </Svg>
    </BaseTypeIcon>
  );
};