import { A } from "@solidjs/router";
import { createMemo } from "solid-js";
import { Article } from "../api-client";

interface ArticlePreviewProps {
	article: Article;
}

export default function ArticlePreview(props: ArticlePreviewProps) {
	const article = createMemo(() => props.article);
	return (
		<div class="article-preview">
			<div class="article-meta">
				<a href="profile.html"><img src={article().author.image} alt="author profile" /></a>
				<div class="info">
					<a href="/author" class="author">{article().author.username}</a>
					<span class="date">{article().createdAt.toLocaleString()}</span>
				</div>
				<button class="btn btn-outline-primary btn-sm pull-xs-right">
					<i class="ion-heart" /> {article().favoritesCount}
				</button>
			</div>
			<A href={`/article/${article().slug}`} class="preview-link">
				<h1>{article().title}</h1>
				<p>{article().description}</p>
				<span>Read more...</span>
			</A>
		</div>
	);
}