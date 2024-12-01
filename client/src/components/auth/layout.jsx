import { Outlet } from "react-router-dom";

const AuthLayout = () => {
	return (
		<div className="flex min-h-screen w-full">
			<div className="hidden lg:flex items-center justify-center">
				<div className="max-w-md space-y-6 text-center text-primary-foreground">
					<h1 className="text-4xl font-extrabold tracking-tight">
						Welcome to Ecommerce Store
					</h1>
				</div>
			</div>
			<div className="flex flex-1 justify-center items-center bg-background px-4 py-12 sm:px-6 lg:px-8">
				<Outlet />
			</div>
		</div>
	);
};

export default AuthLayout;
