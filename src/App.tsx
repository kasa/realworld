import { Route, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import { createStore } from "solid-js/store";
import { User } from "./api-client";
import { AuthProvider, AuthState, CascadingAuthenticationState } from "./auth/auth";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import Home from "./pages/home";

type UserStore = { user: User | null | undefined };

const App: Component = () => {
	const [userStore] = createStore<UserStore>({ user: undefined });

	const provider: AuthProvider = {
		getAuthState: (): AuthState => {
			return {
				getUser: (): User | null | undefined => {
					return userStore.user;
				}
			};
		},
	};

	return (
		<CascadingAuthenticationState provider={provider}>
			<NavBar />
			<Routes>
				<Route path={["/", "/global", "/feed"]} component={Home} />
				{/* <Route path={"/login"} component={Login} />
				<Route path={"/register"} component={Register} />
				<Route path="/settings" component={Settings} />
				<Route path="/editor" component={Editor} />
				<Route path="/article/:slug" component={Article} />
				<Route path="/profile:/username" component={Profile}>
					<Route path="/favorites" component={Profile} />
				</Route> */}
			</Routes>
			<Footer />
		</CascadingAuthenticationState>
	);
};

export default App;