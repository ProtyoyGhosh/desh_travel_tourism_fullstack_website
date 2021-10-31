import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoad, faBackward, faMap, faWalking, faAmbulance, faSave } from '@fortawesome/free-solid-svg-icons'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Extra = () => {
    const road = <FontAwesomeIcon icon={faRoad} />
    const backward = <FontAwesomeIcon icon={faBackward} />
    const map = <FontAwesomeIcon icon={faMap} />
    const walking = <FontAwesomeIcon icon={faWalking} />
    const service = <FontAwesomeIcon icon={faSave} />
    const medical = <FontAwesomeIcon icon={faAmbulance} />

    return (
        <div className='m-5'>
            {/* first part of the extra section */}
            <Card className="text-center mt-5">
                <Card.Header className='bg-danger text-dark' style={{ fontSize: '32px', fontWeight: '600' }}>Breaking News</Card.Header>
                <Card.Body>
                    <Card.Title className='text-success' style={{ fontSize: '20px', fontWeight: '700' }}>No Quarentine is required in Bangladesh</Card.Title>
                    <Card.Text>
                        No quarantine is required for fully vaccinated travelers coming to Bangladesh from <strong>November 23,2021.</strong>
                        Check Out the bellow button to know the details of the quarantine rules in Bangladesh
                    </Card.Text>
                    <Button variant="primary">Check Out</Button>
                </Card.Body>
            </Card>


            {/* second part of the extra section */}
            <div className="reason m-5">
                <Card.Header className='bg-info text-dark' style={{ fontSize: '32px', fontWeight: '600' }}>Why choose Desh Travel?</Card.Header>
                <div className="row m-3 p-4">
                    <div className="col-md-4" >
                        <h5 className='text-success' style={{ fontSize: '20px', fontWeight: '700' }}>{road} Divers Destination</h5>
                        <p>Desh Travel knows the value of your time and the varieties bucket list of you. We have the innovative team to fulfill your taste of diverse destination.</p>
                    </div>
                    <div className="col-md-4">
                        <h5 className='text-success' style={{ fontSize: '20px', fontWeight: '700' }}>{map} Beautiful Places</h5>
                        <p>Desh Travel want beautiful and unique places every time they want to leave the home. We’re ready with years of experience to in the Wolrd.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5 className='text-success' style={{ fontSize: '20px', fontWeight: '700' }}>{backward} Easy Tour Confirmation</h5>
                        <p>A long Tour Confirmation process can’t support you to purchase any tour package. Desh Travel will complete the whole process into one call.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5 className='text-success' style={{ fontSize: '20px', fontWeight: '700' }}>
                            {walking} Experienced Team</h5>
                        <p>Desh Travel introduces 24/7 support team via online or offline. You can reach us in every method including email, social media or phone call. Just feel free to ask anything.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5 className='text-success' style={{ fontSize: '20px', fontWeight: '700' }}>{service} 24/7 Service</h5>
                        <p>Desh Travel introduces 24/7 support team via online or offline. You can reach us in every method including email, social media or phone call. Just feel free to ask anything.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5 className='text-success' style={{ fontSize: '20px', fontWeight: '700' }}>{medical} Medical Services</h5>
                        <p>Desh Travel gives you 100% medical services during tour.We have all the first aid kits available with us,also a professonal doctor will be there during tour time.
                        </p>
                    </div>
                </div>
            </div>

            {/* link will take to the about us section */}
            <h3 className='mt-5' style={{ color: 'green', fontSize: '35px', fontWeight: '700' }}>Want to know more about us?</h3>
            <Link to='/aboutus'><strong>Please click here</strong></Link>
        </div>
    );
};

export default Extra;