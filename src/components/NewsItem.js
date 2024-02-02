import React, { Component } from "react";

// export class NewsItem extends Component {
//   render() {
//     let { title, description, imageUrl, newsUrl, author, date, source } =
//     this.props;
//   return (
//     <div className="my-3">
//       <div className="card">
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "flex-end",
//             position: "absolute",
//             right: "0",
//           }}
//         >
//           <span className="badge rounded-pill bg-danger">{source}</span>
//         </div>
//         <img src={imageUrl} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">{title}..</h5>
//           <p className="card-text">{description}...</p>
//           <p className="card-text">
//             <small className="text-muted">
//               By {!author ? "Unkown" : author} on{" "}
//               {new Date(date).toGMTString()}
//             </small>
//           </p>
//           <a
//             rel="noreferrer"
//             href={newsUrl}
//             target="_blank"
//             className="btn btn-sm btn-dark"
//           >
//             Read Full
//           </a>
//         </div>
//       </div>
//     </div>
//   );
//   }
// }

// export default NewsItem;

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  // here we've done the destructuring so we can directly use the names
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}..</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unkown" : author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read Full
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
