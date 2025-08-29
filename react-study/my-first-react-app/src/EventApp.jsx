import Alert from "./Alert";
import Form from "./Form";
import Gretting from "./Gretting";
import List, { FilteredList } from "./List";
import Propagation from "./Propagation";

function EventApp() {
    return (<>
        <Alert onAlert={() => alert('hello world')}/>
        {/* SyntheticEvent */}
        <Form />
        <Propagation />

    </>
    )
}

export default EventApp;