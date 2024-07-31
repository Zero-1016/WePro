import Ionicons from '@expo/vector-icons/Ionicons';
import { type ComponentProps } from 'react';
import type { TextProps } from 'react-native';

type Props = {
  name: ComponentProps<typeof Ionicons>['name'];
  size?: number;
  color: string;
} & TextProps;

export function Icon({ size = 28, color, style, ...rest }: Props) {
  return (
    <Ionicons
      size={size}
      style={[{ marginBottom: -3 }, { color }, style]}
      {...rest}
    />
  );
}
