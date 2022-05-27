import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Stats = () => {

  return (
    <div>
      <header>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <link rel="stylesheet" href="styles.css" />
        <nav className="navbar navbar-expand-lg navbar-Dark bg-DARK">
          <div className="container-fluid">
            <a className="navbar-brand" href="Index.html"><img src="Vs_VS Logo Combo.png" style={{height: 80, width: 150}} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="Index.html">Home</a>
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
                  <a className="nav-link" href="Stats.html"> My Stats &nbsp;</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Log-in.html"> Profile &nbsp;</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Log-in.html">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <style dangerouslySetInnerHTML={{__html: "\n\n          body {background-image: url(BG_Geo-Pink.png);background-size:cover;\n          color:#FFFFFF ; text-align:center}\n        " }} />
      </header>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{borderRadius: '1rem', backgroundColor: '#FF4457'}}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block" style={{borderRadius: '1rem'}}>
                  <img src="stat.jpg" alt="valorant logo" className="img-fluid" style={{borderRadius: '1rem', height: 545, width: 450}} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5" style={{backgroundColor: '#FF4457', borderRadius: '1rem'}}>
                    <link rel="stylesheet" type="text/css" href="Stats.css" />
                    <h1> Your Stats </h1>
                    <table>
                      <tbody><tr>
                          <th /><th>Metric</th><th>Score</th>
                        </tr>
                        <tr>
                          <td><img src="gun.png" align="center" /></td><td>Damage per Round</td><td>100</td>
                        </tr>
                        <tr>
                          <td><img src="scene.png" /></td><td>Kill/Death Ratio</td><td>120</td>
                        </tr>
                        <tr>
                          <td><img src="success.png" /></td><td>Win Rate</td><td>150</td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*footer*/}
      <div className="container-fluid-fixed-bottom">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <ul> <p className=" text-white nav col-md-0 justify-content footerLogos">© 2022 Valosense, Inc</p></ul>
          <a className="nav col-md-0 justify-content-center footerLogos" style={{alignItems: 'center', justifyContent: 'center'}}>
            <img src="Vs_VS Logo White.png" style={{height: 80, width: 80}} /></a>
          <ul className="nav col-md-2 justify-content-end">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Terms</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Conditions</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Contact</a></li>
          </ul>
        </footer>
      </div>
    </div>





  );
};

export default Stats;
