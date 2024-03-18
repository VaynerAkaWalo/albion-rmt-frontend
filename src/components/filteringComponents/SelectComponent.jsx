export function SelectComponent({name, items}) {
    const options = [];

   items.map(item => {
        options.push(createOption(item))
    })

    return (
        <div className="w-24">
            <select name={name} id={name} className="w-full">
                <option value="all">{name}</option>
                {options}
            </select>
        </div>
    )

    function createOption(option) {
        return <option value={option}>{option}</option>
    }
}