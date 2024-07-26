import React from "react";
import cn from "classnames"; // Adjust the import based on your setup

const clickButton = ({ children, onClick, href, className }) => {
  const Comp = href ? 'a' : 'button';
  const props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { onClick };

  return (
    <Comp
      {...props}
      className={cn("font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange", className)}
    >
      {children}
    </Comp>
  );
};

export default clickButton;