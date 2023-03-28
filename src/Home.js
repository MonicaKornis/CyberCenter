import main from './assets/main.jpg'

import './App.css';
import styled from 'styled-components';

const BannerImage = styled.img`
  width: 100%;
`;

const BannerText = styled.p`
  color: white;
  font-family: 'Raleway';
  font-size: 40px;
  font-weight: 600;
  // margin: auto;
  // // margin-left: auto;
  // // margin-right: auto;
  // left: 0;
  // right: 0;
  // text-align: center;
  // width: 750px;
  // position: absolute;
  text-shadow: 5px 5px 8px rgb(69 73 76);
`;

const BannerContainer = styled.div`
  position: relative;
  height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const BannerContent = styled.div`
margin: auto;
left: 0;
right: 0;
text-align: center;
width: 750px;
position: absolute;
`;

const BannerButton = styled.button`

`;



function Home() {
  return (
    <div className="App">
     <BannerContainer>
      <BannerContent>
        <BannerText>
        Computer Sales, Service, and Recycling in Excelsior Springs, Missouri
        </BannerText>
        <BannerButton>Learn More</BannerButton>
        </BannerContent>
        <BannerImage src={main} alt="computer-repair-image" />
       
      </BannerContainer>
    </div>
  );
}

export default Home;
