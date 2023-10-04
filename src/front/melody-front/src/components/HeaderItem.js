'use client'

import {useEffect, useState} from "react";
import Link from "next/link";
let links = []
function HeaderItem(){
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('member') === null){
            // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
            console.log('isLogin :', isLogin)

        } else {
            // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
            // 로그인 상태 변경
            setIsLogin(true)
            console.log('isLogin :', isLogin)

        }
    })

    if(isLogin){
        links = [
            {
                href:'/',
                key:'home',
            },
            {
                href:'/songSearch',
                key:'songSearch',
            },
            {
                href:'/albumSearch',
                key:'albumSearch',
            },
            {
                href:'/artistSearch',
                key:'artistSearch',
            },
            {
                href:'/logout',
                key:'logout'
            }]

    }else{
        links = [
            {
                href:'/',
                key:'home',
            },
            {
                href:'/signUp',
                key:'signUp'
            },
            {
                href:'/login',
                key:'login',
            }]
    }
    return(
        <ul className="flex bg-slate-500">
            {links.map(({ href, key }) => (
                <li className="flex-auto" key={key}>
                    <Link href={href}>
                        {key}
                    </Link>
                </li>
            ))}
        </ul>
    )

}

export default HeaderItem;