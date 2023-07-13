import { Link } from "@inertiajs/react";

const Paginator = ({ pages }) => {
    return (
        <div className="btn-group">
            {pages.links[0].url && (
                <Link href={pages.links[0].url} className="btn btn-outline">
                    «
                </Link>
            )}
            <button className="btn btn-outline">{pages.current_page}</button>
            {pages.links[pages.links.length - 1].url && (
                <Link
                    href={pages.links[pages.links.length - 1].url}
                    className="btn btn-outline"
                >
                    »
                </Link>
            )}
        </div>
    );
};

export default Paginator;
