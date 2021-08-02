import Header from './Header';
import PreHeader from './PreHeader';


const WrapHeader = () => {
    return (
        <header className="nav-on-top shadow-sm bg-white">
            <PreHeader/>
            <Header/>
        </header>
    )
};

export default WrapHeader;