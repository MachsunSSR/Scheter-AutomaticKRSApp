import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Container from '../layout/Container';
import banner from '../assets/background/banner.png';
import jadwal from '../assets/background/jadwal.png';
import { Link } from 'react-router-dom';

const Homepage = () => {
	return (
		<>
			<Navbar beranda />
			<Container>
				<img src={banner} alt="" className="p-8" />
				<div className="flex flex-row px-8  items-center">
					<div
						className="flex-1 text-center font-semibold"
						style={{ fontSize: '36px' }}
					>
						Jadwal Kamu
					</div>
					<Link
						to="/create-schedule"
						className="px-6 py-2 bg-success rounded-md text-white w-min h-full"
					>
						Buat
					</Link>
				</div>
				<div className="flex px-8 mb-10">
					<div
						className=" mr-4 w-60 border-2 rounded-xl p-4 shadow-lg"
						style={{ height: '400px' }}
					>
						<div className="text-center py-4 border-b-2 border-black ">
							Jadwal Hari Ini
						</div>
					</div>
					<div className="flex-1 border-2 rounded-xl p-4 shadow-lg">
						<div
							className="flex justify-center items-center"
							style={{ minHeight: '600px' }}
						>
							<img src={jadwal} alt="" className="w-96 h-96 object-contain" />
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Homepage;
