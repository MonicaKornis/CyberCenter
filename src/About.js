import logo from './logo.svg';
import './App.css';
import  styled  from 'styled-components'
import computerSrc from './assets/homecomputer.jpg'


const BannerImage = styled.img`
  width: 100%;
  @media screen and (max-width: 600px) {
    width: 170%;
  }
`;

const BannerText = styled.p`
  color: white;
  font-family: 'Raleway';
  font-size: 56px;
  font-weight: 600;
  text-shadow: rgb(0 0 0) 3px 7px 20px;
  @media screen and (max-width: 600px) {
    font-size: 36px;
  }
`;

const BannerContainer = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const BannerContent = styled.div`
margin: auto;
left: 0;
right: 0;
text-align: center;
width: 79%;
position: absolute;
`;

function About() {
  return (
    <div className="App">
      <BannerContainer>
        <BannerImage src={computerSrc} alt="computer-repair-image" />
      </BannerContainer>
   
        <p>
          About
        </p>
     
    </div>
  );
}

export default About;
