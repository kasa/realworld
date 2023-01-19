import { For, JSXElement } from "solid-js";

type PopularTags = {
	data: string[];
	fallback?: JSXElement;
};

export default function PopularTags(props: PopularTags) {
	return (
		<>
			<p>Popular Tags</p>
			<div class="tag-list">
				<For each={props.data} fallback={props.fallback}>
					{(tag) =>
						<div class="tag-pill tag-default">{tag}</div>
					}
				</For>
			</div>
		</>
	);
}