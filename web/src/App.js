import logo from './31.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          BILLIONAIRE BOYS CLUB NFT DROP
        </h1>
        <div style={{ display: "flex", gap: "5%", textAlign: "center" }}>
          <div style={{ background: "white", borderRadius: "10px", padding: "1em", color: "black", fontWeight: "700" }}>
            30j
          </div>
          <div style={{ background: "white", borderRadius: "10px", padding: "1em", color: "black", fontWeight: "700" }}>
            13h
          </div>
          <div style={{ background: "white", borderRadius: "10px", padding: "1em", color: "black", fontWeight: "700" }}>
            15m
          </div>
        </div>
      <h1>Sign me up 👇</h1>
      <br></br>
      <input style={{ padding: "1em", borderRadius: "15px", fontSize: "1em"}} placeholder="# or ✉️"></input>
      </header>
    </div>
  );
}

export default App;
