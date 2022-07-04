import React, { useEffect, useState } from 'react';
import { LIVE_TYPE, OPERATOR_TOKEN, } from '../consts/baseUrl';
import { Games as GamesType } from '../components/Games';
import LiveGamesGrid from '../components/LiveGames/LiveGamesGrid'
import fetchAllGames from '../services/fetchAllGames';
export default function LiveCasinoPage({ currency }: any) {
    const [liveGames, setLiveGames] = useState<GamesType>();


    useEffect(() => {
        async function getAllGames(operatorToken: string, currency: string, type: string = 'any') {
            const res: any = await fetchAllGames(operatorToken,
                currency,
                type,
            )
            setLiveGames(res)
        }
        getAllGames(OPERATOR_TOKEN, currency, LIVE_TYPE)
    }, [currency])

    return liveGames ? <LiveGamesGrid games={liveGames} title='Featured Games' /> : <>no games</>
}