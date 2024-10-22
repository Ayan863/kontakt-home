import React, { useState } from "react";
import "./Magazalar.css";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const Magazalar = () => {
  const [activeSection, setActiveSection] = useState('baku');


  const handleButtonClick = (section) => {
    setActiveSection(section);
  };
  return (
    <>
    <Header/>
      <section id="store" className="magazalar">
        <div className="magazalar-top">
          <h1 className="magazalar-h1">Mağazalarımız</h1>
        </div>

        <div className="map-magaza">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1370972.154798971!2d47.51275921263635!3d40.48259829293837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030873df9684fcd%3A0x44c7e8d98597a6f!2sKontakt%20%22Azadl%C4%B1q%20metrosu%22!5e0!3m2!1sen!2saz!4v1729423131014!5m2!1sen!2saz"
            width="1080"
            height="600"
            className="map-iframe"
            title="Responsive google Map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="lastpart-main">
          <div className="last-part">

            <div className="button-container">
              <button className='lastpart-btn' onClick={() => handleButtonClick('baku')}>Bakı</button>
              <button className='lastpart-btn' onClick={() => handleButtonClick('regions')}>Regionlar</button>
              <button className='lastpart-btn' onClick={() => handleButtonClick('georgia')}>Gürcüstan</button>
            </div>

            <div className="contentlast-container">

              {activeSection === 'baku' && (

                <div className='mainpart5'>
                  <div className="content4">
                    <div className="part5">
                      <h3 className='part5-h3'>Kontakt SMART "28 may metrosu"</h3>
                      <p className='part5-p'>Nəsimi r-nu, Fizuli küç., 47-55  </p>
                      <p className='part5-p2'>İş saatları: <span className='part5-span'>10:00-dan 21:00-dək</span></p>
                    </div>
                  </div>

                  <div className="content4">
                    <div className="part5">
                      <h3 className='part5-h3'>Kontakt SMART "Sahil metrosu"</h3>
                      <p className='part5-p'>Səbail r-nu, Ü. Hacıbəyov küç. və Bülbül prospektin kəsişməsi, 207 saylı məhəllə </p>
                      <p className='part5-p2'>İş saatları: <span className='part5-span'>10:00-dan 21:00-dək</span></p>
                    </div>
                  </div>

                  <div className="content4">
                    <div className="part5">
                      <h3 className='part5-h3'>Kontakt SMART "Sahil metrosu"</h3>
                      <p className='part5-p'>Səbail r-nu, Ü. Hacıbəyov küç. və Bülbül prospektin kəsişməsi, 207 saylı məhəllə </p>
                      <p className='part5-p2'>İş saatları: <span className='part5-span'>10:00-dan 21:00-dək</span></p>
                    </div>
                  </div>

                  <div className="content4">
                    <div className="part5">
                      <h3 className='part5-h3'>Kontakt SMART "Sahil metrosu"</h3>
                      <p className='part5-p'>Səbail r-nu, Ü. Hacıbəyov küç. və Bülbül prospektin kəsişməsi, 207 saylı məhəllə </p>
                      <p className='part5-p2'>İş saatları: <span className='part5-span'>10:00-dan 21:00-dək</span></p>
                    </div>
                  </div>


                  <div className="content4">
                    <div className="part5">
                      <h3 className='part5-h3'>Kontakt SMART "Sahil metrosu"</h3>
                      <p className='part5-p'>Səbail r-nu, Ü. Hacıbəyov küç. və Bülbül prospektin kəsişməsi, 207 saylı məhəllə </p>
                      <p className='part5-p2'>İş saatları: <span className='part5-span'>10:00-dan 21:00-dək</span></p>
                    </div>
                  </div>


                  <div className="content4">
                    <div className="part5">
                      <h3 className='part5-h3'>Kontakt SMART "Sahil metrosu"</h3>
                      <p className='part5-p'>Səbail r-nu, Ü. Hacıbəyov küç. və Bülbül prospektin kəsişməsi, 207 saylı məhəllə </p>
                      <p className='part5-p2'>İş saatları: <span className='part5-span'>10:00-dan 21:00-dək</span></p>
                    </div>
                  </div>


                  <div className="content4">
                    <div className="part5">
                      <h3 className='part5-h3'>Kontakt SMART "Sahil metrosu"</h3>
                      <p className='part5-p'>Səbail r-nu, Ü. Hacıbəyov küç. və Bülbül prospektin kəsişməsi, 207 saylı məhəllə </p>
                      <p className='part5-p2'>İş saatları: <span className='part5-span'>10:00-dan 21:00-dək</span></p>
                    </div>
                  </div>


                  <div className="content4">
                    <div className="part5">
                      <h3 className='part5-h3'>Kontakt SMART "Sahil metrosu"</h3>
                      <p className='part5-p'>Səbail r-nu, Ü. Hacıbəyov küç. və Bülbül prospektin kəsişməsi, 207 saylı məhəllə </p>
                      <p className='part5-p2'>İş saatları: <span className='part5-span'>10:00-dan 21:00-dək</span></p>
                    </div>
                  </div>


                </div>
              )}
              {activeSection === 'regions' && (
                <div className='mainpart5'>
                  <div className="content4">
                    <div className="part5">
                      <h3 className='part5-h3'>Kontakt SMART "Sahil metrosu"</h3>
                      <p className='part5-p'>Səbail r-nu, Ü. Hacıbəyov küç. və Bülbül prospektin kəsişməsi, 207 saylı məhəllə </p>
                      <p className='part5-p2'>İş saatları: <span className='part5-span'>10:00-dan 21:00-dək</span></p>
                    </div>
                  </div>

                  <div className="content4">
                    <div className="part5">
                      <h3 className='part5-h3'>Kontakt SMART "Sahil metrosu"</h3>
                      <p className='part5-p'>Səbail r-nu, Ü. Hacıbəyov küç. və Bülbül prospektin kəsişməsi, 207 saylı məhəllə </p>
                      <p className='part5-p2'>İş saatları: <span className='part5-span'>10:00-dan 21:00-dək</span></p>
                    </div>
                  </div>

                  <div className="content4">
                    <div className="part5">
                      <h3 className='part5-h3'>Kontakt SMART "Sahil metrosu"</h3>
                      <p className='part5-p'>Səbail r-nu, Ü. Hacıbəyov küç. və Bülbül prospektin kəsişməsi, 207 saylı məhəllə </p>
                      <p className='part5-p2'>İş saatları: <span className='part5-span'>10:00-dan 21:00-dək</span></p>
                    </div>
                  </div>

                  <div className="content4">
                    <div className="part5">
                      <h3 className='part5-h3'>Kontakt SMART "Sahil metrosu"</h3>
                      <p className='part5-p'>Səbail r-nu, Ü. Hacıbəyov küç. və Bülbül prospektin kəsişməsi, 207 saylı məhəllə </p>
                      <p className='part5-p2'>İş saatları: <span className='part5-span'>10:00-dan 21:00-dək</span></p>
                    </div>
                  </div>


                  <div className="content4">
                    <div className="part5">
                      <h3 className='part5-h3'>Kontakt SMART "Sahil metrosu"</h3>
                      <p className='part5-p'>Səbail r-nu, Ü. Hacıbəyov küç. və Bülbül prospektin kəsişməsi, 207 saylı məhəllə </p>
                      <p className='part5-p2'>İş saatları: <span className='part5-span'>10:00-dan 21:00-dək</span></p>
                    </div>
                  </div>




                </div>
              )}


              {activeSection === 'georgia' && (
                <div className='mainpart5'>
                  <div className="content4">
                    <div className="part5">
                      <h3 className='part5-h3'>Kontakt "Dəniz Mall"</h3>
                      <p className='part5-p'>Nərimanov r-nu, F. X. Xoyski pr., Gənclik Mall AVM, -1-ci mərtəbə  </p>
                      <p className='part5-p2'>İş saatları: <span className='part5-span'>10:00-dan 21:00-dək</span></p>
                    </div>
                  </div>

                  <div className="content4">
                    <div className="part5">
                      <h3 className='part5-h3'>Kontakt SMART "Sahil metrosu"</h3>
                      <p className='part5-p'>Səbail r-nu, Ü. Hacıbəyov küç. və Bülbül prospektin kəsişməsi, 207 saylı məhəllə </p>
                      <p className='part5-p2'>İş saatları: <span className='part5-span'>10:00-dan 21:00-dək</span></p>
                    </div>
                  </div>

                  <div className="content4">
                    <div className="part5">
                      <h3 className='part5-h3'>Kontakt SMART "Sahil metrosu"</h3>
                      <p className='part5-p'>Səbail r-nu, Ü. Hacıbəyov küç. və Bülbül prospektin kəsişməsi, 207 saylı məhəllə </p>
                      <p className='part5-p2'>İş saatları: <span className='part5-span'>10:00-dan 21:00-dək</span></p>
                    </div>
                  </div>

                  <div className="content4">
                    <div className="part5">
                      <h3 className='part5-h3'>Kontakt SMART "Sahil metrosu"</h3>
                      <p className='part5-p'>Səbail r-nu, Ü. Hacıbəyov küç. və Bülbül prospektin kəsişməsi, 207 saylı məhəllə </p>
                      <p className='part5-p2'>İş saatları: <span className='part5-span'>10:00-dan 21:00-dək</span></p>
                    </div>
                  </div>






                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Magazalar;
