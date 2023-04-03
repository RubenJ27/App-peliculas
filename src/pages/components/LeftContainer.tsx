import MovieImage from "./MovieImage";
import { OverviewDetailsData, OverviewDetailsTitleData } from "../../models/movies";

const LeftContainer = ({ title }: { title: OverviewDetailsTitleData }) => {
    return (
        <>
            <MovieImage image={title?.image ?? {}} />
        </>
    )
}

export default LeftContainer;