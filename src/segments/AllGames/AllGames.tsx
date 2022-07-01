import React, { useEffect, useState } from 'react';
import { OPERATOR_TOKEN } from '../../consts/baseUrl';
import fetchAllGames from '../../services/fetchAllGames';

type Game = [{
    name: string,
    token: string,
    thumbnails: Array<object>,
    gameType: number,
    categories: null,
    isFeatured: boolean,
    hostUrl: string,
    clientUrl: string,
    slotData: object,
    liveData: null,
    betData: null,
}]
export default function AllGames() {
    const [allGames, setAllGames] = useState<Game>();
    async function getAllGames(operatorToken: string, currency: string = 'BGN', type: string = 'any') {
        const res: any = await fetchAllGames(operatorToken,
            currency,
            type,
        )
        setAllGames(res)
    }
    getAllGames(OPERATOR_TOKEN)
    return (<>
        {allGames ? allGames.map(game => <div>{game.name}</div>) : <div>no games</div>}
    </>)
}