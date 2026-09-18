import "./ErrorPage.css"
import audio from "../../assets/audio/fail1.mp3"

const ErrorPage = () => {
    const start = () => {
        new Audio(audio).play();
    }
    return (
        <>
            <main>
                <div className="error-card">
                    <h1>Une erreur s'est produite...</h1>
                    <button onClick={start}>célébrer votre défaite</button>
                </div>
            </main>
        </>
    );
}
export default ErrorPage;