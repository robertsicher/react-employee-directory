import React from 'react';
import '../styles.css';
import { CustomPlaceholder } from 'react-placeholder-image';

function Card() {
    return (
        <div class="card" style={{width: 18 +'rem'}}>
        <CustomPlaceholder width={200} height={200} />
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>    
    );
}
export default Card
