import React from "react";

type NavButtonProps = {
  href: string;
  label: string;
  isActive: boolean;
};

export const NavButton = ({ href, label, isActive }: NavButtonProps) => {
  return <div>{label}</div>;
};
