import React from 'react';
import './style.css';

function Linkdin() {
    return (
        <div>
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="style.css" />
                {/* Font Awesome CDN */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <title>Linkedin</title>
            </head>
            <body>
                {/* Navbar */}
                <nav>
                    <div className="wrapper">
                        <div className="left">
                            <div className="logo">
                                <i className="fa-brands fa-linkedin"></i>
                            </div>
                            <div className="input">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input
                                    type="search"
                                    placeholder="Search for job, Skills & Companies..."
                                />
                            </div>
                        </div>
                        <div className="right">
                            <div class="home">
                                <i class="fa-solid fa-house"></i>
                                <h6>Home</h6>
                            </div>
                            <div class="network">
                                <i class="fa-solid fa-user-group"></i>
                                <h6>My Network</h6>
                            </div>
                            <div class="jobs">
                                <i class="fa-solid fa-suitcase"></i>
                                <h6>Jobs</h6>
                            </div>
                            <div class="message">
                                <i class="fa-solid fa-message"></i>
                                <h6>Messaging</h6>
                            </div>
                            <div class="notification">
                                <i class="fa-solid fa-bell"></i>
                                <h6>Notifications</h6>
                            </div>
                            <div class="me">
                                <i class="fa-solid fa-user"></i>
                                <div class="down">
                                    <h6>Me</h6>
                                    <i class="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <div class="work">
                                <i class="fa-solid fa-braille"></i>
                                <div class="down">
                                    <h6>Work</h6>
                                    <i class="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <a href="#">Try Premium for free</a>
                        </div>
                    </div>
                </nav>

                {/* ... (Rest of your HTML code) */}


                <div class="container">
                    <aside>
                        <div class="sidebar">
                            <div class="top"></div>
                            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1559264531.1691417508&semt=ais" alt="" />

                            <div class="profile">
                                <a href="#">Akshay R Verma</a>
                                <small>Front End Web Developer & Designer</small>
                                <hr id="profile"></hr>
                            </div>
                            <div class="view">
                                <div class="views">
                                    <h6>Who viewed your profile</h6>
                                    <a href="#">42</a>
                                </div>
                                <div class="views">
                                    <h6>View of your post</h6>
                                    <a href="#">64</a>
                                </div>
                                <hr id="view"></hr>
                            </div>
                            <div class="premium">
                                <h6>Access exclusive tools & insights</h6>
                                <a href="#"><i class="fa-solid fa-box"></i>Try Premium for free</a>
                                <hr id="premium"></hr>
                            </div>
                            <div class="items">
                                <i class="fa-solid fa-bookmark"></i>
                                <h6>My Items</h6>
                            </div>
                        </div>

                        <div class="recent_jobs">
                            <div class="recent">
                                <h6>Recent</h6>
                                <div class="one">
                                    <i class="fa-solid fa-users"></i>
                                    <h6>Web Designer, HTML & CSS...</h6>
                                </div>
                                <div class="one">
                                    <i class="fa-solid fa-users"></i>
                                    <h6>The Flexbox Jobs...</h6>
                                </div>
                                <div class="one">
                                    <i class="fa-solid fa-users"></i>
                                    <h6>Front End Developer Group</h6>
                                </div>
                                <div class="one">
                                    <i class="fa-solid fa-users"></i>
                                    <h6>UI Developer / Front End...</h6>
                                </div>
                            </div>
                            <div class="groups">
                                <h5>Groups</h5>
                                <div class="two">
                                    <i class="fa-solid fa-users"></i>
                                    <h6>Web Designer, HTML & CSS...</h6>
                                </div>
                                <div class="two">
                                    <i class="fa-solid fa-users"></i>
                                    <h6>The Flexbox Jobs...</h6>
                                </div>
                                <div class="two">
                                    <i class="fa-solid fa-users"></i>
                                    <h6>Front End Developer Group</h6>
                                </div>
                                <div class="show">
                                    <h6>Show more</h6>
                                    <i class="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <div class="events">
                                <h6>Events</h6>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="discover">
                                <a href="#">Discover more</a>
                            </div>
                        </div>
                    </aside>


                    <main>
                        <div class="main_section">
                            <div id="close"><i class="fa-solid fa-xmark"></i></div>
                            <div class="event">
                                <h3>Upcoming event from LinkedIn</h3>
                            </div>
                            <div class="box">
                                <img src="https://i.ibb.co/hKqkSVV/event.png" alt=""></img>
                                    <div class="content">
                                        <p>Join the next Career Talks virtual event to learn effective strategies for re-entering the workforce after taking a break</p>
                                    </div>
                                    <button class="btn">Learn more</button>
                            </div>
                        </div>
                        <div class="media">
                            <div class="search">
                                <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1559264531.1691417508&semt=ais" alt=""></img>
                                    <input type="search" placeholder="Start a post"></input>
                                    </div>
                                    <div class="posts">
                                        <div class="post">
                                            <i class="fa-solid fa-image"></i>
                                            <h5>Photo</h5>
                                        </div>
                                        <div class="post">
                                            <i class="fa-solid fa-video"></i>
                                            <h5>Video</h5>
                                        </div>
                                        <div class="post">
                                            <i class="fa-solid fa-briefcase"></i>
                                            <h5>Job</h5>
                                        </div>
                                        <div class="post">
                                            <i class="fa-solid fa-pen"></i>
                                            <h5>Write Article</h5>
                                        </div>
                                    </div>
                            </div>
                    </main>


                    <div class="right_side">
                        <div class="news">
                            <h4>Linkedin News</h4>
                            <i class="fa-solid fa-circle-info"></i>
                        </div>
                        <div class="latest_news">
                            <div class="one">
                                <i class="fa-solid fa-circle"></i>
                                <h5>Preparing for virtual interviews</h5>
                            </div>
                            <div class="two">
                                <small>1d ago</small>
                            </div>
                        </div>
                        <div class="latest_news">
                            <div class="one">
                                <i class="fa-solid fa-circle"></i>
                                <h5>Biden visits US troops in Poland</h5>
                            </div>
                            <div class="two">
                                <small>13hr ago</small>
                            </div>
                        </div>
                        <div class="latest_news">
                            <div class="one">
                                <i class="fa-solid fa-circle"></i>
                                <h5>What Indian customers are spending on</h5>
                            </div>
                            <div class="two">
                                <small>1d ago</small>
                            </div>
                        </div>
                        <div class="latest_news">
                            <div class="one">
                                <i class="fa-solid fa-circle"></i>
                                <h5>Create your own career luck</h5>
                            </div>
                            <div class="two">
                                <small>3d ago</small>
                            </div>
                        </div>
                        <div class="latest_news">
                            <div class="one">
                                <i class="fa-solid fa-circle"></i>
                                <h5>The latest in the startup world</h5>
                            </div>
                            <div class="two">
                                <small>3d ago</small>
                            </div>
                        </div>
                        <div class="show_more">
                            <h5>Show more</h5>
                            <i class="fa-solid fa-angle-down"></i>
                        </div>
                    </div>

                </div>
            </body>
        </div>
    );
}

export default Linkdin;


