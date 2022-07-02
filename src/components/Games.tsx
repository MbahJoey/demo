import Game from '../components/Game';
import backgroundImage from '../assets/background.svg'
import { url } from 'inspector';
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
    borderTop: '5px solid #291E3C',
    borderBottom: '5px solid #291E3C',
}

const titleStyles: object = {
    backgroundColor: '#17141F',
    color: 'white',
    fontWeight: 500,
    fontSize: '2rem',
    padding: '10px',
}
export default function Games({ games, title }: any) {
    console.log(games)
    return (
        <>
            <div style={titleStyles}>{title}</div>
            <div style={containerStyles}>
                {games
                    ? games.map((game: Game) =>
                        <Game key={game.name} game={game} />)
                    : <div>no games</div>}
            </div>
        </>
    )
}