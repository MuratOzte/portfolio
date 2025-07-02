import { useState } from 'react';

const About = () => {
    return (
        <div className="w-full h-screen bg-center bg-cover bg-no-repeat bg-yellow-100 flex justify-center">
            <div className="h-screen w-1 bg-black relative rounded-full shadow-md">
                <div className="absolute bg-white w-16 h-16 rounded-full -left-[30px] top-3">
                    <img
                        src="https://media.licdn.com/dms/image/v2/D4D0BAQGug8UDNhQ2pw/company-logo_200_200/B4DZd3u_DZHkAI-/0/1750060496120/kopernik_tr_logo?e=1756944000&v=beta&t=pQFhu4IGFM-Ja4KVHrDa1_q-CDwBu8C_3y_noESzAlU"
                        className="rounded-full ring-2 ring-white shadow-xl hover:scale-105 transition-all duration-200"
                    />
                    <div className='absolute -left-[55px] top-[18px] text-black text-3xl bg-transparent' >
                        &#9654;
                    </div>
                    <div className='w-[400px] h-[260px] bg-black absolute -left-[450px] -top-5' >

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
