import { A } from "@solidjs/router";
import { Authorized, AuthorizeView, NotAuthorized } from "../auth/component";

export default function NavBar() {
	return (
		<nav class="navbar navbar-light">
			<div class="container">
				<A class="navbar-brand" href="/">conduit</A>
				<ul class="nav navbar-nav pull-xs-right">
					<li class="nav-item">
						{/* Add "active" class when you're on that page" */}
						<A class="nav-link" activeClass="active" href="/">Home</A>
					</li>
					<AuthorizeView>
						<Authorized>
							<li class="nav-item">
								<A class="nav-link" activeClass="active" href="/editor">
									<i class="ion-compose" />&nbsp;New Article
								</A>
							</li>
							<li class="nav-item">
								<A class="nav-link" activeClass="active" href="/settings">
									<i class="ion-gear-a" />&nbsp;Settings
								</A>
							</li>
						</Authorized>
						<NotAuthorized>
							<li class="nav-item">
								<A class="nav-link" activeClass="active" href="/login">Sign in</A>
							</li>
							<li class="nav-item">
								<A class="nav-link" activeClass="active" href="/register">Sign up</A>
							</li>
						</NotAuthorized>
					</AuthorizeView>
				</ul>
			</div>
		</nav>
	);
}