import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "./context/CalculatorContext.jsx";
import trash from "/T1_TRASH.png";
import {intFormatter} from "./scripts/utils.js";

const ARTEFACT_STRINGS = ['KEEPER', "HELL", "AVALON", "FEY", "UNDEAD", "MORGANA"]
export function ArtifactPanel() {
    const {selectedItem, detailedItemInfo, setDetailedItemInfo} = useContext(GlobalContext)
    const {name, tier} = selectedItem
    const [image, setImage] = useState(trash)
    const {artefactPrice} = detailedItemInfo

    const isArtifact = () => name && ARTEFACT_STRINGS.find(string => name.includes(string))

    useEffect(() => {
        const getArtifactName = () => {
            if (isArtifact()) {
                return `https://render.albiononline.com/v1/item/T${tier}_ARTEFACT_${name}.png`
            }

            return trash
        }
        if (!isArtifact()) {
            setDetailedItemInfo(prev => ({...prev, artefactPrice: 0}))
        }

        setImage(getArtifactName())
    }, [selectedItem]);

    const getArtifactLabel = () => {
        if (isArtifact()) {
            return `T${tier}_ARTEFACT_${name}`
        }

        return "Non artefact item"
    }

    const updateArtefactPrice = (e) => {
        const value = e.target.value.replace(/ /g, '');

        if (!isNaN(value)) {
            setDetailedItemInfo(prev => ({...prev, artefactPrice: value}))
        }
    }

    return (
        <div className="border-2 flex flex-col justify-center items-center">
            <img src={image} alt={`T${tier}_ARTEFACT_${name}`}/>
            <span>{getArtifactLabel()}</span>
            {isArtifact(name) && <input className="h-10 mt-2 border text-right" type="text" value={intFormatter(artefactPrice)} onChange={updateArtefactPrice}/>}
        </div>
    )
}