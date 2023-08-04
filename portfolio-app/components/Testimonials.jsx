import Image from 'next/image';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';

const Testimonials = ({ source_Serif_4 }) => {
  return (
    <>
      {/* Testimonial section */}
      <section
        id='testimonials'
        className='ptf-pri-section min-h-90 flex flex-col sm:flex-row relative'
      >
        <button className='w-12 h-12 rounded-full absolute left-5 sm:left-12 top-1/2 bg-white opacity-40 flex items-center justify-center shadow-2xl shadow-slate-400'>
          <BsCaretLeft className='text-2xl dark:text-slate-900 dark:text-opacity-90'></BsCaretLeft>
        </button>
        <div className='w-full sm:w-2/5 sm:order-2 sm:ml-8'>
          <Image alt='' height={100} width={100} />
        </div>
        <div className='w-full sm:w-3/5'>
          <h2
            className={`text-3xl sm:text-5xl font-bold dark:text-white ${source_Serif_4.className}`}
          >
            Testimonial
          </h2>
          <div className='mt-14 flex'>
            <span className='block w-32 sm:w-20 h-0.5 bg-green-500 dark:bg-orange-400 mr-1.5'></span>
            <div className='-mt-1.5'>
              <p className='text-sm mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique dignissimos sunt itaque ut veniam, repudiandae
                distinctio deleniti, ipsum id porro doloribus laudantium nisi
                nobis nostrum labore. Saepe sed aperiam minima.
              </p>
              <h6 className={`font-bold text-xl ${source_Serif_4.className}`}>
                Josef Sharon
              </h6>
              <div className='flex items-center mt-1'>
                <span className='block w-4 h-0.5 bg-green-500 dark:bg-orange-400 mr-1.5'></span>
                <p className='text-sm text-red-400  dark:text-yellow-200'>
                  CEO, Omisoft
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className='w-12 h-12 rounded-full absolute right-5 sm:right-12 top-1/2 bg-white opacity-40 flex items-center justify-center shadow-2xl shadow-slate-400'>
          <BsCaretRight className='text-2xl dark:text-slate-900 dark:text-opacity-90'></BsCaretRight>
        </button>
      </section>
    </>
  );
};

export default Testimonials;
