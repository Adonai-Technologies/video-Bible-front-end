import React from "react";
import Navbar from "../Layout/navbar";
import Footer from "../Layout/footer.jsx";
import MobileFooter from "../Layout/MobileFooter.jsx";
function layout({ children }) {
	return (
		<>
			<div className='bg-main text-white'>
				<Navbar />
				{children}
				<Footer />
				{/* mobile footer */}
				<MobileFooter />
			</div>
		</>
	);
}

export default layout;
