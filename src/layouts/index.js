import Footer from './footer';
import Header from './header';
// import Navigation from './navigation';
function Layouts({ children }) {
    return (
        <>
            {/* <Navigation /> */}
            <Header />
            <div>
                <div className="content">{children}</div>
            </div>
            <Footer />
        </>
    );
}

export default Layouts;
