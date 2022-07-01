import { BASE_URL } from "../consts/baseUrl";


export default function fetchUser(playerToken: string, operatorToken: string) {
    const API_URL: string = `${BASE_URL}/lobby/player?playerToken=${playerToken}&operatorToken=${operatorToken}`;
    return fetch(API_URL).then((res) => res.json())
};