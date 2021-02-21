import React from 'react';
import '../styles.css';
import "./card";
import { CustomPlaceholder } from 'react-placeholder-image';
import Card from './card';
import Row from './row';
import PersonList from '../api/api.js';
import Filtergroup from './filtergroup';

function Container() {
    return (
        <div class="container">
            <div class="row justify-content-center text-center">
                <Filtergroup />
                <PersonList />
            </div>
        </div>
    );
}
export default Container
