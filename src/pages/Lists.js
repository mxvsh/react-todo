import { SetLists } from "../redux/lists/lists.actions";
import { useDispatch, useSelector } from "react-redux";

export const useLists = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);

  const setLists = (data) => {
    dispatch(SetLists({ ...lists, ...data }));
  };

  return {
    lists,
    setLists,
  };
};
