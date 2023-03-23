import whatsappImg from '../../../images/whatapp.svg';
import telegramImg from "../../../images/telegram.svg";
import viberImg from "../../../images/viber.svg";
import mapa from '../../../images/map.png';

export default function ContactSection() {

    return (
        <div className="contact-section">
            <div className="container">
                <h2 className="section__title text-center mb-lg-5">
                    Контакты
                </h2>
                <div className="row justify-content-between">
                    <div className="col col-lg-5 col-xl-4 ps-lg-5 pe-lg-4">
                        <ul className="list-unstyled">
                            <li className="mb-lg-4">
                                <h4 className="list-title">
                                    Мы работаем:
                                </h4>
                                <p className="list-item">
                                    Понедельник-пятница&nbsp;&mdash;<br />
                                    с&nbsp;09:00 до&nbsp;18:00<br />
                                    суббота&nbsp;&mdash; с&nbsp;09:00 до&nbsp;15:30<br />
                                    воскресенье&nbsp;&mdash; выходной
                                </p>
                            </li>
                            <li className="mb-lg-4">
                                <h4 className="list-title">
                                    Телефон:
                                </h4>
                                <p className="list-item">
                                    <div className="">
                                        <a href="tel:+905077060007" className="align-self-center me-2">+90&nbsp;507&nbsp;706&nbsp;00&nbsp;07</a>
                                        <a href="#" className="col text-decoration-none d-inline-block">
                                            <img src={whatsappImg} alt="whatsapp"/>
                                        </a>
                                        <a href="#" className="col text-decoration-none d-inline-block">
                                            <img src={telegramImg} alt="telegram" />
                                        </a>
                                        <a href="#" className="col text-decoration-none d-inline-block">
                                            <img src={viberImg} alt="viber" />
                                        </a>
                                    </div>
                                    <span className="d-inline-block">
                                        На&nbsp;связи 24/7
                                    </span>
                                </p>
                            </li>
                            <li className="mb-lg-4">
                                <h4 className="list-title">
                                    Электронная почта:
                                </h4>
                                <p className="list-item">
                                    <a href="mailto:info@citydeft.com">
                                        info@citydeft.com
                                    </a>
                                </p>
                            </li>
                            <li className="mb-lg-4">
                                <h4 className="list-title">
                                    Наш офис:
                                </h4>
                                <p className="list-item">
                                    Saray Mah. Oral Cad. 25/B &Ouml;zt&uuml;rk 2 Apt.&nbsp;Alanya&nbsp;/ Antalya
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="col col-lg-7 p-0 d-flex justify-content-end">
                        <img src={mapa} alt="map" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
