import {useContext} from "react";
import {ResourceContext} from "./context/ResourceProvider.jsx";

export function ResourceReturnPanel() {
    const {resource1, resource2} = useContext(ResourceContext)

    const rr = null

    return (
        <div className="w-full border-2 flex flex-col justify-between text-center">
            <div className="grid grid-cols-3 grid-rows-4 [&>*]:border">
                <div className="col-span-3">From return rate</div>
                <>
                    <div>Item</div>
                    <div>With Focus</div>
                    <div>Without Focus</div>
                </>
                <>
                    <div>{resource1}</div>
                    <div>{rr['resource1'][0]}</div>
                    <div>{rr['resource1'][1]}</div>
                </>
                <>
                    <div>{resource2}</div>
                    <div>{rr['resource2'][0]}</div>
                    <div>{rr['resource2'][1]}</div>
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