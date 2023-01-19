import { For, Show } from "solid-js";

type ListErrorsProps = {
	errors: Record<string, string>
}

export default function ListErrors(props: ListErrorsProps) {
	return (
		<Show when={props.errors}>
			<ul class="error-messages">
				<For each={Object.keys(props.errors)}>
					{key => (
						<li>{key} {props.errors[key]}</li>
					)}
				</For>
			</ul>
		</Show>
	);
}