import scss from './LayoutPage.module.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import HomePage from '../pages/HomePage';
import LoginForm from '../forms/loginForm/LoginForm';
import RegistrationForm from '../forms/registrForm/RegistrForm';

const LayoutPage = () => {
	return (
		<>
			<div className={scss.layout}>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/login" element={<LoginForm />} />
						<Route path="/registration" element={<RegistrationForm />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
};
export default LayoutPage;
