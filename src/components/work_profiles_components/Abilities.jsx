import '../../index.css'
import { Tags } from '../work_profiles_components/Tags'
export function Abilities() {
    return (
        <>
            <div className="w-1/2">
                <h3 className="font-clash font-medium">Habilidades</h3>
                <div className='flex flex-wrap gap-2 py-2'>
                <Tags text="Soy un texto" />
                <Tags text="adsad" />
                <Tags text="aaaaaaaaaaaa" />
                <Tags text="dqwdqdwq" />
                <Tags text="dasdadwqdwqdwqdwq" />
                </div>
            </div>
        </>
    );
}