import { useEffect } from "react";
import { account } from "~/appwrite/client";
import { storeUserData } from "~/appwrite/auth";

export default function AuthCallback() {
    useEffect(() => {
        const run = async () => {
            try {
                const user = await account.get();
                if (user?.$id) {
                    await storeUserData();
                    window.location.href = "/dashboard";
                } else {
                    window.location.href = "/sign-in";
                }
            } catch (e) {
                console.error("OAuth failed", e);
                window.location.href = "/sign-in";
            }
        };

        run();
    }, []);

    return <p>Processing login...</p>;
}
