import React, { useEffect, useState } from 'react';
import { OPERATOR_TOKEN, PLAYER_TOKEN } from '../consts/baseUrl';
import AllGames from '../segments/AllGames/AllGames';
import fetchUser from '../services/fetchUser';

type User = {
    successful: string,
    errorMsg: null | string,
    data: {
        username: string,
        currency: string,
        balance: number
    }
};

export default function HomePage() {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        async function getUser(playerToken: string, operatorToken: string) {
            const res: any = await fetchUser(playerToken, operatorToken)
            setUser(res)
        }
        getUser(PLAYER_TOKEN, OPERATOR_TOKEN)
    }, [])

    return user?.successful ? <AllGames /> : <p>no user</p>
}