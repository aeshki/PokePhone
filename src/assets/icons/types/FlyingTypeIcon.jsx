import Svg, { Path } from 'react-native-svg';
import BaseTypeIcon from './BaseTypeIcon';

export default function FlyingTypeIcon(props) {
  return (
    <BaseTypeIcon bgColor='#A1BBEC'>
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
          d="M5.585 14.929c2.344 0 4.35 -1.303 5.179 -3.149 0.01 -0.023 -3.326 0.867 -3.22 0.553 0.048 -0.14 2.092 -0.887 3.582 -1.759 0.856 -0.501 1.251 -1.561 1.251 -1.561s-1.443 0.7 -2.172 0.878c-1.47 0.358 -2.763 0.32 -2.763 0.282 0 -0.081 2.148 -0.489 5.134 -2.308 1.404 -0.856 1.786 -2.33 1.786 -2.33s-1.544 0.92 -2.478 1.223c-2.214 0.72 -4.234 0.937 -4.234 0.84 0 -0.209 1.778 -0.697 3.663 -1.611 0.98 -0.475 1.829 -1.095 2.812 -1.785C15.735 3.073 16 1.062 16 1.062s-1.587 1.024 -2.362 1.364c-3.196 1.403 -6.018 2.139 -8.053 2.298C2.513 4.965 0 7.108 0 9.891s2.5 5.039 5.585 5.039"
          fill="white"
        />
      </Svg>
    </BaseTypeIcon>
  );
};