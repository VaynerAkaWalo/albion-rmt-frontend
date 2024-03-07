import ItemRow from "../content/ItemRow.jsx";
import SubHeader from "../SubHeader.jsx";

function Content() {
    return (
        <div className="w-screen overflow-x-scroll">
            <SubHeader></SubHeader>
            <div className="Content flex-grow w-fit">
                <ul>
                    {data.map(x =>
                        <ItemRow key={x.name} name={x.name}></ItemRow>)}
                </ul>
            </div>
        </div>
    )
}

const data = [
    {
        name: "sword"
    },
    {
        name: "bow"
    },
    {
        name: "mace"
    },
    {
        name: "hammer"
    },
    {
        name: "hammer"
    },
    {
        name: "hammer"
    },
    {
        name: "hammer"
    },
    {
        name: "hammer"
    },
    {
        name: "hammer"
    },
    {
        name: "hammer"
    },

]

export default Content;