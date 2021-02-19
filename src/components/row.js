import React from 'react';
import '../styles.css';
import "./card";
import { CustomPlaceholder } from 'react-placeholder-image';
import Card from './card';

function Row() {
    return (
        <div class="row">
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}
export default Row
