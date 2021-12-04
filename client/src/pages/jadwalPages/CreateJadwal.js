import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../layout/Container';
import edit from '../../assets/icon/Edit.png';
import { useForm } from 'react-hook-form';
import Button from '../../layout/Button';

const CreateJadwal = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<>
			<Navbar buat />
			<div style={{ backgroundColor: '#1F74FF' }}>
				<Container>
					<div className="p-4">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="flex relative w-min items-center">
								<input
									placeholder="title"
									type="text"
									className="px-4 font-bold text-white border-b-2 outline-none"
									style={{ fontSize: '48px', backgroundColor: '#1F74FF' }}
									{...register('title', { required: true })}
								/>
								<img src={edit} alt="" className="absolute right-0 w-10 h-10" />
							</div>
							<div className="flex justify-between">
								<div className="bg-white w-1/3 m-8 rounded-xl p-4">
									<div
										className="text-center font-semibold pb-4"
										style={{ fontSize: '28px' }}
									>
										Input Data Mata Kuliah
									</div>
									<div className="w-full ">
										<div className="">
											<label>Masukkan nama mata kuliah</label>
											<input
												className="border-2 rounded-md w-full p-2 my-2"
												placeholder="Nama Mata Kuliah"
												type="text"
												{...register('namaMatkul', { required: true })}
											/>
										</div>
										<div className="">
											<label>Pilih Hari Kuliah</label>
											<select
												name="bank"
												id="bank"
												className="border-2 rounded-md w-full p-2 my-2"
												{...register('hariKuliah', { required: true })}
											>
												<option value="" disabled defaultValue>
													-- Pilih Hari--
												</option>
												<option value="senin">Senin</option>
												<option value="selasa">Selasa</option>
												<option value="rabu">Rabu</option>
												<option value="kamis">Kamis</option>
												<option value="jumat">Jumat</option>
											</select>
										</div>
										<div className=" pt-4">
											<Button title="Login" type="submit" />
										</div>
									</div>
								</div>
								<div className="bg-white w-2/3 m-8 rounded-xl">
									<div className="p-4">
										<div
											className="text-center font-semibold pb-4"
											style={{ fontSize: '28px' }}
										>
											Daftar Mata Kuliah
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</Container>
			</div>
		</>
	);
};

export default CreateJadwal;
