import React from 'react';
import Container from '../layout/Container';
import logo from '../assets/logo/Logo.png';
import Card from '../layout/Card';
import { useForm } from 'react-hook-form';
import Button from '../layout/Button';
import { auth } from '../data/staticData';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const onSubmit = (data) => {
		if (auth.nim === data.nim) {
			if (auth.password === data.password) {
				Swal.fire({
					icon: 'success',
					title: 'Login Berhasil',
					timer: 2000,
					timerProgressBar: true,
				}).then((res) => {
					navigate('/');
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Password Salah',
					timer: 2000,
					timerProgressBar: true,
				});
			}
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Nim tidak terdaftar',
				timer: 2000,
				timerProgressBar: true,
			});
		}
	};
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
								<label>Nim</label>
								<input
									className="border-2 rounded-md w-full p-2 my-2"
									placeholder="Masukkan Nim"
									type="text"
									{...register('nim')}
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
