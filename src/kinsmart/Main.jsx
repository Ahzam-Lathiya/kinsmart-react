import './App.css';
import kinsmart from '../assets/kinsmart.png';
import jeep from '../assets/jeep.jpg';
import buggati from '../assets/bugatti_chiron.png';
import audi_r8 from '../assets/audi_r8(2020).jpg';

function Body(){
    return (
        <div className="main-body">
            <div className="gallery-main">
                <div className="gallery-content">
                    <div className="content-heading">
                        <hr style={{ backgroundColor: 'crimson',height: '1px',border: '1px solid crimson'}}/>
                        <p>Bugatti Chiron Supersport</p>
                    </div>
                    <div className="content-details">
                        <p>Scale 1:38</p>
                        <p>Item No.KT5423</p>
                        <a href="javascript:void(0);">
                            DISCOVER
                        </a>
                    </div>

                </div>
                <div className="gallery-img">
                    <img src={buggati} height="auto"/>
                </div>
            </div>
            <div className="featured-main">
                <div className="featured-header">
                    <h2>New Products</h2>
                </div>
                <div className="featured-body">
                    <div className="featured-element">
                        <div className="element-img-div">
                            <img src={audi_r8} height="auto"/>
                        </div>
                        <div className="element-content-div">
                            <div>
                                <a href="javascript:void(0)"><h4>KT5422F</h4></a>
                            </div>
                            <div>
                            <p>2020 Audi r8 Coupe</p>
                            </div>
                            <div>
                                <p>1:36</p>
                            </div>
                        </div>

                    </div>
                    <div className="featured-element">
                        <div className="element-img-div">
                            <img src={audi_r8} height="auto"/>
                        </div>
                        <div className="element-content-div">
                            <div>
                                <a href="javascript:void(0)"><h4>KT5422F</h4></a>
                            </div>
                            <div>
                            <p>2020 Audi r8 Coupe</p>
                            </div>
                            <div>
                                <p>1:36</p>
                            </div>
                        </div>

                    </div>
                    <div className="featured-element">
                        <div className="element-img-div">
                            <img src={audi_r8} height="auto"/>
                        </div>
                        <div className="element-content-div">
                            <div>
                                <a href="javascript:void(0)"><h4>KT5422F</h4></a>
                            </div>
                            <div>
                            <p>2020 Audi r8 Coupe</p>
                            </div>
                            <div>
                                <p>1:36</p>
                            </div>
                        </div>

                    </div>
                    <div className="featured-element">
                        <div className="element-img-div">
                            <img src={jeep} height="auto"/>
                        </div>
                        <div className="element-content-div">
                            <div>
                                <a href="javascript:void(0)"><h4>KT5422F</h4></a>
                            </div>
                            <div>
                            <p>Jeep</p>
                            </div>
                            <div>
                                <p>1:36</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="exhibition-main">
                <div className="exhibition-headings">
                    <h2>
                        Exhibition
                    </h2>
                    <h5>
                        KINSMART
                    </h5>
                </div>

                <div className="date-place-div">
                    <div className="useless-div" style={{width: '60px'}}>

                    </div>
                    <div className="content">
                        <p>
                            6-9 January 2025
                        </p>
                        <p className="venue-data">
                            2025 Hong Kong Toys & Games Fair
                        </p>
                        <hr/>
                    </div>
                    
                </div>
                <div className="detail-info-div">
                    <div>
                        <div className="icon-div"></div>
                        <p>
                            6 January 2025
                        </p>
                    </div>
                    <div>
                        <div className="icon-div"></div>
                        <p>
                            Hong Kong Convention & Exhibition Centre
                        </p>
                    </div>
                    <div>
                        <div className="icon-div"></div>
                        <p>
                            Brand Name Gallery, Hall 1
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

function Head(){
    return (
        <div className="main-header">
            <div className="left-side-header">
                <a href="/">
                    <img id="site-logo" src={kinsmart} alt="Image here" height="auto" />
                </a>
            </div>
            <div className="right-side-header">
                <div className="another-div">
                    <div className="nav-div">
                        <ul id="navbar-list">
                            <li className="navbar-element">
                                <a href="/">HOME</a>
                            </li>
                            <li className="navbar-element">
                                <a href="/">NEW PRODUCTS</a>
                                
                            </li>
                            <li className="navbar-element">
                                <a href="/">KINSMART</a>
                                
                            </li>
                            <li className="navbar-element">
                                <a href="/">KINSFUN</a>
                                
                            </li>
                            <li className="navbar-element">
                                <a href="/">ABOUT US</a>
                                
                            </li>
                            <li className="navbar-element">
                                <a href="/">CONTACT US</a>
                                
                            </li>
                        </ul>
                    </div>
                
                    <div className="search-bar-div">
                        <input type="text" placeholder="Search..."/>
                        <button type="button">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Foot(){
    return (
        <div className="main-footer">
            <div className="social-media-holder">
                <ul>
                    <li className="social-tag-item navbar-element">
                        <a>
                            <div>
                                f
                            </div>
                        </a>
                    </li>
                    <li className="social-tag-item navbar-element">
                        <a>
                            <div>
                                t
                            </div>
                        </a>
                    </li>
                    <li className="social-tag-item navbar-element">
                        <a>
                            <div>
                                @
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
            <div className="about-footer">
                <p>&copy;&nbsp; 2024 Kinsmart.com All Rights Reserved</p>
            </div>
        </div>
    );
}

export default function Main(){
    return (
        <div className="main-main">
            <Head/>
            <Body/>
            <Foot/>
        </div>
    );
}
