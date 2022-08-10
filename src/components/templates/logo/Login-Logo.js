import React from 'react';
import styled from 'styled-components';
import { mainColors } from '../../UI/staticStyle/staticStyle';

const LogoContainer = styled.div`
    user-select: none;
    cursor: pointer;
`;

const Bars = styled.ul`
    list-style: none;
    display: inline-block;
    transform: scale(-1, 1);
    padding: 0;
    margin: 0;
`;

const Bar = styled.li`
    height: 12px;
    background-color: ${mainColors.orange};
    border-radius: 0 0 1rem 0;
    margin-top: 3px;
    width: ${({type}) => BarWidths[type] };
`;

const BarWidths = {
  one: '110px',
  two: '95px',
  three: '79px' 
};

const InnerBar = styled.div`
    height: 12px;
    background-color:  ${mainColors.black}; 
    border-radius: 0 0 1rem 0;
    width: ${({type}) => InnerBarWidths[type] };
`;

const InnerBarWidths = {
  one: '85px',
  two: '70px',
  three: '60px' 
};

const Text = styled.div`
    font-family: 'Jost', sans-serif;    
    font-size: 80px;
    font-weight: bold;
    display: inline-block;
    letter-spacing: 1px;
    transform: translate(7px, -1px);
    color: ${mainColors.black};
`;

const SubTextContainer = styled.div`
    position: relative;
    left: 7.85rem;
    bottom: 1rem;
`;

const SubText = styled.div`
    font-family: 'Jost', sans-serif;    
    font-weight: bold;
    font-size: 30px;
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
      <SubTextContainer>
        <SubText>MANAGAMENT</SubText>
        <SubText>SYSTEM</SubText>
      </SubTextContainer>
    </LogoContainer>
  );
};

export default Logo;
