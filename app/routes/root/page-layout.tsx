import { logoutUser } from "~/appwrite/auth";
import { useNavigate } from "react-router";

const PageLayout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logoutUser();
        navigate("/sign-in");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
                <img
                    src="/assets/icons/logo.svg"
                    alt="App Logo"
                    className="mx-auto mb-4 h-12 w-12"
                />
                <h1 className="text-2xl font-semibold mb-2">Welcome to Tourvisto</h1>
                <p className="text-sm text-gray-500 mb-6">
                    Manage your journey with ease.
                </p>

                <button
                    onClick={() => navigate("/dashboard")}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mb-4"
                >
                    Go to Dashboard
                </button>

                <button
                    onClick={handleLogout}
                    className="mx-auto block"
                    title="Logout"
                >
                    <img
                        src="/assets/icons/logout.svg"
                        alt="Logout"
                        className="size-6"
                    />
                </button>
            </div>
        </div>
    );
};

export default PageLayout;
