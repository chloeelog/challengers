import { IconProps } from "react-native-vector-icons/Icon";

export interface IconStyleProps extends Omit<IconProps, 'name'> {
  name?: string;
}