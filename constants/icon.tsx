import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

type IconProps = {
  color?: string;
  size?: number;
};

export const icon = {
  home: (props: IconProps) => <Feather name='home' size={20} {...props} />,
  forum: (props: IconProps) => <MaterialIcons name='people-outline' size={20} {...props} />,
  marketplace: (props: IconProps) => <Feather name='shopping-bag' size={20} {...props} />,
  resourcehub: (props: IconProps) => <MaterialIcons name='data-saver-off' size={20} {...props} />,
  hospital: (props: IconProps) => <MaterialCommunityIcons name='hospital-box-outline' size={20} {...props} />
};

