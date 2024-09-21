import '../../index.css'
import { MainButton, SecondaryButton, SecondaryButtonOutline } from '../ui/Buttons'
export function ProfileInfo() {
    return (
        <>
            <div className="h-auto">
                {/* Profile Picture */}
                <div className="absolute md:left-1/2 transform md:-translate-x-1/2 translate-x-2 -translate-y-1/2">
                    <img src="/images/default_profile_picture.jpg" alt="Foto de perfil" className="w-56 rounded-full border-4 border-white object-cover" />
                </div>
                {/* Profile Picture */}
                {/* Profile data */}
                <div className="flex flex-col mt-28">
                    <h2 className="font-clash font-medium md:text-center">Alejandro Robles</h2>
                    <h4 className="font-bold text-clr-grey md:text-center">San Ramón, Alajuela</h4>
                </div>
                {/* Profile data */}
                {/* Stars */}
                <div className="flex my-2 md:justify-center">
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0555 10.377L16.3222 4.76752C16.5796 4.43261 16.8785 4.18562 17.219 4.02655C17.5595 3.86774 17.9194 3.78833 18.2985 3.78833C18.6776 3.78833 19.0363 3.86774 19.3745 4.02655C19.7127 4.18562 20.0107 4.43261 20.2687 4.76752L24.5353 10.377L31.058 12.5839C31.6036 12.7678 32.0268 13.0832 32.3277 13.5299C32.6288 13.9764 32.7793 14.4697 32.7793 15.0099C32.7793 15.2595 32.7429 15.5097 32.6699 15.7608C32.5973 16.0121 32.4783 16.2461 32.3132 16.4629L28.0999 22.3479L28.2523 28.6541C28.262 29.3748 28.0191 29.9883 27.5236 30.4947C27.0281 31.0014 26.4358 31.2548 25.7466 31.2548C25.7283 31.2548 25.4982 31.2215 25.0564 31.1549L18.2954 29.2171L11.5402 31.1526C11.4093 31.205 11.2806 31.2351 11.1541 31.2429C11.0278 31.2508 10.9121 31.2548 10.8069 31.2548C10.1094 31.2548 9.51716 31.0004 9.0303 30.4917C8.54369 29.983 8.31309 29.3577 8.3385 28.616L8.49097 22.3083L4.26319 16.4396C4.10768 16.2097 3.99359 15.9698 3.92092 15.72C3.84799 15.4702 3.81152 15.2204 3.81152 14.9707C3.81152 14.4368 3.96386 13.9471 4.26853 13.5017C4.57294 13.0562 4.9992 12.7455 5.5473 12.5694L12.0555 10.377Z" fill="#2BAC69" />
                    </svg>
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0555 10.377L16.3222 4.76752C16.5796 4.43261 16.8785 4.18562 17.219 4.02655C17.5595 3.86774 17.9194 3.78833 18.2985 3.78833C18.6776 3.78833 19.0363 3.86774 19.3745 4.02655C19.7127 4.18562 20.0107 4.43261 20.2687 4.76752L24.5353 10.377L31.058 12.5839C31.6036 12.7678 32.0268 13.0832 32.3277 13.5299C32.6288 13.9764 32.7793 14.4697 32.7793 15.0099C32.7793 15.2595 32.7429 15.5097 32.6699 15.7608C32.5973 16.0121 32.4783 16.2461 32.3132 16.4629L28.0999 22.3479L28.2523 28.6541C28.262 29.3748 28.0191 29.9883 27.5236 30.4947C27.0281 31.0014 26.4358 31.2548 25.7466 31.2548C25.7283 31.2548 25.4982 31.2215 25.0564 31.1549L18.2954 29.2171L11.5402 31.1526C11.4093 31.205 11.2806 31.2351 11.1541 31.2429C11.0278 31.2508 10.9121 31.2548 10.8069 31.2548C10.1094 31.2548 9.51716 31.0004 9.0303 30.4917C8.54369 29.983 8.31309 29.3577 8.3385 28.616L8.49097 22.3083L4.26319 16.4396C4.10768 16.2097 3.99359 15.9698 3.92092 15.72C3.84799 15.4702 3.81152 15.2204 3.81152 14.9707C3.81152 14.4368 3.96386 13.9471 4.26853 13.5017C4.57294 13.0562 4.9992 12.7455 5.5473 12.5694L12.0555 10.377Z" fill="#2BAC69" />
                    </svg>
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0555 10.377L16.3222 4.76752C16.5796 4.43261 16.8785 4.18562 17.219 4.02655C17.5595 3.86774 17.9194 3.78833 18.2985 3.78833C18.6776 3.78833 19.0363 3.86774 19.3745 4.02655C19.7127 4.18562 20.0107 4.43261 20.2687 4.76752L24.5353 10.377L31.058 12.5839C31.6036 12.7678 32.0268 13.0832 32.3277 13.5299C32.6288 13.9764 32.7793 14.4697 32.7793 15.0099C32.7793 15.2595 32.7429 15.5097 32.6699 15.7608C32.5973 16.0121 32.4783 16.2461 32.3132 16.4629L28.0999 22.3479L28.2523 28.6541C28.262 29.3748 28.0191 29.9883 27.5236 30.4947C27.0281 31.0014 26.4358 31.2548 25.7466 31.2548C25.7283 31.2548 25.4982 31.2215 25.0564 31.1549L18.2954 29.2171L11.5402 31.1526C11.4093 31.205 11.2806 31.2351 11.1541 31.2429C11.0278 31.2508 10.9121 31.2548 10.8069 31.2548C10.1094 31.2548 9.51716 31.0004 9.0303 30.4917C8.54369 29.983 8.31309 29.3577 8.3385 28.616L8.49097 22.3083L4.26319 16.4396C4.10768 16.2097 3.99359 15.9698 3.92092 15.72C3.84799 15.4702 3.81152 15.2204 3.81152 14.9707C3.81152 14.4368 3.96386 13.9471 4.26853 13.5017C4.57294 13.0562 4.9992 12.7455 5.5473 12.5694L12.0555 10.377Z" fill="#2BAC69" />
                    </svg>
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0555 10.377L16.3222 4.76752C16.5796 4.43261 16.8785 4.18562 17.219 4.02655C17.5595 3.86774 17.9194 3.78833 18.2985 3.78833C18.6776 3.78833 19.0363 3.86774 19.3745 4.02655C19.7127 4.18562 20.0107 4.43261 20.2687 4.76752L24.5353 10.377L31.058 12.5839C31.6036 12.7678 32.0268 13.0832 32.3277 13.5299C32.6288 13.9764 32.7793 14.4697 32.7793 15.0099C32.7793 15.2595 32.7429 15.5097 32.6699 15.7608C32.5973 16.0121 32.4783 16.2461 32.3132 16.4629L28.0999 22.3479L28.2523 28.6541C28.262 29.3748 28.0191 29.9883 27.5236 30.4947C27.0281 31.0014 26.4358 31.2548 25.7466 31.2548C25.7283 31.2548 25.4982 31.2215 25.0564 31.1549L18.2954 29.2171L11.5402 31.1526C11.4093 31.205 11.2806 31.2351 11.1541 31.2429C11.0278 31.2508 10.9121 31.2548 10.8069 31.2548C10.1094 31.2548 9.51716 31.0004 9.0303 30.4917C8.54369 29.983 8.31309 29.3577 8.3385 28.616L8.49097 22.3083L4.26319 16.4396C4.10768 16.2097 3.99359 15.9698 3.92092 15.72C3.84799 15.4702 3.81152 15.2204 3.81152 14.9707C3.81152 14.4368 3.96386 13.9471 4.26853 13.5017C4.57294 13.0562 4.9992 12.7455 5.5473 12.5694L12.0555 10.377Z" fill="#2BAC69" />
                    </svg>
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0555 10.377L16.3222 4.76752C16.5796 4.43261 16.8785 4.18562 17.219 4.02655C17.5595 3.86774 17.9194 3.78833 18.2985 3.78833C18.6776 3.78833 19.0363 3.86774 19.3745 4.02655C19.7127 4.18562 20.0107 4.43261 20.2687 4.76752L24.5353 10.377L31.058 12.5839C31.6036 12.7678 32.0268 13.0832 32.3277 13.5299C32.6288 13.9764 32.7793 14.4697 32.7793 15.0099C32.7793 15.2595 32.7429 15.5097 32.6699 15.7608C32.5973 16.0121 32.4783 16.2461 32.3132 16.4629L28.0999 22.3479L28.2523 28.6541C28.262 29.3748 28.0191 29.9883 27.5236 30.4947C27.0281 31.0014 26.4358 31.2548 25.7466 31.2548C25.7283 31.2548 25.4982 31.2215 25.0564 31.1549L18.2954 29.2171L11.5402 31.1526C11.4093 31.205 11.2806 31.2351 11.1541 31.2429C11.0278 31.2508 10.9121 31.2548 10.8069 31.2548C10.1094 31.2548 9.51716 31.0004 9.0303 30.4917C8.54369 29.983 8.31309 29.3577 8.3385 28.616L8.49097 22.3083L4.26319 16.4396C4.10768 16.2097 3.99359 15.9698 3.92092 15.72C3.84799 15.4702 3.81152 15.2204 3.81152 14.9707C3.81152 14.4368 3.96386 13.9471 4.26853 13.5017C4.57294 13.0562 4.9992 12.7455 5.5473 12.5694L12.0555 10.377Z" fill="#2BAC69" />
                    </svg>
                </div>
                {/* Stars */}
                {/* Botones */}
                <div className="flex gap-5 justify-center items-center my-2">
                    <SecondaryButtonOutline text={"Dejar una Reseña"} extraStyles={"w-full"} disabled />
                </div>
                {/* Botones */}
                {/*About me*/}
                <div className='flex flex-col gap-2 mt-5'>
                    <h3 className='font-clash font-medium md:text-[1.5rem]'>Acerca de mi</h3>
                    <p className='font-bold'>Hola, soy Alejandro Robles, un apasionado jardinero de San Ramón. Como estudiante, equilibro mis estudios con mi amor por la naturaleza manteniendo espacios verdes en mi tiempo libre. Desde el cuidado del césped hasta el diseño de jardines, me enorgullece hacer que las áreas al aire libre luzcan lo mejor posible. Mi objetivo es darle un toque de verde a cada espacio en el que trabajo, creando ambientes tranquilos y hermosos para que todos disfruten.</p>
                </div>
                {/*About me*/}
                {/*Contact*/}
                <div className='flex flex-col gap-2 mt-5'>
                    <div className='flex gap-2'>
                        <img src="/images/icons/phone.svg" alt="" />
                        <h4>+506 6890 0312</h4>
                    </div>
                    <div className='flex gap-2'>
                    <img src="/images/icons/email.svg" alt="" />
                        <h4>ale.robles@mail.com</h4>
                    </div>
                    <MainButton text={"Contactar"} extraStyles={'mt-2'} />
                </div>
                {/*Contact*/}

            </div>
        </>
    );
}