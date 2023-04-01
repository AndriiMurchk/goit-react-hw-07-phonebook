import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { selectFilter } from "redux/selectors";
import { Label, Input } from "./Filter.styled";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    
    const onChange = (e) => {
        let contactToFind = e.target.value.trim();
        dispatch(setFilter(contactToFind));
    }
    
    return (
        <Label>
            Find contacts by name
            <Input type="text"
                onChange={onChange}
                value={filter}>
            </Input>
        </Label >
    )
}

export default Filter;