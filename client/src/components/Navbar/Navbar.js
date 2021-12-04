import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/Logo2.png';

const Navbar = ({ beranda, buat, jadwal }) => {
	return (
		<div className=" shadow-md">
			<div className="container mx-auto ">
				<div className="flex justify-between items-center h-16 px-8">
					<div className="flex items-center">
						<div className="w-32">
							<img src={logo} alt="" className="w-full h-full" />
						</div>
						<Link
							to="/"
							className="border-b-2 h-16 flex items-center"
							style={
								beranda ? { borderColor: '#1F74FF' } : { borderColor: '#FFF' }
							}
						>
							<div
								className="mx-10"
								style={beranda ? { color: '#1F74FF' } : { color: '#000' }}
							>
								Beranda
							</div>
						</Link>
						<Link
							to="/create-schedule"
							className="border-b-2 h-16 flex items-center"
							style={
								buat ? { borderColor: '#1F74FF' } : { borderColor: '#FFF' }
							}
						>
							<div
								className="mx-10"
								style={buat ? { color: '#1F74FF' } : { color: '#000' }}
							>
								Buat
							</div>
						</Link>
						<Link
							to="/jadwal"
							className="border-b-2 h-16 flex items-center"
							style={
								jadwal ? { borderColor: '#1F74FF' } : { borderColor: '#FFF' }
							}
						>
							<div
								className="mx-10"
								style={jadwal ? { color: '#1F74FF' } : { color: '#000' }}
							>
								Jadwal
							</div>
						</Link>
					</div>
					<div className="w-12 h-12 ">
						<img
							src={
								'https://i.pinimg.com/564x/ae/1f/ff/ae1fff331aa1978ad710ac817e75528b.jpg'
							}
							alt=""
							className="w-full h-full rounded-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
