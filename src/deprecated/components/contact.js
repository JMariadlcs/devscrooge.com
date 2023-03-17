import './contact.css'

export const Contact = () => {
    return (
        <>
            <div id="main" class="site-main">
                <div id="main-content" class="single-page-content">
                    <div id="primary" class="content-area">
                        <div class="page-title">
                            <div class="contact-header">
                                <h1>Contact</h1>
                                <div class="page-subtitle">
                                    <h4>Contact me</h4>
                                </div>
                            </div>
                        </div>

                        <div
                            id="content"
                            class="page-content site-content single-post"
                            role="main"
                        >
                            <div class="row">
                                <div class="col-xs-12 col-sm-4">
                                    <div className='contact-sidebar'>
                                        <div id="info_list_1" class="info-list-w-icon">
                                            <div class="info-block-w-icon">
                                                <div class="ci-icon">
                                                    <i class="linecons linecons-phone"></i>
                                                </div>
                                                <div class="ci-text">
                                                    <a href="https://www.linkedin.com/in/jmariadlcs/" target="_blank">
                                                        LinkedIn
                                                    </a>
                                                    <p className="contact-text">You can contact me on LinkedIn</p>
                                                </div>
                                            </div>

                                            <div class="info-block-w-icon">
                                                <div class="ci-icon">
                                                    <i class="linecons linecons-location"></i>
                                                </div>
                                                <div class="ci-text">
                                                    <a href="https://twitter.com/devscrooge" target="_blank">@devScrooge</a>
                                                    <p className="contact-text">You can contact me on Twitter.</p>
                                                </div>
                                            </div>

                                            <div class="info-block-w-icon">
                                                <div class="ci-icon">
                                                    <i class="linecons linecons-phone"></i>
                                                </div>
                                                <div class="ci-text">
                                                    <a href="mailto:0xdevscrooge@gmail.com" target="_blank">
                                                        0xdevscrooge@gmail.com
                                                    </a>
                                                    <p className="contact-text">You can send me an email</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="question-contact">
                                    <div class="col-xs-12 col-sm-8">
                                        <div class="block-title">
                                            <h2>How Can I Help You?</h2>
                                        </div>
                                        <a
                                            href="mailto:0xdevscrooge@gmail.com"
                                            target="_blank"
                                            class="btn btn-primary"
                                        >Send message</a >
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}