import { useDispatch } from "react-redux";
import FilteringByCompleted from "./components/FilteringByCompleted";
import FilteringByTitle from "./components/FilteringByTitle";

export default function FilterList() {
  const dispatch = useDispatch();

  return (
    <div className="flex">
      <FilteringByTitle dispatch={dispatch} />
      <FilteringByCompleted dispatch={dispatch} />
    </div>
  )
}
