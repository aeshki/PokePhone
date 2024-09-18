import Svg, { Path } from 'react-native-svg';
import BaseTypeIcon from './BaseTypeIcon';

export default function SteelTypeIcon(props) {
  return (
    <BaseTypeIcon bgColor='#5695A3'>
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
          d="M0.002 7.954a0.012 0.012 0 0 1 0 -0.012L4.025 1.068a0.012 0.012 0 0 1 0.01 -0.006h7.974c0.004 0 0.008 0.002 0.01 0.006l3.979 6.874a0.012 0.012 0 0 1 0 0.012L12.019 14.82a0.012 0.012 0 0 1 -0.01 0.006H4.035a0.012 0.012 0 0 1 -0.01 -0.006zm11.705 -0.01c0 2.046 -1.659 3.706 -3.706 3.706s-3.706 -1.659 -3.706 -3.706c0 -2.047 1.659 -3.706 3.706 -3.706s3.706 1.659 3.706 3.706"
          fill="white"
        />
      </Svg>
    </BaseTypeIcon>
  );
};