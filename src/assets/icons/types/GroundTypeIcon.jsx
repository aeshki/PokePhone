import Svg, { Path } from 'react-native-svg';
import BaseTypeIcon from './BaseTypeIcon';

export default function GroundTypeIcon(props) {
  return (
    <BaseTypeIcon bgColor='#DA7C4D'>
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
          d="M3.524 13.742a0.006 0.006 0 0 1 -0.006 -0.008L7.603 2.192a0.006 0.006 0 0 1 0.006 -0.004h4.361c0.003 0 0.005 0.002 0.006 0.004l4.024 11.542a0.006 0.006 0 0 1 -0.006 0.008H3.524M0.006 13.787a0.006 0.006 0 0 1 -0.006 -0.008l3.042 -8.121a0.006 0.006 0 0 1 0.006 -0.004h2.643c0.004 0 0.007 0.004 0.006 0.008L2.756 13.783a0.006 0.006 0 0 1 -0.006 0.004z"
          fill="white"
        />
      </Svg>
    </BaseTypeIcon>
  );
};