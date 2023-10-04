"use client"

export default function LogoutPage(){
    localStorage.clear();
    document.location.href="/";
}
