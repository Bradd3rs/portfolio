import React from 'react';
import styled from 'styled-components';
import { FaDollar } from 'react-icons/lib/fa';

const Credits = ({ credits }) => (
    <Credit>
        <FaDollar /><span>{credits}</span>
    </Credit>
 );

 export default Credits;


 const Credit = styled.span`
 span {
     vertical-align: middle;
 }
`;
