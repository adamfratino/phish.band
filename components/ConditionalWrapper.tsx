import { cloneElement } from "react";

export interface ConditionalWrapperProps {
  condition: boolean;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  wrapper: React.ReactElement<any>;
  children: React.ReactNode;
}

export function ConditionalWrapper({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps) {
  return condition && wrapper ? (
    cloneElement(wrapper, undefined, children)
  ) : (
    <>{children}</>
  );
}
