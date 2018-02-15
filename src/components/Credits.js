import React from 'react';
import styled from 'styled-components';
import { FaDiamond } from 'react-icons/lib/fa';

const Credits = ({ credits }) => (
    <Credit>
        <FaDiamond /><span> {credits}</span>
    </Credit>
 );

 export default Credits;


 const Credit = styled.span`
 span {
     vertical-align: middle;
 }
`;
