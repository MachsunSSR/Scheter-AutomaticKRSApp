import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../layout/Container';
import { jadwal1 } from '../../data/staticData';

const JadwalPages = () => {
	return (
		<>
			<Navbar jadwal />
			<Container>
				<div className="font-semibold p-5" style={{ fontSize: '45px' }}>
					Jadwal Kamu
				</div>
				<div className="p-5 w-full">
					<div
						style={{
							border: '1px solid',
							boxShadow: '0px 2px 11px rgba(0, 0, 0, 0.25)',
						}}
					>
						<div className="p-5">
							<div
								style={{
									fontWeight: '500',
									fontSize: '36px',
									lineHeight: '24px',
								}}
							>
								GG Gaming
							</div>
							<div className="flex flex-row justify-between py-5">
								<div className=" w-full mr-10">
									<table className="w-full border border-black">
										<tr className="border border-black">
											<th className="p-5">Hari</th>
											<th className="py-2 border border-black">Jam</th>
											<th className="py-2 border border-black">Kelas</th>
											<th className="py-2 border border-black">Kode</th>
											<th className="py-2 border border-black">Mata Kuliah</th>
											<th className="py-2 border border-black">SKS</th>
										</tr>
										{jadwal1.map((data, id) => (
											<tr
												className="text-center border border-black"
												key={id}
												style={{ backgroundColor: data.kodeWarna }}
											>
												<td className="py-2 border border-black">
													{data.hari}
												</td>
												<td className="py-2 border border-black">{data.jam}</td>
												<td className="py-2 border border-black">
													{data.kelas}
												</td>
												<td className="py-2 border border-black">
													{data.kode}
												</td>
												<td className="py-2 border border-black">
													{data.namaMataKuliah}
												</td>
												<td className="py-2 border border-black">{data.SKS}</td>
											</tr>
										))}
									</table>
								</div>
								<div className="w-96">
									<div>
										{jadwal1.map((data, id) => (
											<div className="flex py-2">
												<div
													className="w-5 h-5 rounded-full"
													style={{ backgroundColor: data.kodeWarna }}
												></div>
												<div>{data.namaMataKuliah}</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default JadwalPages;
