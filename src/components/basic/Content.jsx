import ItemRow from "../ItemRow.jsx";
import SubHeader from "../SubHeader.jsx";

function Content() {
    const number = 15;

    return (
        <div className="w-screen overflow-x-scroll">
            <SubHeader num={number}></SubHeader>
            <div className="Content flex-grow w-fit">
                <ul>
                    {data.map(x =>
                        <ItemRow key={x.name} name={x.name} num={number}></ItemRow>)}
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