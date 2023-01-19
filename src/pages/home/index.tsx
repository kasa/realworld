import { A, useSearchParams } from "@solidjs/router";
import { createEffect, createMemo, createResource, createSignal, ErrorBoundary } from "solid-js";
import { ArticlesApi, TagsApi } from "../../api-client";
import { apiConfig } from "../../App";
import { AuthorizeView } from "../../auth/component";
import ArticleList from "../../components/ArticleList";
import PopularTags from "../../components/PopularTags";

type ArticleParams = {
	source: string;
	page: number;
};

export default function Home() {
	console.debug("init");
	const tagsApi = new TagsApi(apiConfig);
	const [tags] = createResource(
		"tags",
		() => tagsApi.getTags().then((resp) => resp.tags),
		{ initialValue: [] }
	);

	const tagMemo = createMemo(() => tags());
	const [articleParams, setArticleParams] = createSignal<ArticleParams>();

	const articleApi = new ArticlesApi(apiConfig);
	const [articles] = createResource(
		articleParams,
		(args: ArticleParams) => {
			if (args.source === "user") {
				return articleApi.getArticlesFeed().then((resp) => resp);
			}
			return articleApi.getArticles().then((resp) => resp);
		},
		{
			initialValue: {
				articles: [],
				articlesCount: 0
			}
		},
	);

	const [params] = useSearchParams();
	createEffect(() => {
		console.debug("effect", JSON.stringify(params));
		setArticleParams({ source: params.tab || "", page: Number(params.page) || 1 });
	});

	const articleMemo = createMemo(() => {
		return articles();
	});

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
						<div class="feed-toggle">
							<ul class="nav nav-pills outline-active">
								<AuthorizeView>
									<li class="nav-item">
										<A href="/?tab=user" class="nav-link" end={true}>Your Feed</A>
									</li>
								</AuthorizeView>
								<li class="nav-item">
									<A href="/" class="nav-link" end={true}>Global Feed</A>
								</li>
							</ul>
						</div>
						<ErrorBoundary fallback={err => err}>
							<ArticleList data={articleMemo()} />
						</ErrorBoundary>
					</div>
					<div class="col-md-3">
						<div class="sidebar">
							<PopularTags data={tagMemo()} fallback={<div>Loading...</div>} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}