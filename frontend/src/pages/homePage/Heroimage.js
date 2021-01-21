import React from 'react';
import { useHistory } from 'react-router-dom';
import Flags from '../../layout/media/Flags';
import CustomCarousel from '../../layout/CustomCarousel';
import { heroSlides } from './consts'
import ListItem from '../../layout/ListItem';
import { Container } from 'react-bootstrap';
import CustomButton from '../../layout/button/CustomButton';

const style = { backgroundImage: `url("https://res.cloudinary.com/dgxa9gpta/image/upload/v1602105434/homepage/iphone_vw9pja.png")` };

const Heroimage = () => {
    const { push } = useHistory();

    function displaySlide(slide) {
        return (
            <>
                <div className="hpSlides__header">
                    <h5 className="username mb-0">{slide.username}</h5>
                    <CustomButton btn_class="btn-icon-text btn-star"
                        icon="fa fa-star"
                        onClick={() => push("/explore/gigs")}
                    >5
                   </CustomButton>
                </div>
                <img
                    className="hpSlides__img"
                    src={slide.url}
                    alt="slide"
                />
                <div className="hpSlides__content">
                    <Container className="w-100">
                        <h3 className="hpSlides__fullname">{slide.fullName} <Flags countryCode={slide.country} /> </h3>
                    </Container>
                    <ListItem field="experience: " content={slide.experience} />
                    <ListItem field="skills: " content={slide.skills} />
                    <CustomButton btn_class="btn-icon-text hpSlides__btn align-self-end"
                        icon="fa fa-angle-double-right "
                        onClick={() => push("/explore/gigs")}
                    >see more
                   </CustomButton>
                </div>

            </>
        )
    }

    return (
        <section style={style} className="backgroundImg flex-center hpSlides__container">
            <div className="hpSlides__wrapper">
                <CustomCarousel slides={heroSlides} getSlide={displaySlide} slides_class="hpSlides" />
            </div>
        </section>
    )
}



export default Heroimage

