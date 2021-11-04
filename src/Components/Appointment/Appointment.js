import React, { useState } from 'react';
import './Appointment.css';
import 'react-calendar/dist/Calendar.css';
import { Container } from 'react-bootstrap';
import Calendar from 'react-calendar';

const Appointment = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className="appointment">
            <div className="appointment-bg mb-5">
                <Container>
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col">
                            <h2 className="text-info">Appointment</h2>

                            <div className="mt-4">
                                <Calendar
                                    className="border-0 box-shadow border-radius"
                                    next2Label={null}
                                    prev2Label={null}
                                    onChange={onChange}
                                    value={value}
                                />
                            </div>
                        </div>

                        <div className="col">
                            <img className="img-fluid" src="https://i.ibb.co/sgC89nC/chair.png" alt="Doctors Chamber" />
                        </div>
                    </div>
                </Container>
            </div>

            <div>
                <Container>
                    <h4 className="text-info text-center mb-5">
                        Available Appointments on {value.toDateString()}
                    </h4>

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {/* Service */}
                        <div className="col">
                            <div className="card h-100 border-info">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-info">
                                        Teeth Orthodontics
                                    </h5>

                                    <h6 className="card-text mb-1">
                                        8:00 AM - 9:00 AM
                                    </h6>

                                    <p className="text-muted small-text">
                                        10 SPACES AVAILABLE
                                    </p>

                                    <button className="btn btn-info text-white rounded-0 fw-bold">
                                        BOOK APPOINTMENT
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 border-info">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-info">
                                        Cosmetic Dentistry
                                    </h5>

                                    <h6 className="card-text mb-1">
                                        10:00 AM - 11:30 AM
                                    </h6>

                                    <p className="text-muted small-text">
                                        10 SPACES AVAILABLE
                                    </p>

                                    <button className="btn btn-info text-white rounded-0 fw-bold">
                                        BOOK APPOINTMENT
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 border-info">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-info">
                                        Teeth Cleaning
                                    </h5>

                                    <h6 className="card-text mb-1">
                                        5:00 PM - 6:30 PM
                                    </h6>

                                    <p className="text-muted small-text">
                                        10 SPACES AVAILABLE
                                    </p>

                                    <button className="btn btn-info text-white rounded-0 fw-bold">
                                        BOOK APPOINTMENT
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 border-info">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-info">
                                        Cavity Protection
                                    </h5>

                                    <h6 className="card-text mb-1">
                                        7:00 AM - 8:30 AM
                                    </h6>

                                    <p className="text-muted small-text">
                                        10 SPACES AVAILABLE
                                    </p>

                                    <button className="btn btn-info text-white rounded-0 fw-bold">
                                        BOOK APPOINTMENT
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 border-info">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-info">
                                        Teeth Orthodontics
                                    </h5>

                                    <h6 className="card-text mb-1">
                                        8:00 AM - 9:00 AM
                                    </h6>

                                    <p className="text-muted small-text">
                                        10 SPACES AVAILABLE
                                    </p>

                                    <button className="btn btn-info text-white rounded-0 fw-bold">
                                        BOOK APPOINTMENT
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 border-info">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-info">
                                        Cosmetic Dentistry
                                    </h5>

                                    <h6 className="card-text mb-1">
                                        10:00 AM - 11:30 AM
                                    </h6>

                                    <p className="text-muted small-text">
                                        10 SPACES AVAILABLE
                                    </p>

                                    <button className="btn btn-info text-white rounded-0 fw-bold">
                                        BOOK APPOINTMENT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Appointment;