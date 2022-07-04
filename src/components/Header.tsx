import { Location, NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'

const headerStyles: object = {
    backgroundColor: '#17141F',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    height: 50,
    borderBottom: '1px solid #A06A2B',
    fontWeight: 500,
    fontSize: '1.3rem',
    color: 'white'
}
const buttonStyles: object = {
    backgroundColor: '#17141F',
    padding: '10px',
    height: 50,
    border: '1px solid #A06A2B',
    fontSize: '1.3rem',
    color: 'white',
    cursor: 'pointer'
}
const buttonActiveStyles: object = {
    backgroundColor: '#201531',
    padding: '10px',
    height: 50,
    border: '1px solid #A06A2B',
    fontSize: '1.3rem',
    color: 'white',
    cursor: 'pointer'
}

export default function Header({ balance, username }: any) {
    let navigate: NavigateFunction = useNavigate();
    let location: Location = useLocation();
    const activeButton: boolean = location.pathname.includes('live')
    return (
        <header>
            <div style={headerStyles}>
                <img src={logo} alt="logo" width='100px' height='85px' />
                <div style={{ display: 'flex', padding: '10px 0 0 0' }}>
                    <button onClick={() => navigate('/live')} style={activeButton ? buttonActiveStyles : buttonStyles} >LIVE CASINO GAMES</button>
                    <button onClick={() => navigate('/')} style={!activeButton ? buttonActiveStyles : buttonStyles}>SLOT GAMES</button>
                </div>
                <div style={{ display: 'flex' }}>
                    <p>{username}, &nbsp;</p>
                    <p style={{ color: '#F4BD03' }}>${balance.toFixed(2)}</p>
                </div>
            </div>
        </header>
    )
}