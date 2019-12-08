import React from 'react';
import FormField from '../../formField/FormfFeld';
import Textarea from '../../textarea/TextArea';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./form.scss"; 

AOS.init();
var intViewportWidth = window.innerWidth;

const Form = () => {
    console.info('intViewportWidth: >>> ',intViewportWidth); //remove
    return (
        <section className="c-form">
            <div data-aos="fade-right" className="c-form__img"></div>
            <form data-aos="fade-left" className="c-form__container">
                <div className="c-form__title">FUSCE VEHICULA DOLOR.</div>
                <div className="c-form__text">industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </div>
                <form>
                    <FormField label="NAME" />
                    <FormField label="EMAIL" />
                    <Textarea label="MESSAGE" rows="10" cols="50" />
                </form>
            </form>
        </section>
    )
}

export default Form;