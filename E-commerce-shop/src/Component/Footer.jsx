
import {RiWhatsappFill} from 'react-icons/ri';
import {RiInstagramFill} from 'react-icons/ri';
import {RiTelegramFill} from 'react-icons/ri';


const Footer =()=>
{
    return (
        <>
            <div class="grid lg:grid-cols-4 sm:grid-cols-1 gap-8 lg:h-64 bg-black text-center pt-6 pb-16">
                <div class="bold text-2xl col-span-1 text-white p-4">خرید
                    <ul className="mt-4">
                        <li><a href="#" className="text-stone-500">زنانه</a></li>
                        <li><a href="#" className="text-stone-500">مردانه</a></li>
                        <li><a href="#" className="text-stone-500">بچگانه</a></li>
                        <li><a href="#" className="text-stone-500">زیبایی و سلامت</a></li>
                    </ul>
                </div>
                <div className="bold text-2xl col-span-1 text-white p-4">خدمات مشتریان
                    <ul className="mt-4">
                        <li><a href="#" className="text-stone-500">پاسخ به پرسش های متداول</a></li>
                        <li><a href="#" className="text-stone-500">رویه های بازگرداندن کالا</a></li>
                        <li><a href="#" className="text-stone-500">شرایط استفاده</a></li>
                        <li><a href="#" className="text-stone-500">حریم خصوصی</a></li>
                    </ul>
                </div>
                <div className="bold text-2xl col-span-1 text-white p-4">اطلاعات استایل شاپ
                <div>
                    <ul className="mt-4">
                        <li><a href="#" className="text-stone-500">درباره استایل شاپ</a></li>
                        <li><a href="#" className="text-stone-500">تماس با استایل شاپ</a></li>
                        <li><a href="#" className="text-stone-500">همکاری با استایل شاپ</a></li>
                    </ul>
                </div>
                </div>


                <div className="bold text-2xl col-span-1 text-white p-4">09391686728 :شماره تماس
                <div>
                    <h2 class="text-center mt-4 text-stone-500">شبکه های اجتماعی</h2>
                    <ul class="p-6 flex justify-center gap-6">
                        <li class="justify-center"><a href="#"><RiWhatsappFill /></a></li>
                        <li class=" justify-center"><a href="#"><RiInstagramFill/></a></li>
                        <li class=" justify-center"><a href="#"><RiTelegramFill/></a></li>
                    </ul>
                </div>
                </div>
            </div>
        </>
    )
}

export default Footer