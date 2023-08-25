import React from "react";

import { Touchable } from "./styles";
import { IconProps } from "./props";

import SVGAge from "@/assets/icons/Age.svg";
import SVGAlien from "@/assets/icons/Alien.svg";
import SVGAntihero from "@/assets/icons/Antihero.svg";
import SVGBack from "@/assets/icons/Back.svg";
import SVGEye from "@/assets/icons/Eye.svg";
import SVGHeight from "@/assets/icons/Height.svg";
import SVGHero from "@/assets/icons/Hero.svg";
import SVGHuman from "@/assets/icons/Human.svg";
import SVGKey from "@/assets/icons/Key.svg";
import SVGMarvelLogo from "@/assets/icons/Marvel-Logo.svg";
import SVGMenu from "@/assets/icons/Menu.svg";
import SVGPerson from "@/assets/icons/Person.svg";
import SVGSearch from "@/assets/icons/Search.svg";
import SVGUniverse from "@/assets/icons/Universe.svg";
import SVGVillain from "@/assets/icons/Villain.svg";
import SVGWeight from "@/assets/icons/Weight.svg";
import SVGEyeOutline from "@/assets/icons/eye-outline.svg";

export const Icons: React.FC<IconProps> = ({
  iconName,
  color,
  size,
  ...rest
}) => {
  const iconsMatch = {
    Age: SVGAge,
    Alien: SVGAlien,
    Antihero: SVGAntihero,
    Back: SVGBack,
    Eye: SVGEye,
    EyeOutline: SVGEyeOutline,
    Height: SVGHeight,
    Hero: SVGHero,
    Human: SVGHuman,
    Key: SVGKey,
    "Marvel-Logo": SVGMarvelLogo,
    Menu: SVGMenu,
    Person: SVGPerson,
    Search: SVGSearch,
    Universe: SVGUniverse,
    Villain: SVGVillain,
    Weight: SVGWeight,
  };

  const IconSelected = iconsMatch[iconName];

  return (
    <Touchable {...rest}>
      <IconSelected />
    </Touchable>
  );
};
