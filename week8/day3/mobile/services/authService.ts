const API_URL = "http://localhost:3931/login";

export async function loginUser(email: string, password: string) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error("Failed to login");
    }

    try {
        const data = await response.json();
        
        if (!data.token) {
            throw new Error("Token not found in response");
        }

        return data.token;
    } catch (error) {
        throw new Error("Failed to parse response JSON");
    }
}