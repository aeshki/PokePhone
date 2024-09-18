import Svg, { Path } from 'react-native-svg';
import BaseTypeIcon from './BaseTypeIcon';

export default function FightingTypeIcon(props) {
  return (
    <BaseTypeIcon bgColor='#D3425F'>
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
          d="M2.757 1.33C2.951 0.566 3.644 0 4.468 0c0.619 0 1.163 0.318 1.478 0.8h0.516c0.321 -0.329 0.768 -0.533 1.264 -0.533 0.727 0 1.351 0.439 1.621 1.067h0.432c0.271 -0.169 0.591 -0.267 0.933 -0.267 0.727 0 1.351 0.439 1.621 1.067h1.175c0.01 0 0.019 0.003 0.028 0.007a1.781 1.781 0 0 1 0.163 -0.007c0.975 0 1.765 0.79 1.765 1.765v5.292l0 0.01 0 0.01v0.076q0 0.048 -0.003 0.096C15.356 13.054 12.055 16 7.998 16 3.874 16 0.531 12.956 0.531 9.2c0 -1.813 0.779 -3.46 2.049 -4.679 -0.003 1.767 0.027 3.594 0.164 3.563 0.368 -0.084 0.081 -5.558 0.013 -6.754"
          fill="white"
        />
      </Svg>
    </BaseTypeIcon>
  );
};