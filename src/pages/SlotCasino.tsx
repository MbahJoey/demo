import React, { useEffect, useState } from 'react';
import { OPERATOR_TOKEN, PLAYER_TOKEN } from '../consts/baseUrl';
import { Game as GameType, Games as GamesType } from '../components/Games';
import Games from '../components/Games'
import fetchAllGames from '../services/fetchAllGames';

export default function SlotCasinoPage() {
    const [allSlotGames, setAllSlotGames] = useState<GamesType>();
    const [featuredGames, setFeaturedGames] = useState<GamesType>();


    useEffect(() => {
        async function getAllGames(operatorToken: string, currency: string = 'BGN', type: string = 'any') {
            const res: any = await fetchAllGames(operatorToken,
                currency,
                type,
            )
            setAllSlotGames(res.filter((game: GameType) => game.liveData === null))
            setFeaturedGames(res.filter((game: GameType) => game.isFeatured === true))
        }
        getAllGames(OPERATOR_TOKEN)
    }, [])

    return (
        <>
            {featuredGames ? <Games games={featuredGames} title='Featured Games' /> : <>no games</>}
            {allSlotGames ? <Games games={allSlotGames} title='Slots' /> : <>no games</>}
        </>
    )
}