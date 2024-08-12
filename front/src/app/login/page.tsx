"use client";

import { useState } from "react";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { loginFunc } from "@/service/adminService";

function LoginPage() {
	const cookies = useCookies();
	const router = useRouter();
	const searchParams = useSearchParams();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleLogin = async () => {
		const data = await loginFunc({ username, password });

		if (data.token === undefined) {
			toast.error("Something went wrong");
			setUsername("");
			setPassword("");
			return null;
		}
		if (data?.token) {
			cookies.set("token", data.token);
			const search = searchParams.get("next");
			router.push(search ? search : "/admin-panel");
			toast.success(data.message);
			router.refresh();
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-blue-50">
			<form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center gap-6 max-w-sm w-full">
				<h2 className="text-2xl font-semibold text-blue-600">Login</h2>
				<input
					className="w-full outline-none border-2 border-blue-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
					placeholder="Email"
					value={username}
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				/>
				<input
					className="w-full outline-none border-2 border-blue-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
					placeholder="Password"
					type="password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<button onClick={handleLogin} disabled={!username || !password} type="submit" className="w-full p-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 disabled:bg-gray-300">
					Login
				</button>
			</form>
		</div>
	);
}

export default LoginPage;
