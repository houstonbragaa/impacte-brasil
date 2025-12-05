import { twMerge } from "tailwind-merge";

interface LayoutProp {
  children?: React.ReactNode;
  className?: string;
}

export const LayoutContent = ({ children, className }: LayoutProp) => {
  return <div className={twMerge("px-[30px] lg:px-[120px]", className)}>{children}</div>;
};

export const LayoutDesktop = ({ children, className }: LayoutProp) => {
  return <div className={twMerge("max-w-7xl m-auto", className)}>{children}</div>;
};

export const LayoutTablet = ({ children, className }: LayoutProp) => {
  return <div className={twMerge("max-w-4xl m-auto", className)}>{children}</div>;
};

export const LayoutMobile = ({ children, className }: LayoutProp) => {
  return <div className={twMerge("max-w-md m-auto", className)}>{children}</div>;
};
