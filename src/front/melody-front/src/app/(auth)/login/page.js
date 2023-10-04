'use client'

import LoginForm from "../../../components/user/LoginForm";

function AuthPage(){

    return(
        <div className="py-8">
            <h1 className="text-3xl font-bold mb-4">Authentication Login Page</h1>
            <LoginForm/>
        </div>

    )

}

export default AuthPage;