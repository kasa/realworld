import { A, useSearchParams } from "@solidjs/router";
import { createEffect, createResource, createSignal, ErrorBoundary } from "solid-js";
import { ArticlesApi, TagsApi } from "../../api-client";
import { apiConfig } from "../../App";
import { AuthorizeView } from "../../auth/component";
import { ArticleList } from "../../components/ArticleList";
import { PopularTags } from "../../components/PopularTags";

type ArticleParams = {
	source: string;
	page: number;
};

export default function Home() {
	const tagsApi = new TagsApi(apiConfig);
	const [tags] = createResource(
		"tags",
		() => tagsApi.getTags().then((resp) => resp.tags),
		{ initialValue: [] }
	);

	const [articleParams, setArticleParams] = createSignal<ArticleParams>({ source: "", page: 1, });

	const [params] = useSearchParams();
	createEffect(() => {
		const tab = params.tab || "";
		const pg = Number(params.page) || 1;
		console.log(tab, pg);
		setArticleParams({ source: tab, page: pg });
	});

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

	return (
		<div class="home-page">
			<div class="banner">
				<div class="container">
					<h1 class="logo-font">conduit</h1>
					<p>A place to share your knowledge.</p>
					<p>tab: {params.tab}</p>
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
							<ArticleList data={articles()} />
						</ErrorBoundary>
					</div>
					<div class="col-md-3">
						<div class="sidebar">
							<PopularTags data={tags()} fallback={<div>Loading...</div>} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}