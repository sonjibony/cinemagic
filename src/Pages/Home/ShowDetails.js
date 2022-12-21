import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ShowDetails = () => {
  const [det, setDet] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const params = useParams();
  console.log(det);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const details = data?.find((ele) => ele.show?.id === +params.id);
        setDet(details);
      });
  }, [params.id]);

  return (
    <div className="p-5">
        <h1 className="text-center mb-5">{det?.show?.name}</h1>
        <div className="d-flex gap-3">

        <img className="img-fluid" style={{width:"30%"}} src={det?.show?.image?.original} alt="" />
        <div>

        <p dangerouslySetInnerHTML={{
            __html: det?.show?.summary}}></p>
            <p className="gap-3"> <span className="fw-bold">Genres:</span>  {det?.show?.genres[0]+","+ det?.show?.genres[1] }</p>
            <p className="gap-3"> <span className="fw-bold">Runtime:</span>  {det?.show?.runtime } min</p>
            <p className="gap-3"> <span className="fw-bold">Ratings:</span>  {det?.show?.rating?.average } min</p>
            <p className="gap-3"> <span className="fw-bold">Language:</span>  {det?.show?.language }</p>
            <p className="gap-3"> <span className="fw-bold">Premiered:</span>  {det?.show?.premiered }</p>
            <>
      <Button variant="primary" onClick={handleShow}>
        Book Now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {det?.show?.name}
            <p className="gap-3 fs-6"> {det?.show?.genres[0]+","+ det?.show?.genres[1] }</p>
            <p className="gap-3 fs-6">{det?.show?.runtime } min</p>
            </Modal.Title>
          
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        BOOK
      </Button>
    </Form>

        </Modal.Body>

      </Modal>
    </>
    <Link to='/'>
    <button className="btn btn-primary ms-3 ">Go Back</button>

    </Link>

        </div>
        </div>
      {/* {JSON.stringify(det)} <h1 className=""> HELLO</h1> */}
    </div>
  );
};

export default ShowDetails;
