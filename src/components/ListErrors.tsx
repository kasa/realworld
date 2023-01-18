import { For, Show } from "solid-js";

type ListErrorsProps = {
	errors: any
}

export function ListErrors(props: ListErrorsProps) {
	return (
		<Show when={props.errors}>
			<ul class="error-messages">
				{/* <p>{props}</p> */}
				<For each={Object.keys(props.errors)}>
					{key => (
						<li>{key} {props.errors[key]}</li>
					)}
				</For>
			</ul>
		</Show>
	);
}