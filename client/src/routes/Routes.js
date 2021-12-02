import React from 'react';
import { Routes as Routing, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import CreateJadwal from '../pages/jadwalPages/CreateJadwal';
import DetailJadwal from '../pages/jadwalPages/DetailJadwal';
import JadwalPages from '../pages/jadwalPages/JadwalPages';

const Routes = () => {
	return (
		<Routing>
			<Route exact path="/" element={<Homepage />} />
			<Route exact path="/login" element={<Login />} />
			<Route exact path="/create-schedule" element={<CreateJadwal />} />
			<Route exact path="/schedule-detail" element={<DetailJadwal />} />
			<Route exact path="/jadwal" element={<JadwalPages />} />
		</Routing>
	);
};

export default Routes;
