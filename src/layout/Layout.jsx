import { Link } from "react-router-dom";
import Header from './Header.jsx'
import Footer from './Footer.jsx'
export default function Layout(props) {
    const {children} = props;
    return (
      <>
     <Header></Header>
      {children}
      <Footer></Footer>
      </>
    )
};
