import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({date,treatment,setTreatment}) => {
    const {_id, name,slots} = treatment;

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        setTreatment(null);
    }
    return (
        <div>
    
            {/* <label for="booking-modal" className="btn modal-button">open modal</label> */}

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-center">
                <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  
                    <h3 className="font-bold text-lg">Booking For : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-2 justify-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className='select select-bordered w-full max-w-xs'>
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text"  name ="name" placeholder="Your Name here" className="input input-bordered w-full max-w-xs" />
                        <input type="email"  name ="email"  placeholder="Email here" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Your Phone here" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default BookingModal;