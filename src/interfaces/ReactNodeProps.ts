import { ReactNode } from "react";

/**
 * this interface is ideal when you want to wrap any part of your app's component tree 
 * with a parent that may display dynamic children
 */
export default interface ReactNodeProps {
    children: ReactNode;
}
  