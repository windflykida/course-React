import React from "react";

class Error extends React.Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log("Wystąpił następujący błąd:", error, errorInfo);
    }
    render() {
        const { message, children } = this.props;
        return this.state.hasError ? message : children;
    }
}

export default Error;