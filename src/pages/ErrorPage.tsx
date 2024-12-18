import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

export default function ErrorPage() {

    const error = useRouteError() as { status: number };
    let title = 'An error occurred';
    let message = 'Sorry, an error occurred. Please try again later.';
    switch (error?.status) {
        case 404:
            message = 'The requested resource could not be found.';
            break;
        case 500:
            message = 'An internal server error occurred.';
            break;
        default:
            message = 'Sorry, an error occurred. Please try again later.';
            break;
    }
        
    return (
        <PageContent title={title} >
            <p>{message}</p>
        </PageContent>
    );
}