import React from 'react';
import Table from '../../table/Table';
import BannerLeftContent from '../../bannerLeftContent/BannerLeftContent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./body.scss"

AOS.init({
    offset: 300,
    duration: 800
});

const Body = () => {
    return (
        <section className="c-body">
            <Table />
            <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: 100 }}>
                <img data-aos="fade-up" width="30%" height="30%" src={require("../../../assets/phone_mockup_screens.png")} alt="image" className=""/>
                <BannerLeftContent 
                    dataAos="fade-left"
                    contentStyle={ "dark" }
                    title="Vestibulum rutrum quam vitae fringilla tinc."
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
                    btnTitle="Find Out More"
                /> 
            </div>
        </section> 
    )
}

export default Body;