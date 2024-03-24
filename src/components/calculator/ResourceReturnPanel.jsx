export function ResourceReturnPanel() {
    return (
        <div className="w-full h-full border-2 flex flex-col justify-between text-center p-3">
            <div className="grid grid-cols-3 grid-rows-4 [&>*]:border">
                <div className="col-span-3">From return rate</div>
                <>
                    <div>Item</div>
                    <div>With Focus</div>
                    <div>Without Focus</div>
                </>
                <>
                    <div>Planks</div>
                    <div>1000</div>
                    <div>2000</div>
                </>
                <>
                    <div>Cloth</div>
                    <div>700</div>
                    <div>1330</div>
                </>
            </div>
            <div className="grid grid-cols-3 grid-rows-4 [&>*]:border">
                <div className="col-span-3">From laborers</div>
                <>
                    <div>Item</div>
                    <div>With Focus</div>
                    <div>Without Focus</div>
                </>
                <>
                    <div>Planks</div>
                    <div>0</div>
                    <div>0</div>
                </>
                <>
                    <div>Cloth</div>
                    <div>0</div>
                    <div>0</div>
                </>
            </div>
        </div>
    )
}