
import React from 'react';
import '../../App.css';



class HomePage extends React.Component {
    state = {
        box1: {
            color: "darkslategrey",
            shape: 0,    //border radius; 0-50%
            count: 1
        },
        box2: {
            color: "darkslategrey",
            shape: 50,
            count: 1
        }

    }

    box1Click = (event) => {
        let myBox = this.state.box1;
        if (this.state.box1.count % 4 === 1) {
            myBox.color = "green";
            console.log(myBox.count);
            myBox.count++;
            console.log(myBox.count);
            this.setState({ box1: myBox })

        } else if (this.state.box1.count % 4 === 2) {
            myBox.color = "blue";
            myBox.count++;
            this.setState({ box1: myBox })

        } else if (this.state.box1.count % 4 === 3) {
            myBox.color = "red";
            myBox.count++;
            this.setState({ box1: myBox })

        } else  {
            myBox.color = "darkslategrey";
            myBox.count++;
            this.setState({ box1: myBox })
        }

    }
    box2Click = (event) => {
        let myBox = this.state.box2;
        if (this.state.box2.count % 2 === 0) {
            myBox.shape = 50;
            myBox.count++;
            this.setState({ box2: myBox })

        

        } else  {
            myBox.shape = 0;
            myBox.count++;
            this.setState({ box2: myBox })
        }
    }


   
    render() {
        return (
            <div>





                <div className="container-xl">
                    <div className="row ">
                        <div className="col-12 welcome-div">
                            <h5>Welcome to My GitHub Pages Portal.</h5>
                            <p>If you found this page while searching for my porfolio, you can find that <a href="https://gormthewyrm.github.io/react-portfolio/">Here</a></p>
                            <p>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md left-div mr-md-1">
                            <h4 className="sm-top-mg"><em>About Me</em></h4>
                            <p>
                                Geordin Soucie grew up in rural Massachusetts in a time when the internet was confined to more
                                populated areas.
                    </p>
                            <p>
                                The son of an IT network professional and interior design specialist, Geordin developed an
                                interest in design at an early age.
                    </p>
                            <p>However, it was not until his junior year in college that he first discovered the joy of coding.
                            An Intro to Computer Science class at Clarkson University taught Geordin the joy of C++.
                    </p>
                            <p>In 2019, after determining that the Park Service demanded too many weekend hours,
                            Geordin signed up for a Web Development Bootcamp through the University of Richmond
                            He graduated in August 2020 in the midst of the Covid-19 pandemic and began to seek more
                            permanent employment.
                    </p>

                            <h5>Passion and Hobbies</h5>
                            <p>Geordin is a student of history, a medieval enthusiast and a passionate learner. He loves
                        historical societies, sword combat and medieval fantasy.</p>

                            <p>
                                Hobbies include reading, writing, game design, 3D Modeling and attending events such as those
                                held by
                        <a href="sca.org" style={{ color: "aliceblue" }}> the Society of Creative Anachronism</a>.
                    </p>

                            <h5>Projects</h5>
                            <ul>
                                <li>
                                    Check out the <a href="https://gormthewyrm.github.io/react-portfolio/">portfolio page</a> for a list of coding projects.
                        </li>
                                {/* <li>
                                    There are no games available at this time.
                        </li>
                                <li>
                                    Geordin does not yet have writing samples available for public viewing.
                        </li>
                                <li>
                                    The art gallery has not been set up yet. Geordin is still relearning Blender and rigging.
                        </li> */}

                            </ul>




                        </div>
                        <div className="col-md right-div ml-md-1">
                            <h4 className="sm-top-mg"><em>What does Geordin do, anyway?</em></h4>


                            <p>As a full stack developer I am capable of creating what is seen on a webpage as well as
                            connecting the
                        data behind the scenes.</p>
                            <p>Front end development includes HTML, CSS and Javascript.
                    </p>
                            <p>
                                HTML tells your internet browser (google chrome for example), what is on the page you visit.
                    </p>
                            <p>
                                CSS is used to tell the browser <em>how</em> to display those elements.
                    </p>
                            <p>JavaScript allows for interaction with content by letting me make changes to the page.</p>
                            <h5>Example</h5>
                            <div className="row">
                                <div className="col-sm">
                                    <div className="square-sm" style={{ backgroundColor: this.state.box1.color, borderRadius: this.state.box1.shape + "%" }}
                                    onClick={this.box1Click}
                                    >Click Me!</div>
                                </div>
                                <div className="col-sm">
                                    <div className="square-sm" style={{ backgroundColor: this.state.box2.color, borderRadius: this.state.box2.shape + "%" }}
                                    onClick={this.box2Click}
                                    >Click Me!</div>
                                </div>
                            </div>
                            <br />
                            <p>According to the HTML, there are two objects above this text. I used CSS to give the objects a
                            square shape and color.
                        Then I used Javascript to change the CSS when you click on them. <br />
                                            Go ahead, try it out.
                    </p>
                            <p>Other technologies mostly just development easier by expanding upon those 3 basic tools.
                            An example would be bootstrap, which uses HTML, CSS and Javascript to make more complicated
                            components easier to import.
                    </p>
                            <p>
                                Thanks to bootstrap, these two columns automatically resize based on screen size. (If you only
                        see a single column, its because you are viewing this on a small screen.)</p>
                            <p> Backend development involves setting up servers and making the website connect to the URL.
                            Backend development also allows data to be saved and stored in a database. This allows multiple
                        users to access and manipulate the same data.</p>

                            <hr />
                            <p>Backend code expands upon what I can change.
                            It allows me to save data in a database as well as restrict who can see that data.
                    </p>
                            <p>Right now, the colors of the boxes reset when you reload the page.
                            If you click the first box and it turns red, it will not be red for the next person who visits.
                    </p>
                            <p>Backend code allows me to make changes like that permanent, and on a much larger scale.</p>
                            <p>Of course, there is a lot more it can do, but if I taught you everything here, I'd be out of a job, wouldn't I?</p>


                            <div className="row right-text">
                                <ol>



                                </ol>
                            </div>
                        </div>
                    </div>



                </div>

            </div>


        )
    };
}

export default HomePage;