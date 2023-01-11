import { createComponent, createContext, JSXElement, useContext } from "solid-js";
import { User } from "../api-client";

export type AuthProvider = {
	getAuthState: () => AuthState;
}

export type AuthState = {
	getUser: () => User | undefined | null;
}

export const AuthContext = createContext<AuthState>();

export type CascadingAuthStateProps = {
	provider: AuthProvider;
	children: JSXElement;
};

export function CascadingAuthenticationState(props: CascadingAuthStateProps) {
	return createComponent(AuthContext.Provider, {
		value: props.provider.getAuthState(),
		get children() {
			return props.children;
		}
	});
}

export function useAuthState(): AuthState | undefined {
	return useContext(AuthContext);
}
