import { createStore } from "solid-js/store";
import { apiClient, useAppContext } from "../App";
import { ListErrors } from "../components/ListErrors";

export default function Login() {
	const appCtx = useAppContext();
	if (appCtx === undefined) {
		throw new Error("No appCtx");
	}
	const [state, setState] = createStore({ email: "", password: "", errors: null });

	const handleSubmit = (e: Event) => {
		e.preventDefault();

		appCtx.setUser({ user: undefined });
		apiClient.user.login({
			body: { user: { email: state.email, password: state.password } }
		}).then((res) => {
			appCtx.setUser({ user: res.user });
			location.hash = "/?tab=user";
			// const js = await res.json();
			// if (res.ok) {
			// 	appCtx?.setUser(js);
			// 	location.hash = "/feed";
			// } else {
			// 	setState({ errors: js.errors });
			// }
		});
	};

	return (
		<div class="auth-page">
			<div class="container page">
				<div class="row">
					<div class="col-md-6 offset-md-3 col-xs-12">
						<h1 class="text-xs-center">Sign in</h1>
						<p class="text-xs-center">
							<a href="/#/register">Don't have an account?</a>
						</p>
						<ListErrors errors={state.errors} />
						<form onSubmit={handleSubmit}>
							<fieldset class="form-group">
								<input class="form-control form-control-lg" type="text" placeholder="Email"
									value={state.email}
									onChange={e => setState({ email: e.currentTarget.value })} />
							</fieldset>
							<fieldset class="form-group">
								<input class="form-control form-control-lg" type="password" placeholder="Password"
									value={state.password}
									onChange={e => setState({ password: e.currentTarget.value })} />

							</fieldset>
							<button class="btn btn-lg btn-primary pull-xs-right" type="submit">Sign in</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}