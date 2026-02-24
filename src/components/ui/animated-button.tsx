import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";

type AnimatedButtonProps = React.ComponentProps<typeof Button> & {
  icon?: React.ReactNode;
  iconClassName?: string;
  fillClassName?: string;
  hoverTextClassName?: string;
  buttonSizeClassName?: string;
  textSizeClassName?: string;
};

export function AnimatedButton({
  className,
  children,
  icon,
  iconClassName,
  fillClassName,
  hoverTextClassName,
  buttonSizeClassName,
  textSizeClassName,
  asChild,
  ...props
}: AnimatedButtonProps) {
  const fill = (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 origin-left scale-x-0 bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100",
        fillClassName,
      )}
    />
  );

  const buildContent = (content: React.ReactNode) => (
    <span
      className={cn(
        "relative z-10 inline-flex items-center gap-2 transition-colors duration-300 group-hover:text-background",
        hoverTextClassName,
      )}
    >
      <span className={cn(textSizeClassName)}>{content}</span>
      {icon ? (
        <span
          aria-hidden
          className={cn(
            "inline-flex shrink-0 transition-[color,transform] duration-300 group-hover:scale-110 group-hover:text-background",
            iconClassName,
          )}
        >
          {icon}
        </span>
      ) : null}
    </span>
  );

  if (asChild) {
    const child = React.Children.only(children) as React.ReactElement<{
      className?: string;
      children?: React.ReactNode;
    }>;

    const animatedChild = React.cloneElement(child, {
      className: cn(
        "relative inline-flex items-center justify-center",
        child.props.className,
      ),
      children: (
        <>
          {fill}
          {buildContent(child.props.children)}
        </>
      ),
    });

    return (
      <Button
        {...props}
        asChild
        className={cn(
          "group relative overflow-hidden transition-colors duration-300",
          buttonSizeClassName,
          className,
        )}
      >
        {animatedChild}
      </Button>
    );
  }

  return (
    <Button
      {...props}
      asChild={false}
      className={cn(
        "group relative overflow-hidden transition-colors duration-300",
        buttonSizeClassName,
        className,
      )}
    >
      {fill}
      {buildContent(children)}
    </Button>
  );
}
