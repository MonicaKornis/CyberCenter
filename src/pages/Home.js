import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import mainSrc from './../assets/main-2.jpg'
import repairSrc from './../assets/main.jpg'
import gameingSrc from './../assets/gameing.jpg'
import keyboardSrc from './../assets/keyboard.jpg'
import codeSrc from './../assets/code.jpg'
import computerSrc from './../assets/homecomputer.jpg'
import networkingSrc from './../assets/networking.jpg'
import Map from './../Map';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BannerImage = styled.img`
  width: 52%;
  min-width: 440px;
  margin-left: -52px;
  border-radius: 30px;
  flex-basis: 43%;
`;

const BannerText = styled.p`
  color: black;
  font-family: 'Inter';
  font-size: 34px;
  margin-top: 15px;
  font-weight: 600;
  @media screen and (max-width: 600px) {
    font-size: 36px;
  }
`;

const BannerContainer = styled.div`
  position: relative;
  margin-top: 50px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding-bottom: 95px;
  border-bottom: 1px solid #00000046;
`;

const BannerContent = styled.div`
  flex-basis: 54%;
  // border: 1px solid pink;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
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
  padding-top: 59px;
  padding-bottom: 59px;
  border-bottom: 1px solid #00000046;
`
;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`;

const Column = styled.div`
  flex-basis: 40.33%;
  @media screen and (max-width: 950px) {
    flex-basis: 100%;
  }
  position: relative;
  overflow: hidden;
  margin-bottom: 21px;
      display: flex;
    justify-content: center;
`;


const RedOverlay = styled.div`
  // background: rgb(255 0 0 / 30%);
  height: 185px;
  display: flex; 
  justify-content: center;
  font-family: 'Raleway';
  font-size: 25px;
  align-items: center;
  color: white;
  font-weight: 600;
`;

const ServicesList = styled.ul`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: -22px;
  min-width: 400px;
`;

const ServicesListItem = styled.li`
  font-size: 25px;
  font-family: 'Inter';
  margin-bottom: 16px;
`;

const BlueOverlay = styled.div`
  // background: rgb(11 3 229 / 30%);
  height: 135px;
  display: flex; 
  align-items: center;
  justify-content: center;
`;

const InnerBorder = styled.div`
  display: flex;
  justify-content: center;
  font-family: Raleway;
  font-size: 21px;
  height: 170px;
  color: grey;
  align-items: center;
  font-weight: 600;
  width: 81%;
  height: 130px;
  padding: 5px;
  border: 2px solid #E0E0E0;
  text-shadow: rgb(0 0 0) 3px 7px 20px;
`;

const GridImage = styled.img`
  width: 48%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

const RatingNumber = styled.span`
font-size: 30px;
margin-right: 10px;
margin-top: -1px;

`;

const RatingStars =  styled.span`
  margin-right: 10px;
  margin-top: 1px;
  margin-top: 7px;
  min-width: 113px;
`;


const RatingMessage = styled.span`
  font-size: 20px;
  margin-right: 10px;
  margin-top: 7px;
`;

const RatingContainer = styled.span`
  margin-top: 38px;
  margin-left: -10px;
  display: flex;
`;

const GridContainer = styled.div`

`;

const MapContainer = styled.div`

`;

const MapSection = styled.div`

`;

const AddressContainer = styled.div``;






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
    

      <RatingContainer>
          <RatingNumber>4.8</RatingNumber>
          <RatingStars>
            <FontAwesomeIcon icon={faStar} size="lg"/>
            <FontAwesomeIcon icon={faStar} size="lg"/>
            <FontAwesomeIcon icon={faStar} size="lg"/>
            <FontAwesomeIcon icon={faStar} size="lg"/>
            <FontAwesomeIcon icon={faStar} size="lg"/>
          </RatingStars>
        <RatingMessage>
          People love us on Google Reviews and Facebook!
        </RatingMessage>
      </RatingContainer>
        </BannerContent>
      </BannerContainer>
      <GridContainer>
      <ServicesGrid>
        {/* <Row>
          <Column>
         
          </Column>
          <Column>
         
          </Column>
        </Row> */}
        <Row>
          <Column>
           <InnerBorder>Data Recovery</InnerBorder>
          </Column>
          <Column>
        <InnerBorder>Data Recovery</InnerBorder>  
          </Column>
          <Column>
        <InnerBorder>Data Recovery</InnerBorder>  
          </Column>
          <Column>
        <InnerBorder>Data Recovery</InnerBorder>  
          </Column>
          <Column>
        <InnerBorder>Data Recovery</InnerBorder>  
          </Column>
          <Column>
        <InnerBorder>Data Recovery</InnerBorder>  
          </Column>
        </Row>
      </ServicesGrid>
      </GridContainer>
      <MapSection>
      <MapContainer>

        <Map/>
        <AddressContainer></AddressContainer>
      </MapContainer>
      </MapSection>
    </div>
  );
}

export default Home;
