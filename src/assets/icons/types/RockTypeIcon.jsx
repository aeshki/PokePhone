import Svg, { Path } from 'react-native-svg';
import BaseTypeIcon from './BaseTypeIcon';

export default function RockTypeIcon(props) {
  return (
    <BaseTypeIcon bgColor='#C9BB8A'>
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
          d="M12.348 7.649a0.006 0.006 0 0 1 -0.001 -0.004l1.021 -5.952a0.006 0.006 0 0 1 0.006 -0.005h0.323c0.003 0 0.005 0.002 0.005 0.004l2.3 7.281a0.006 0.006 0 0 1 -0.002 0.006l-1.696 1.324a0.006 0.006 0 0 1 -0.008 -0.001zM-0.031 11.594c0 0.002 0.002 0.005 0.004 0.005l3.495 1.143a0.006 0.006 0 0 0 0.005 -0.001l7.813 -5.394a0.006 0.006 0 0 0 0.002 -0.004l0.838 -5.622a0.006 0.006 0 0 0 -0.006 -0.007H5.2a0.006 0.006 0 0 0 -0.004 0.002L-0.03 8.022a0.006 0.006 0 0 0 -0.001 0.004zm4.956 1.439 3.819 1.251a0.006 0.006 0 0 0 0.005 -0.001l4.546 -3.261a0.006 0.006 0 0 0 0.001 -0.008l-1.704 -2.536a0.006 0.006 0 0 0 -0.008 -0.002z"
          fill="white"
        />
      </Svg>
    </BaseTypeIcon>
  );
};