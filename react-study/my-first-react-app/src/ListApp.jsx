import Gretting from "./Gretting";
import List, { FilteredList } from "./List";

function ListApp() {
    return (<>
        <Gretting name='hi'/>
        
        <List />
        <FilteredList />

    </>
    )
}

export default ListApp;