import React from "react";

// Import the icons
import development from './assets/icon-development.svg';
import operation from './assets/icon-operation.svg';
import information from './assets/icon-information.svg';
import administration from './assets/icon-administration.svg';
import design from './assets/icon-design.svg';
import technology from './assets/icon-technology.svg';
import inversion from './assets/icon-inversion.svg';
import pig from './assets/icon-pig.svg';
import planet from './assets/icon-planet.svg';
import world from './assets/icon-world.svg';
import water from './assets/icon-water.svg';
import forest from './assets/icon-forest.svg';
import income from './assets/icon-income.svg';
import guests from './assets/icon-guests.svg';
import key from './assets/icon-key.svg';
import reception from './assets/icon-reception.svg';
import operationInterface from './assets/icon-operation-interface.svg';

// Define a mapping of icon names to images
const iconMap: Record<string, string> = {
    "icon-development": development,
    "icon-operation": operation,
    "icon-information": information,
    "icon-administration": administration,
    "icon-design": design,
    "icon-technology": technology,
    "icon-inversion": inversion,
    "icon-pig": pig,
    "icon-planet": planet,
    "icon-world": world,
    "icon-water": water,
    "icon-forest": forest,
    "icon-income": income,
    "icon-guests": guests,
    "icon-key": key,
    "icon-reception": reception,
    "icon-operation-interface": operationInterface
};

interface SpecialIconsProps {
    iconName: string;
}

const SpecialIcons = ({ iconName }: SpecialIconsProps): React.JSX.Element => {
    const iconSrc = iconMap[iconName] || iconMap['icon-development']; // Default to 'icon-development' if iconName is not found

    return <img src={iconSrc} alt={`${iconName} icon`} />;
};

export default SpecialIcons;
