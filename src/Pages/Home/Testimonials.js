import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews =[
        {
            _id:1,
            name:'winson herry',
            review: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum delectus quia maxime inventore? Cupiditate, obcaecati dolor odio dolore quasi commodi ea saepe alias velit fugit aliquam debitis, minus aperiam rem!',
            img:people1,
            location:'Bangladesh'
        },
        {
            _id:2,
            name:'winson herry1',
            review: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum delectus quia maxime inventore? Cupiditate, obcaecati dolor odio dolore quasi commodi ea saepe alias velit fugit aliquam debitis, minus aperiam rem!',
            img:people2,
            location:'canada'
        },
        {
            _id:3,
            name:'winson herry2',
            review: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum delectus quia maxime inventore? Cupiditate, obcaecati dolor odio dolore quasi commodi ea saepe alias velit fugit aliquam debitis, minus aperiam rem!',
            img:people3,
            location:'usa'
        }
    ]
    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-blog">
                        Testimonials
                    </h4>
                    <h2 className='text-3xl' >What our patients say</h2>
                </div>
                <div >
                    <img src={quote} className="w-24 lg:w-48" alt="Quote images" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;