import React from "react";
import { NavLink } from "react-router-dom";
import { BsCollectionPlay } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";
import { CgMenuBoxed } from "react-icons/cg";

function MobileFooter() {
	const active = "bg-main text-white";
	const inActive =
		"transitions text-2xl flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3";

	const Hover = ({ isActive }) =>
		isActive ? `${active} ${inActive}` : inActive;

	return (
		<>
			<div className='flex-btn h-full bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full'>
				{/* Drawer */}
				<footer className='lg-hidden fixed z-0 bottom-0 w-full px-1'>
					<div className='bg-dry rounded-md flex-btn w-full p-1'>
						<NavLink to={"/videos"} className={Hover}>
							<BsCollectionPlay />
						</NavLink>
						<NavLink to='/favorite' className={Hover}>
							<div className='relative'>
								<div className='w-5 h-5 flex-colo rounded-full text-xs bg-submain text-white absolute -top-5 -right-1'>
									3
								</div>
							</div>

							<FiHeart />
						</NavLink>

						<NavLink to='/login' className={Hover}>
							<FiUserCheck />
						</NavLink>

						<button className={inActive}>
							<CgMenuBoxed />
						</button>
					</div>
				</footer>
			</div>
		</>
	);
}

export default MobileFooter;
