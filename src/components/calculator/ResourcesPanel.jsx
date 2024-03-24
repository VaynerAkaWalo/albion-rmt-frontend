import trash from "/T1_TRASH.png";

export function ResourcesPanel() {
    return (
        <div className="w-full h-full border-2 grid grid-cols-5 grid-rows-5">
            <>
                <div className="col-span-2 row-span-3 flex justify-center items-center">
                    <img className="w-4/5" src={trash} alt="item"/>
                </div>
                <div className="row-span-3 flex flex-col justify-center items-center">
                    <span>Ratio</span>
                    <span>16:8</span>
                </div>
                <div className="col-span-2 row-span-3 flex justify-center items-center">
                    <img className="w-4/5" src={trash} alt="item"/>
                </div>
            </>
            {/*<>*/}
            {/*    <div className="col-span-2 text-center my-auto">name1</div>*/}
            {/*    <div className="col-span-2 col-start-4 text-center my-auto">name1</div>*/}
            {/*</>*/}
            <>
                <div className="col-span-2 text-center my-auto">16</div>
                <div className="text-center my-auto">Quantity</div>
                <div className="col-span-2 text-center my-auto">8</div>
            </>
            <>
                <input className="col-span-2 my-2 mx-5" type="text"/>
                <span className="text-center my-auto">Price</span>
                <input className="col-span-2 col-start-4 my-2 mx-5" type="text"/>
            </>


            {/*<div className="flex flex-row justify-evenly items-center text-center [&>img]:h-1/4 [&>img]:w-1/4">*/}
            {/*    <img src={trash} alt="res1"/>*/}
            {/*    <div className="flex flex-col">*/}
            {/*        <span>Ratio</span>*/}
            {/*        <span>16:8</span>*/}
            {/*    </div>*/}
            {/*    <img src={trash} alt="res2"/>*/}
            {/*</div>*/}
            {/*<div className="flex flex-row justify-evenly text-center [&>span]:w-16">*/}
            {/*    <span>name1</span>*/}
            {/*    <div className="invisible">xxxx</div>*/}
            {/*    <span>name2</span>*/}
            {/*</div>*/}
            {/*<div className="flex flex-row my-5 justify-center text-center [&>span]:w-16">*/}
            {/*    <span>100</span>*/}
            {/*    <div className="px-3.5">Quantity</div>*/}
            {/*    <span>200</span>*/}
            {/*</div>*/}
            {/*<div className="flex flex-row justify-evenly text-center [&>input]:w-4 [&>input]:text-right mb-3">*/}
            {/*    <input type="text"/>*/}
            {/*    <div className="invisible">xxxx</div>*/}
            {/*    <input type="text"/>*/}
            {/*</div>*/}
        </div>
    )
}