import Header from '../components/Header'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
          <Header/>
            {children}
            
        </React.Fragment>
    );
};

/*
const Layout = ({ children }) => {
    return (
        <React.Fragment>
           <p> header</p>
            {children}
            <p>footer</p>
        </React.Fragment>
    );
};
*/
export default Layout;