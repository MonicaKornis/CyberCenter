import React from 'react';
import mainSrc from './assets/main-2.jpg'
import repairSrc from './assets/main.jpg'
import gameingSrc from './assets/gameing.jpg'
import keyboardSrc from './assets/keyboard.jpg'
import codeSrc from './assets/code.jpg'
import computerSrc from './assets/homecomputer.jpg'
import networkingSrc from './assets/networking.jpg'

import { useNavigate } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

const BannerImage = styled.img`
  width: 659px;
  margin-left: -52px;
  border-radius: 30px;
  flex-basis: 45%;
  @media screen and (max-width: 600px) {
    // width: 170%;
  }
`;

const BannerText = styled.p`
  color: black;
  font-family: 'Inter';
  font-size: 34px;
  margin-top: 15px;
  font-weight: 600;
  // width: 30%;
  @media screen and (max-width: 600px) {
    font-size: 36px;
  }
`;

const BannerContainer = styled.div`
  position: relative;
  margin-top: 50px;
  overflow: hidden;
  display: flex;
  // justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
`;

const BannerContent = styled.div`
  flex-basis: 45%;
  border: 1px solid pink;
  margin-left: 50px;
`;

const BannerButton = styled.button`
  background: rgba(0,0,0,0.3);
  border: 3px solid white;
  font-family: 'Raleway';
  font-size: 21px;
  font-weight: 600;
  color: white;
  padding: 16px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    display: none
  }
`;

const ServicesGrid = styled.div`
  height: 400px;
  margin-top: 5px;
`
;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex-basis: 33.33%;
  @media screen and (max-width: 800px) {
    flex-basis: 100%;
  }
  position: relative;
  overflow: hidden;
`;


const RedOverlay = styled.div`
  background: rgb(255 0 0 / 30%);
  height: 185px;
  display: flex; 
  justify-content: center;
  font-family: 'Raleway';
  font-size: 21px;
  align-items: center;
  color: white;
  font-weight: 600;
`;

const ServicesList = styled.ul`
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ServicesListItem = styled.li`
  font-size: 20px;
  font-family: 'Inter';
  margin-bottom: 16px;
`;



const BlueOverlay = styled.div`
  background: rgb(11 3 229 / 30%);
  height: 185px;
  display: flex; 
  align-items: center;
  justify-content: center;
`;

const InnerBorder = styled.div`
  display: flex;
  justify-content: center;
  font-family: Raleway;
  font-size: 21px;
  color: white;
  align-items: center;
  font-weight: 600;
  width: 50%;
  height: 80%;
  padding: 5px;
  border: 2px solid white;
  text-shadow: rgb(0 0 0) 3px 7px 20px;
`;

const GridImage = styled.img`
  width: 50%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;



function Home() {

  const navigate = useNavigate();
  const handleClick = () => navigate('/about');

  return (
    <div className="App">
     <BannerContainer>
     <BannerImage src={mainSrc} alt="computer-repair-image" />
      <BannerContent>
        <BannerText>
        We take care of your tech needs.
        </BannerText>
        <ServicesList>
          <ServicesListItem>PC and Laptop Sales and Service</ServicesListItem>
          <ServicesListItem>Home and Business Networking</ServicesListItem>
          <ServicesListItem>Data Recovery and Destruction</ServicesListItem>
          <ServicesListItem>Web Advertising</ServicesListItem>
          <ServicesListItem>Virus and Bug Removal</ServicesListItem>
        </ServicesList>
        </BannerContent>
      </BannerContainer>
      <ServicesGrid>
        <Row>
          <Column>
         
          </Column>
          <Column>
         
          </Column>
          <Column>
          {/* <RedOverlay><InnerBorder>PC and Laptop Sales</InnerBorder><GridImage src={computerSrc}/></RedOverlay> */}
          </Column>
        </Row>
        <Row>
          <Column>
          {/* <BlueOverlay><InnerBorder>Data Recovery</InnerBorder><GridImage src={codeSrc}/></BlueOverlay> */}
          </Column>
          <Column>
          {/* <RedOverlay><InnerBorder>Custom Gaming Systems</InnerBorder><GridImage src={gameingSrc}/></RedOverlay> */}
          </Column>
          <Column>
          {/* <BlueOverlay><InnerBorder>Home Networking</InnerBorder><GridImage src={networkingSrc}/></BlueOverlay> */}
          </Column>
        </Row>
      </ServicesGrid>
    </div>
  );
}

export default Home;
