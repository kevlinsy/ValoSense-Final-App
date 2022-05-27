import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (

    <div> 
        <header>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />


        <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/carousel/" />

        <link href="../../dist/css/bootstrap.min.css" rel="stylesheet" />






        <nav className="navbar navbar-expand-lg navbar-Dark bg-DARK  " >
          <div className="container-fluid">
            <a className="navbar-brand" href="Index.html">
              <img src="images/full_logo.png"  alt="logo" style={{width: "80px", height: "150px"}}/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="mr-4 nav-link" href="Index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Matchmaking.html">Match Making</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="Tournament.html">Tournament</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="Leaderboard.html">Leaderboard</a>
                </li>
              </ul>

              <ul className="my-2 my-md-0 navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link" href="Log-in.html" > My Stats &nbsp;</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="index.html" > Profile &nbsp;</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="Log-in.html" >Login</a>
                </li>
              </ul>





            </div>
          </div>
        </nav>

      </header>

      <body>


<div id="myCarousel" className={`slide ${styles["carousel"]}`} data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className=""></li>
    <li data-target="#myCarousel" data-slide-to="1" className=""></li>
    <li data-target="#myCarousel" data-slide-to="2" className="active"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item">
      <img className="first-slide" src="images/BG-17.png" alt="First slide"/>
        <div className="container">
          <div className={`text-left ${styles["carousel-caption"]}`}>
            <h1>MATCH MAKING</h1>
            <p><a className="btn btn-lg btn-danger" href="/" role="button">PLAY NOW</a></p>
          </div>
        </div>
    </div>
    <div className="carousel-item">
      <img className="second-slide" src="images/BG-17.png" alt="Second slide"/>
        <div className="container">
          <div className={styles.carouselcaption}>
            <h1>Another example headline.</h1>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta
              gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            <p><a className="btn btn-lg btn-danger" href="/" role="button">Learn more</a></p>
          </div>
        </div>
    </div>
    <div className="carousel-item active">
      <img className="third-slide" src="images/BG-17.png" alt="Third slide"/>
        <div className="container">
          <div className={`text-right ${styles["carousel-caption"]}`}>
            <h1>MATCH MAKING</h1>
            <br/>
              <p><a className="btn btn-lg btn-danger" href="/" role="button">PLAY NOW</a></p>
          </div>
        </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


<div className="container marketing">

  <div className="row">
    <div className="col-lg-4">
      <img className="rounded-circle" src="images/medal.png" alt="Generic placeholder " width="140"
        height="140"/>
        <h2>WINNERS OF THE COMPETITION</h2>
        <p>This 2022, 3 winners joined us in competing against the top....</p>
        <p><a className="btn btn-secondary" href="/" role="button">View details »</a></p>
    </div>
    <div className="col-lg-4">
      <img className="rounded-circle" src="images/data-server.png" alt="Generic placeholder " width="140"
        height="140"/>
        <h2>SERVER UPDATES <br/> MAY 20,2022</h2>
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula
          porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
          ut fermentum massa justo sit amet risus.</p>

        <p><a className="btn btn-secondary" href="/" role="button">View details »</a></p>
    </div>
    <div className="col-lg-4">
      <img className="rounded-circle" src="images/competitive.png" alt="Generic " width="140"
        height="140"/>
        <h2>NEW TOURNAMENT <br/> JUNE 2022</h2>
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula
          porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
          ut fermentum massa justo sit amet risus.</p>
        <p><a className="btn btn-secondary" href="/" role="button">View details »</a></p>
    </div>
  </div>

  </div> 



  <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow
          your mind.</span></h2>
        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis
          euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
          tellus ac cursus commodo.</p>
      </div>
      <div className="col-md-5">
        <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500"
          style={{width: "500 px" , height: "500 px"}} src="images/picture.jpg_large" data-holder-rendered="true"/>
      </div>
    </div>

    <hr className="featurette-divider"/>

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for
            yourself.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis
            euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
            tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5 order-md-1">
          <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500"
            src="images/picture1.jpeg" data-holder-rendered="true" style={{width: "500px", height: "500px"}} />
        </div>
      </div>

      <hr className="featurette-divider"/>

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span>
            </h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis
              euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
              tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500"
              src="images/picture2.jpeg" data-holder-rendered="true" style={{width: "500px", height: "500px"}} />
          </div>
        </div>





    





      <div className="container-fluid-fixed-bottom">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

          <ul>
            <p className=" text-white nav col-md-0 justify-content footerLogos">&copy; 2022 Valosense, Inc</p>
          </ul>

          <a href ="/" className="nav col-md-0 justify-content-center footerLogos"
            style={{ alignItems: "center", justifyontent: "center "}}>

            <img src="images/logo_white.png" style={{width: "80px", height: "80px"}}  alt="gen" /></a>


          <ul className="nav col-md-2 justify-content-end">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-white">Terms</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-white">Conditions</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-white">Contact</a></li>

          </ul>
        </footer>
      </div>





    </body>

    </div>
    
    







          );
};

          export default Main;
