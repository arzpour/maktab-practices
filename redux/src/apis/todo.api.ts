import { getTodoActions } from "../redux/features/getTodoSlice";
import { AppDispatch } from "../redux/store";

const getTodoRes = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(getTodoActions.loadingTodo());
    try {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
      console.log(data);
      
      dispatch(getTodoActions.getTodo(data));
    } catch (error) {
      dispatch(getTodoActions.errorTodo((error as Error).message));
    }
  };
};

export default getTodoRes;
