import "./App.css";
import LoadingBar from "react-top-loading-bar";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// export default class App extends Component {
//   pageSize = 15;
//  apiKey = process.env.REACT_APP_NEWS_API;
//   state = {
//     progress: 0,
//   };
// // this only work in arrow function so make sure to make arrow function
//   setProgress = (progress) => {
//     this.setState({ progress: progress });
//   }

//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <LoadingBar color="#f11946" height={3} progress={this.state.progress} />
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <News

//                   setProgress={this.setProgress}
//                   apiKey = {this.apiKey}
//                   key="general"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="general"
//                 />
//               }
//             ></Route>
//             <Route
//               path="/general"
//               element={
//                 <News

//                   setProgress={this.setProgress}
//                   apiKey = {this.apiKey}
//                   key="general"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="general"
//                 />
//               }
//             ></Route>
//             <Route
//               path="/business"
//               element={
//                 <News

//                   setProgress={this.setProgress}
//                   apiKey = {this.apiKey}
//                   key="business"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="business"
//                 />
//               }
//             ></Route>
//             <Route
//               path="/science"
//               element={
//                 <News

//                   setProgress={this.setProgress}
//                   apiKey = {this.apiKey}
//                   key={"science"}
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="science"
//                 />
//               }
//             ></Route>
//             <Route
//               path="/technology"
//               element={
//                 <News

//                   setProgress={this.setProgress}
//                   apiKey = {this.apiKey}
//                   key={"technology"}
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="technology"
//                 />
//               }
//             ></Route>
//             <Route
//               path="/sports"
//               element={
//                 <News

//                   setProgress={this.setProgress}
//                   apiKey = {this.apiKey}
//                   key={"sports"}
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="sports"
//                 />
//               }
//             ></Route>
//             <Route
//               path="/entertainment"
//               element={
//                 <News

//                   setProgress={this.setProgress}
//                   apiKey = {this.apiKey}
//                   key={"entertainment"}
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="entertainment"
//                 />
//               }
//             ></Route>
//             <Route
//               path="/health"
//               element={
//                 <News

//                   setProgress={this.setProgress}
//                   apiKey = {this.apiKey}
//                   key={"health"}
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="health"
//                 />
//               }
//             ></Route>
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }
export default function App() {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"science"}
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"technology"}
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"sports"}
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"entertainment"}
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"health"}
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
