
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const Authenticated = ({ component: Component, ...rest }) => {

    const user = useSelector((state) => state.auth);

    return (
        <Route
            {...rest}
            render={props =>
                user._id ? (
                    <Redirect to="/" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
}

export default Authenticated;
