import { useEffect, useState } from 'react';
import './App.css';
import { OPERATOR_TOKEN, PLAYER_TOKEN } from './consts/baseUrl';
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
    <SlotCasinoPage />
  );
}

export default App;
