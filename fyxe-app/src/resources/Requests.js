export const sanitize = async (prompt) => {
    try {
        const response = await fetch('http://localhost:5000/api/v1/sanitize', {
            method: "POST",
            body: JSON.stringify({
                prompt: prompt
            }),
            headers: {
                "Content-type": "application/json"
            }
        });
        const result = await response.json()
        console.log(result)
        return result.sanitized_prompt;
    } catch (error) {
        console.log(error);
    }
}