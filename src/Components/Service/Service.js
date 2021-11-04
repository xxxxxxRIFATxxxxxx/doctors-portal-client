import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import './Service.css';

const Service = props => {
    const { title, time, space } = props.service;
    const history = useHistory();

    // For Form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.serviceName = title;

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    history.push('/dashboard');
                    reset();
                    handleClose();
                };
            });
    };

    // For Date
    const dateObj = props.selectedDate;
    let getDate = dateObj.getDate();

    if (getDate.toString().length < 2) {
        getDate = `0${dateObj.getDate()}`;
    };
    const date = `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${getDate}`;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="col service">
            <div className="card h-100 border-info">
                <div className="card-body text-center">
                    <h5 className="card-title text-info">
                        {title}
                    </h5>

                    <h6 className="card-text mb-1">
                        {time}
                    </h6>

                    <p className="text-muted small-text">
                        {space} SPACES AVAILABLE
                    </p>

                    <button
                        onClick={handleShow}
                        className="btn btn-info text-white rounded-0 fw-bold"
                    >
                        BOOK APPOINTMENT
                    </button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="border-0">
                    <Modal.Title className="text-info mx-auto">
                        {title}
                    </Modal.Title>
                </Modal.Header>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="10:00 AM - 11:30 AM"
                                value={time}
                                {...register("time", { required: true })}
                                readOnly
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your Name"
                                {...register("name", { required: true })}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                                {...register("phone", { required: true })}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="example@email.com"
                                {...register("email", { required: true })}
                            />
                        </div>

                        <div>
                            <input
                                type="date"
                                className="form-control"
                                defaultValue={date}
                                {...register("date", { required: true })}
                                readOnly
                            />
                        </div>

                    </Modal.Body>

                    <Modal.Footer className="border-0">
                        <button type="submit" className="btn btn-info text-white rounded-0 fw-bold px-5">
                            SEND
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div >
    );
};

export default Service;