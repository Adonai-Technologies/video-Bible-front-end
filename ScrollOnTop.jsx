import React, { useEffect } from "react";

function ScrollOnTop() {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);
	return <>{props.children}</>;
}

export default ScrollOnTop;
