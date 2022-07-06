import { _format_date } from "../../function/format-date.function";
import { _get_document_status } from "../../function/document-status.function";

import { TableRow } from "./TableRow";


export function TableBody({ vehicles })
{
    return (
        <>
        {
            vehicles.map(
                (vehicle) =>
                {
                    return (
                        <tbody key={vehicle.unit_id}>
                            <TableRow vehicle={vehicle} />
                        </tbody>
                    );
                }
            )
        }
        </>
    );
}