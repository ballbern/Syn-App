import React from 'react';
import Banner from '../components/sections/banner/Banner';
import Body from '../components/sections/body/Body';
import Form from '../components/sections/form/Form';
import Footer from '../components/sections/footer/Footer';
import Scroll from '../components/sections/scroll/Scroll'
import BannerLeftContent from '../components/bannerLeftContent/BannerLeftContent'
import NavBar from '../components/navBar/Navbar'
import LinkNav from '../components/linkNav/LinkNav'
import Card from '../components/card/Card'
import '../style/style.scss';

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <Banner
          navBar={ <NavBar /> }
          left={ 
            <BannerLeftContent 
              title="CRAS QUIS NULLA COMMODO, ALIQUAM LECTUS SED."
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
              btnTitle="Record of Learning"
            /> 
          }
          right={ <Card /> }
        />
        <Body />
        <Scroll />
        <Form />
        <Footer />
      </>
    )
  }
} 