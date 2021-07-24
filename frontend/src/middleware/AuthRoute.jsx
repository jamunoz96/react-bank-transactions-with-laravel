
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = ({ component: Component, ...rest }) => {

    const user = useSelector((state) => state.auth);

    return (
        <Route
            {...rest}
            render={props =>
                user._id ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/signin" />
                )
            }
        />
    );
}

export default AuthRoute;
