import React,{useState} from "react"
import {redirect} from "next/navigation";

function AuthPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e)=>{
        setEmail(e.target.value);
    };
    const handlePassword = (e)=>{
        setPassword(e.target.value);
    };

    const onClickLogin = async () => {
        console.log("ID: ", email);
        console.log("PW: ", password);
        const user = {
            email,
            password
        };
        try {
            const response= await fetch('/api/user-accounts/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            if(response.ok){
                alert('login success');
                response.json().then( data => {
                    console.log(data);
                    localStorage.setItem("member", data["userAccountId"]);
                })
                document.location.href='/'
            }else{
                alert('login fail')

            }
        }catch (error){
            console.error('Error',error)
        }

    }
    return(
            <div className="flex flex-col space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
                    className="px-4 py-2 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword}
                    className="px-4 py-2 border border-gray-300 rounded"
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={onClickLogin}>
                    Sign In
                </button>
            </div>

    )

}

export default AuthPage;