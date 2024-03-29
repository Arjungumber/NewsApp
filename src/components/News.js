import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 8,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults: 0,
//     };
//     document.title = props.category;
//     // setting the title as category
//     // also we need to pass props in constructor to use it here, otherwise it will throw the error.
//   }
//   async updateNews() {
//     props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url); // here fetch will return a promise.
//     props.setProgress(30);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     props.setProgress(70);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//     props.setProgress(100); // after we fetch the news we'r setting the progress to 100.
//   }
//   async componentDidMount() {
//     this.updateNews();
//   }
//   // render will run first then componentdidmount and constructor will run first than it as well
//   // componentdidmount is a lifecycle method.
//   // async function can wait for some promisies to resolve in its functionality.

//   // so what r we actually doing with these two buttons are if we go on console nd see on one api call we r getting 37 articles but are
//   // showing onlyy 15-20 on single page
//   // so with the nex button we r setting page+1 nd rest of articles on that page.
//   // now theres also a problem is when we clcik on next and next at one point we will get to see the empty page whcih will be bad user experince
//   // so to tackle that page emptiness, we give pageSize as 20 in url which again is coming from newsapi documentation which states that
//   // there must be atmost 20 articles on single page not more than that.
//   // so after dividing total articles by pageSize we can get the total page that can exist for the articles we've received so we can inc
//   // the user experience.

//   // handleNextClick = async () => {
//   //   this.setState({ page: this.state.page + 1,  });
//   // this.updateNews();
//   // };

//   // handlePrevClick = async () => {
//   //   this.setState({ page: this.state.page - 1,  });
//   // this.updateNews();
//   // };

//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 });
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//     let data = await fetch(url); // here fetch will return a promise.
//     let parsedData = await data.json();
//     console.log(parsedData);
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//   };
//   render() {
//     return (
//       <>
//         <h1 className="text-center my-3">Top {props.category} Headlines </h1>
//         {this.state.loading && <Spinner />}
//         {/* means loading component will be rendered only when our state loading will be true */}
//         {/* we'r using infinite scroll as nowadays prev next looks oudated and this infinte scrool looks good */}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={this.state.loading && <Spinner />}
//         >
//           <div className="container">
//             <div className="row">
//               {/* mapping the artciles  */}
//               {this.state.articles.map((element,index) => {
//                 return (
//                   // we need to give every newsitem a unique key for mapping them
//                   <div className="col-md-4" key={index} >
//                     {/* whenever we are using map fucntion we need to give a unique key which will be our url */}
//                     <NewsItem
//                       title={element.title ? element.title : " "} // here we are using ternary property becz for some news we'r getting the
//                       // title or description as null which was earlier creating problem in redering the app so tackling it like this
//                       // if title is nell render it as empty string otherwise set it as it is coming.
//                       description={
//                         element.description ? element.description : " "
//                       }
//                       imageUrl={element.urlToImage}
//                       newsUrl={element.url}
//                       author={element.author}
//                       date = {element.publishedAt}
//                       source = {element.source.name}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </InfiniteScroll>
//       </>
//     );
//   }
// }

// export default News;

const News = (props) => {
  const [articles, setArtciles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setToatlResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url); // here fetch will return a promise.
    props.setProgress(30);
    let parsedData = await data.json();
    console.log(parsedData);
    props.setProgress(70);
    setArtciles(parsedData.articles);
    setToatlResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100); // after we fetch the news we'r setting the progress to 100.
  };

  // componentdidmount will be replaced by useEffect

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News`;
    updateNews();
  },[]); // here in place of empty array we colud have written here the change on which we've to run update news. but here for the first time we need to run this
  // as we'were doing in the class based component.
  //  const handleNextClick = async () => {
  //    setPage(page-1);
  //   updateNews();
  //   };

  //   const handlePrevClick = async () => {
  //     setPage(page+1);
  //   updateNews();
  //   };

  const fetchMoreData = async () => { // here we've update send the page as page+1 as some baatch of news were duplicate earlier becz as before sending it to url
    // we were updating the page as page+1 but it was taking its time so we done by ourself and then update after the url req.
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url); // here fetch will return a promise.
    let parsedData = await data.json();
    console.log(parsedData);
    setArtciles(articles.concat(parsedData.articles));
    setToatlResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-center my-3" style={{marginTop:'90px'}}>
        Top {capitalizeFirstLetter(props.category)} Headlines{" "}
      </h1>
      {loading && <Spinner />}
      {/* means loading component will be rendered only when our state loading will be true */}
      {/* we'r using infinite scroll as nowadays prev next looks oudated and this infinte scrool looks good */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {/* mapping the artciles  */}
            {articles.map((element, index) => {
              return (
                // we need to give every newsitem a unique key for mapping them
                <div className="col-md-4" key={index}>
                  {/* whenever we are using map fucntion we need to give a unique key which will be our url */}
                  <NewsItem
                    title={element.title ? element.title : " "} // here we are using ternary property becz for some news we'r getting the
                    // title or description as null which was earlier creating problem in redering the app so tackling it like this
                    // if title is nell render it as empty string otherwise set it as it is coming.
                    description={
                      element.description ? element.description : " "
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};
