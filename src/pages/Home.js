import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import mainSrc from './../assets/main-2.jpg'
import computerSrc from  './../assets/laptop.png';
import bugSrc from  './../assets/bug.png';
import dataSrc from  './../assets/data.png';
import windowsSrc from  './../assets/windows.png';
import moneySrc from  './../assets/money.png';
import recycleSrc from  './../assets/recycle.png';
import Map from './../Map';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BannerImage = styled.img`
  width: 52%;
  flex-basis: 100%;

  @media screen and (min-width: 800px) {
    width: 52%;
   min-width: 440px;
   margin-left: -52px;
   border-radius: 30px;
  flex-basis: 43%;
  }
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
  overflow: hidden;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #00000046;
  @media screen and (min-width: 800px) {
    margin-top: 50px;
     padding-bottom: 95px;
  }
`;

const BannerContent = styled.div`
  flex-basis: 54%;
  // border: 1px solid pink;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 800px) {
    display: none
  }
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

const ServiceCard = styled.div`
  display: flex;
  justify-content: center;
  font-size: 21px;
  height: 110px;
  align-items: center;
  font-weight: 600;
  width: 81%;
  height: 90px;
  padding: 5px;
  border: 2px solid #6c757d3d;
  min-width: 358px;
  max-width: 648px;
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
  padding-top: 100px;
  padding-bottom: 100px;
  margin-left: 6vw;
  display:  flex;
`;

const MapSection = styled.div`

`;

const AddressContainer = styled.div`
  width: 45%;
  margin-left: 41px;
`;

const ServiceImageContainer = styled.div`
width: 83px;
`;

const ServiceCaptionContainer = styled.div`
width: 68%;
`;

const ServiceImageIcon =  styled.img`
  width: 60px;
  margin-right: -5px;
`;

const ServiceImageParagraph = styled.p`
  font-weight: 400;
  font-size: 15px;
  margin-top: 5px;
`;

const ServiceImageHeader = styled.h4`
  margin-top: 14px;
  margin-bottom: 2px;
  font-size: 19px;
`;

const AddressAndBusinessInformationContainer = styled.div`

`;

const AddressAndBusinessInformationSection = styled.div`

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
           <ServiceCard>
            <ServiceImageContainer>
              <ServiceImageIcon src={computerSrc}/>
            </ServiceImageContainer>
            <ServiceCaptionContainer>
              <ServiceImageHeader>Laptop Screen Repair</ServiceImageHeader>
              <ServiceImageParagraph>We repair/replace laptop screens including touch screens.</ServiceImageParagraph>
            </ServiceCaptionContainer>
           </ServiceCard>
          </Column>
          <Column>
        <ServiceCard>
         <ServiceImageContainer>
              <ServiceImageIcon src={moneySrc}/>
            </ServiceImageContainer>
          <ServiceCaptionContainer>
          <ServiceImageHeader>Computer Sales</ServiceImageHeader>
          <ServiceImageParagraph>We repair/replace laptop screens including touch screens.</ServiceImageParagraph>
          </ServiceCaptionContainer>
        </ServiceCard>  
          </Column>
          <Column>
        <ServiceCard>
         <ServiceImageContainer>
              <ServiceImageIcon src={recycleSrc}/>
            </ServiceImageContainer>
          <ServiceCaptionContainer>
          <ServiceImageHeader>Electronics Recycling</ServiceImageHeader>
          <ServiceImageParagraph>We repair/replace laptop screens including touch screens.</ServiceImageParagraph>
          </ServiceCaptionContainer>
        </ServiceCard>  
          </Column>
          <Column>
        <ServiceCard>
         <ServiceImageContainer>
              <ServiceImageIcon src={windowsSrc}/>
            </ServiceImageContainer>
          <ServiceCaptionContainer>
          <ServiceImageHeader>Operating System Reloads</ServiceImageHeader>
          <ServiceImageParagraph>We repair/replace laptop screens including touch screens.</ServiceImageParagraph>
          </ServiceCaptionContainer>
        </ServiceCard>  
          </Column>
          <Column>
        <ServiceCard>
         <ServiceImageContainer>
              <ServiceImageIcon src={dataSrc}/>
            </ServiceImageContainer>
          <ServiceCaptionContainer>
          <ServiceImageHeader>Data Recovery</ServiceImageHeader>
          <ServiceImageParagraph>We repair/replace laptop screens including touch screens.</ServiceImageParagraph>
          </ServiceCaptionContainer>
        </ServiceCard>  
          </Column>
          <Column>
        <ServiceCard>
         <ServiceImageContainer>
              <ServiceImageIcon src={bugSrc}/>
            </ServiceImageContainer>
          <ServiceCaptionContainer>
          <ServiceImageHeader>Virus & Bug Removal</ServiceImageHeader>
          <ServiceImageParagraph>We repair/replace laptop screens including touch screens.</ServiceImageParagraph>
          </ServiceCaptionContainer>
        </ServiceCard>  
          </Column>
        </Row>
      </ServicesGrid>
      </GridContainer>
      <MapSection>
      <MapContainer>

        <Map/>
        <AddressContainer>
          <BannerText>Cyber Center Computer Solutions</BannerText>
          <ServiceImageParagraph>We specialize in PC/Laptop repair and recycling. We also offer refurbished laptops and desktops starting at just $80.00! Virus and Malware removal starts at $75!</ServiceImageParagraph>
          <AddressAndBusinessInformationContainer>
              <AddressAndBusinessInformationSection>
               <ServiceImageHeader>Address</ServiceImageHeader>
                <ServiceCaptionContainer>205 S. Thompson Excelsior Springs, MO 64024</ServiceCaptionContainer>
              </AddressAndBusinessInformationSection>
                <ServiceImageHeader>Phone</ServiceImageHeader>
                <ServiceCaptionContainer>(816) 299-9488</ServiceCaptionContainer>
              <AddressAndBusinessInformationSection>
                <ServiceImageHeader>Social</ServiceImageHeader>
                <ServiceCaptionContainer>Facebook: <a href=''>cybercenterkc</a></ServiceCaptionContainer>
              </AddressAndBusinessInformationSection>
              <AddressAndBusinessInformationSection>
                <ServiceImageHeader>Hours</ServiceImageHeader>
                <ServiceCaptionContainer>Tuesday - Saturday:</ServiceCaptionContainer>
                <ServiceCaptionContainer>12:00 PM - 6:00 PM</ServiceCaptionContainer>
              </AddressAndBusinessInformationSection>
          </AddressAndBusinessInformationContainer>
        </AddressContainer>
      </MapContainer>
      </MapSection>
    </div>
  );
}

export default Home;
