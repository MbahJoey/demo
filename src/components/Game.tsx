import { NavigateFunction, useNavigate } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import defaultTHumbnail from '../assets/default_thumbnail.png'
import { OPERATOR_TOKEN, PLAYER_TOKEN } from '../consts/baseUrl'

const gameDataStyles: object = {
    border: '1px solid #711770',
    backgroundColor: '#020000cc',
    color: '#B58632',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    padding: 5
}

// `clientUrl?gameToken=${game.token}&operatorToken={OPERATOR_TOKEN}&playerToken=${PLAYER_TOKEN}&host=${game.hostUrl}`

export default function Game({ game }: any) {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div
            style={{ position: 'relative' }}
            onClick={() => navigate(`clientUrl?gameToken=${game.token}&operatorToken=${OPERATOR_TOKEN}&playerToken=${PLAYER_TOKEN}&host=${game.hostUrl}`)}
        >
            {game.slotData &&
                <div style={{ position: 'absolute', top: 10, right: 10, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <span style={gameDataStyles}>{game.slotData.linesCount} LINES</span>
                    <span style={gameDataStyles}>{game.slotData.hitRate} </span>
                    <span style={gameDataStyles}>{game.slotData.reelsCount} </span>
                    <span style={gameDataStyles}>{game.slotData.rowsCount} </span>
                </div>
            }
            <img
                src={game.thumbnails[0] ? game.thumbnails[0].imageUrl : defaultTHumbnail}
                alt={game.name}
                style={{ width: 200, height: 200 }}
                data-tip={game.name} />
            <ReactTooltip />
        </div >
    )
}