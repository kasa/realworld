import { For } from "solid-js";
import { GetArticlesFeed200Response } from "../api-client";
import ArticlePreview from "./Article";

interface ArticlesProp {
	data: GetArticlesFeed200Response
}

export default function ArticleList(props: ArticlesProp) {
	return (
		<For each={props.data?.articles} fallback={<div class="article-preview">Loading articles...</div>}>
			{(article) =>
				<ArticlePreview article={article} />
			}
		</For>
	);
}