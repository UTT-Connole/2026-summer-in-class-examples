"use client";

import { FormEvent, useState } from "react";

export default function CookieFormPage() {
	const [name, setName] = useState("");
	const [favoriteCookie, setFavoriteCookie] = useState("Chocolate Chip");
	const [message, setMessage] = useState("");

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const payload = {
			name: name.trim(),
			favoriteCookie,
		};

		document.cookie = `cookieForm=${encodeURIComponent(
			JSON.stringify(payload)
		)}; path=/; max-age=2592000; samesite=lax`;

		setMessage("Saved! Your cookie preference has been stored.");
	};

	return (
		<main style={{ maxWidth: 520, margin: "2rem auto", padding: "1rem" }}>
			<h1 style={{ marginBottom: "1rem" }}>Cookie</h1>


			<form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.75rem" }}>
				<label htmlFor="name">Name</label>
				<input
					id="name"
					name="name"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Your name"
					required
					style={{ padding: "0.5rem" }}
				/>

				<label htmlFor="favoriteCookie">Favorite Cookie</label>
				<select
					id="favoriteCookie"
					name="favoriteCookie"
					value={favoriteCookie}
					onChange={(e) => setFavoriteCookie(e.target.value)}
					style={{ padding: "0.5rem" }}
				>
					<option>Chocolate Chip</option>
					<option>Oatmeal Raisin</option>
					<option>Peanut Butter</option>
					<option>Snickerdoodle</option>
					<option>Sugar</option>
				</select>

				<button type="submit" style={{ padding: "0.6rem 0.8rem" }}>
					Save Preference
				</button>
			</form>

			{message ? <p style={{ marginTop: "1rem" }}>{message}</p> : null}
		</main>
	);
}
