import React, { Component } from "react";
import { Link } from "react-router-dom";
//link component is like the <a/> tag
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// class Main extends Component {
//   render() {
//     return (
//       <Router>
//         <Main />
//       </Router>
//     )
//   }
// }

const Main = () => (
    <BrowserRouter>
      < Route path='/' component={ Main} />
    </BrowserRouter>
  )

export default Main;