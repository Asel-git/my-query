import scss from './Header.module.scss';
import { useGetMeQuery } from '../../../redux/api/me';

const Header = () => {
	const { data } = useGetMeQuery();
	console.log(data);

	const GoogleLogin = () => {
		window.open(
			`${import.meta.env.VITE_PUBLIC_API_URL}/api/v1/auth/login/google`,
			'_self'
		);
	};

	const GitHubLogin = () => {
		window.open(
			`${import.meta.env.VITE_PUBLIC_API_URL}/api/v1/auth/login/github`,
			'_self'
		);
	};

	const logout = () => {
		window.open(
			`${import.meta.env.VITE_PUBLIC_API_URL}/api/v1/auth/logout`,
			'_self'
		);
	};
	const login = () => {
		window.open(
			`${import.meta.env.VITE_PUBLIC_API_URL}/api/v1/auth/login`,
			'_self'
		);
	};

	return (
		<>
			<header className={scss.Header}>
				<div className="container">
					<div className={scss.content}>
						<button onClick={GoogleLogin}>GoogleAuth</button>
						<button onClick={GitHubLogin}>GitHubAuth</button>
						<button onClick={login}>login</button>
						<button onClick={logout}>logout</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
// ************************************

// import styles from './Header.module.css';

// const Header: React.FC = () => {
// 	return (
// 		<header className={styles.header}>
// 			<div className={styles.logo}>
// 				<a className={styles.logo_link} href="/">
// 					LOGO
// 				</a>
// 			</div>
// 			<div className={styles.header_container}>
// 				<nav className={styles.nav}>
// 					<ul className={styles.menu}>
// 						<li className={styles.menu_item}>
// 							<a className={styles.link} href="/login">
// 								login
// 							</a>
// 						</li>
// 						<li className={styles.menu_item}>
// 							<a className={styles.link} href="/logout">
// 								logout
// 							</a>
// 						</li>
// 						<li className={styles.menu_item}>
// 							<a className={styles.link} href="/registration">
// 								{' '}
// 								registration
// 							</a>
// 						</li>
// 					</ul>
// 				</nav>
// 			</div>
// 		</header>
// 	);
// };

// export default Header;
