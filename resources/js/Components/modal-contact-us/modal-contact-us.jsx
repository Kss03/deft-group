import { Button, Modal, Form} from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState } from "react";

import whatsappImg from "../../../images/whatapp.svg";
import telegramImg from "../../../images/telegram.svg";
import viberImg from "../../../images/viber.svg";

export default function ModalContactUs() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
            <>
                {/* <!-- modal trigger --> */}
                <button type="button" className="btn contact-button px-xl-5 px-lg-3 py-2 me-xl-3 me-lg-1 rounded-3" data-toggle="modal" data-target="#headerContactModal">Связаться</button>

                {/* <!-- modal --> */}
                <div className="modal fade" id="headerContactModal" tabIndex="-1" role="dialog" aria-labelledby="headerContactModalTitle" aria-hidden="true">
                    <div className="mx-auto modal-dialog modal-dialog-centered contact-modal" role="document">
                        <div className="modal-content overflow-hidden">
                            <div className="modal-header p-lg-0 px-lg-5 px-5 py-1 pt-lg-4 row justify-content-end justify-content-lg-center position-relative border-0">
                                <div className="col-lg-1 col-10"></div>
                                <h5 className="modal-title col-lg-9 text-center justify-center" id="headerContactModalTitle">Связаться с&nbsp;нами</h5>
                                <button type="button" className="col-2 col-lg-1 close close-btn text-center" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="form d-flex flex-column mx-lg-5 align-items-center">

                                    <p className="body-title mb-1">Можно любым удобным способом:</p>
                                    <div className="links-area">
                                        <div className="row justify-content-between align-content-center pt-lg-2 pb-lg-2">
                                            <div className="col-auto col-lg-auto d-flex h6 fw-normal mb-0">
                                                <a href="tel:+905077060007" className="align-self-center">+90&nbsp;507&nbsp;706&nbsp;00&nbsp;07</a>
                                            </div>
                                            <div className="col-auto mx-auto col-lg-auto header__social-links row gx-1">
                                                <a href="#" className="col text-decoration-none d-inline-block">
                                                    <img src={whatsappImg} alt="whatsapp" />
                                                </a>
                                                <a href="#" className="col text-decoration-none d-inline-block">
                                                    <img src={telegramImg} alt="telegram" />
                                                </a>
                                                <a href="#" className="col text-decoration-none d-inline-block">
                                                    <img src={viberImg} alt="viber" />
                                                </a>
                                            </div>

                                            <div className=" col-auto col-lg-auto d-flex h6 fw-normal align-items-center mb-0">
                                                <a href="mailto:info@citydeft.com">
                                                    info@citydeft.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <p>Или оставьте свои контактные данные и мы свяжемся с вами</p>

                                    <div className="form-group">
                                        <input type="text" className="form-control mb-2 mb-lg-4" id="nameInputModal" placeholder="Введите имя" />
                                        <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="form-control mb-2 mb-lg-4" id="nameInputModal" placeholder="Введите номер телефона" />
                                    </div>

                                    <button type="button" className="btn btn-send rounded-pill px-lg-5">Отправить</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </>
    );
}
