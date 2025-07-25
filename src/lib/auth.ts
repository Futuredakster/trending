"use server";

import { signIn,signOut } from "@/auth";

export const login = async () =>{
    await signIn("google", { redirectTo: "/"})

}

export const logout = async () => {
  await signOut({ redirect: false }); // use redirect: false to avoid full page reload
};