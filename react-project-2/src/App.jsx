import Header from './Header'
import Footer from './Footer'


function delayedOutput() {
    setTimeout(()=> {
        return `
        <div>
            <h2>Hello?</h2>
        </div>
        `;
    }, 500)
}
function Card() {
    return (
        delayedOutput
    );
}

function App () {
    return(
        <>
            <Card />
            <Header />
            <Footer />
        </>
    );
}

export default App 