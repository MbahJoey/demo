import { BASE_URL } from "../consts/baseUrl";


export default async function fetchAllGames(operatorToken: string, currency: string, type: string) {
    const API_URL: string = `${BASE_URL}/lobby/games?&operatorToken=${operatorToken}&currency=${currency}&type=${type}`;
    return await fetch(API_URL).then((res) => res.json())
};