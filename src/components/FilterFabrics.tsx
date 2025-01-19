import { Dispatch, SetStateAction } from "react";
import Patterns from "../data/data";
import "./Filter.css";

interface FilterInterface {
    filterFabric: string;
    setFilterFabric: Dispatch<SetStateAction<string>>;
}

function FilterFabrics({filterFabric, setFilterFabric}: FilterInterface) {
    const fabrics = Array.from(
        new Set(
            Patterns.flatMap((pattern) =>
                Array.isArray(pattern.fabrics) ? pattern.fabrics : [pattern.fabrics]
            )
        )
    );

    fabrics.sort((a, b) => a.localeCompare(b));

    return (
        <select 
            id="filter" 
            value={filterFabric} 
            onChange={(event) => setFilterFabric(event.target.value)}
        >
            <option value="">Tous</option>
            {fabrics.map((fabric) => (
                <option key={fabric} value={fabric}>
                    {fabric}
                </option>
            ))}
        </select>

    );
}

export default FilterFabrics;