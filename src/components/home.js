import './home.css'
import React, { useState } from 'react';
import CV from '../Documents/CV.pdf'


export const Home = () => {

    const image1 = require("../assets/photo.png")
    const image2 = require("../assets/scrooge2.png")
    const [image, setImage] = useState(image1)

    return (
        // Logo
        <div className="home">
            {/* HomePage Top Part */}
            <div class="row">
                <div class="col-xs-12 col-sm-12">
                    <div class="home-content">
                        <div className="home-principal-container">
                            <div className="home-photo-content">
                                <div class="row flex-v-align">
                                    <div class="col-sm-12 col-md-5 col-lg-5">
                                        <div class="home-photo">
                                            <div className="hp-inner">
                                                <img
                                                    src={image}
                                                    onMouseEnter={() => setImage(image2)}
                                                    onMouseLeave={() => setImage(image1)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="home-text">
                                <div class="col-sm-12 col-md-7 col-lg-7">
                                    <div class="home-text hp-left">
                                        <div class="owl-carousel text-rotation">
                                            <div class="item">
                                                <h4>Blockchain Engineer - Smart Contract dev</h4>
                                            </div>
                                        </div>

                                        <h1>JMaria</h1>
                                        <p>
                                            Blockchain protocols are changing the world by improving people's lives by offering transparency, security and decentralized transactions. All protocols are born from an idea and we all have ideas, but without the technical knowledge it is not possible to achieve the most important thing, to implement them.
                                        </p>
                                        <p>
                                            Due to the hours dedicated to the theoretical study of blockchain technology
                                            and my experience as a Blockchain Engineer both designing decentralized
                                            application architectures and developing Smart Contracts I am the ideal
                                            person with whom to <b>consult - audit - develop</b> your idea in an effective,
                                            efficient and secure way.
                                        </p>
                                        <p>
                                            <b>Now is the time to join this revolution</b> and discover how blockchain technology can improve your life and your business. Be part of the innovation and join the present of decentralized software.
                                        </p>
                                        <div class="home-buttons">
                                            <a
                                                href={CV}
                                                target="_blank"
                                                class="btn btn-primary"
                                            >Download CV</a>
                                            <a
                                                href="mailto:0xdevscrooge@gmail.com"
                                                target="_blank"
                                                class="btn btn-secondary"
                                            >Contact</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Services */}
                        <div class="row">
                            <div class="col-xs-12 col-sm-12">
                                <div class="p-50"></div>

                                <div class="block-title">
                                    <h2>Services</h2>
                                </div>
                            </div>
                        </div>


                        <div class="row-services">
                            <div class="col-xs-12 col-sm-6">
                                <div class="info-list-w-icon">
                                    <div class="info-block-w-icon">
                                        <div class="ci-icon">
                                            <i class="linecons linecons-pen"></i>
                                        </div>

                                        <div class="ci-text">
                                            <div className="services-name">Consulting</div>
                                            <p>
                                                Do you have an idea to develop but don't know what technical requirements you need? </p>
                                            <p>
                                                We schedule a call where we discuss how to transform your idea into software, focusing on the Smart Contracts part. At the end of the call you will have a clear picture of what types of Smart Contracts and what Smart Contracts architecture will be needed.
                                            </p>
                                        </div>
                                    </div>

                                    <div class="info-block-w-icon">
                                        <div class="ci-icon">
                                            <i class="linecons linecons-display"></i>
                                        </div>

                                        <div class="ci-text">
                                            <div className="services-name">Smart Contracts development</div>
                                            <p>
                                                After having a conversation with you about your idea and knowing that Smart Contracts are going to be needed, we start working on their implementation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6">
                                <div class="info-list-w-icon">
                                    <div class="info-block-w-icon">
                                        <div class="ci-icon">
                                            <i class="linecons linecons-shop"></i>
                                        </div>

                                        <div class="ci-text">
                                            <div className="services-name">Smart Contracts audits</div>
                                            <p>
                                                Have you turned an idea into software (Smart Contracts) but still have doubts about its correct behavior? Reviewing your Smart Contracts by a third party <b>is necessary</b> to prevent vulnerabilities.  This audit service is offered in two modalities.                           </p>
                                            <p>
                                                <b>Simple:</b> The code is reviewed by searching for the existence of the most common vulnerabilities.
                                            </p>
                                            <p>
                                                <b>Complex:</b> In addition of checking for vulnerabilities, custom developed scripts are used to test the operation of the code.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div class="row">
                            <div class="col-xs-12 col-sm-12">

                                <div class="block-title">
                                    <h2>Hire</h2>
                                </div>

                                <p>The prices for all services are custom-designed in a specialized way for each project
                                    depending on its size and complexity. A quotation will be given after contact.</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12 col-sm-12">
                                <div class="fw-pricing clearfix row">

                                    <div class="fw-package-wrap col-md-6 col-xl-4 highlight-col">
                                        <div class="fw-package">

                                            <div class="fw-pricing-row">
                                                <span>Consulting</span>
                                            </div>

                                            <div class="fw-button-row">
                                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSees9RL4-zXmWkWsY_tZ4-52JL1AoGjYH_1ajjuizNDV5PFdg/viewform?usp=sf_link" target="_blank" class="btn btn-primary"
                                                >Hire</a>
                                            </div>

                                            <li class="fw-default-row">1 to 1 call</li>
                                            <li class="fw-default-row">Solving doubts about technical implementation</li>
                                            <li class="fw-default-row">Information on which Smart Contracts are required</li>
                                            <li class="fw-default-row">Preliminary architecture design of Smart Contracts</li>
                                            <div class="fw-default-row"></div>



                                        </div>
                                    </div>

                                    <div class="fw-package-wrap col-md-6 col-xl-4 highlight-col">
                                        <div class="fw-package">


                                            <div class="fw-pricing-row">
                                                <span>Simple Audit</span>
                                            </div>

                                            <div class="fw-button-row">
                                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSees9RL4-zXmWkWsY_tZ4-52JL1AoGjYH_1ajjuizNDV5PFdg/viewform?usp=sf_link" target="_blank" class="btn btn-primary"
                                                >Hire</a>
                                            </div>

                                            <li class="fw-default-row">Code review</li>
                                            <li class="fw-default-row">Shallow search for vulnerability detection</li>
                                            <li class="fw-default-row">Tips on improving code efficiency</li>
                                            <li class="fw-default-row">Report on the above points and how to solve them</li>
                                            <div class="fw-default-row"></div>
                                        </div>
                                    </div>

                                    <div class="fw-package-wrap col-md-6 col-xl-4 highlight-col">
                                        <div class="fw-package">


                                            <div class="fw-pricing-row">
                                                <span>Complex Audit</span>
                                            </div>

                                            <div class="fw-button-row">
                                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSees9RL4-zXmWkWsY_tZ4-52JL1AoGjYH_1ajjuizNDV5PFdg/viewform?usp=sf_link" target="_blank" class="btn btn-primary"
                                                >Hire</a>
                                            </div>

                                            <li class="fw-default-row">Code review</li>
                                            <li class="fw-default-row">Deep search for vulnerability detection</li>
                                            <li class="fw-default-row">Testing with personalized scripts</li>
                                            <li class="fw-default-row">Tips on improving code efficiency</li>
                                            <li class="fw-default-row">Report on detected vulnerabilities classified on low, medium and high severity</li>
                                            <li class="fw-default-row">Report on the above points and how to solve them</li>
                                        </div>
                                    </div>

                                    <div class="fw-package-wrap col-md-6 col-xl-4 highlight-col">
                                        <div class="fw-package">

                                            <div class="fw-pricing-row">
                                                <span>Smart Contracts Development</span>
                                            </div>

                                            <div class="fw-button-row">
                                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSees9RL4-zXmWkWsY_tZ4-52JL1AoGjYH_1ajjuizNDV5PFdg/viewform?usp=sf_link" target="_blank" class="btn btn-primary"
                                                >Hire</a >
                                            </div>

                                            <li class="fw-default-row">Personalized development environment</li>
                                            <li class="fw-default-row">Development of the needed Smart Contracts</li>
                                            <li class="fw-default-row">Development of the needed scripts to support the Smart Contract</li>
                                            <li class="fw-default-row">Unit testing for the Smart Contract</li>
                                            <li class="fw-default-row">Deployment scripts</li>
                                            <li class="fw-default-row">Smart Contract deployment</li>
                                            <div class="fw-default-row"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
