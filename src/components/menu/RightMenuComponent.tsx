import { CategoryModel } from "../model/Module";

const RightMenuComponent: React.FC<{ data: CategoryModel[] }> = (props) => {
    return (
        <div className="right-column">
            <div className="card grid mt-10">
                {
                    props.data.map((item: CategoryModel, index) => (
                        <button key={index} className={` mb-2.5 bg-transparent hover:bg-cyan-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded bg-block`}>
                            {item.name}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}
export default RightMenuComponent;