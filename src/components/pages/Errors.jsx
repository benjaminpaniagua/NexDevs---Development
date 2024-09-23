import '../../index.css'

export function Error_404() {
    return (
        <>
            <div className="flex flex-col gap-12 py-10 h-auto mx-auto mb-10 px-20 max-w-[100rem] xs:px-7 md:px-10">
                <div className='mx-auto my-52'>
                    <h1>Error 404</h1>
                    <h2>Página no encontrada</h2>
                </div>
            </div>
        </>
    )
}

export function Error_503() {
    return (
        <>
            <div className="flex flex-col gap-12 py-10 h-auto mx-auto mb-10 px-20 max-w-[100rem] xs:px-7 md:px-10">
                <div className='mx-auto my-52'>
                    <h1>Error 503</h1>
                    <h2>Hubo un error de respuesta del servidor</h2>
                </div>
            </div>
        </>
    )
}  