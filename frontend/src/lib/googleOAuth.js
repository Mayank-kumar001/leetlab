const getCodeFromGoogle = async (status) => {
    const csrfToken = crypto.randomUUID();
    sessionStorage.setItem("oauth_csrf_token", csrfToken);
    const state = btoa(JSON.stringify({
        csrfToken,
        status
    }))

    const params = new URLSearchParams({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
        response_type: "code",
        scope: "openid email profile",
        state: state,
        prompt: 'select_account'
    })
    console.log(params)

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
}

export default getCodeFromGoogle;