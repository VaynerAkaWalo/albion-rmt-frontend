export function SelectWithLabel({name, items}) {
    const options = [];

   items.map(item => {
        options.push(createOption(item))
    })

    return (
        <div className="flex flex-col w-max [&>*]:my-1">
            <label htmlFor={name}>{name}</label>
            <select name={name} id={name}>
                <option value="all">all</option>
                {options}
            </select>
        </div>
    )

    function createOption(option) {
        return <option value={option}>{option}</option>
    }
}