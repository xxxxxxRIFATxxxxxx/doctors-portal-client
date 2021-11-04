import React, { useState } from 'react';
import './Appointment.css';
import 'react-calendar/dist/Calendar.css';
import { Container } from 'react-bootstrap';
import Calendar from 'react-calendar';

const Appointment = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className="appointment">
            <Container>
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col">
                        <h2>Appointment</h2>

                        <div className="mt-4">
                            <Calendar
                                className="border-0 box-shadow"
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
    );
};

export default Appointment;