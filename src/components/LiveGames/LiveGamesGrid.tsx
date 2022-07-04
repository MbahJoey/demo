import LiveGamePreview from './LiveGamePreview';
import backgroundImage from '../../assets/background.svg'
export type Games = Array<Game>
export type Game = {
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
}

const containerStyles: object = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridAutoRows: 'auto',
    columnGap: '10px',
    rowGap: '15px',
    backgroundColor: '#1F1530',
    backgroundImage: `url(${backgroundImage})`,
    justifyItems: 'center'
}

const titleStyles: object = {
    backgroundColor: '#17141F',
    borderTop: '5px solid #291E3C',
    borderBottom: '5px solid #291E3C',
    color: 'white',
    fontWeight: 500,
    fontSize: '2rem',
    padding: '10px',
}
export default function LiveGamesGrid({ games }: any) {
    const order: string[] = ['Roulette', 'Blackjack', 'Unlimited Blackjack', 'Andar Bahar', 'Teen Patti', 'Teen Patti Face Off', 'Baccarat', 'Dragon Tiger']

    return (
        <>
            {games
                ? games.sort((a: string, b: string)=>order.indexOf(a) - order.indexOf(b)).map((game: Game) =>
                    <>
                        <div style={titleStyles}>{game.name}</div>
                        <div style={containerStyles}>
                            <LiveGamePreview key={game.name} game={game} />
                        </div>
                    </>)
                : <div>no games</div>}
        </>
    )
}