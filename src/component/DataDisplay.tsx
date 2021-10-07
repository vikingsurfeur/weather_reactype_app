/* Import Redux Stack */
import { connect } from "react-redux";

/* Import fetchData function */
import { fetchData } from "../store";

/* Import React component */
import { useEffect } from "react";

const DataDisplay: React.FC<{ data: any; fetchData: any }> = ({
    data,
    fetchData,
}) => {
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return data.loading ? (
        <div>Loading...</div>
    ) : data.error ? (
        <div>userData.error</div>
    ) : (
        <div>
            {data.data.map((todo: any) => {
                return (
                    <div key={todo.id}>
                        <div>{todo.title}</div>
                    </div>
                );
            })}
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        data: state.data,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchData: () => dispatch(fetchData()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataDisplay);
