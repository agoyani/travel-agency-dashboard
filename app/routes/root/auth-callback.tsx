import { useEffect } from "react";
import { useNavigate } from "react-router";
import { storeUserData } from "~/appwrite/auth";

export default function AuthCallback() {
    const navigate = useNavigate();

    useEffect(() => {
        const run = async () => {
            await storeUserData();
            navigate("/dashboard");
        };

        run();
    }, []);

    return <p>Processing login...</p>;
}
