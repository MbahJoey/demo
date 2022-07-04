import { NavigateFunction, useNavigate } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import defaultTHumbnail from '../../assets/default_thumbnail.png'
import { OPERATOR_TOKEN, PLAYER_TOKEN } from '../../consts/baseUrl'
import { ReactComponent as Players } from '../../assets/players.svg'


// `clientUrl?gameToken=${game.token}&operatorToken={OPERATOR_TOKEN}&playerToken=${PLAYER_TOKEN}&host=${game.hostUrl}`
const detailsStyles: object = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#171226',
    fontWeight: 'bold',
    padding: 5,
}
export default function LiveGamePreview({ game }: any) {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div
            style={{ position: 'relative', margin: 50 }}
            onClick={() => navigate(`clientUrl?gameToken=${game.token}&operatorToken=${OPERATOR_TOKEN}&playerToken=${PLAYER_TOKEN}&host=${game.hostUrl}`)}
        >
            <img
                src={game.thumbnails[0] ? game.thumbnails[0].imageUrl : defaultTHumbnail}
                alt={game.name}
                style={{ width: 300, height: 230 }}
                data-tip={game.name} />
            <ReactTooltip />
            <div style={detailsStyles}>
                <span style={{ color: 'white' }}>{game.name}</span>
                <div style={{ display: 'flex', alignItems: 'center', }}>
                    <span style={{ color: '#8e70d4', marginRight: 5 }}>/</span> <Players /><span style={{ color: '#8e70d4', marginLeft: 5 }}>{game.playersCount || 0}</span>
                </div>
            </div>
        </div >
    )
}