import React, { useEffect, useState } from 'react';
import { OPERATOR_TOKEN, SLOTS_TYPE } from '../consts/baseUrl';
import { Game as GameType, Games as GamesType } from '../components/Games';
import Games from '../components/Games'
import fetchAllGames from '../services/fetchAllGames';

export default function SlotCasinoPage({ currency }: any) {
    const [allSlotGames, setAllSlotGames] = useState<GamesType>();
    const [featuredGames, setFeaturedGames] = useState<GamesType>();


    useEffect(() => {
        async function getAllGames(operatorToken: string, currency: string, type: string = 'any') {
            const res: any = await fetchAllGames(operatorToken,
                currency,
                type,
            )
            setAllSlotGames(res)
            setFeaturedGames(res.filter((game: GameType) => game.isFeatured === true))
        }
        getAllGames(OPERATOR_TOKEN, currency, SLOTS_TYPE)
    }, [currency])

    return (
        <>
            {featuredGames ? <Games games={featuredGames} title='Featured Games' /> : <>no games</>}
            {allSlotGames ? <Games games={allSlotGames} title='Slots' button={true} /> : <>no games</>}
        </>
    )
}