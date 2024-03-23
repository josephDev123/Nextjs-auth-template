"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type LeftPanelItemCardType = {
  icon: React.ReactNode;
  text: string;
  path: string;
  className?: string;
};
export default function LeftPanelItemCard({
  icon,
  text,
  path,
  className,
}: LeftPanelItemCardType) {
  const activeRoute = usePathname();
  return (
    <Link
      href={path}
      className={`${
        activeRoute === path && "bg-green"
      } flex items-center gap-2  p-2 rounded-md hover:bg-gray-950 ${className}`}
    >
      {icon} {text}
    </Link>
  );
}
