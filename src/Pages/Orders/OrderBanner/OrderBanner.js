import shop from '../../../assets/E-shop.webp'
import { DayPicker } from 'react-day-picker';


const OrderBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={shop} alt="" className="max-w-sm h-[300px]  rounded-lg shadow-2xl" />
                    <div className='mr-14'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderBanner;