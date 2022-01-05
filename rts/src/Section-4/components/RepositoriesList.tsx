import { ChangeEvent, FormEvent, useState } from "react";
// import { useDispatch } from "react-redux";
// import { actionCreators } from "../store";
import { useActions } from "../hooks/useActions";
// import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypesSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  //   const dispatch = useDispatch();
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const changeTerm = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //   dispatch(actionCreators.searchRepositories(term));
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={changeTerm} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data.map((name) => {
          return <div key={name}>{name}</div>;
        })}
    </div>
  );
};

export default RepositoriesList;
