import trash from "/T1_TRASH.png";

export function ItemInfoPanel() {
    return (
        <div className="h-full w-full flex justify-center items-center border-2 p-4">
            <>
                <div className="flex flex-col w-2/5 row-span-4 justify-center text-center">
                    <img src={trash} alt="item"/>
                    <label htmlFor="image">Trash T1</label>
                </div>
            </>
            {/*<>*/}
            {/*    <div className="col-start-2 row-start-2 col-span-2 row-span-2 border-2 grid grid-cols-3 grid-rows-3 text-center [&>*]:border-2">*/}
            {/*        <>*/}
            {/*            <div>Profit</div>*/}
            {/*            <div>w/o focus</div>*/}
            {/*            <div>w focus</div>*/}
            {/*        </>*/}
            {/*        <>*/}
            {/*            <div>Single</div>*/}
            {/*            <div></div>*/}
            {/*            <div></div>*/}
            {/*        </>*/}
            {/*        <>*/}
            {/*            <div>All</div>*/}
            {/*            <div></div>*/}
            {/*            <div></div>*/}
            {/*        </>*/}
            {/*    </div>*/}
            {/*</>*/}
        </div>
    )
}