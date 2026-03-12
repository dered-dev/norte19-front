import React from 'react';
import * as icons from 'react-bootstrap-icons';


interface IconProps extends icons.IconProps {
  iconName: keyof typeof icons;
}

export const Icon = ({ iconName, ...props }: IconProps) => {
  const BootstrapIcon = icons[iconName];
  // Check if the icon exists
  if (!BootstrapIcon) {
    return <icons.QuestionCircle {...props} />;
  } else {

  }

  return <BootstrapIcon {...props} />;
};
