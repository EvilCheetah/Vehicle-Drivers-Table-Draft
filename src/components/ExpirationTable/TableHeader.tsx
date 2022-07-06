import { sort_vehicle } from "../../function/sort-vehicles.function";
import { get_sorting_icon } from "../../function/sorting-icon.function";
import { get_new_sorting_state } from "../../function/sorting-state.function";
import { INIT_SORT_STATE } from "../constant/sort-state.constant";


export function TableHeader({ columns, setSortingValues, setVehicles })
{
    function sort_vehicles(accessor, state)
    {
        const new_state = new Object();
        new_state[accessor] = get_new_sorting_state(state);

        setSortingValues({   
            ...INIT_SORT_STATE,
            ...new_state
        });

        setVehicles(
            (prevState) => ( prevState.sort( sort_vehicle(accessor, state) ) )
        )
    }

    return (
        <thead>
            <tr>
            {
                columns.map(
                    ({ label, accessor, sorting_state }) => 
                    { 
                        return (
                            <th key={accessor} onClick={() => sort_vehicles(accessor, sorting_state)}>
                                <div className="container">
                                    <span className="header-name">{label}</span>
                                    <span className="sorting-state">{get_sorting_icon(sorting_state)}</span>
                                </div>
                            </th>
                        );
                    }
                )
            }
            </tr>
        </thead>
    )
}
