import "./ErrorPage.css"
import audio from "../../assets/audio/fail1.mp3"

const ErrorPage = () => {
    const start = () => {
       let bb = new Audio(audio);
        bb.play();
    }
    return (
        <>
            <main>
                <div className="error-card">
                    <h1>:(</h1>
                    <p>This website ran into a problem while loading the page you are trying to reach. Click <a href="/">here</a> to return to the homepage.</p>
                    <button className="error-button" onClick={start}>Celebrate</button>
                </div>
            </main>
        </>
    );
}
export default ErrorPage;