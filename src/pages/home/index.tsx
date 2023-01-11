
export default function Home() {
	// const [tags] = createResource(fetchTags);

	// const state = useApp();
	// const token = () => state?.user()?.token;
	// const [userArticles] = createResource(token(), fetchFeedArticles);
	// const [globalArticles] = createResource(fetchArticles);

	return (
		<div class="home-page">
			<div class="banner">
				<div class="container">
					<h1 class="logo-font">conduit</h1>
					<p>A place to share your knowledge.</p>
				</div>
			</div>
			<div class="container page">
				<div class="row">
					<div class="col-md-9">
						{/* <FeedPanel feed={userArticles()} global={globalArticles()} /> */}
					</div>
					<div class="col-md-3">
						<div class="sidebar">
							{/* <PopularTags data={tags()} /> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}