import '../../index.css'
import { Tags } from '../work_profiles_components/Tags'
import { useFetchWorkProfileSkills } from '../../hooks/WorkProfile/useFetchWorkProfileSkills';
export function Skills({ workId }) {
    const { skills, loading, error } = useFetchWorkProfileSkills({ workID: workId });
    return (
        <>
            <div className="w-1/2 md:w-full">
                <h3 className="font-clash font-medium md:text-[1.5rem]">Habilidades</h3>
                {loading ? (
                    <div>
                        <h5 className="text-center">Cargando habilidades...</h5>
                    </div>
                ) : (
                    <div className='flex flex-wrap gap-2 py-2'>
                        {skills.map((skill) => (
                            <Tags
                                key={skill.skillId}
                                text={skill.skillName}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}