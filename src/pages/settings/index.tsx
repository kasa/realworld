import { createStore } from "solid-js/store";
import { ResponseError, UpdateUser } from "../../api-client";
import { apiClient, useAppContext } from "../../App";
import ListErrors from "../../components/ListErrors";


export default function Settings() {
	const appCtx = useAppContext();
	if (appCtx === undefined) {
		throw new Error("No appCtx");
	}

	const handleLogout = (e: Event) => {
		e.preventDefault();
		appCtx.setUser({ user: null });
		location.hash = "/";
	};

	const user = appCtx.user();
	if (user === null || user === undefined) {
		location.hash = "/login";
	}
	const [errors, setErrors] = createStore({});

	const [state, setState] = createStore<UpdateUser>(user!);
	const handleUpdate = (e: Event) => {
		e.preventDefault();

		apiClient.user.updateCurrentUser({ body: { user: state } })
			.then((res) => {
				appCtx.setUser({ user: res.user });
				location.hash = "/?tab=user";
			})
			.catch(async (err: ResponseError) => {
				const r = await err.response.json();
				setErrors({ "": r.message });
			});
	};

	return (
		<div class="settings-page">
			<div class="container page">
				<div class="row">
					<div class="col-md-6 offset-md-3 col-xs-12">
						<h1 class="text-xs-center">Your Settings</h1>
						<ListErrors errors={errors} />
						<form>
							<fieldset>
								<fieldset class="form-group">
									<input class="form-control" type="text" placeholder="URL of profile picture"
										value={state.image}
										onChange={e => setState({ image: e.currentTarget.value })} />
								</fieldset>
								<fieldset class="form-group">
									<input class="form-control form-control-lg" type="text" placeholder="Your Name"
										value={state.username}
										onChange={e => setState({ username: e.currentTarget.value })} />
								</fieldset>
								<fieldset class="form-group">
									<textarea
										class="form-control form-control-lg"
										rows="8"
										placeholder="Short bio about you"
										value={state.bio}
										onChange={e => setState({ bio: e.currentTarget.value })}
									/>
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
								<button class="btn btn-lg btn-primary pull-xs-right" onClick={handleUpdate}>Update Settings</button>
							</fieldset>
						</form>
						<hr />
						<button class="btn btn-outline-danger" onClick={handleLogout}>Or click here to logout.</button>
					</div>
				</div>
			</div>
		</div>
	);
}