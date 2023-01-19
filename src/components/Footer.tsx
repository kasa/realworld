export default function Footer() {
	const commitHash: string = import.meta.env.VITE_HASH || "";
	const hashURL = `https://github.com/kasa/realworld/commit/${commitHash}`;

	return (
		<footer>
			<div class="container">
				<a href="/" class="logo-font">conduit</a>
				<span class="attribution">
					An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp;
					design licensed under MIT. hash: <a href={hashURL} target="_blank" rel="noopener noreferrer">{commitHash.substring(0, 6)}</a>
				</span>
			</div>
		</footer>
	);
}