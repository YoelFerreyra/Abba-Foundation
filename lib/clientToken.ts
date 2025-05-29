import { getAuth } from "firebase/auth";

export const getClientToken = async () => {
    const user = await getAuth().currentUser;
    const idTokenResult = await user?.getIdTokenResult();
    const role = idTokenResult?.claims;
    console.log("role", role);
}