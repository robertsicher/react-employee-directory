import React from 'react';
import '../styles.css';
import { CustomPlaceholder } from 'react-placeholder-image';

function EmployeeCard(props) {
    return (
        <div className="card col-4 m-1 justify-content-center text-center" style={{width: 18 +'rem'}}>
            <img src={ props.image } alt="Staff profile picture" className="mx-auto" width="200" height="200"></img>
            <h5 className="card-title">{ props.firstName } { props.lastName }</h5>
            <p className="card-text mb-1"><i className="fas fa-envelope"></i> { props.email }</p>
            <p className="card-text mb-1"><i className="fas fa-phone-alt"></i> { props.phone }</p>
            <p className="card-text mb-1">Gender: { props.gender } | Age: { props.age }</p>
        </div>    
    );
}
export default EmployeeCard
