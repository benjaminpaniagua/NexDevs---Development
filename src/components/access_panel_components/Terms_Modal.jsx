import { MainButton } from '../ui/Buttons'
import '../../index.css'
export function Terms({ closeModal }) {
    return (
        <>
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 md:mx-5 max-h-[80vh] overflow-auto">
                    <div className="p-6 flex flex-col gap-6 leading-relaxed">
                        <div>
                            <h3 className="font-bold mb-2">Términos y Condiciones</h3>
                            <p className='font-medium'>
                                Bienvenido a nuestra plataforma. Al acceder o utilizar nuestros servicios, usted acepta cumplir y estar sujeto a los siguientes Términos y Condiciones.
                                Le recomendamos leer detenidamente los siguientes términos, ya que describen sus derechos y responsabilidades al utilizar nuestros servicios.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2">1. Aceptación de los Términos</h4>
                            <p className='font-medium'>
                                Al acceder o utilizar la plataforma, usted acepta estos Términos y Condiciones y la Política de Privacidad.
                                Si no está de acuerdo con estos términos, debe abstenerse de utilizar el sitio.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2">2. Descripción del Servicio</h4>
                            <p className='font-medium'>
                                Nuestra plataforma permite a pequeños empresarios, PYMES y trabajadores independientes promocionar sus servicios.
                                Los usuarios pueden crear perfiles, publicar descripciones, fotografías y precios relacionados con los servicios que ofrecen.
                                Todas las publicaciones deben pasar por un proceso de revisión antes de ser aprobadas y mostradas en el feed de la plataforma.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2">3. Registro y Cuenta</h4>
                            <p className='font-medium'>
                                Para acceder a ciertas funciones de la plataforma, los usuarios deben crear una cuenta proporcionando información personal.
                                Usted es responsable de mantener la confidencialidad de su cuenta y contraseña, así como de todas las actividades que ocurran bajo su cuenta.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2">4. Proceso de Publicación y Revisión</h4>
                            <div className='flex flex-col gap-3 pl-5'>
                                <div>
                                    <h5 className="font-bold mb-2">4.1. Publicación de Contenidos</h5>
                                    <p className='font-medium'>
                                        Los usuarios pueden subir fotografías, descripciones y otros contenidos para promocionar sus servicios.
                                        Sin embargo, todas las publicaciones pasan por un proceso de revisión interno antes de ser aprobadas y visibles en el feed público.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="font-bold mb-2">4.2. Aprobación de Contenidos</h5>
                                    <p className='font-medium'>
                                        Nuestro equipo revisará cada publicación para asegurar que cumple con las políticas de la plataforma, incluyendo la veracidad de la información y el cumplimiento de los términos.
                                        Nos reservamos el derecho de rechazar cualquier contenido que infrinja estos Términos y Condiciones o que sea inapropiado.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="font-bold mb-2">4.3. Devolución de Dinero</h5>
                                    <p className='font-medium'>
                                        Si su publicación no es aprobada durante el proceso de revisión, se le reembolsará el pago realizado en un plazo de 7 días hábiles.
                                        El reembolso se efectuará a través del mismo método de pago utilizado (Sinpe Móvil), sujeto a las políticas de la entidad bancaria correspondiente.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2">5. Uso de la Información Personal</h4>
                            <p className='font-medium mb-2'>
                                Al registrarse en nuestra plataforma, usted acepta proporcionar información veraz, completa y actualizada.
                                Además, usted autoriza que su nombre, fotografías y descripción del servicio sean visibles para otros usuarios de la plataforma.
                            </p>
                            <div className='flex flex-col gap-3 pl-5'>
                                <div>
                                    <h5 className="font-bold mb-2">5.1. Fotografías y Contenidos</h5>
                                    <p className='font-medium'>
                                        Los usuarios que suban fotografías, logos o imágenes para promocionar sus servicios deben tener los derechos de uso sobre dichos contenidos.
                                        La plataforma no se hace responsable de las infracciones de derechos de autor cometidas por los usuarios.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2">6. Protección de Datos</h4>
                            <p className='font-medium mb-2'>
                                Nos comprometemos a proteger la información personal de nuestros usuarios.
                                Toda la información recopilada será tratada conforme a la normativa aplicable de protección de datos,
                                como la Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales (Ley N.° 8968 de Costa Rica).
                            </p>
                        </div>
                        <div>

                            <h4 className="font-bold mb-2">7. Métodos de Pago</h4>
                            <div className='flex flex-col gap-3 pl-5'>
                                <div>
                                    <h5 className="font-bold mb-2">7.1. Pagos mediante Sinpe Móvil</h5>
                                    <p className='font-medium'>
                                        La plataforma ofrece como método de pago Sinpe Móvil para la contratación de servicios promocionados por los usuarios.
                                        Al realizar un pago a través de este sistema, usted acepta que todos los pagos son finales y no reembolsables,
                                        salvo que se disponga lo contrario en una política específica o en caso de que su publicación no sea aprobada.
                                        No almacenamos ni gestionamos la información de pago proporcionada en Sinpe Móvil,
                                        ya que esta operación se realiza mediante los sistemas bancarios del usuario y los términos de Sinpe Móvil.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2">8. Responsabilidades del Usuario</h4>
                            <div className='flex flex-col gap-3 pl-5'>
                                <div>
                                    <h5 className="font-bold mb-2">8.1. Contenidos Publicados</h5>
                                    <p className='font-medium'>
                                        Usted es el único responsable del contenido que publique en la plataforma, incluidos los textos, imágenes y precios.
                                        Usted acepta no publicar contenido que sea falso, ofensivo, difamatorio, obsceno o que infrinja derechos de terceros.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="font-bold mb-2">8.2. Cumplimiento de Normas Locales</h5>
                                    <p className='font-medium'>
                                        Los usuarios deben cumplir con todas las leyes y regulaciones aplicables en su jurisdicción,
                                        incluidas las relacionadas con la protección de datos, derechos de autor y obligaciones fiscales.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2">9. Cancelación y Terminación de la Cuenta</h4>
                            <p className='font-medium mb-2'>
                                Nos reservamos el derecho de suspender o cancelar su cuenta en cualquier momento si incumple con estos Términos y Condiciones,
                                o si creemos que su uso de la plataforma es perjudicial para otros usuarios o para nuestra empresa.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2">10. Limitación de Responsabilidad</h4>
                            <p className='font-medium mb-2'>
                                Nuestra plataforma actúa como un intermediario entre los usuarios que publican sus servicios y los potenciales clientes.
                                No somos responsables por la calidad de los servicios ofrecidos por los usuarios ni por los acuerdos que se alcancen fuera de nuestra plataforma.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2">11. Modificación de los Términos</h4>
                            <p className='font-medium mb-2'>
                                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Si realizamos cambios,
                                se lo notificaremos publicando los términos actualizados en nuestra plataforma.
                                El uso continuado de nuestros servicios después de cualquier modificación constituye su aceptación de dichos cambios.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2">12. Ley Aplicable</h4>
                            <p className='font-medium mb-2'>
                                Estos Términos y Condiciones se rigen e interpretan de acuerdo con las leyes de Costa Rica.
                                Cualquier disputa que surja en relación con el uso de la plataforma será sometida a los tribunales competentes de Costa Rica.
                            </p>
                        </div>
                    </div>
                    <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
                        <MainButton id="Cerrar_Modal" text='Cerrar' onClick={closeModal} extraStyles={"px-8 h-10"} />
                    </div>
                </div>
            </div>
        </>
    );
}