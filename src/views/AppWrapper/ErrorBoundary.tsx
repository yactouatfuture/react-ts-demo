import React, { Component, ErrorInfo } from "react";
import ErrorState from "../../interfaces/ErrorState";
import ReactNodeProps from "../../interfaces/ReactNodeProps";

/**
 * extends Component<ReactNodeProps, ErrorState> => this uses Typescript generics, 
 * generics will allow type checking as a contract of the props we are going to pass to this component
 * and also the state that we are going to implement;
 * 
 * ReactNodeProps contains the react node children that are wrapped by this error boundary,
 * this is a good example of how to deal with React children when you pass them as props
 * 
 */
class ErrorBoundary extends Component<ReactNodeProps, ErrorState> {

  constructor(props: ReactNodeProps) {
    super(props);
    this.state = {hasError: false};
  }

  // the 2 methods below tell React that this class acts as an error boundary
  public static getDerivedStateFromError(_: Error): ErrorState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  // the ErrorInfo interface is provided by React and gives us the components stack that is concerned by this error
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo.componentStack);
  }

  public render() {
    if (this.state.hasError) {
      // rendering a fallback UI here
      return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
