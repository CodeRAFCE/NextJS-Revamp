"use client";

import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation"; // Not from "next/router"
import {axios} from "axios";

export default function LoginPage() {
	const [user, setUser] = React.useState({
		email: "",
		password: "",
	});

	const onLogin = async () => {};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1 className="text-center text-white text-2xl">Login Up</h1>
			<hr />

			<label htmlFor="email">email</label>
			<input
				className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
				type="email"
				id="email"
				value={user.email}
				onChange={(e) => setUser({...user, email: e.target.value})}
				placeholder="email"
			/>
			<label htmlFor="password">password</label>
			<input
				className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
				type="password"
				id="password"
				value={user.password}
				onChange={(e) => setUser({...user, password: e.target.value})}
				placeholder="password"
			/>
			<button
				className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
				onClick={onLogin}
			>
				Login
			</button>
			<Link href="/signup">No account? signup</Link>
		</div>
	);
}
