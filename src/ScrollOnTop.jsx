import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom

function ScrollOnTop(props) {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top when location changes
	}, [location]); // Trigger useEffect when location changes

	return <>{props.children}</>; // Render the children components
}

export default ScrollOnTop;
