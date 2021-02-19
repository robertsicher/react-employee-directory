import React from 'react';
import '../styles.css';
import { CustomPlaceholder } from 'react-placeholder-image';

function Card() {
    return (
        <div class="card col-md mx-1" style={{width: 18 +'rem'}}>
        <CustomPlaceholder width={200} height={200} />
            <div class="card-body">
            <h5 class="card-title">Name</h5>
            <p class="card-text">Email</p>
            <p class="card-text">Phone Number</p>
            </div>
        </div>    
    );
}
export default Card
