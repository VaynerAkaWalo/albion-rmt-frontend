import {FilterHeader} from "../headers/FilterHeader.jsx";
import Content from "../Content.jsx";
import {useEffect, useState} from "react";

export function Home() {
    const [categoriesInfo, setCategoriesInfo] = useState([])
    const [selectedCategory, setSelectedCategory] = useState({label: "All", value: "all"})
    const [selectedSubcategory, setSelectedSubcategory] = useState({label: "All", value: "all"})
    const [textFilter, setTextFilter] = useState("")

    const getCategories = () => {
        fetch("https://blamedevs.com/albion-rmt-backend/api/v1/categories")
            .then(data => data.json())
            .then(json => {
                setCategoriesInfo(json)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getCategories()
    }, []);

    return (
        <>
            <FilterHeader categoriesInfo={categoriesInfo}
                          changeSelectedCategory={setSelectedCategory}
                          changeSelectedSubcategory={setSelectedSubcategory}
                          textFilter={textFilter}
                          setTextFilter={setTextFilter}/>
            <Content categoriesInfo={categoriesInfo}
                     selectedCategory={selectedCategory}
                     selectedSubcategory={selectedSubcategory}
                     textFilter={textFilter}/>
        </>
    )
}
