import { Route, Routes } from "@solidjs/router";
import { Component, createContext, lazy, useContext } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";
import { ArticlesApi, Configuration, TagsApi, User, UserAndAuthenticationApi } from "./api-client";
import { AuthProvider, AuthState, CascadingAuthenticationState } from "./auth/auth";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

const Login = lazy(() => import("./components/Login"));
const Home = lazy(() => import("./pages/home"));

type UserStore = { user: User | null | undefined };

const AppContext = createContext<AppState>();
export type AppState = {
	user: () => User | null | undefined;
	setUser: SetStoreFunction<UserStore>;
}

export const apiConfig = new Configuration({
	basePath: "https://api.realworld.io/api",
	apiKey: () => {
		const ctx = useAppContext();
		const token = ctx?.user()?.token;
		if (token != null) {
			return `Token ${token}`;
		}
		return "";
	},
});

export const apiClient = {
	tags: new TagsApi(apiConfig),
	articles: new ArticlesApi(apiConfig),
	user: new UserAndAuthenticationApi(apiConfig),
};

const App: Component = () => {
	const [userStore, setUserStore] = createStore<UserStore>({ user: undefined });

	const provider: AuthProvider = {
		getAuthState: (): AuthState => {
			return {
				getUser: (): User | null | undefined => {
					return userStore.user;
				}
			};
		},
	};

	const appState = {
		user: () => userStore.user,
		setUser: setUserStore,
	};

	return (
		<AppContext.Provider value={appState}>
			<CascadingAuthenticationState provider={provider}>
				<NavBar />
				<Routes>
					<Route path="/" component={Home} />
					<Route path="/login" component={Login} />
					{/* <Route path={"/register"} component={Register} />
				<Route path="/settings" component={Settings} />
				<Route path="/editor" component={Editor} />
				<Route path="/article/:slug" component={Article} />
				<Route path="/profile:/username" component={Profile}>
					<Route path="/favorites" component={Profile} />
				</Route> */}
				</Routes>
				<Footer />
			</CascadingAuthenticationState>
		</AppContext.Provider>
	);
};

export function useAppContext() { return useContext(AppContext); }

export default App;