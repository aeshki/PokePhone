import Svg, { Path } from 'react-native-svg';
import BaseTypeIcon from './BaseTypeIcon';

export default function ElectricIconType(props) {
  return (
    <BaseTypeIcon bgColor='#F2D94E'>
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
          d="M4.768 0.018a0.014 0.014 0 0 1 0.013 -0.018h5.62a0.014 0.014 0 0 1 0.013 0.01l2.581 8.339a0.014 0.014 0 0 1 -0.013 0.018H9.24a0.007 0.007 0 0 0 -0.007 0.009l2.146 7.553c0.004 0.015 -0.015 0.024 -0.024 0.012L3.017 4.852a0.014 0.014 0 0 1 0.011 -0.022h3.395a0.007 0.007 0 0 0 0.006 -0.009z"
          fill="white"
        />
      </Svg>
    </BaseTypeIcon>
  );
};