import React from 'react';
import Container from '../layout/Container';
import logo from '../assets/logo/Logo.png';
import Card from '../layout/Card';
import { useForm } from 'react-hook-form';
import Button from '../layout/Button';

const Login = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<div className="bg-login-bg bg-no-repeat bg-center bg-cover">
			<Container center={true}>
				<div>
					<div className="flex flex-row justify-center">
						<img src={logo} alt="" className="" />
					</div>
					<Card>
						<form onSubmit={handleSubmit(onSubmit)} className="pb-20 pt-10">
							<div className="text-center pb-10 font-bold text-5xl">Login</div>
							<div className="px-2 md:px-20">
								<label>Email</label>
								<input
									className="border-2 rounded-md w-full p-2 my-2"
									placeholder="Masukkan Email"
									type="email"
									{...register('email')}
								/>
							</div>
							<div className="px-2 md:px-20">
								<label>Password</label>
								<input
									className="border-2 rounded-md w-full p-2 my-2"
									placeholder="Masukkan Password"
									type="password"
									{...register('password')}
								/>
							</div>
							<div className="px-2 md:px-20 pt-4">
								<Button title="Login" type="submit" />
							</div>
						</form>
					</Card>
				</div>
			</Container>
		</div>
	);
};

export default Login;
