import ReservationForm from "../../components/reservations/reservation-form/reservation-form";

const Reservations = () => {
  const reservationsContent = document.createElement('div');
  
  const heading = document.createElement('h1');
  heading.textContent = 'RESERVATIONS';

  reservationsContent.appendChild(heading);
  reservationsContent.appendChild(ReservationForm());

  return reservationsContent;
}

export default Reservations;