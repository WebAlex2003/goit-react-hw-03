import css from "./SearchBox.module.css"
const SearchBox = ({value, onFilter}) => {
return <div className={css.formGroup}>
    <label htmlFor="">Find contact by name</label>
    <input className={css.input} type="text" value={value} onChange={(event) => onFilter(event.target.value)}/>
</div>
}

export default SearchBox