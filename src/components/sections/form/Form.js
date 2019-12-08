import React from 'react';
import FormField from '../../formField/FormfFeld';
import Textarea from '../../textarea/TextArea';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./form.scss"; 

AOS.init();

const Form = () => {
    return (
        <section className="c-form">
            <div className="" style={{ display: 'flex', flex: 1 }}>
                <img data-aos="fade-right" style={{ flex: 1 }} src={require("../../../assets/img6.png")} alt="image" className="c-form__img"/>
                <form data-aos="fade-left" className="c-form__container">
                    <div className="c-form__title">FUSCE VEHICULA DOLOR.</div>
                    <div className="c-form__text">industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </div>
                    <form>
                        <FormField label="NAME" />
                        <FormField label="EMAIL" />
                        <Textarea label="MESSAGE" rows="10" cols="50" />
                    </form>
                </form>
            </div>
        </section>
    )
}

export default Form;