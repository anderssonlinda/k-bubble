import './NewGame.css'

export default function NewGame({restartGame}){

    return(
        <aside className="new-game-wrapper">
            <div className="new-game">
                <h2>You killed K-bubble!</h2>
                <button onClick={restartGame}>Play Again</button>
            </div>
        </aside>
    )
}