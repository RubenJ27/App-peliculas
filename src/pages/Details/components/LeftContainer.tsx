import MovieImage from "./MovieImage";
import type { Title } from "../../../models/moviesInterface";

interface Props {
    title?: Title;
}

const LeftContainer = ({ title }: Props) => {
    return (
        <>
            <MovieImage image={title?.image ?? {}} />
        </>
    )
}

export default LeftContainer;