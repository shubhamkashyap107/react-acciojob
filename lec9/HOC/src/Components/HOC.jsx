export const withAuth = (WrappedComponent) => {
    return function(props){

        console.log(props.isAuthenticated)
        const isAuthenticated = props.isAuthenticated

        if(isAuthenticated == false || isAuthenticated == null)
        {
            return <h3>Please log in to view this page</h3>
        }
        else if(isAuthenticated === true)
        {
            return <WrappedComponent {...props} />
        }
        else
        {
            return <h1>Invalid Data</h1>
        }

    }
}


{/* <ABC isAuthenticated={true} />
<ABC isAuthenticated={false} /> */}