import { For, JSXElement } from "solid-js";

type PopularTagsProps = {
	data: string[];
	fallback?: JSXElement;
};

export default function PopularTags(props: PopularTagsProps) {
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