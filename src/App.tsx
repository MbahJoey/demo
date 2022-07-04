import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { OPERATOR_TOKEN, PLAYER_TOKEN } from './consts/baseUrl';
import LiveCasinoPage from './pages/LiveCasino';
import SlotCasinoPage from './pages/SlotCasino';
import fetchUser from './services/fetchUser';
type User = {
  successful: string,
  errorMsg: string,
  data: {
    username: string,
    currency: string,
    balance: number
  }
};
function App() {

  const [user, setUser] = useState<User>();
  useEffect(() => {
    async function getUser(playerToken: string, operatorToken: string) {
      const res: any = await fetchUser(playerToken, operatorToken)
      setUser(res)
    }
    getUser(PLAYER_TOKEN, OPERATOR_TOKEN)
  }, [])

  if (!user?.successful) return <p>{user?.errorMsg}</p>

  return (
    <>
      <Header balance={user.data.balance} username={user.data.username} />
      <Routes>
        <Route path="/" element={<SlotCasinoPage currency={user.data.currency} />} />
        <Route path="/live" element={<LiveCasinoPage currency={user.data.currency} />} />
      </Routes>
    </>
  );
}

export default App;
