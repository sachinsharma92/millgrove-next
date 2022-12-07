import React from 'react'
import Layout from '../../components/Layout';
import styles from "./Signup.module.scss";
import Header from '../../components/Header';


const SignupSuccess = () => {
	return (
		<Layout>
			<div className={styles.successMsgWrapper}>
				<Header />
				<div>
					<h2 className={styles.title2}>Thank You <span className={styles.smallTxt}>for</span> Registering</h2>
					<div className={styles.successDescription}>
						<p>A member of our team will be in touch shortly via phone to discuss your interest and requirements.</p>
					</div>
				</div>
			</div>

		</Layout>

	)
}

export default SignupSuccess