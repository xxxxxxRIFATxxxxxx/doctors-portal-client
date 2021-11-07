import React, { useEffect, useState } from 'react';
import './Appointment.css';
import 'react-calendar/dist/Calendar.css';
import { Container, Spinner } from 'react-bootstrap';
import Calendar from 'react-calendar';
import Service from '../Service/Service';
import NavigationBar from '../NavigationBar/NavigationBar';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('./Appointment.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setIsLoading(false);
            });
    }, [selectedDate]);

    return (
        <div>
            <NavigationBar />
            <div className="appointment mb-5">
                <div className="appointment-bg mb-5">
                    <Container>
                        <div className="row row-cols-1 row-cols-lg-2 g-4">
                            <div className="col">
                                <h2 className="text-info appointment-title">Appointment</h2>

                                <div className="mt-4">
                                    <Calendar
                                        className="border-0 box-shadow border-radius"
                                        next2Label={null}
                                        prev2Label={null}
                                        onChange={setSelectedDate}
                                        value={selectedDate}
                                    />
                                </div>
                            </div>

                            <div className="col text-center">
                                <img className="img-fluid" src="https://i.ibb.co/sgC89nC/chair.png" alt="Doctors Chamber" />
                            </div>
                        </div>
                    </Container>
                </div>

                <div>
                    <Container>
                        <h4 className="text-info text-center mb-5">
                            Available Appointments on {selectedDate.toDateString()}
                        </h4>

                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {isLoading ? <Spinner className="mx-auto" animation="border" variant="info" /> : null}

                            {services.map(service => <Service
                                selectedDate={selectedDate.toDateString()}
                                key={service._id}
                                service={service}>
                            </Service>)}
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Appointment;