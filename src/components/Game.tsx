import ReactTooltip from 'react-tooltip'
import defaultTHumbnail from '../assets/default_thumbnail.png'

const imageStyles: object = { width: "301px", height: '180px' }

export default function Game({ game }: any) {
    return (
        <>
            <img
                src={game.thumbnails[0] ? game.thumbnails[0].imageUrl : defaultTHumbnail}
                alt={game.name}
                style={{ width: 301, height: 500 }}
                data-tip={game.name} />
            <ReactTooltip />
        </>
    )
}