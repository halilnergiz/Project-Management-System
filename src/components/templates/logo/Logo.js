import React from 'react';
import styled from 'styled-components';
import { mainColors } from '../../UI/staticStyle/staticStyle';

const LogoContainer = styled.div`
    user-select: none;
    cursor: pointer;
    width: max-content;
    overflow-wrap: break-word;
    position: relative;
    top: 7px;
    left: 5px;
`;

const Bars = styled.ul`
    list-style: none;
    display: inline-block;
    transform: scale(-1, 1);
    padding: 0;
    margin: 0;
`;

const Bar = styled.li`
    height: 3.5px;
    background-color: ${mainColors.orange};
    border-radius: 0 0 1rem 0;
    margin-top: .8px;
    width: ${({type}) => BarWidths[type] };
`;

const BarWidths = {
  one: '27px',
  two: '23px',
  three: '19px' 
};


const InnerBar = styled.div`
    height: 3.5px;
    background-color: ${props => props.theme.iconBarColor};
    border-radius: 0 0 1rem 0;
    width: ${({type}) => InnerBarWidths[type] };
`;

const InnerBarWidths = {
  one: '20px',
  two: '16px',
  three: '12px' 
};

const Text = styled.div`
    font-family: 'Jost', sans-serif;    
    font-size: 17px;
    font-weight: bold;
    display: inline-block;
    letter-spacing: 1px;
    transform: translate(3px, -1px);
    color: ${props => props.theme.iconTextColor};
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Bars>
        <Bar type='one'>
          <InnerBar type='one'/>
        </Bar>
        <Bar type='two'>
          <InnerBar type='two'/>
        </Bar>
        <Bar type='three'>
          <InnerBar type='three'/>
        </Bar>
      </Bars>
      <Text>NEKTARI</Text>
    </LogoContainer>
  );
};

export default Logo;
