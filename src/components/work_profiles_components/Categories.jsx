import '../../index.css'
import { Tags } from '../work_profiles_components/Tags'
import { useFetchWorkProfileCategories } from '../../hooks/WorkProfile/useFetchWorkProfileCategory';
export function Categories({workId}) {
    const { categories, loading, error } = useFetchWorkProfileCategories({categoryID: workId});

    return (
        <>
            <div className="w-1/2 md:w-full">
                <h3 className="font-clash font-medium md:text-[1.5rem]">Categorias</h3>
                {loading ? (
                    <div>
                        <h5 className="text-center">Cargando categorias...</h5>
                    </div>
                ) : (
                    <div className='flex flex-wrap gap-2 py-2'>
                        <Tags text={categories.categoryName} />
                    </div>
                )}
            </div>
        </>
    );
}