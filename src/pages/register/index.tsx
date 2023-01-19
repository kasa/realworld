import { createStore } from "solid-js/store";
import { ResponseError } from "../../api-client";
import { apiClient, useAppContext } from "../../App";
import ListErrors from "../../components/ListErrors";

export default function Register() {
	const appCtx = useAppContext();
	if (appCtx === undefined) {
		throw new Error("No appCtx");
	}

	const [state, setState] = createStore({ username: "", email: "", password: "", errors: {} });

	const handleSubmit = (e: Event) => {
		e.preventDefault();

		apiClient.user.createUser({
			body: { user: { username: state.username, email: state.email, password: state.password } }
		}).then((res) => {
			appCtx.setUser({ user: res.user });
			location.hash = "/?tab=user";
		}).catch(async (err: ResponseError) => {
			const r = await err.response.json();
			setState({ errors: r.errors });
		});
	};

	return (
		<div class="auth-page">
			<div class="container page">
				<div class="row">
					<div class="col-md-6 offset-md-3 col-xs-12">
						<h1 class="text-xs-center">Sign up</h1>
						<p class="text-xs-center">
							<a href="/#/login">Have an account?</a>
						</p>
						<ListErrors errors={state.errors} />
						<form onSubmit={handleSubmit}>
							<fieldset class="form-group">
								<input class="form-control form-control-lg" type="text" placeholder="Your Name"
									value={state.username}
									onChange={e => setState({ username: e.currentTarget.value })} />
							</fieldset>
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
							<button class="btn btn-lg btn-primary pull-xs-right">Sign up</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}