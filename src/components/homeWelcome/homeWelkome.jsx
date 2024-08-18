import { NavLink } from "react-router-dom";
import css from "./homeWelkome.module.css";

export const HomeWelkome = () => {
  return (
    <div className={css.conteinerWelkome}>
      <div className={css.conteinerimgStyle}>
        <span className={css.circleStyle1}></span>
        <span className={css.circleStyle2}></span>
        <img
          className={css.imgStyle}
          src="https://imagedelivery.net/1rPpp4CONiPVv0BBaxsaQQ/25/4x4-campervan.png/public"
          alt="Camper image"
        />
      </div>
      <div className={css.welkomeDetails}>
        <h2 className={css.styleFirstH}>Welcome to CampersRent!</h2>
        <p className={css.styleText1}>
          Embark on an exciting journey with our camper rental service! We offer
          a wide range of modern and comfortable campers that will ensure you
          have unforgettable travel experiences, both within the country and
          beyond.
        </p>
        <h3 className={css.styleSecondH}>Why Choose Us?</h3>
        <ul className={css.conteinerListDetails}>
          <li className={css.liText1}>
            Wide Selection: From compact city campers to spacious family RVs.
            Find the perfect option for any route and need.
          </li>
          <li className={css.liText1}>
            Comfort and Convenience: Our campers are equipped with everything
            needed for a comfortable trip: cozy beds, a kitchen, bathroom, and
            many other amenities.
          </li>
          <li className={css.liText1}>
            Flexible Rental Terms: Rent a camper for any duration - from a few
            days to several months. We offer flexible terms and competitive
            prices.
          </li>
        </ul>
        <h3 className={css.styleSecondH}>
          What Benefits Will You Get with Us?
        </h3>
        <ul className={css.conteinerListDetails}>
          <li className={css.liText2}>
            Reliability: All our campers undergo regular maintenance and
            inspections, so you can enjoy your journey without worries.
          </li>
          <li className={css.liText2}>
            Easy Booking Process: A simple and clear booking process through our
            website. Choose a camper, convenient pickup time, and location - and
            set off on your journey!
          </li>
        </ul>
        <h3 className={css.styleSecondH}>Ready for Adventure?</h3>
        <p className={css.styleText}>
          Browse our camper catalog, choose the best option for your trip, and
          book it now! If you have any questions or need assistance, feel free
          to contact our team.
        </p>
        <NavLink className={css.navLinkStyle} to="/catalog">
          Book Your Camper Now!
        </NavLink>
        <p className={css.styleText}>
          Whether you`re heading to a cozy town or out into nature, we`ll help
          make your trip comfortable and unforgettable!
        </p>
      </div>
    </div>
  );
};
