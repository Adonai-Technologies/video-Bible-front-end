import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AboutUs from "./Screens/AboutUs";
import NotFound from "./Screens/NotFound";
import ContactUs from "./Screens/ContactUs";
import VideosPage from "./Screens/Videos";
import SingleMovie from "./Screens/SingleMovie";
import WatchPage from "./Screens/WatchPage";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Profile from "./Screens/Profile";
import Aos from "aos";
import Password from "./Screens/Dashboard/Password";
import FavoriteVideo from "./Screens/Dashboard/FavoriteVideo";
import VideosList from "./Screens/Dashboard/Admin/VideoList";
import Dashboard from "./Screens/Dashboard/Admin/Dashboard";
import Categories from "./Screens/Dashboard/Admin/Categories";
import Users from "./Screens/Dashboard/Admin/Users";
import AddVideo from "./Screens/Dashboard/Admin/AddVideo";
import ScrollOnTop from "./ScrollOnTop";
import DrawerContext from "./Context/DrawerContext";

const App = () => {
	Aos.init();
	return (
		<DrawerContext>
			<ScrollOnTop>
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/about-us' element={<AboutUs />} />
					<Route path='/contact-us' element={<ContactUs />} />
					<Route path='/videos' element={<VideosPage />} />
					<Route path='/video/:id' element={<SingleMovie />} />
					<Route path='/watch/:id' element={<WatchPage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/password' element={<Password />} />
					<Route path='/favorite' element={<FavoriteVideo />} />
					<Route path='/videoslist' element={<VideosList />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/categories' element={<Categories />} />
					<Route path='/users' element={<Users />} />
					<Route path='/addVideo' element={<AddVideo />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</ScrollOnTop>
		</DrawerContext>
	);
};

export default App;
