import { Accessor, children, createMemo, JSX, JSXElement, mergeProps, ParentProps } from "solid-js";
import { useAuthState } from "./auth";

enum AuthType {
	Authorized,
	NotAuthorized,
	Authorizing,
}

type AuthProps = {
	type: AuthType;
	children?: JSXElement;
};

export function Authorized(props: ParentProps): JSXElement {
	const merged = mergeProps({ type: AuthType.Authorized }, props);
	return merged as unknown as JSXElement;
}

export function NotAuthorized(props: ParentProps): JSXElement {
	const merged = mergeProps({ type: AuthType.NotAuthorized }, props);
	return merged as unknown as JSXElement;
}

export function Authorizing(props: ParentProps): JSXElement {
	const merged = mergeProps({ type: AuthType.Authorizing }, props);
	return merged as unknown as JSXElement;
}

export type AuthorizeViewProps = {
	roles?: string[];
	children: JSXElement;
};

function isAuthProps(element: any): element is AuthProps {
	return (element as AuthProps).type !== undefined;
}

export function AuthorizeView(props: AuthorizeViewProps): Accessor<JSXElement> {
	const authState = useAuthState();
	if (authState === undefined) {
		throw new Error("No CascadingAuthenticationState");
	}

	const memo = createMemo(() => {
		const c = children(() => props.children);
		const isAuthorized = () => authState.getUser();

		if (Array.isArray(c())) {
			const arr: AuthProps[] = (c() as JSX.ArrayElement).filter(isAuthProps) as unknown as AuthProps[];
			if (arr.length == 0 && isAuthorized() != null) {
				return c();
			} else if (isAuthorized() != null) {
				return arr.find((d: AuthProps) => d.type === AuthType.Authorized)?.children;
			} else if (isAuthorized() === undefined) {
				const n = arr.find((d: AuthProps) => d.type === AuthType.Authorizing);
				if (n === undefined) {
					return arr.find((d: AuthProps) => d.type === AuthType.NotAuthorized)?.children;
				}
				return n.children;
			} else {
				return arr.find((d: AuthProps) => d.type === AuthType.NotAuthorized)?.children;
			}
		} else if (isAuthorized()) {
			return c();
		}

		return null;
	});

	return memo;
}