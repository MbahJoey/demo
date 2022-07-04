import Game from '../components/Game';
import backgroundImage from '../assets/background.svg'
import { useState } from 'react';
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
    columnGap: 10,
    rowGap: 15,
    backgroundColor: '#1F1530',
    backgroundImage: `url(${backgroundImage})`,
    justifyItems: 'center',
    padding: 25
}

const titleStyles: object = {
    backgroundColor: '#17141F',
    borderTop: '5px solid #291E3C',
    borderBottom: '5px solid #291E3C',
    color: 'white',
    fontWeight: 500,
    fontSize: '2rem',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
}

const inputStyles: object = {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 50px'
}

function Input({ value }: any) {
    return (
        <div>
            <input type='checkbox' value={value} name={value} id={value} />
            <label htmlFor={value}>{value}</label>
        </div>
    )
}

function FilterDialog() {
    return (
        <div style={{ backgroundColor: '#17141F', color: 'white', display: 'flex', paddingLeft: '100px' }}>
            <div style={inputStyles}>
                <h2>Lines</h2>
                <Input value="5-9" />
                <Input value="10-29" />
                <Input value="0-49" />
                <Input value="50+" />
            </div>
            <div style={inputStyles}>
                <h2>Game Features</h2>
                <Input value="Bonus Game" />
                <Input value="Scatter Pays" />
                <Input value="Gamble" />
                <Input value="Mysteries" />
                <Input value="Wild" />
                <Input value="Fruits" />
            </div>
        </div>
    )
}
export default function Games({ games, title, button = false }: any) {
    const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false)
    return (
        <>
            <div style={titleStyles}>
                {title}
                {button ?
                    <button onClick={() => setIsFilterDialogOpen(!isFilterDialogOpen)} style={{ backgroundColor: '#FF2B9F', padding: '5px 10px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>Filter
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                        </svg>
                    </button> : null}
            </div>
            {isFilterDialogOpen && <FilterDialog />}
            <div style={containerStyles}>
                {games
                    ? games.map((game: Game) =>
                        <Game key={game.name} game={game} />)
                    : <div>no games</div>}
            </div>
        </>
    )
}